import json
from django.shortcuts import render

# Create your views here.
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import permissions
from rest_framework import viewsets
import requests
from rest_framework import status

from datetime import datetime
from django.views.decorators.csrf import csrf_exempt

from .models import *


def process_divvy_data(raw_data):
    processed_data = {}
    stations = raw_data.get('stationBeanList', [])

    for station in stations:
        station_id = station.get('id')
        available_bikes = station.get('availableBikes')
        last_updated = station.get('lastCommunicationTime')
        last_updated_time = datetime.strptime(
            last_updated, "%Y-%m-%d %I:%M:%S %p")
        date_key = last_updated_time.strftime("%Y-%m-%d")

        if date_key not in processed_data:
            processed_data[date_key] = []

        processed_data[date_key].append({
            'station_id': station_id,
            'available_bikes': available_bikes,
            'last_updated': last_updated
        })

    # Calculate daily statistics (total bikes available, average bikes available, etc.)
    for date, stations_data in processed_data.items():
        total_bikes = sum(station['available_bikes']
                          for station in stations_data)
        average_bikes = total_bikes / len(stations_data)
        processed_data[date] = {
            'total_bikes_available': total_bikes,
            'average_bikes_available': average_bikes,
            'stations_data': stations_data
        }

    return processed_data


def get_bike_resuls_request(url=None,):
    if url is None:
        url = 'https://gbfs.divvybikes.com/gbfs/2.3/gbfs.json'
    else:
        url
    # Make a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # data = response.json()
        # data.
        # print(data['data'])
        # for key, value in data.items():

        return response.json()

    else:
        # If the request was not successful, print an error message
        print('Error:', response.status_code)
        return response.status_code


@api_view(('GET',))
@csrf_exempt
def get_divvy_data(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        data = list(Feeds.objects.all().values('name'))
        if data:
            content = {'data': data}
            return Response(content, status=status.HTTP_200_OK)
        else:

            data = get_bike_resuls_request()
            res_data = data['data']['en']['feeds']
            for key in res_data:
                feed_create = Feeds.objects.get_or_create(**key)
            res = list(Feeds.objects.all().values('name'))

            content = {'data': res}
            return Response(content, status=status.HTTP_200_OK)

    if request.method == 'Post':
        get_url = request.post('url')
        data = get_bike_resuls_request(get_url)
        return Response(data)


class DivvyApiView(viewsets.ViewSet):
    permission_classes = (permissions.AllowAny, )

    def get_by_url(self, request, name, *args, **kwargs):

        # Handle GET request logic
        if request.method == 'GET':
            flter_by_name = Feeds.objects.get(name=name)
            res_data = get_bike_resuls_request(flter_by_name.url)
            print(res_data)
            content = {
                'data': res_data,
                'name': flter_by_name.name,
                'message': f'Custom API View Works for GET method!{flter_by_name.url}'
            }

            return Response(content, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Handle POST request logic
        data = {
            'message': 'Custom API View Works for POST method!'
        }
        return Response(data)

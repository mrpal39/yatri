from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_divvy_data, name='get_divvy_data'),
    path(
        'type/<str:name>/', views.DivvyApiView.as_view({'get': "get_by_url"}), name='get_divvy_type'),

]

from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_divvy_data, name='get_divvy_data'),
    
]

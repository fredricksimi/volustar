from django.urls import path
from . import views

app_name = 'mainapp'
urlpatterns = [
    path('', views.home, name='home'),
    path('apply',views.apply, name='apply'),
    path('contact', views.contact, name='contact'),
]
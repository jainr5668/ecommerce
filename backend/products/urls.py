
from django.urls import path
from . import views



urlpatterns = [
    path("", views.products),
    path("hello", views.products1),
    path("<int:id>", views.product),
]
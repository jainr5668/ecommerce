from django.urls import include, path
from . import views

urlpatterns = [
    path("languages/", views.available_languages),
    path("menu_items/", views.available_menu_items),
]
from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.project_list, name='project_list'),
    path('technologies/', views.Technology_list, name='technology_list'),
    path('experiences/', views.experience_list, name='experience_list'),
    path('about/', views.about_item_list, name='about_item_list'),
    path('profile/', views.profile_list, name='profile_list'),
    path('social-links/', views.social_link_list, name='social_link_list'),
]

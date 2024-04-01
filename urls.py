from django.urls import path
from . import views



urlpatterns = [
    path('',views.APIData),
    path('all/',views.View),
    path('create/',views.Add),
    path('update/<int:pk>/',views.Update),
    path('<int:pk>/delete/',views.Deleted)
]

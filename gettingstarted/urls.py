import hello.views
from django.urls import path, include

from django.contrib import admin

import datetime
import random

admin.autodiscover()


# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", hello.views.welcome, name="welcome"),
    path("home/", hello.views.index, name="index"),
    path("contact/", hello.views.contact, name="contact"),
    path("profile/", hello.views.profile, name="profile"),
    path("projects/", hello.views.projects, name="projects"),
    path("changelog/", hello.views.changelog, name="changelog"),
    path("posts/", hello.views.posts, name="posts"),
    path("gallery/", hello.views.gallery, name="gallery"),
]

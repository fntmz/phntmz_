import hello.views
from django.urls import path, include

from django.contrib import admin

admin.autodiscover()


# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", hello.views.index, name="index"),
    path("db/", hello.views.db, name="db"),
    path("contact/", hello.views.contact, name="contact"),
    path("profile/", hello.views.profile, name="profile"),
    path("projects/", hello.views.projects, name="projects"),
    path("admin/", admin.site.urls),
]

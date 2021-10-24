from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

# Create your views here.


def changelog(request):
    return render(request, "changelog.html")


def index(request):
    return render(request, "index.html")


def contact(request):
    return render(request, "contact.html")


def profile(request):
    return render(request, "profile.html")


def projects(request):
    return render(request, "projects.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

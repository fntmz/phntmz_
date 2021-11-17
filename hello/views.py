from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

# Create your views here.

context = {
    "changelog": [
        {"date": "18.11.2021", "detail": "added a few buttons in the gallery page, still not sure what layout to style off but suggestions are appreciated."},
        {"date": "17.11.2021",
            "detail": "successfully added a custom cursor into the gallery page after an absurd amount of time. honestly did not know why it took me more 2 days to work it out, but i finally found a very helpful answer on stackoverflow which helped me a lot in adding a very insignificant part of the website but i think its very cool for some reason."},
        {"date": "16.11.2021",
            "detail": "added some fonts (noto sans jp, roboto condensed, josefin sans), changed the font weights on the some changelog elements, input and textarea tags, and optimized the overall css of some elements on the changelog page"},
        {"date": "15.11.2021", "detail": "reworked the changelog page, drastically improved visuals. switched color, background color, and background image of light and dark css"},
        {"date": "08.11.2021",
            "detail": "disabled the url of the gallery page when the time in hours is not 0"},
        {"date": "07.11.2021", "detail": "added a page filled with art that is only available at exactly midnight. also made some smaller changes"},
        {"date": "29.10.2021",
            "detail": "improved the css of the scroll down arrow element on index"},
        {"date": "28.10.2021", "detail": "completely changed the layout of index to improve responsiveness. also added a scroll arrow"},
        {"date": "27.10.2021",
            "detail": "changed the order of updates to have the most recent update on top"},
        {"date": "26.10.2021", "detail": "completely reworked the menu. now a fullscreen menu that slides in from the right when opened by a button"},
        {"date": "25.10.2021", "detail": "moved the header menu to base and edited positioning of multiple elements in index"},
        {"date": "24.10.2021", "detail": "added a changelog, removed dropdown tabs in the menu, and changed the body background image"},
    ]
}


def changelog(request):
    return render(request, "changelog.html", context)


def index(request):
    return render(request, "index.html")


def contact(request):
    return render(request, "contact.html")


def profile(request):
    return render(request, "profile.html")


def projects(request):
    return render(request, "projects.html")


def gallery(request):
    return render(request, "gallery.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

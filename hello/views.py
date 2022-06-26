from django.contrib.staticfiles.storage import staticfiles_storage
from django.shortcuts import render
from django.templatetags.static import static

# Create your views here.

context = {
    "changelog": [
        {"date": "25.06.2022",
            "detail": "new domain. address is https://www.phntmz.com"},
        {"date": "14.06.2022",
            "detail": "updated metadata"},
        {"date": "06.06.2022",
            "detail": "fixed layering issues with buttons on gallery"},
        {"date": "05.06.2022",
            "detail": "reverted navbar background to solid black color. the blur filter caused compatibility and performance issues"},
        {"date": "17.01.2022",
            "detail": "improved animations on menu"},
        {"date": "16.01.2022",
            "detail": "completely restructured overall styling"},
        {"date": "07.01.2022",
            "detail": "improved animations on gallery"},
        {"date": "27.12.2021",
            "detail": "improved menu readability"},
        {"date": "12.12.2021",
            "detail": "added a 404 and 500 error page"},
        {"date": "09.12.2021",
            "detail": "improved animation on menu elements"},
        {"date": "08.12.2021",
            "detail": "improved animation on menu button"},
        {"date": "05.12.2021",
            "detail": "improved responsiveness of loading screen"},
        {"date": "01.12.2021",
            "detail": "added recent posts to index"},
        {"date": "28.11.2021",
            "detail": "fixed animations overriding"},
        {"date": "26.11.2021",
            "detail": "added animation to menu elements"},
        {"date": "25.11.2021",
            "detail": "added animation to custom cursor on gallery"},
        {"date": "24.11.2021",
            "detail": "removed text selection on the loading element"},
        {"date": "23.11.2021",
            "detail": "fixed custom cursor dislocating when scrolling on gallery"},
        {"date": "21.11.2021",
            "detail": "improved visuals on gallery"},
        {"date": "20.11.2021",
            "detail": "improved readability on textarea and input fields"},
        {"date": "18.11.2021",
            "detail": "added content to gallery"},
        {"date": "17.11.2021",
            "detail": "added custom cursor to gallery"},
        {"date": "16.11.2021",
            "detail": "improved overall readability and optimized styling on changelog"},
        {"date": "15.11.2021",
            "detail": "reworked changelog page. improved darkmode"},
        {"date": "08.11.2021",
            "detail": "the gallery page no longer renders when the time is not midnight (0 hours)"},
        {"date": "07.11.2021",
            "detail": "added the midnight gallery"},
        {"date": "29.10.2021",
            "detail": "improved the css of the scroll down arrow element on index"},
        {"date": "28.10.2021",
            "detail": "updated layout in index"},
        {"date": "26.10.2021",
            "detail": "reworked menu"},
        {"date": "25.10.2021",
            "detail": "header menu is accessible from all pages and fixed positioning of multiple elements in index"},
        {"date": "24.10.2021",
            "detail": "added a changelog, removed dropdown tabs from the menu, and changed the body background image"},
    ],
    "featured": 
        {"title": "「 blue 」 reverbed", "subtitle": "a yoasobi mix.",
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"}
    ,
    "posts": [
        {"title": "「 blue 」 reverbed",
            "date": "11.11.2021",
            "subtitle": "a yoasobi mix",
            "img": static('img/posts/posts-gunjou.png'),
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"},
        {"title": "MIDNIGHT // GALLERY",
            "date": "09.11.2021",
            "subtitle": "cool photography stuff. only available at 0:00",
            "img": static('img/posts/posts-midnight-gallery.png'),
            "url": "https://www.phntmz.com/gallery"},
    ],
}


def changelog(request):
    return render(request, "changelog.html", context)


def index(request):
    return render(request, "index.html", context)


def posts(request):
    return render(request, "posts.html", context)


def contact(request):
    return render(request, "contact.html")


def profile(request):
    return render(request, "profile.html", context)


def projects(request):
    return render(request, "projects.html")


def gallery(request):
    return render(request, "gallery.html")
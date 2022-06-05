from django.contrib.staticfiles.storage import staticfiles_storage
from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static

# Create your views here.

context = {
    "changelog": [
        {"date": "05.06.2022",
            "detail": "reverted navbar background to solid black color. the blur filter caused compatibility and performance issues. also fixed layering issues with buttons on gallery"},
        {"date": "17.01.2022",
            "detail": "minor changes to menu animation"},
        {"date": "16.01.2022",
            "detail": "completely reworked the entire styling on base and index. removed a lot of code. also added animation on the event of opening the menu"},
        {"date": "07.01.2022",
            "detail": "added more animation on the gallery page"},
        {"date": "06.01.2022",
            "detail": "happy 2022. optimizations to the css on homepage and added animation to featured text"},
        {"date": "27.12.2021",
            "detail": "made improvements to the navbar styling"},
        {"date": "13.12.2021",
            "detail": "minor css changes to error and gallery page"},
        {"date": "12.12.2021",
            "detail": "improved css on profile page. added error page for 500 and 404 error codes"},
        {"date": "09.12.2021",
            "detail": "optimized css on navbar. added animation on the event of navbar item hover"},
        {"date": "08.12.2021",
            "detail": "changed the top attribute of the menu button when it is not in view. also fixed bug where scrollbar was not disabled on firefox"},
        {"date": "05.12.2021",
            "detail": "apply display none to loader title and navbar socials when viewport width is less than 1300px and 576px, respectively"},
        {"date": "01.12.2021",
            "detail": "added a section that displays the most recent post in the homepage. many changes made to the posts page"},
        {"date": "29.11.2021",
            "detail": "changed the link to the projects page on the navbar to link to a page for posts. the link to the projects page will be in the profile page"},
        {"date": "28.11.2021",
            "detail": "fixed some issues with transition timings overriding each other. added content to the index page, the project page is still incomplete though"},
        {"date": "26.11.2021",
            "detail": "added animations to most child elements of the navbar"},
        {"date": "25.11.2021",
            "detail": "added animation to gallery cursor upon the event of hovering on an interactive element"},
        {"date": "24.11.2021",
            "detail": "removed text selection on the loading element"},
        {"date": "23.11.2021",
            "detail": "fixed a bug with the custom css cursor on the gallery page that causes the cursor to move along with the page while scrolling"},
        {"date": "21.11.2021",
            "detail": "changed the animation of the third and fourth button on the gallery page."},
        {"date": "20.11.2021",
            "detail": "changed caret-color on input and textarea fields from transparent to white for visibility and accessibility reasons. this was originally transparent to improve aesthetics"},
        {"date": "19.11.2021",
            "detail": "added a few images that can be revealed by clicking on the buttons on the gallery page"},
        {"date": "18.11.2021",
            "detail": "added content to gallery"},
        {"date": "17.11.2021",
            "detail": "added custom cursor to gallery page"},
        {"date": "16.11.2021",
            "detail": "added some fonts (noto sans jp, roboto condensed, josefin sans), changed the font weights on the some changelog elements, input and textarea tags, and optimized the overall css of some elements on the changelog page"},
        {"date": "15.11.2021",
            "detail": "reworked the changelog page, drastically improved visuals. switched color, background color, and background image of light and dark css"},
        {"date": "08.11.2021",
            "detail": "added an element that hides all contents on the gallery page that shows up when the time in hours is not 0 (not midnight)"},
        {"date": "07.11.2021",
            "detail": "added a page filled with art that is only available at exactly midnight. also made some smaller changes"},
        {"date": "29.10.2021",
            "detail": "improved the css of the scroll down arrow element on index"},
        {"date": "28.10.2021",
            "detail": "completely changed the layout of index to improve responsiveness. also added a scroll arrow"},
        {"date": "27.10.2021",
            "detail": "changed the order of updates to have the most recent update on top"},
        {"date": "26.10.2021",
            "detail": "completely reworked the menu. now a fullscreen menu that slides in from the right when opened by a button"},
        {"date": "25.10.2021",
            "detail": "moved the header menu to base and edited positioning of multiple elements in index"},
        {"date": "24.10.2021",
            "detail": "added a changelog, removed dropdown tabs in the menu, and changed the body background image"},
    ],
    "featured": 
        {"title": "「 blue 」 reverbed", "subtitle": "a yoasobi mix.",
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"}
    ,
    "posts": [
        {"title": "「 blue 」 reverbed",
            "date": "11.11.2021",
            "subtitle": "had some fun with music",
            "img": static('img/posts/posts-gunjou.png'),
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"},
        {"title": "MIDNIGHT // GALLERY",
            "date": "09.11.2021",
            "subtitle": "cool photography stuff. only available at 0:00",
            "img": static('img/posts/posts-midnight-gallery.png'),
            "url": "https://phntmz.herokuapp.com/gallery"},
        {"title": "CONTROLLERS",
            "date": "23.05.2021",
            "subtitle": "the org-less esports team. with players in valorant, apex legends and counter-strike",
            "img": static('img/posts/posts-controllers.png'),
            "url": "https://discord.gg/Ysy2SV88kv"},
    ],
    "profile": [
        {"name": "hieu minh nguyen",
            "identity": "phntmz_",
            "img": static('img/profile/phntmz.jpg'),
            "subtitle": "autobiography",
            "content": """<p>hey, i'm 15 by the time of writing. i'm a high school student who is addicted to computers. i've dumped everything cool i made with a computer here, including this website, this is the <a href="https://github.com/fntmz/phntmz_">source code</a>. </p><p>thanks for visiting. 104 103 32 60 51</p>""",
            "author": "phntmz_",
            "date": "October 23 2021, updated on June 06, 2022",
            "projects": "https://phntmz.herokuapp.com/projects"},
    ]
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
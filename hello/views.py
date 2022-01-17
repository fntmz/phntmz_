from django.contrib.staticfiles.storage import staticfiles_storage
from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static

# Create your views here.

context = {
    "changelog": [
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
            "detail": "changed caret-color on input and textarea fields from transparent to white for visibility and accessibility reasons. this was originally transparent to improve aesthetics but it can tick people off"},
        {"date": "19.11.2021",
            "detail": "added a few images that can be revealed by clicking on the buttons on the gallery page. the current version of the gallery page is the final layout, but the content are still far from being finished. this is only the foundation for more work to be done in the future"},
        {"date": "18.11.2021",
            "detail": "added four buttons in the gallery page that is going to reveal more content. still not sure what to put on the gallery page to make it worth the 1-hour midnight only exclusiveness but suggestions are appreciated"},
        {"date": "17.11.2021",
            "detail": "successfully added a custom cursor into the gallery page after an absurd amount of time. honestly did not know why it took me more 2 days to work it out, but i finally found a very helpful answer on stackoverflow which helped me a lot in adding a very insignificant part of the website but i think its very cool for some reason"},
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
    "featured": [
        {"title": "「 blue 」 reverbed", "subtitle": "on my soundcloud",
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"}
    ],
    "posts": [
        {"title": "「 blue 」 reverbed",
            "date": "11.11.2021",
            "subtitle": "a little edit i tried to make in adobe audition. i think it sounds pretty nice",
            "img": static('img/posts/posts-gunjou.png'),
            "url": "https://soundcloud.com/fntmz/gunjou-reverb"},
        {"title": "MIDNIGHT // GALLERY",
            "date": "09.11.2021",
            "subtitle": "displays visually-satisfying photos that are captured by me (and my phone). all images found on the gallery page are posted on my instagram. only available at 0:00",
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
            "content": """<p>I am a high-school student at the time of writing. I am
            from Vietnam and I have lived on earth for 14 years. I like computers and I had my first interaction with
            computer programming since middle-school, not that long ago. I have been developing my skills in Python,
            HTML, JavaScript, C++, and the two website frameworks Django and React. I created this website as nothing
            more than a weekend project so it is nice if someone actually likes it.</p><p>That's all, thanks for visiting.</p>""",
            "author": "phntmz_",
            "date": "October 23 2021",
            "projects": "https://phntmz.herokuapp.com/projects"},
        # {"name": "hieu minh nguyen",
        #     "identity": "phntmz_",
        #     "img": static('img/profile/futaba.jpg'),
        #     "subtitle": "autobiography",
        #     "content": """<p>I am a high-school student at the time of writing. I am
        #     from Vietnam and I have lived on earth for 14 years. I like computers and I had my first interaction with
        #     computer programming since middle-school, not that long ago. I have been developing my skills in Python,
        #     HTML, JavaScript, C++, and the two website frameworks Django and React. I created this website as nothing
        #     more than a weekend project so it is nice if someone actually likes it.</p><p>That's all, thanks for visiting.</p>""",
        #     "author": "phntmz_",
        #     "date": "October 23 2021"},
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
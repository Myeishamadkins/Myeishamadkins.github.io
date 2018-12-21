"use strict";
const PAGE_DATA = {
    pythonProjectContent: [
        {
            imageUrl: "./images/tetris.png",
            title: "Tetris",
            language: "Python",
            description: "Made with tkinter"
        },
        {
            imageUrl: "./images/rental_store.png",
            title: "Rental Agency",
            language: "Python",
            description: "Python Final Project"
        },
        {
            imageUrl: "./images/gladiator.png",
            title: "Gladiator Game",
            language: "Python",
            description: "Working on dictionaries in python"
        },
        {
            imageUrl: "./images/blackjack.png",
            title: "Blackjack",
            language: "Python",
            description: "Made after a mouth of programming"
        }
    ],
    htmlCssJavascriptProjectContent: [
        {
            imageUrl: "./images/homepage.png",
            title: "Front End Final Project",
            language: "HTML, CSS, JavaScript",
            description: "Made using HTML, CSS, JavaScript, & Boostrap"
        },
        {
            imageUrl: "./images/bookstore.png",
            title: "Bookstore",
            language: "Django",
            description:
                "Made using Bootstrap and custom CSS on a Django template to design a bookstore"
        },
        {
            imageUrl: "./images/slackfeatures.png",
            title: "Slack Features",
            language: "HTML & CSS",
            description: "Using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/GithubLogin.png",
            title: "Github Login",
            language: "HTML & CSS",
            description:
                "Using Bootstrap to design a HTML file to resemble a picture"
        },
        {
            imageUrl: "./images/DevtoArticleCard.png",
            title: "Devto Article Card",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/pypitrending.png",
            title: "Pypi Trending",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/key links.png",
            title: "Devto Key Links",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/explainlikeimfive.png",
            title: "Explain like I'm five",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        }
    ]
};

function pythonProjectContent() {
    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (var i = 0; i < PAGE_DATA.pythonProjectContent.length; i += 2) {
        content += template({
            imageUrl: PAGE_DATA.pythonProjectContent[i].imageUrl,
            title: PAGE_DATA.pythonProjectContent[i].title,
            language: PAGE_DATA.pythonProjectContent[i].language,
            description: PAGE_DATA.pythonProjectContent[i].description,
            imageUrlA: PAGE_DATA.pythonProjectContent[i + 1].imageUrl,
            titleA: PAGE_DATA.pythonProjectContent[i + 1].title,
            languageA: PAGE_DATA.pythonProjectContent[i + 1].language,
            descriptionA: PAGE_DATA.pythonProjectContent[i + 1].description
        });
    }
    document
        .querySelector("#placePythonTemplate")
        .insertAdjacentHTML("beforeend", content);
}
pythonProjectContent();

function htmlCssJavascriptProjectContent() {
    var source = document.getElementById("template2").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (
        var i = 0;
        i < PAGE_DATA.htmlCssJavascriptProjectContent.length;
        i += 2
    ) {
        content += template({
            imageUrl: PAGE_DATA.htmlCssJavascriptProjectContent[i].imageUrl,
            title: PAGE_DATA.htmlCssJavascriptProjectContent[i].title,
            language: PAGE_DATA.htmlCssJavascriptProjectContent[i].language,
            description:
                PAGE_DATA.htmlCssJavascriptProjectContent[i].description,
            imageUrlA:
                PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].imageUrl,
            titleA: PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].title,
            languageA:
                PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].language,
            descriptionA:
                PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].description
        });
    }
    document
        .querySelector("#placehtmlCssJavascriptTemplate")
        .insertAdjacentHTML("beforeend", content);
}
htmlCssJavascriptProjectContent();

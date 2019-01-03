"use strict";
const PAGE_DATA = {
    pythonProjectContent: [
        {
            imageUrl: "./images/tetris.png",
            gitHubUrl: "https://github.com/Myeishamadkins/Tetris",
            title: "Tetris",
            language: "Python",
            description: "Made with tkinter"
        },
        {
            imageUrl: "./images/rental_store.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Rental_Agency_MyeishaMadkins",
            title: "Rental Agency",
            language: "Python",
            description: "Python Final Project"
        },
        {
            imageUrl: "./images/gladiator.png",
            gitHubUrl: "https://github.com/Myeishamadkins/Gladiator-game",
            title: "Gladiator Game",
            language: "Python",
            description: "Working on dictionaries in python"
        },
        {
            imageUrl: "./images/blackjack.png",
            gitHubUrl: "https://github.com/Myeishamadkins/Blackjack",
            title: "Blackjack",
            language: "Python",
            description: "Made after a month of programming"
        }
    ],
    htmlCssJavascriptProjectContent: [
        {
            imageUrl: "./images/homepage.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Myeisha-Madkins-Web-Rental-Agency",
            title: "Front End Final Project",
            language: "HTML, CSS, JavaScript",
            description: "Made using HTML, CSS, JavaScript, & Boostrap"
        },
        {
            imageUrl: "./images/bookstore.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Book_store_replication",
            title: "Bookstore",
            language: "Django",
            description:
                "Made using Bootstrap and custom CSS on a Django template to design a bookstore"
        },
        {
            imageUrl: "./images/slackfeatures.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-SlackFeatures",
            title: "Slack Features",
            language: "HTML & CSS",
            description: "Using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/GithubLogin.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-GithubLogin",
            title: "Github Login",
            language: "HTML & CSS",
            description:
                "Using Bootstrap to design a HTML file to resemble a picture"
        },
        {
            imageUrl: "./images/DevtoArticleCard.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-DevtoArticleCard",
            title: "Devto Article Card",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/pypitrending.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-PypiTrendingNewProjects",
            title: "Pypi Trending",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/key links.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-DevtoKeyLinks",
            title: "Devto Key Links",
            language: "HTML & CSS",
            description: "Made using HTML & CSS to resemble a picture"
        },
        {
            imageUrl: "./images/explainlikeimfive.png",
            gitHubUrl:
                "https://github.com/Myeishamadkins/Component-Practice-DevtoELI5",
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
            gitHubUrl: PAGE_DATA.pythonProjectContent[i].gitHubUrl,
            title: PAGE_DATA.pythonProjectContent[i].title,
            language: PAGE_DATA.pythonProjectContent[i].language,
            description: PAGE_DATA.pythonProjectContent[i].description,
            imageUrlA: PAGE_DATA.pythonProjectContent[i + 1].imageUrl,
            gitHubUrlA: PAGE_DATA.pythonProjectContent[i + 1].gitHubUrl,
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
            gitHubUrl: PAGE_DATA.htmlCssJavascriptProjectContent[i].gitHubUrl,
            title: PAGE_DATA.htmlCssJavascriptProjectContent[i].title,
            language: PAGE_DATA.htmlCssJavascriptProjectContent[i].language,
            description:
                PAGE_DATA.htmlCssJavascriptProjectContent[i].description,
            imageUrlA:
                PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].imageUrl,
            gitHubUrlA:
                PAGE_DATA.htmlCssJavascriptProjectContent[i + 1].gitHubUrl,
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

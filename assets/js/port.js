$(document).ready(function () {
    let weatherItem = function () {
        let card = $("<div>");
        let row = $("<div>");
        let imgDiv = $("<div>");
        let img = $("<img>");
        let textDiv = $("<dic>");
        let body = $("<div>");
        let title = $("<h4>");
        let text = $("<p>");
        let link = $("<a>");
        let link2 = $("<a>");

        card.attr("class", "card mb-3");
        card.attr("style", "max-width: 1000px; margin-top: 25px;");
        row.attr("class", "row no-gutters");
        imgDiv.attr("class", "col-md-6");
        img.attr("src", "./assets/images/Travel_Almanac.gif");
        img.attr("class", "card-img");
        img.attr("alt", "Travel_Almanac.gif");
        textDiv.attr("class", "col-md-6");
        body.attr("class", "card-body");
        title.attr("class", "card-title");
        title.text("Project: Travel Almanac");
        text.attr("class", "card-text");
        text.attr("style", "font-size: large");
        text.text("This application combines country data and weather data to create a travel almanac. It's meant to help weary COVID-19 survivors fantasize about all the places they would go if not stuck at home.");
        link.attr("class", "card-link");
        link.attr("href", "https://github.com/jtwob/Travel_Almanac");
        link.text("GitHub Repo");
        link2.attr("class", "card-link");
        link2.attr("href", "https://jtwob.github.io/Travel_Almanac/");
        link2.text("Live Deployed App");

        body.append(title);
        body.append(text);
        body.append(link);
        body.append(link2);
        textDiv.append(body);
        imgDiv.append(img);
        row.append(imgDiv);
        row.append(textDiv);
        card.append(row);
        $("#main").append(card);
    }

    let quizItem = function () {
        let card = $("<div>");
        let row = $("<div>");
        let imgDiv = $("<div>");
        let textDiv = $("<dic>");
        let body = $("<div>");
        let title = $("<h4>");
        let text = $("<p>");
        let link = $("<a>");
        let link2 = $("<a>");

        card.attr("class", "card mb-3");
        card.attr("style", "max-width: 1000px; margin-top: 25px;");
        row.attr("class", "row no-gutters");
        imgDiv.attr("class", "col-md-6");
        imgDiv.html(`
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./assets/images/Quiz.gif" class="d-block w-100" alt="Quiz.gif">
                </div>
                <div class="carousel-item">
                    <img src="./assets/images/Quiz_Highscore.gif" class="d-block w-100" alt="Quiz_Highscore.gif">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        `);
        textDiv.attr("class", "col-md-6");
        body.attr("class", "card-body");
        title.attr("class", "card-title");
        title.text("Project: Coding Quiz");
        text.attr("class", "card-text");
        text.attr("style", "font-size: large");
        text.text("The main script focuses on dynamically building the HTML for the quiz, adding and removing elements as necessary, while the secondary js file handles the highscores. Using a combination of bootstrap and css for visuals, and jquery for easy HTML creation and alteration, this is my largest JS project to date. I am glad it all came together.");
        link.attr("class", "card-link");
        link.attr("href", "https://github.com/jtwob/Coding_Quiz");
        link.text("GitHub Repo");
        link2.attr("class", "card-link");
        link2.attr("href", "https://jtwob.github.io/Coding_Quiz/");
        link2.text("Live Deployed App");

        body.append(title);
        body.append(text);
        body.append(link);
        body.append(link2);
        textDiv.append(body);
        row.append(textDiv);
        row.append(imgDiv);
        card.append(row);
        $("#main").append(card);
    }
    weatherItem();
    quizItem();
})
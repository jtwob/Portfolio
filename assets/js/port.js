$(document).ready(function () {
  let uConnectItem = function () {
    let card = $("<div>");
    let row = $("<div>");
    let imgDiv = $("<div>");
    let img = $("<img>");
    let textDiv = $("<div>");
    let body = $("<div>");
    let title = $("<h4>");
    let text = $("<p>");
    let link = $("<a>");
    let link2 = $("<a>");

    card.attr("class", "card mb-3");
    card.attr("style", "max-width: 1000px; margin-top: 25px;");
    row.attr("class", "row no-gutters");
    imgDiv.attr("class", "col-md-6");
    img.attr("src", "./assets/images/uConnect.jpg");
    img.attr("class", "card-img");
    img.attr("alt", "uConnect.jpg");
    textDiv.attr("class", "col-md-6");
    body.attr("class", "card-body");
    title.attr("class", "card-title");
    title.text("Project: uConnect");
    text.attr("class", "card-text");
    text.attr("style", "font-size: large");
    text.text(
      "The uConnect app is a platform for those seeking to buy and sell professional introductions. The app allows the user to create a profile and to create sellable connections. uConnect is hosted on heroku, and features numerous technologies, including but not limited to; a sequelize handled database, user-data encryption, user session tracking, express servers, and more. The frontend of the website is designed with Materialize components on a handlebars.js framework. This application represents a minimum viable product with future development in progress."
    );
    link.attr("class", "card-link");
    link.attr("href", "https://github.com/jtwob/uConnect");
    link.text("GitHub Repo");
    link2.attr("class", "card-link");
    link2.attr("href", "https://uconnect-project2.herokuapp.com");
    link2.text("Live Deployed App");

    body.append(title);
    body.append(text);
    body.append(link);
    body.append(link2);
    textDiv.append(body);
    imgDiv.append(img);
    row.append(textDiv);
    row.append(imgDiv);
    card.append(row);
    $("#main").append(card);
  };

  /**
   * travelItem creates the elements of the first portfolio item and appends them to the page
   */
  let travelItem = function () {
    let card = $("<div>");
    let row = $("<div>");
    let imgDiv = $("<div>");
    let img = $("<img>");
    let textDiv = $("<div>");
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
    text.text(
      "This application combines country data and weather data to create a travel almanac. It's meant to help weary COVID-19 survivors fantasize about all the places they would go if not stuck at home."
    );
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
  };

  /**
   * quizItem creates the elements of the second portfolio item and appends them to the page
   */
  let quizItem = function () {
    let card = $("<div>");
    let row = $("<div>");
    let imgDiv = $("<div>");
    let textDiv = $("<div>");
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
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./assets/images/Quiz.gif" class="d-block w-100" alt="Quiz.gif">
                </div>
                <div class="carousel-item">
                    <img src="./assets/images/Quiz_Highscore.gif" class="d-block w-100" alt="Quiz_Highscore.gif">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
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
    text.text(
      "The main script focuses on dynamically building the HTML for the quiz, adding and removing elements as necessary, while the secondary js file handles the highscores. Using a combination of bootstrap and css for visuals, and jquery for easy HTML creation and alteration. I am glad it all came together."
    );
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
  };

  /**
   * weatherItem creates the elements of the third portfolio item and appends them to the page
   */
  let weatherItem = function () {
    let card = $("<div>");
    let row = $("<div>");
    let imgDiv = $("<div>");
    let img = $("<img>");
    let textDiv = $("<div>");
    let body = $("<div>");
    let title = $("<h4>");
    let text = $("<p>");
    let link = $("<a>");
    let link2 = $("<a>");

    card.attr("class", "card mb-3");
    card.attr("style", "max-width: 1000px; margin-top: 25px;");
    row.attr("class", "row no-gutters");
    imgDiv.attr("class", "col-md-6");
    img.attr("src", "./assets/images/Weather_App.png");
    img.attr("class", "card-img");
    img.attr("alt", "Weather_App.png");
    textDiv.attr("class", "col-md-6");
    body.attr("class", "card-body");
    title.attr("class", "card-title");
    title.text("Project: Weather Dashboard");
    text.attr("class", "card-text");
    text.attr("style", "font-size: large");
    text.text(
      "This app features a search bar with interactive history elements that can be used to re run a previous query, on mouseover these elements are highlighted. Exhibiting the weather data is a banner/panel that shows today's weather. This app also includes a simplified five day forecast, with date, weather icon, temperature, and humidity."
    );
    link.attr("class", "card-link");
    link.attr("href", "https://github.com/jtwob/Weather_App");
    link.text("GitHub Repo");
    link2.attr("class", "card-link");
    link2.attr("href", "https://jtwob.github.io/Weather_App/");
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
  };

  let burgerItem = function () {
    let card = $("<div>");
    let row = $("<div>");
    let imgDiv = $("<div>");
    let img = $("<img>");
    let textDiv = $("<div>");
    let body = $("<div>");
    let title = $("<h4>");
    let text = $("<p>");
    let link = $("<a>");
    let link2 = $("<a>");

    card.attr("class", "card mb-3");
    card.attr("style", "max-width: 1000px; margin-top: 25px;");
    row.attr("class", "row no-gutters");
    imgDiv.attr("class", "col-md-6");
    img.attr("src", "./assets/images/burger-app.png");
    img.attr("class", "card-img");
    img.attr("alt", "burger-app.png");
    textDiv.attr("class", "col-md-6");
    body.attr("class", "card-body");
    title.attr("class", "card-title");
    title.text("Project: Eat DA Burger");
    text.attr("class", "card-text");
    text.attr("style", "font-size: large");
    text.text(
      "This is a full-stack application that uses MySQL, Node, Express, Handlebars and a homemade ORM. It allows users to add a new burger to a database, and to devour the burger, rendering it disabled. Not much to the functionality portion but it's got a lot going on behing the scenes!"
    );
    link.attr("class", "card-link");
    link.attr("href", "https://github.com/jtwob/burger");
    link.text("GitHub Repo");
    link2.attr("class", "card-link");
    link2.attr("href", "https://eat-da-burger-jtwob.herokuapp.com/");
    link2.text("Live Deployed App");

    body.append(title);
    body.append(text);
    body.append(link);
    body.append(link2);
    textDiv.append(body);
    imgDiv.append(img);
    row.append(textDiv);
    row.append(imgDiv);
    card.append(row);
    $("#main").append(card);
  };

  /**
   * main calls the generators
   */
  let main = function () {
    uConnectItem();
    travelItem();
    quizItem();
    weatherItem();
    burgerItem();
  };

  main();
});

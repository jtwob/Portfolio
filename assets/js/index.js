$(document).ready(function () {

    $("#index").attr("style", "background-color: white; margin-top: 25px; padding: 5px;");

    /**
     * mainGenerator generates the elements on the homepage and fills them
     */
    let mainGenerator = function () {
        let row = $("<div>");
        let col = $("<div>");
        let title = $("<h1>");
        let hrBreak = $("<hr />");
        let img = $("<img>");
        let text = $("<p>");

        col.attr("class", "col-md-8");
        title.text("About Me");
        img.attr("src", "./assets/images/Portrait.jpg");
        img.attr("width", "200");
        img.attr("alt", "James Totah");
        img.attr("class", "wrap-text");
        text.text(
            "Hello! My name is James Totah and I am 22 years old. I have been a Computer Science Major at the University of San Francisco for 3 years now, and have opted to partake in a UC Berkeley Web Development bootcamp to polish off my web dev skills. I'm well versed in Python, Java, and C, with some experience in functional languages like Haskell and Racket. Recently I've learned JavaScript, along with a few relevent libraries. I have lived in San Francisco my whole life, and have always been a fan of tinkering with technology. I suppose it only makes sense since the bay area is currently the tech capital of the world. I hope to finish my CS degree as soon as remote learning is no longer necessary, and move on to bigger and better things!"
        )
        col.append(title);
        col.append(hrBreak);
        col.append(img);
        col.append(text);
        row.append(col);
        $("#index").append(row);
    }

    /**
     * cardGenerator generates all of the elements in the contact info section of the homepage and fills them
     */
    let cardGenerator = function () {
        let card = $("<div>");
        let body = $("<div>");
        let cTitle = $("<h5>");
        let cSubTitle = $("<h6>");
        let cardBrk = $("<hr />");
        let name = $("<p>");
        let email = $("<p>");
        let phone = $("<p>");
        let linkedIn = $("<a>");
        let github = $("<a>");

        card.attr("class", "card");
        card.attr("style", "width: 30rem; border: none;")
        body.attr("class", "card-body");
        cTitle.attr("class", "card-title");
        cTitle.text("Contact Information");
        cSubTitle.attr("card-subtitle mb-2 text-muted");
        cSubTitle.text("& relevant links");
        name.attr("class", "card-text");
        name.text("James Totah");
        email.attr("class", "card-text");
        email.text("Email: jtotah@usfca.edu");
        phone.attr("class", "card-text");
        phone.text("Cell: +1(415)-418-8719");
        linkedIn.attr("class", "card-link");
        linkedIn.attr("href", "https://www.linkedin.com/in/james-totah-337714188/");
        linkedIn.text("LinkedIn Profile");
        github.attr("class", "card-link");
        github.attr("href", "https://github.com/jtwob");
        github.text("GitHub Profile");

        body.append(cTitle);
        body.append(cSubTitle);
        body.append(cardBrk);
        body.append(name);
        body.append(email);
        body.append(phone);
        body.append(linkedIn);
        body.append(github);
        card.append(body);
        $("#index").append(card)
    }

    /**
     * main calls the generator functions
     */
    let main = function () {
        mainGenerator();
        cardGenerator();
    }

    main();
})



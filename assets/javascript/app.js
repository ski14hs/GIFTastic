// My API key = 9l3fJ5OD1x2cGx4Fz5xFCWfPFie3tkte
// var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats"

var topics = ["cat", "dog", "owl", "cow"];
// var topics = ["elf", "magic", "knight", "mage", "dragon"];

//create script to wipe and create new array of buttons:
function topicButtons(){
    $("#buttonsDiv").empty();
    //loop through topics to create button (benefit from being able to call this after updated array)
    for (var i = 0; i < topics.length; i++){
        // var btnDiv = $("<div>").addClass("container").append($("<button>").addClass("btn topic-button").attr("data-topic", topics[i]).text(topics[i]));
        var btnDiv = $("<button>").addClass("btn topic").attr("data-topic", topics[i]).text(topics[i]);
        $("#buttonsDiv").append(btnDiv);
    }
};


    //from cat button
    // $(".topic").on("click", function() {
    function addGif(){
        // debugger;
        var topic = $(this).attr("data-topic");
        console.log(topic);
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=9l3fJ5OD1x2cGx4Fz5xFCWfPFie3tkte&tag=" + topic;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        // After the data from the AJAX request comes back
            .then(function(response) {

            // Saving the image_original_url property
            // var imageUrl = response.data.url;
            //wil need to grab other urls for animate and still
            var stillURL = response.data.images.original_still.url;
            var animateURL = response.data.images.original.url;

            // Creating and storing an image tag
            var catDiv = $("<div>").addClass("container")
            //sample image that we want to make
            //<img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
            var catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", stillURL);
            catImage.attr("alt", "image");

            //set our new cat imag settings
            catImage.attr("data-still", stillURL);
            catImage.attr("data-animate", animateURL);
            //   data-state="still" class="gif"
            catImage.attr("data-state", "still");
            catImage.addClass("gif img-responsive");



            // Prepending the catImage to the images div
            $("#imagesDiv").prepend(catImage);
        });
    };


    //from start stop acgtivity

    function playGif(){
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    };
      
    topicButtons();
    $(document).on("click", ".gif", playGif);
    $(document).on("click", ".topic", addGif);
    //   document
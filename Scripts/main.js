$(document).ready(function () {
    $(".light-toggle").on("click", function() {
        $("#overlay").toggleClass("disable");
    });
    
    $("#painting").on("click", function() {
        imageSwap("Images/painting_crocked_00.png", 
                  "Images/painting_crocked_01.png", $("#painting"));
    });

    $("#window").on("click", function() {
        imageSwap("Images/Window_closed_00.png", 
                  "Images/Window_open_00.png", $("#window"));
    });

    $("#chair").on("click", function() {
        imageSwap("Images/Chair_00.png", "Images/Chair_01.png", $("#chair"));
    });
    
    // Click event handler for the image
    $('#radio').on('click', function () {
        // Play the audio when the image is clicked
        $('#myAudio')[0].play();
    });

    $('#tv').on('click', function () {
        // Play the audio when the image is clicked
        $('#myAudio1')[0].play();
    });
});

 // Function to make a specific image wiggle
 function wiggleImage(image) {
    // Use jQuery"s animate function to create a simple wiggle effect
    $(image).animate({ marginLeft: "+=10px" }, 100)
           .animate({ marginLeft: "-=20px" }, 100)
           .animate({ marginLeft: "+=10px" }, 100);

    // Call the wiggleImage function for the same image at a different interval
    var randomInterval = Math.floor(Math.random() * 3000) + 1000; // Random interval between 1 and 4 seconds
    setTimeout(function() {
        wiggleImage(image);
    }, randomInterval);
}

// Function to start the wiggle effect for each image
function startWiggle() {
    // Select all images with the class "wiggle-image"
    var images = $(".wiggle-image");

    // Start the wiggle effect for each image
    images.each(function() {
        wiggleImage(this);
    });
}

function imageSwap(imageURL_1, imageURL_2, item) {
    if (item.attr("src") == imageURL_2) {
        item.attr("src", imageURL_1);
    }
    else {
        item.attr("src", imageURL_2);
    }
}

// Initial call to start the animation
startWiggle();
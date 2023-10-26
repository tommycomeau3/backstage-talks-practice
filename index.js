document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".scroll-container");
    const images = document.querySelectorAll(".scroll-container img"); // Select all images

    const backgroundColors = ["#ff608c", "white", "#00c1b5", "#ff651a", "#ffbe00", "#1d3fbb", "#e30512"]; // An array of background colors
    let currentColorIndex = 0; // Index to track the current background color
    let lastCenteredImageIndex = -1; // Index to track the last centered image

    scrollContainer.addEventListener("scroll", function() {
        // Calculate the center position of the container
        const containerCenter = scrollContainer.scrollTop + scrollContainer.offsetHeight / 2;

        // Iterate through the images and check if each one is centered
        images.forEach((image, index) => {
            const imageCenter = image.offsetTop + image.offsetHeight / 2;

            // Check if the image is centered in the container
            if (containerCenter >= imageCenter && containerCenter <= (imageCenter + image.offsetHeight)) {
                // Change the background color when a new image is centered
                if (currentColorIndex !== index) {
                    // Switch back to the last background color if we scroll back to a previously centered image
                    if (lastCenteredImageIndex !== -1) {
                        currentColorIndex = lastCenteredImageIndex;
                        lastCenteredImageIndex = -1;
                    } else {
                        currentColorIndex = index;
                        lastCenteredImageIndex = index;
                    }

                    document.body.style.backgroundColor = backgroundColors[currentColorIndex];
                }
            }
        });
    });
});

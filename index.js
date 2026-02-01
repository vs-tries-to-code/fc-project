document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".nav-button");

    const beachSection = document.querySelector(".beach-section");
    const religiousSection = document.querySelector(".religious-places-section");
    const museumsSection = document.querySelector(".musuems-section");
    const othersSection = document.querySelector(".others-section");

    function hideAllSections() {
        beachSection.style.display = "none";
        religiousSection.style.display = "none";
        museumsSection.style.display = "none";
        othersSection.style.display = "none";
    }

    // Show beaches by default
    hideAllSections();
    beachSection.style.display = "block";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            hideAllSections();

            switch (button.textContent) {
                case "Beaches":
                    beachSection.style.display = "block";
                    break;
                case "Places of Worship":
                    religiousSection.style.display = "block";
                    break;
                case "Museums":
                    museumsSection.style.display = "block";
                    break;
                case "More":
                    othersSection.style.display = "block";
                    break;
            }
        });
    });
});

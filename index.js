function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        date + " | " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function searchCategory(){
    const userInput = document.getElementById("searchInput").value;

    const searchFor = userInput.toLowerCase().trim();

    const targetSection = document.getElementById(searchFor);

    if (targetSection){
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
    else{
        alert("Category not found");
    }
}

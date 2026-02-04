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

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

const mybutton = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
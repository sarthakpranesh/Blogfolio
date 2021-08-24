let themeTogglerBtn = document.getElementById('theme-toggler');
const body = document.body;

themeTogglerBtn.addEventListener("click", (event) => {
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", false);
        body.classList.remove("dark-mode");
        themeTogglerBtn.innerText = "dark_mode";
    } else {
        localStorage.setItem("darkMode", true);
        body.classList.add("dark-mode");
        themeTogglerBtn.innerText = "light_mode";
    }
});

// apply the user preference if set
console.log(localStorage.getItem("darkMode"));
if (localStorage.getItem('darkMode') === "true") {
    document.body.classList.add('dark-mode');
    console.log("Switched to dark mode");
    themeTogglerBtn.innerText = "light_mode";
} else {
    console.log("Using in light mode");
}

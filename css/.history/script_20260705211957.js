
//Nav Bar Guide //

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

//Recipe Section/Cards Switcher// 

const cocktailSelect = document.getElementById("cocktail-select");
const recipeEpisode = document.getElementById("recipe-episode");
const recipeTitle = document.getElementById("recipe-title");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeMethod = document.getElementById("recipe-method");
const recipeNote = document.getElementById("recipe-note");
const recipes = {
        "episode-one": {
            episode: "Episode 01",
            title: "Neat or Chilled",
            ingredients: [
                "2 oz. Whiskey, Tequila, Vodka, or Rum",
                "Ice, optional",
                "A long day"
            ],
            method: [
                "Choose your liquor.",
                "Either pour it straight into a glass, or shake it with ice and strain into a fresh glass.",
                "Go ahead and slam it.",
                "Congrats! You just had your first of many shift drinks."
            ],
            note: "This drink is a simple one, but it is the one we all reach for at the end of a long night. It is for when everyone says they're only staying for one... and then suddenly it's 3 a.m."
        },
        "episode-two": {
            episode: "Episode 02",
            title: "Coming Next Shift",
            ingredients: [
                "Recipe coming soon."
            ],
            method: [
                "Check back after the episode is released."
            ],
            note: "The bar is still being stocked for this one."
        },
        "episode-three": {
            episode: "Episode 03",
            title: "Recipe Being Tested",
            ingredients: [
                "Recipe coming soon."
            ],
            method: [
                "Check back after the episode is released."
            ],
            note: "This drink has not been poured yet."
        }
};

cocktailSelect.addEventListener("change", function () {
    const selectedRecipe = recipes[cocktailSelect.value];
    recipeEpisode.textContent = selectedRecipe.episode;
    recipeTitle.textContent = selectedRecipe.title; 
    recipeIngredients.innerHTML = "";
    selectedRecipe.ingredients.forEach(function (ingredients) {
        recipeIngredients.innerHTML += `<li>${ingredients}</li>`;
    });
    recipeMethod.innerHTML = "";
    selectedRecipe.method.forEach(function (step) {
        recipeMethod.innerHTML += `<li>${step}</li>`;
    });
    recipeNote.textContent = selectedRecipe.note;
}); 

import { fetchQuote } from "/quote.js"
import { backgroundGenerator } from "/background.js"

let backgroundTheme = "nature"
if (localStorage.getItem('theme')) {
    backgroundTheme = localStorage.getItem('theme')
}

document.getElementById("submitBtn").addEventListener("click", () => {
    changeTheme(document.getElementById("changeThemeInput").value)
})

//sets the background image
backgroundGenerator(backgroundTheme)

//adds the quote
fetchQuote()

//stores theme for background
function changeTheme(newTheme) {
    if (typeof newTheme !== "string" || newTheme.trim() == "") {
        console.error("Invalid theme input")
        return
    }

    backgroundGenerator(newTheme.trim())
    localStorage.setItem('theme', newTheme.trim())
}

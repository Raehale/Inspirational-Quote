export async function fetchQuote() {
    try {
        const url = 'https://get-quotes-api.p.rapidapi.com/random'
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ab40763e11mshc74fd069866938bp138b87jsn68af667c9eca',
                'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
            }
        }
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()

        document.getElementById("root").textContent = `${ result.quote.quote}`
        document.getElementById("author").textContent = `${result.quote.author}`
    } catch (error) {
        console.error(error)
        setDefaultQuote()
    }
}

function setDefaultQuote() {
    document.getElementById("root").textContent = "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals."
    document.getElementById("author").textContent = "E. James Rohn"
}
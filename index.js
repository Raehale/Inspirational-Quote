import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("authorEl").textContent = `By: ${data.user.name}`
        getColor(data.urls.regular)
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
		document.getElementById("authorEl").textContent = `By: Dodi Achmad`

        console.error(err)
    })

    const url = 'https://get-quotes-api.p.rapidapi.com/random'
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ab40763e11mshc74fd069866938bp138b87jsn68af667c9eca',
        'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options)
    const result = await response.json()

    document.getElementById("root").textContent = `${ result.quote.quote}`
    document.getElementById("author").textContent = `${result.quote.author}`
} catch (error) {
    console.error(error)
}

//get colors from background
function getColor(backgroundImage) {
    try {
        const colorThief = new ColorThief()
        const img = new Image()

        img.crossOrigin = 'Anonymous'
        img.src = `${backgroundImage}`

        img.addEventListener('load', function() {
            changeTextBgColor(colorThief.getPalette(img))
        })
    } catch(err) {
        console.log(err)
    }
}

//change text background colors to new colors
function changeTextBgColor(rgbPalette) {
    let backgroundColor = `rgb(${rgbPalette[0][0]}, ${rgbPalette[0][1]}, ${rgbPalette[0][2]})`
    let textColor = `rgb(${rgbPalette[1][0]}, ${rgbPalette[1][1]}, ${rgbPalette[1][2]})`

    Array.from(document.getElementsByClassName("background-color-change")).forEach((el) => {
        el.style.backgroundColor = backgroundColor
        el.style.color = textColor
    })

    document.getElementById("submitBtn").style.color = textColor
}
export function fetchColors(backgroundImage) {
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
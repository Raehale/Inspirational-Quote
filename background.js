import { fetchColors } from "/colors.js"

const defaultImgUrl = "url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)"
const defaultImgAuthor = "By: Dodi Achmad"

export async function backgroundGenerator(backgroundTheme) {
    try {
        const response = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${backgroundTheme}`)
        const result = await response.json()

        document.body.style.backgroundImage = `url(${result.urls.regular})`
        document.getElementById("authorEl").textContent = `By: ${result.user.name}`
        fetchColors(result.urls.regular)
    } catch (error) {
        console.error(error)
        setDefaultBackground()
    }
}

function setDefaultBackground() {
    document.body.style.backgroundImage = `${defaultImgUrl}`
    document.getElementById("authorEl").textContent = `${defaultImgAuthor}`
}

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("authorEl").textContent = `By: ${data.user.name}`
        getColors(data);
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
		document.getElementById("authorEl").textContent = `By: Dodi Achmad`;
    });

    const url = 'https://get-quotes-api.p.rapidapi.com/random';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ab40763e11mshc74fd069866938bp138b87jsn68af667c9eca',
            'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        document.getElementById("root").textContent = `${ result.quote.quote}`
        document.getElementById("author").textContent = `${result.quote.author}`
    } catch (error) {
        console.error(error);
    }

//get color from background
function getColors(data) {
    // const imageFile = data;
    // const image = new Image();
    // const file = imageFile;
    // const fileReader = new FileReader();

    // fileReader.onload = () => {
    //     image.onload = () => {
    //         const canvas = document.getElementById("canvas");
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         const ctx = canvas.getContext("2d");
    //         console.log(ctx)

    //         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //         console.log(imageData)
    //         console.log('hi')
    //     }
    // }

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = data.urls.regular;
    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0, 233, 320);

        const imageData = ctx.getImageData(10, 20, 80, 230);
        ctx.putImageData(imageData, 260, 0);
        ctx.putImageData(imageData, 380, 50);
        ctx.putImageData(imageData, 500, 100);
    })
}
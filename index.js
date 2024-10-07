fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("authorEl").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("authorEl").textContent = `By: Dodi Achmad`
    })

    

    // fetch('https://get-quotes-api.p.rapidapi.com/id/%7Bid%7D/ab40763e11mshc74fd069866938bp138b87jsn68af667c9eca')
    // .then(res => res.json())
    // .then(data => console.log(data))
	

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

    // result = {
    //         "message":"Quote of the Day",
    //         "quote": {
    //             "id":111,
    //             "category":"Motivation",
    //             "quote":"The only way to do great work is to love what you do.",
    //             "author":"Steve Jobs",
    //             "description":"An inspiring quote emphasizing the importance of passion in one's work."}
    //     }
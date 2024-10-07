Figma File: https://www.figma.com/design/TAQpY7YXEN1tt5akXvjfil/Inspirational-Quote?node-id=0-1&t=MFwGHsJedDsNxwbu-1

netlify: https://inspirational-quote-fadumo-and-rae.netlify.app/





const url = 'https://get-quotes-api.p.rapidapi.com/id/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ab40763e11mshc74fd069866938bp138b87jsn68af667c9eca',
		'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
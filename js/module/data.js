
//api key and url, key is required, text pulls the text search from flickr api

export let getImages  = async (text, numberOfImages) => {
    
    const apiKey = '19d3e6e0acfe9c438f368e2c2bab1c5d';

    const baseUrl = 'https://api.flickr.com/services/rest';

    let method = 'flickr.photos.search';
    
    //api_key need to be in exact format from flickr
    // number of images that you can add

    let url = `${baseUrl}?api_key=${apiKey}&method=${method}&text=${text}&per_page=${numberOfImages}&format=json&nojsoncallback=1`;

    let resp = await fetch(url);

    let data = await resp.json();
    
    return data.photos;

};
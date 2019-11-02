

export async function getPokedex(){
    // slice(1) eliminates # from window.location.hash
    let URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    let queryString = window.location.hash.slice(1);
    // append queryString to api URL
    URL = `${URL}?${queryString}`;
    const response = await fetch(URL);
    const data = await response.json();
    // data.? 
    /*if (!data.Response){
        return {
            results: [],
            count: 0
        };
    }
    */
    return data;
}
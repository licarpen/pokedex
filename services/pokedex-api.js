const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function getPokedex(){
    const response = await fetch(URL);
    return await response.json();
}
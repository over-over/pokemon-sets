class PokemonService {

    _apiBase = 'https://api.pokemontcg.io/v1';

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);
        
        if(!res.ok){
            throw new Error(`Could not fetch at ${url}, received ${res.status}`);
        }
        return await res.json(); 
    }

    getAllSets = async () => {
        const res = await this.getResource('/sets/');
        return res.sets;
    }

    getSetCards = async (id) => {
        const res = await this.getResource(`/cards?setCode=${id}`);
        return res.cards;
    }
}

export default PokemonService;
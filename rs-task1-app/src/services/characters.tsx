export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

class CharacterService {
  charUrl = 'https://rickandmortyapi.com/api/character';

  getRes = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch this ${url}. Error status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async (page = 1): Promise<Character[]> => {
    const res = await this.getRes(`${this.charUrl}/?page=${page}`);
    return res.results;
  };

  getCharacter = async (id: number): Promise<Character> => {
    const res = await this.getRes(`${this.charUrl}/${id}`);
    return res;
  };

  searchCharacters = async (value: string) => {
    const res = await this.getRes(`${this.charUrl}/?name=${value}`);
    return res.results;
  };
}

export default CharacterService;

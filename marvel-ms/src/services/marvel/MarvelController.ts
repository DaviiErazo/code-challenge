import { ListCharacters, GetCharacter } from "./Characters/";
import { ListComics, GetComicsByCharacter } from "./Comics";

// Get a data from APi and transform it to array
export const getListCharacters = async () => {
  const response: any = await ListCharacters();
  const record: Array<string> = response.data;
  return record;
};

export const getCharacter = async (id: String) => {
  const response: any = await GetCharacter(id);
  const record: Object = response.data;
  return record;
};

// Comics
export const getListComicsById = async (id: String) => {
  const response: any = await GetComicsByCharacter(id);
  const record: Object = response.data;
  return record;
};

export const getListComics = async () => {
  const response: any = await ListComics();
  const record: Object = response.data;
  return record;
};

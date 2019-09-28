import { marvelServiceAPI } from "../services/MarvelServices";

export const ListCharacters = () => {
  return new Promise((resolve, reject) => {
    // Catching errors
    try {
      marvelServiceAPI("characters")
        .then(response => {
          resolve(response.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      return error;
    }
  });
};

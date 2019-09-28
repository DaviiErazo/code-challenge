import { marvelServiceAPI } from "../services/MarvelServices";

export const GetComicsByCharacter = (id: String) => {
  return new Promise((resolve, reject) => {
    // Catching errors
    try {
      marvelServiceAPI(`characters/${id}/comics`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      resolve(error);
    }
  });
};

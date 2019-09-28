import { marvelServiceAPI } from "../services/MarvelServices";

export const GetCharacter = (id: String) => {
  return new Promise((resolve, reject) => {
    // Catching errors
    try {
      marvelServiceAPI(`characters/${id}`)
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

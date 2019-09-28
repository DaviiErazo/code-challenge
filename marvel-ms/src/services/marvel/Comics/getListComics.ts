import { marvelServiceAPI } from "../services/MarvelServices";

export const ListComics = () => {
  return new Promise((resolve, reject) => {
    // Catching errors
    try {
      marvelServiceAPI("comics")
        .then(response => {
          resolve(response.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      resolve(error);
    }
  });
};

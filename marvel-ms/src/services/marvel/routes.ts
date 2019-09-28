import { Request, Response } from "express";
import {
  getListCharacters,
  getCharacter,
  getListComics,
  getListComicsById
} from "./MarvelController";

export default [
  {
    path: "/marvel/characters",
    method: "get",
    handler: async (req: Request, res: Response) => {
      console.log(req.url);

      const result = await getListCharacters();
      res.status(200).send(result);
    }
  },
  {
    path: "/marvel/character/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      console.log(req.url);
      const result = await getCharacter(req.params.id);
      res.status(200).send(result);
    }
  },
  {
    path: "/marvel/comics/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await getListComicsById(req.params.id);
      res.status(200).send(result);
    }
  },
  {
    path: "/marvel/comics",
    method: "get",
    handler: async (req: Request, res: Response) => {
      console.log(req.url);
      const result = await getListComics();
      res.status(200).send(result);
    }
  }
];

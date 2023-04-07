import { Request, Response } from "express";
import MovieModel, { IMovie } from "../models/movieModel";

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovieIds = async (req: Request, res: Response) => {
  const result = await MovieModel.find().select({ _id: 1 });
  res.json(result.map((movieId) => movieId.id));
};

export const findAllMovies = async (req: Request, res: Response) => {
  const { limit = "10", skip = "0", ordering = "releasedAsc" } = req.query;
  let sort = "";
  switch (ordering) {
    case "releasedDesc":
      sort = "-released";
      break;
    case "imdbRatingDesc":
      sort = "-awards.wins";
      break;
    case "titleAsc":
      sort = "title";
      break;
    case "titleDesc":
      sort = "-title";
      break;
    default:
      sort = "released";
      break;
  }
  try {
    const result: IMovie[] = await MovieModel.find({})
      .sort(sort)
      .limit(Number(limit))
      .skip(Number(skip));
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const findMovieById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: IMovie | null = await MovieModel.findById(_id);
  try {
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

import axios, {AxiosResponse} from "axios";
import express, {Request, Response} from "express";
export const dragonballRouter = express.Router();
import {shuffleArray} from "../helpers/shuffle"

const baseURL = "https://dragonball-api.com/api";

dragonballRouter.get("/characters", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/characters`);
        const charactersData = await response.data;
        shuffleArray(charactersData.items);
        res.status(200).send(charactersData.items);
    }
    catch (error)
    {
        console.log(error);
    }
});



import axios, {AxiosResponse} from "axios";
import express, {Request, Response} from "express";
export const dragonballRouter = express.Router();

const baseURL = "https://dragonball-api.com/api";

dragonballRouter.get("/characters", async (req: Request, res: Response) => {
    const { page, limit } = req.query;
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/characters?page=${page}&limit=${limit}`);
        const charactersData = await response.data.items;
        res.status(200).send(charactersData);
    }
    catch (error)
    {
        console.log(error);
    }
});

dragonballRouter.get("/planets", async (req: Request, res: Response) => {
    const { page, limit } = req.query;
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/planets?page=${page}&limit=${limit}`);
        const planetsData = await response.data.items;
        res.status(200).send(planetsData);
    }
    catch (error)
    {
        console.log(error);
    }
});




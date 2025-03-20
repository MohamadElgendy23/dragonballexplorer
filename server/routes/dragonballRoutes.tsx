const axios = require("axios")
import express, {Request, Response} from "express";
const dragonballRouter = express.Router();

const baseURL = "https://www.dragonball-api.com/api";

dragonballRouter.get("/characters", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${baseURL}/characters`);
        const charactersData = await response.JSON();
        console.log(charactersData);
        res.status(200).send(charactersData);
    }
    catch (error)
    {
        console.log(error.message)
    }
});


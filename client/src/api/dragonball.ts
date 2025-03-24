/*
This file contains methods to make the API calls for the endpoints needed for this project.
*/

import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:3000/dragonball";

// gets all characters
export async function getCharacters(page:Number, limit:Number) {
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/characters?page=${page}&limit=${limit}`);
        const charactersData = await response.data;
        return charactersData;
      } catch (error) {
        console.error(error);
      }
}

// gets one character by id
export async function getCharacter(characterId:String) {

}

// gets all planets
export async function getPlanets(page:Number, limit:Number) {
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/planets?page=${page}&limit=${limit}`);
        const planetsData = await response.data;
        return planetsData;
      } catch (error) {
        console.error(error);
      }
}

// gets one planet by id
export async function getPlanet(planetId:String) {

}


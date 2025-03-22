/*
This file contains methods to make the API calls for the endpoints needed for this project.
*/
import axios, { Axios, AxiosResponse } from "axios";

const baseURL = "http://localhost:3000/dragonball";

// gets all characters
export async function getCharacters() {
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/characters`);
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
export async function getPlanets() {
    try {
        const response: AxiosResponse = await axios.get(`${baseURL}/planets`);
        const planetsData = await response.data;
        return planetsData;
      } catch (error) {
        console.error(error);
      }
}

// gets one planet by id
export async function getPlanet(planetId) {

}


// defines the character prop
export interface CharacterProps {
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
}

// defines the planet prop
export interface PlanetProps {
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
}
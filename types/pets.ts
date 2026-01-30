export interface Pet {
    id: string;
    name: string;
    image: string;
    breed: string;
    age: string;
    sex: "Macho" | "Fêmea";
    description: string;
}
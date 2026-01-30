export interface ServiceType {
    id: string;
    name: string;
    icon: string;
}

export interface Service {
    id: string;
    typeId: string
    name: string;
    clinic: string;
    price: string;
    image: string,
    description: string;

    location?: {
        address: string;
        distanceKm: number;
    };
}
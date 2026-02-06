import { Service, ServiceType } from "@/types/services";
import { Pet } from "@/types/pets";
import { AvailableSlot } from "@/types/availableSlot";
import { Appointment } from "@/types/appointments";
import { Clinic } from "@/types/clinic";

export const serviceTypes: ServiceType[] = [
    {
        id: "1",
        name: "Banho",
        icon: "https://static.thenounproject.com/png/dog-bathing-icon-5509939-512.png",
    },
    {
        id: "2",
        name: "Tosa",
        icon: "https://static.thenounproject.com/png/pets-grooming-scissors-icon-7424273-512.png",
    },
    {
        id: "3",
        name: "Consulta",
        icon: "https://static.thenounproject.com/png/pet-shop-icon-4291497-512.png",
    },
    {
        id: "4",
        name: "Vacina",
        icon: "https://static.thenounproject.com/png/vaccine-icon-2256830-512.png",
    },
    {
        id: "5",
        name: "Hotel",
        icon: "https://static.thenounproject.com/png/pet-hotel-icon-3770794-512.png",
    },
    {
        id: "6",
        name: "Creche",
        icon: "https://static.thenounproject.com/png/dog-daycare-icon-3901566-512.png",
    },
    {
        id: "7",
        name: "Adestramento",
        icon: "https://static.thenounproject.com/png/dog-training-icon-1524565-512.png",
    },
    {
        id: "8",
        name: "Exames",
        icon: "https://static.thenounproject.com/png/veterinary-lab-icon-2814734-512.png",
    },
    {
        id: "9",
        name: "Emergência",
        icon: "https://static.thenounproject.com/png/veterinary-emergency-icon-1785455-512.png",
    },
    {
        id: "10",
        name: "Pet Shop",
        icon: "https://static.thenounproject.com/png/pet-store-icon-1261843-512.png",
    },
];

export const services: Service[] = [
    {
        id: "1",
        typeId: "1", // Banho
        name: "Banho Premium",
        clinic: "PetCare Clínica",
        price: "R$ 80,00",
        image: "https://static.thenounproject.com/png/dog-bathing-icon-5509939-512.png",
        description: "Banho completo com hidratação e perfume",
    },
    {
        id: "2",
        typeId: "1", // Banho
        name: "Banho Simples",
        clinic: "Amigo Pet",
        price: "R$ 45,00",
        image: "https://static.thenounproject.com/png/dog-bathing-icon-5509939-512.png",
        description: "Banho básico com secagem",
    },
    {
        id: "3",
        typeId: "2", // Tosa
        name: "Tosa Higiênica",
        clinic: "Clínica Animal Vida",
        price: "R$ 60,00",
        image: "https://static.thenounproject.com/png/pets-grooming-scissors-icon-7424273-512.png",
        description: "Tosa padrão para higiene e conforto",
    },
    {
        id: "4",
        typeId: "2", // Tosa
        name: "Tosa Completa",
        clinic: "Pet Glamour",
        price: "R$ 120,00",
        image: "https://static.thenounproject.com/png/pets-grooming-scissors-icon-7424273-512.png",
        description: "Tosa completa com acabamento profissional",
    },
    {
        id: "5",
        typeId: "3", // Consulta
        name: "Consulta Veterinária",
        clinic: "Vet Saúde",
        price: "R$ 150,00",
        image: "https://static.thenounproject.com/png/pet-shop-icon-4291497-512.png",
        description: "Consulta clínica geral para pets",
    },
    {
        id: "6",
        typeId: "4", // Vacina
        name: "Vacinação",
        clinic: "Clínica Animal Vida",
        price: "R$ 90,00",
        image: "https://static.thenounproject.com/png/vaccine-icon-2256830-512.png",
        description: "Aplicação de vacinas importadas",
    },
    {
        id: "7",
        typeId: "5", // Hotel
        name: "Hotel Pet (Diária)",
        clinic: "Hotel Pet Feliz",
        price: "R$ 70,00",
        image: "https://static.thenounproject.com/png/pet-hotel-icon-3770794-512.png",
        description: "Hospedagem com acompanhamento diário",
    },
    {
        id: "8",
        typeId: "6", // Creche
        name: "Creche Pet",
        clinic: "Dog DayCare Center",
        price: "R$ 50,00",
        image: "https://static.thenounproject.com/png/dog-daycare-icon-3901566-512.png",
        description: "Creche com atividades recreativas",
    },
    {
        id: "9",
        typeId: "7", // Adestramento
        name: "Adestramento Básico",
        clinic: "AdestraPet",
        price: "R$ 200,00",
        image: "https://static.thenounproject.com/png/dog-training-icon-1524565-512.png",
        description: "Treinamento básico de obediência",
    },
    {
        id: "10",
        typeId: "8", // Exames
        name: "Exames Laboratoriais",
        clinic: "VetLab",
        price: "R$ 180,00",
        image: "https://static.thenounproject.com/png/veterinary-lab-icon-2814734-512.png",
        description: "Exames clínicos e laboratoriais",
    },
    {
        id: "11",
        typeId: "9", // Emergência
        name: "Emergência 24h",
        clinic: "ProntoVet",
        price: "R$ 250,00",
        image: "https://static.thenounproject.com/png/veterinary-emergency-icon-1785455-512.png",
        description: "Atendimento emergencial 24 horas",
    },
    {
        id: "12",
        typeId: "3", // Consulta
        name: "Consulta Especialista",
        clinic: "Vet Premium",
        price: "R$ 220,00",
        image: "https://static.thenounproject.com/png/pet-shop-icon-4291497-512.png",
        description: "Consulta com veterinário especialista",
    },
    {
        id: "13",
        typeId: "4", // Vacina
        name: "Vacina Antirrábica",
        clinic: "Pet Saúde",
        price: "R$ 70,00",
        image: "https://static.thenounproject.com/png/vaccine-icon-2256830-512.png",
        description: "Vacinação antirrábica anual",
    },
    {
        id: "14",
        typeId: "7", // Adestramento
        name: "Adestramento Avançado",
        clinic: "AdestraPet",
        price: "R$ 350,00",
        image: "https://static.thenounproject.com/png/dog-training-icon-1524565-512.png",
        description: "Treinamento avançado de comportamento",
    },
    {
        id: "15",
        typeId: "6", // Creche
        name: "Creche Pet (Período Integral)",
        clinic: "Dog DayCare Center",
        price: "R$ 80,00",
        image: "https://static.thenounproject.com/png/dog-daycare-icon-3901566-512.png",
        description: "Creche com acompanhamento o dia todo",
    },
    {
        id: "16",
        typeId: "5", // Hotel
        name: "Hotel Pet Luxo",
        clinic: "Pet Palace",
        price: "R$ 120,00",
        image: "https://static.thenounproject.com/png/pet-hotel-icon-3770794-512.png",
        description: "Hospedagem premium com câmera e recreação",
    },
];

export const pets: Pet[] = [
    {
        id: "1",
        name: "Thor",
        image: "https://images.dog.ceo/breeds/labrador/n02099712_4354.jpg",
        breed: "Labrador Retriever",
        age: "3 anos",
        sex: "Macho",
        description: "Amigável, brincalhão e muito companheiro",
    },
    {
        id: "2",
        name: "Luna",
        image: "https://i.redd.it/mreoqphngwcb1.jpg",
        breed: "Poodle Toy",
        age: "2 anos",
        sex: "Fêmea",
        description: "Carinhosa, inteligente e dócil",
    },
    {
        id: "3",
        name: "Mia",
        image: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
        breed: "Siamês",
        age: "1 ano",
        sex: "Fêmea",
        description: "Curiosa, comunicativa e elegante",
    },
    {
        id: "4",
        name: "Oliver",
        image: "https://cdn2.thecatapi.com/images/bpc.jpg",
        breed: "Maine Coon",
        age: "4 anos",
        sex: "Macho",
        description: "Grande, dócil e muito afetuoso",
    },
    {
        id: "5",
        name: "Pipoca",
        image: "https://files.agro20.com.br/uploads/2020/06/Periquito-amarelo-1-1.jpg",
        breed: "Periquito Australiano",
        age: "1 ano",
        sex: "Macho",
        description: "Ativo, colorido e sociável",
    },
    {
        id: "6",
        name: "Loro",
        image: "https://s3.amazonaws.com/media.wikiaves.com.br/images/221/122761_f41b46dfaa37205e41c1a190ceb2ebf8.jpg",
        breed: "Papagaio",
        age: "6 anos",
        sex: "Macho",
        description: "Inteligente, comunicativo e brincalhão",
    },
    {
        id: "7",
        name: "Shadow",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Brachypelma_Albopilosum_L5-6.jpg",
        breed: "Tarântula",
        age: "2 anos",
        sex: "Fêmea",
        description: "Animal exótico, calmo e de hábitos noturnos",
    },
    {
        id: "8",
        name: "Sly",
        image: "https://meusanimais.com.br/wp-content/uploads/2020/12/cobra-do-milho-terrario.jpg",
        breed: "Cobra-do-milho",
        age: "3 anos",
        sex: "Macho",
        description: "Não venenosa, tranquila e muito observadora",
    },
];

export const availableSlots: AvailableSlot[] = [
    { id: "1", label: "20/02 • 14:30" },
    { id: "2", label: "20/02 • 16:00" },
    { id: "3", label: "21/02 • 09:00" },
    { id: "4", label: "21/02 • 10:30" },
];

export const mockAppointments: Appointment[] = [
    {
        id: "1",
        petName: "Rex",
        service: "Banho",
        clinic: "Pet Love",
        datetime: "12/07/2025 - 14h",
        status: "PENDENTE",
    },
    {
        id: "2",
        petName: "Nina",
        service: "Vacina",
        clinic: "Vet Clinic",
        datetime: "12/07/2025 - 14h",
        status: "CONCLUIDO",
    },
    {
        id: "3",
        petName: "Thor",
        service: "Consulta",
        clinic: "Vet Center",
        datetime: "13/07/2025 - 09h",
        status: "CONCLUIDO",
    },
    {
        id: "4",
        petName: "Luna",
        service: "Banho",
        clinic: "Pet Love",
        datetime: "13/07/2025 - 11h",
        status: "PENDENTE",
    },
    {
        id: "5",
        petName: "Bob",
        service: "Tosa",
        clinic: "Mundo Pet",
        datetime: "14/07/2025 - 10h",
        status: "CONCLUIDO",
    },
    {
        id: "6",
        petName: "Mel",
        service: "Vacina",
        clinic: "Vet Clinic",
        datetime: "14/07/2025 - 15h",
        status: "PENDENTE",
    },
    {
        id: "7",
        petName: "Max",
        service: "Consulta",
        clinic: "Vet Center",
        datetime: "15/07/2025 - 08h",
        status: "CONCLUIDO",
    },
    {
        id: "8",
        petName: "Bella",
        service: "Banho",
        clinic: "Pet Love",
        datetime: "15/07/2025 - 14h",
        status: "PENDENTE",
    },
    {
        id: "9",
        petName: "Charlie",
        service: "Tosa",
        clinic: "Mundo Pet",
        datetime: "16/07/2025 - 09h",
        status: "CONCLUIDO",
    },
    {
        id: "10",
        petName: "Daisy",
        service: "Consulta",
        clinic: "Vet Clinic",
        datetime: "16/07/2025 - 16h",
        status: "PENDENTE",
    },
    {
        id: "11",
        petName: "Rocky",
        service: "Vacina",
        clinic: "Vet Center",
        datetime: "17/07/2025 - 10h",
        status: "CONCLUIDO",
    },
    {
        id: "12",
        petName: "Mia",
        service: "Banho",
        clinic: "Pet Love",
        datetime: "17/07/2025 - 13h",
        status: "PENDENTE",
    },
    {
        id: "13",
        petName: "Simba",
        service: "Consulta",
        clinic: "Mundo Pet",
        datetime: "18/07/2025 - 09h",
        status: "CONCLUIDO",
    },
    {
        id: "14",
        petName: "Lola",
        service: "Vacina",
        clinic: "Vet Clinic",
        datetime: "18/07/2025 - 15h",
        status: "PENDENTE",
    },
    {
        id: "15",
        petName: "Toby",
        service: "Tosa",
        clinic: "Pet Love",
        datetime: "19/07/2025 - 11h",
        status: "CONCLUIDO",
    },
];

export const user = {
    name: "Anderson Arruda",
    email: "anderson@email.com",
    address: "Rua das Flores, 123 - São Paulo/SP",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
};

export const clinic: Clinic = {
    id: "1",
    name: "Pet Love Clínica",
    address: "Av. Central, 456 - São Paulo/SP",
};


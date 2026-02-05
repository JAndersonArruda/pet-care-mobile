export type AppointmentStatus = "PENDENTE" | "CONCLUIDO";

export interface Appointment {
    id: string;
    petName: string;
    service: string;
    clinic: string;
    datetime: string;
    status: AppointmentStatus;
}

import { PublicationTypes } from "./types";

export type User = {
    id: string;
    username: string;
    name: string;
    email: string;
    level: number;
};

export type Store = {
    id?: string;
    name: string;
    type?: string;
    address?: string;
    addressNumber?: number;
    phone?: number;
    instagram?: string;
    facebook?: string;
    email?: string;
    description?: string
    image?: string;
};

export type Event = {
    id: string
    name: string
    type: string
    address: string
    adressNumber: string
    date: string
    phone: number
    description: string
    image: string
};

export type Publication = {
    id: string
    userId?: string
    title: string
    type: PublicationTypes
    address: string
    addressNumber: number
    price: number
    phone: number
    description: string
    image: string
    image01?: string | null
    image02?: string | null
    image03?: string | null

}

export type UserStatusProps = {
    isAuthenticated: boolean;
    };

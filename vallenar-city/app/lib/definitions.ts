import { PublicationTypes } from "./types";

export type User = {
    id: string;
    username: string;
    name: string;
    email: string;
    level: number;
};

export type Store = {
    id: string;
    name: string;
    type: string;
    address: string;
    addressNumber: number;
    phone: number;
    instagram: string;
    facebook: string;
    email: string;
    description: string
    image: string;
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
    title: string
    type: PublicationTypes
    address: string
    addressNumber: number
    price: number
    phone: number
    description: string
    image: string

}

export type UserStatusProps = {
    isAuthenticated: boolean;
    };

export type StoreCardProps = {
    id: string;
    title: string;
    description: string;
    image: string;
}

export type Day = number | null;

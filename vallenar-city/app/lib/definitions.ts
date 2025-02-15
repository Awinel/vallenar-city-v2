import { PublicationTypes } from "./types";

export type User = {
    id: number;
    username: string;
    name: string;
    email: string;
    level: number;
};

export type Store = {
    id: number;
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
    id: number
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
    id: number
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

export type CardProps = {
    title: string
}

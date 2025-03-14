import { PublicationTypes } from "./types";

export type User = {
    id: string;
    password: string;
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
    addressnumber?: number;
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
    addressnumber: string
    date: any
    phone: number
    description: string
    image: string
    creation_date?: any
};

export type Publication = {
    id: string
    userId?: string
    title: string
    type: PublicationTypes
    address: string
    addressnumber: number
    price: number
    phone: number
    description: string
    image: string
    image_01?: string | null
    image_02?: string | null
    image_03?: string | null

}

export type UserStatusProps = {
    isAuthenticated: boolean;
    };

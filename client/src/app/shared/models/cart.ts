import {nanoid} from 'nanoid';

export type CartType = {
    id: string;
    items: CartItem[];
}

export type CartItem = {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    publisher: string;
    genre: string;
}

export class Cart implements CartType {
    id = nanoid();
    items: CartItem[] = [];
}
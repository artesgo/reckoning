export type Unit =
    'lb' |
    'kg' |
    'g' |
    'oz' |
    'L' |
    'mL' |
    'ea' |
    'gal';

export interface Grocery {
    name: string;
    unit: Unit;
    quantity: number;
    price: number;
    aisle: number;
    shelf: number;
    updated: number;
    user: string;
    salePrice?: number;
    bulk?: {
        quantity: number;
        price: number;
    }
}
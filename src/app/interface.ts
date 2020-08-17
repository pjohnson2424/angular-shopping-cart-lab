export interface Response {
    results: Item[];
}

export interface Item {
    product: string;
    price: number;
    quantity: number;
    id:number;
}
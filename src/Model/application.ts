export interface Iproduct {
    _id?: any;
    name?: string;
    images?: string[];
    createdDate?: Date;
    description?: string;
    price?: number ;//price is in dollars conversion is done dynamically;
    category?: string;

}

export interface Iuser {
    userName?: string;
    _id?: any;
    email?: string;
    password?: string;
}
interface IproductImage {
    featured_image?: string;
    image_1?: string;
    image_2?: string;
}
export interface Ireview {
    name?: string;
    title?: string;
    description?: string;
    stars?: number;
}

export interface Iproduct {
    _id?: any;
    produce_name?: string;
    createdDate?: Date;
    description?: string;
    price?: number ;//price is in dollars conversion is done dynamically;
    category?: string;
    images?: IproductImage;
    reviews?: Ireview[];
    quantity?: number;


}

export interface Iuser {
    userName?: string;
    _id?: any;
    email?: string;
    password?: string;
}

export interface Icart {
    email?: string;
    products?: Iproduct[];
    _id?: any;
}
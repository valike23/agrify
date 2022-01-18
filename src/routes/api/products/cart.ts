import { MongoUser } from "../../../external_classes/mongo/mongo";
import type { Icart, Iproduct } from "../../../Model/application";
import { connectionString } from "../../../Model/public";
import { authorization_check } from "../../../Model/serverFunctions";

let mongoUser = new MongoUser({database: 'agrify', url: connectionString});
export async function get(req, res) {
    try {
        if(!authorization_check(req).result) {
            res.json({message: authorization_check(req).summary, status: 401 })
        }
        else {
         let data = await   mongoUser.getFirstMatch('cart',{email: req.session.user.email});
         res.json(data);
        }
    } catch (error) {
        res.json({message: error, status: 503 });
    }
}

export async function post(req, res) {
    try {
        if(!authorization_check(req).result) {
            res.json({message: authorization_check(req).summary, status: 401 })
        }
        else {
            let product: Iproduct = JSON.parse(req.fields.body);
         let data: Icart = await   mongoUser.getFirstMatch('cart',{email: req.session.user.email});
         if(data.email) {
            //check if the record already exist in cart
            let exist = false;
            data.products.forEach((e)=>{
                if(e._id == product._id) exist = true;
            })
           if(exist){
               // if the product already exist in cart
            res.json({message: 'Product already exist in cart', status: 301, data:{}});
           }
           else {
               //add to cart here
                let myRec =  await mongoUser.addToArray('cart', product, data._id, 'products');
            res.json({message: 'Product already exist in cart', status: 301, data:{}});
           }
         }
         else{

         }
         res.json(data);
        }
    } catch (error) {
        res.json({message: error, status: 503 });
    }
}
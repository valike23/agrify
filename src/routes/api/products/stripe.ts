import Stripe from 'stripe';
import { handle_server_error } from '../../../Model/serverFunctions';

const stripe = new Stripe('sk_test_51Kg3K4BfVFkkKkMViszR4u9hXIYLnFzudVGy5mcvp3XG5TdSjCATxID6XP49L2vt1lukLZLQVqFGQSXtiR0epvau00PRJZStDo',{apiVersion: "2020-08-27"});
export function get(req, res) {

}

export async function put(req, res){
  try {
    console.log('req bosy to be printed',req.body);
    let paymentIntent = await stripe.paymentIntents.create({
         amount: 3000,
         currency: "usd",
         automatic_payment_methods: {
             enabled: true,
           },
     });
 
     res.json(paymentIntent);
  } catch (error) {
      handle_server_error(error);
      res.status(503).json(error);
  }
}
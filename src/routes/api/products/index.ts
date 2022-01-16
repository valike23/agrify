
import type { Iproduct } from "../../../Model/application";
import { MongoUser } from '../../../external_classes/mongo/mongo';
import { connectionString } from "../../../Model/public";
import {ObjectId} from 'mongodb';
let mongoUser = new MongoUser({ url: connectionString, database: 'agrify' });

export async function get(req, res) {
    try {
        let data: Iproduct[] = await mongoUser.getAllRecordFromCollection('products');
        res.json(data);
    } catch (error) {

    }

}

export async function put(req, res) {
    console.log(req.query);
    try {
       

        let data = req.query._id;
        
        console.log(data);
        let result = await mongoUser.getFirstMatch('products',{_id: new ObjectId(data)});
        console.log('result',result);
        res.json(result);
    } catch (error) {

    }
}
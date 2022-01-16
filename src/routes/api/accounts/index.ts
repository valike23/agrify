import type { Iuser } from "../../../Model/application";
import {hash} from 'bcrypt';
import { MongoUser } from "../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
const saltRounds = 10;
const mongoUser = new MongoUser({database: 'agrify', url: connectionString});

export async function post(req, res) {
    try {
        console.log(req.fields.body);
        let data: Iuser = JSON.parse(req.fields.body);
        console.log(data);
        data.userName = data.email;
        data.password = await hash(data.password, saltRounds);
        console.log('password', data);

        //data.token = crypto.encrypt(JSON.stringify({ email: data.email, time: Date.now() }))

        let result: any = await mongoUser.addRecordToCollection('users', data);
        mongoUser.uniqueKey('users','email');
        console.log(result);
        res.json(result);


    } catch (error) {
       console.log(error);
       res.status(503).json(error);
    }
}

import type { Iuser } from "../../../Model/application";
import {hash, compare} from 'bcrypt';
import { MongoUser } from "../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
const saltRounds = 10;
const mongoUser = new MongoUser({database: 'agrify', url: connectionString});
let handle_respond = async (result, password) => {
    let myresult = result;
    let data: any = await compare(password, myresult.password);
    console.log('my data: ', data);
    return data;

}
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

export async function put(req, res) {
    try {
        console.log(req.fields.body);
        let data: any = JSON.parse(req.fields.body);
        console.log(data);
        let adminResult: any = await mongoUser.getFirstMatch('users',{"email": data.email});
       console.log(adminResult);
      
        if(adminResult.email) {
            let test = await handle_respond(adminResult, data.password);
            console.log(test, 'type of test is: ', typeof(test));
            if (test) {
                
                //set session
                let user = adminResult;
                delete (user.password);
                req.session.user = adminResult;

                //return response
                res.json({message: 'success', data: req.session});
            }
            else  {
                res.json({message: 'username or password incorrect', data: {}})
            }
        }
        else {
            res.json({message: 'username or password incorrect', data: {}})
        }
        

    } catch (error) {
        console.log(error);
        if (error.statusCode) {
            res.json(error);
        }
        else {
            res.status(503).json(error);
        }
    }
}

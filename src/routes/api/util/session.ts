
export function get(req, res) {
    if(req.session.user) {
        res.json(true);
    }
    else {
        res.json(false)
    }
}

export function put(req, res){
     req.session.user = req.query;
     res.json('ok');
}
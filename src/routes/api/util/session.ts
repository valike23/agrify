
export function get(req, res) {
    if(req.session.user) {
        res.json(true);
    }
    else {
        res.json(false)
    }
}
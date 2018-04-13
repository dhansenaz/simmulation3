module.exports = {

createNewUser: (req,res) => {
const { username, password } = req.body
request.app.get('db').addUser(username, password).then((response => {
    res.status(200).send(response)
        })
    }

}
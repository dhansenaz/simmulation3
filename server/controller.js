module.exports = {

createNewUser: (req,res) => {
    console.log(req.body)
const { username, password } = req.body
req.app.get('db').addUser( username, password ).then(response => {
    res.status(200).send(response)
    
        })
    }

}
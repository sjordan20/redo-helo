const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if (user) {
            return res.status(400).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.create_user({ hash, username })
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)

    },

    login: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]

        if (!user) {
            return res.status(404).send('Username not found')
        }

        const authenticated = bcrypt.compareSync(password, user.password)
        if (authenticated) {
            delete user.password
            session.user = user
            return res.status(200).send(session.user)
        } else {
            return res.status(401).send(`Password Incorrect`)
        }



    }
}
module.exports = {

  searchTitle: async (req, res) => {
    const db = req.app.get('db')
    const { title, author_id } = req.query

    let posts = []
    if (author_id)
      posts = await db.get_post_title([`${title}`, author_id])
    res.status(200).send(posts)

  },

  getPost: async (req, res) => {
    const db = req.app.get('db')
    let { id } = req.params
    // console.log("here")
    // console.log(req.body)

    let posts = await db.get_post()
    if (posts[0]) {
      // console.log("here", posts)
      res.status(200).send(posts)
    } else {
      res.sendStatus(500)
    }

  },

  addPost: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { title, img, content } = req.body

    // console.log(req.body)
    // console.log(req.params)

    db.add_post({ title, img, content, author_id: id })
      .then(() => {
        res.sendStatus(201)
      })
      .catch(() => {
        res.sendStatus(500)
      })
  },

  editPost: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { content } = req.body

    db.edit_post([content, id])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(() => {
        res.sendStatus(500)
      })
  },

  deletePost: (req, res) => {
    const db = req.app.get('db')
    const { post_id } = req.params

    // console.log(req.params)

    db.delete_post([post_id])
      .then(() => {
        res.sendStatus(200)
      })
      .catch(() => {
        res.sendStatus(500)
      })

  }


}
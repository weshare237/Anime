const asyncWrapper = require('../middlewares/async')
const User = require('../models/User')

const createUser = asyncWrapper(async (req, res) => {
  console.log(req.body)

  const user = await User.create(req.body)

  res.status(201).json({ success: true, msg: 'User created successfully' })
})

module.exports = {
  createUser,
}

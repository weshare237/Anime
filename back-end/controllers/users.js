const asyncWrapper = require('../middlewares/async')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createUser = asyncWrapper(async (req, res) => {
  const hashedPwd = await bcrypt.hash(req.body.password, 10)

  const user = await User.create({ ...req.body, password: hashedPwd })

  res.status(201).json({ success: true, msg: 'User created successfully' })
})

const loginUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  console.log('user 1======>>>> ', user)
  const cmp = await bcrypt.compare(password, user.password)
  if (user && cmp) {
    console.log('cmp =====>>>> ', cmp)
    //res.send("Auth Successful");
    console.log('username =====>>>> ', email)
    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      'secret',
      {
        expiresIn: '24h',
      }
    )

    res.status(200).json({
      success: true,
      user: user,
      token: token,
    })
  } else {
    res.status(404).send('not found')
  }
})

module.exports = {
  createUser,
  loginUser,
}

const user_register = async(req, res) => {
  res.status(200).json({
    "Message": "This is user register function"
  });
};

const user_login = (req, res) => {
  res.json({
    Message: "This is user login function"
  });
};

const user_forgot_password = (req, res) => {
  res.send({
    "Message": "This is user forgot password function"
  });
};

module.exports = {
  user_register,
  user_login,
  user_forgot_password 
};
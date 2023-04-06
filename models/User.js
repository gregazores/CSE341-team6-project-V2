const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String
      },
  
      email: {
        type: String
      },
  
      password: {
          type: String
      },
  
      googleId: {
          type: String
      },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Users", UserSchema);
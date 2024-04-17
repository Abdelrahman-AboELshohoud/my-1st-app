import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://tse2.mm.bing.net/th/id/OIP.yYUwl3GDU07Q5J5ttyW9fQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

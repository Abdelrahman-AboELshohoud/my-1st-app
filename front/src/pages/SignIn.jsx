import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        console.log(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-6">SignIn</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg "
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg "
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-600 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-70"
          >
            {loading ? "Loading..." : "SIGN IN"}
          </button>
          <OAuth/>
        </form>
        <div className="flex gap-2 mt-5 ">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
            <span className="text-blue-700">Sign up</span>
          </Link>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </>
  );
}

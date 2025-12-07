import { useState } from "react";
import { MdClose } from "react-icons/md";

const AuthForm = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (currState === "Sign up") {
      console.log("Signing up with:", formData);
    } else {
      console.log("Logging in with:", formData.email, formData.password);
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* ✅ Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <MdClose onClick={() => setShowLogin(false)} className="w-6 h-6 cursor-pointer" />
        </div>

        {/* ✅ Inputs */}
        <div className="flex flex-col gap-3">
          {currState === "Sign up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        {/* ✅ Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>

        {/* ✅ Terms Checkbox (Only for Sign up) */}
        {currState === "Sign up" && (
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use and privacy policy</p>
          </div>
        )}

        {/* ✅ Toggle Text (FIXED LOGIC) */}
        {currState === "Sign up" ? (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-green-600 font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => setCurrState("Sign up")}
              className="text-green-600 font-semibold cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;

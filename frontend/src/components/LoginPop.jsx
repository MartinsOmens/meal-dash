import { useState } from "react";
import { MdClose } from "react-icons/md";

const AuthForm = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  const [animate, setAnimate] = useState(false);
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

  // ✅ Toggle with animation trigger
  const toggleState = (state) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrState(state);
      setAnimate(false);
    }, 200);
  };

  return (
    // ✅ FULLSCREEN CENTERED OVERLAY
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className={`w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md space-y-4
        transition-all duration-300 ease-in-out
        ${animate ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        {/* ✅ Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <MdClose
            onClick={() => setShowLogin(false)}
            className="w-6 h-6 cursor-pointer"
          />
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
          className="w-full bg-green-600 text-white py-2 rounded 
          hover:bg-green-700 transition-all duration-300"
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

        {/* ✅ Toggle Text With Animation */}
        {currState === "Sign up" ? (
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => toggleState("Login")}
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => toggleState("Sign up")}
              className="text-green-600 font-semibold cursor-pointer hover:underline"
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

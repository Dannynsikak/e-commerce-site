import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Ensure you have your Firebase config here
import { RootState } from "../../redux/store";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../../redux/constants/authConstants";

const RegisterUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { email: user.email, uid: user.uid },
      });
    } catch (error: any) {
      console.error("Firebase Register Error:", error.message);
      dispatch({ type: REGISTER_FAILURE, error: error.message });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {user && (
          <p className="text-green-500 mt-4">Registered as {user.email}</p>
        )}
      </form>
    </div>
  );
};

export default RegisterUser;

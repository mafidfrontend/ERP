import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const demoPassword = "demo123"; // Demo parol

  const handleLogin = () => {
    if (password === demoPassword) {
      localStorage.setItem("authenticated", "true");
      navigate("/");
    } else {
      toast.error("Parol noto‘g‘ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded mb-4"
          placeholder="Parol kiriting"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

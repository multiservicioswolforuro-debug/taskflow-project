import React, { useState } from "react";
import API from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await API.post("/auth/register", { name, email, password });
    alert("Usuario Creado");
  };

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Register;

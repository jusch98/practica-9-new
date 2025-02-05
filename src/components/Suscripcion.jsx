import { useState, useEffect } from "react";

const Suscripcion = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", curso: "" });
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(storedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = [...usuarios, formData];
    setUsuarios(updatedUsers);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
    setFormData({ nombre: "", email: "", curso: "" });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Suscripción a Cursos</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          placeholder="Curso de interés"
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default Suscripcion;


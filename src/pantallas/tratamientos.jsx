import React, { useState } from "react";
import Navbar from "../componentes/Navbar";
import img1 from "../img/Cliolipolisis.webp";
import img2 from "../img/Radiofrecuencia.webp";
import img3 from "../img/equipo_laser.webp";
import "../tratamientos.css"; // tu CSS

export default function Agenda() {
  const [selected, setSelected] = useState(null);

  const equipos = [
    {
      id: 1,
      nombre: "Criolipólisis",
      img: img1,
      valor: "$15.000 por sesión",
      packs: "Pack 4 sesiones: $50.000",
      descripcion:
        "Tratamiento para eliminar grasa localizada mediante frío controlado.",
    },
    {
      id: 2,
      nombre: "Radiofrecuencia",
      img: img2,
      valor: "$12.000 por sesión",
      packs: "Pack 6 sesiones: $60.000",
      descripcion:
        "Mejora la flacidez y estimula el colágeno mediante energía térmica.",
    },
    {
      id: 3,
      nombre: "Equipo Laser",
      img: img3,
      valor: "$20.000 por sesión",
      packs: "Pack 5 sesiones: $80.000",
      descripcion:
        "Tecnología láser para reafirmar, tonificar y reducir adiposidad.",
    },
  ];

  return (
    <div className="agenda-container">
      <Navbar />

      <div className="galeria">
        {equipos.map((e) => (
          <div
            key={e.id}
            className="item"
            onClick={() => setSelected(e.id)}
          >
            <img src={e.img} alt={e.nombre} className="cuadrado" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="info-panel">
          <h2>{equipos.find((e) => e.id === selected).nombre}</h2>
          <p>
            <strong>Valor:</strong>{" "}
            {equipos.find((e) => e.id === selected).valor}
          </p>
          <p>
            <strong>Packs:</strong>{" "}
            {equipos.find((e) => e.id === selected).packs}
          </p>
          <p>{equipos.find((e) => e.id === selected).descripcion}</p>
        </div>
      )}
    </div>
  );
}
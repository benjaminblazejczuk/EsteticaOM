import React, { useState, useEffect } from "react";
import "../agenda.css";
import Navbar from "../componentes/Navbar";

export default function Agenda() {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turnos, setTurnos] = useState({});

  // 📦 Cargar turnos guardados y limpiar los del mes pasado
  useEffect(() => {
    const data = localStorage.getItem("turnos");
    if (data) {
      const turnosGuardados = JSON.parse(data);
      const hoy = new Date();
      const mesActual = hoy.getMonth();
      const anioActual = hoy.getFullYear();

      // Filtrar turnos del mes actual o futuro
      const turnosActualizados = Object.entries(turnosGuardados).reduce(
        (acc, [fecha, horas]) => {
          const f = new Date(fecha);
          if (
            f.getFullYear() > anioActual ||
            (f.getFullYear() === anioActual && f.getMonth() >= mesActual)
          ) {
            acc[fecha] = horas;
          }
          return acc;
        },
        {}
      );

      setTurnos(turnosActualizados);
      localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
    }
  }, []);

  // 📆 Fecha mínima (hoy)
  const fechaMinima = new Date().toISOString().split("T")[0];

  // 🕗 Lista de horarios (8:00 a 20:00)
  const horasDisponibles = Array.from({ length: 13 }, (_, i) => `${8 + i}:00`);

  // 🩷 Guardar turno
  const guardarTurno = (e) => {
    e.preventDefault();

    if (!fecha || !hora) {
      alert("Por favor seleccioná una fecha y hora.");
      return;
    }

    // Validar superposición (1 hora exacta)
    const ocupados = turnos[fecha] || [];
    if (ocupados.includes(hora)) {
      alert("Ese horario ya está ocupado. Elegí otro horario.");
      return;
    }

    const nuevosTurnos = {
      ...turnos,
      [fecha]: [...ocupados, hora],
    };

    setTurnos(nuevosTurnos);
    localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));

    alert(`Turno agendado para el ${fecha} a las ${hora} hs`);
    setHora("");
  };

  // 🗑️ Borrar turno
  const borrarTurno = (fecha, hora) => {
    const nuevosTurnos = {
      ...turnos,
      [fecha]: turnos[fecha].filter((h) => h !== hora),
    };

    if (nuevosTurnos[fecha].length === 0) delete nuevosTurnos[fecha];

    setTurnos(nuevosTurnos);
    localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));
  };

  return (
    <>
      <Navbar />

      <div className="agenda-container">
        <h2>🩷 Agenda de Turnos</h2>

        <form onSubmit={guardarTurno} className="form-box">
          <label>📅 Fecha:</label>
          <input
            type="date"
            min={fechaMinima}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <label>⏰ Hora:</label>
          <select
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          >
            <option value="">Seleccionar hora</option>
            {horasDisponibles.map((h, i) => (
              <option key={i} value={h}>
                {h} hs
              </option>
            ))}
          </select>

          <input
            type="submit"
            value="Guardar turno"
            className="boton-principal"
          />
        </form>

        <div className="turnos-guardados">
          <h3>🗓️ Turnos Agendados</h3>
          {Object.keys(turnos).length === 0 ? (
            <p>No hay turnos agendados todavía.</p>
          ) : (
            Object.entries(turnos).map(([fecha, horas]) => (
              <div key={fecha} className="dia-turnos">
                <h4>{new Date(fecha).toLocaleDateString("es-AR")}</h4>
                <ul>
                  {horas
                    .sort((a, b) => parseInt(a) - parseInt(b))
                    .map((h, index) => (
                      <li key={index} className="hora-item">
                        {h} hs
                        <button
                          className="borrar-btn"
                          onClick={() => borrarTurno(fecha, h)}
                        >
                          ❌
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

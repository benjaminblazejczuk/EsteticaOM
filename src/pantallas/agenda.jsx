import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../componentes/input"
import Reset from "../componentes/reset"
import Submit from "../componentes/submit"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Agenda() {
  return (
    <div className="agenda-container">
      {/* Header */}
      <div className="agenda-header">
        <h1>AGENDA</h1>
      </div>

      {/* Nav */}
      <div className="agenda-nav">
        <button>Inicio</button>
        <button>Tratamientos</button>
        <button>Info Personal</button>
        <button>Inicio de sesión</button>
        <button>Registro</button>
      </div>

      {/* Table */}
      <div className="agenda-table-container">
        <table className="agenda-table">
          <thead>
            <tr>
              <th>horarios</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
          </thead>
          <tbody>
            {Array(3)
              .fill(null)
              .map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array(8)
                    .fill("1")
                    .map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

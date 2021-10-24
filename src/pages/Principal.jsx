import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listaProductos } from "../actions/actionProductos";
import { Table } from "react-bootstrap";

export const Principal = () => {
  const { productos } = useSelector((store) => store.productos);
  const dispatch = useDispatch();
  //dispatch(listaProductos())
  const [repos, setRepos] = useState([]);

  const getRepositories = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    console.log(data);
    setRepos(data);
  };

  const usuarios = [];

  productos.forEach((user) => {
    usuarios.push(user.nombre);
  });

  const [pintarUsuario, setPintarUsuario] = useState(false);
  const [pintar, setPintar] = useState({
    nombre: "",
    cedula: "",
    fecha: "",
    correo: "",
    github: "",
  });

  const handleUser = (e) => {
    e.preventDefault();
    const selectUser = document.querySelector("#usuarios").value;
    // alert(selectUser)
    productos.forEach((element) => {
      if (element.nombre === selectUser) {
        const { nombre, cedula, fecha, correo, github } = element;
        setPintar({
          nombre: nombre,
          cedula: cedula,
          fecha: fecha,
          correo: correo,
          github: github,
        });
        setPintarUsuario(true);
        getRepositories(github);

      }
    });
  };

  return (
    <div>
      <div className="contenedor-select">
        <select name="usuarios" id="usuarios" className="lista-usuarios">
          <option value="none">Selecciona un usuario ↓</option>
          {usuarios.length ? (
            usuarios.map((user, i) => (
              <option key={i} value={user}>
                {user}
              </option>
            ))
          ) : (
            <p>No hay candidatos</p>
          )}
        </select>
        <button className="btn-usuarios" onClick={(e) => handleUser(e)}>
          Consultar Usuario
        </button>
      </div>

      {pintarUsuario ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Nombre: <span>{pintar.nombre}</span>
                </h5>
                <p className="card-text">
                 <b>CC:</b> <span>{pintar.cedula}</span>
                </p>
                <p className="card-text">
                 <b>Correo:</b> <span>{pintar.correo}</span>
                </p>
                <p className="card-text">
                 <b>Github:</b> <span>{pintar.github}</span>
                </p>
                <p className="card-text">
                 <b>Fecha:</b> <small className="text-muted">{pintar.fecha}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Datos no disponibles</p>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del repositorio </th>
            <th> Descripcion </th>
            <th> Branch por defecto </th>
            <th> Lenguaje </th>
            <th> Url del repositorio </th>
          </tr>
        </thead>
        <tbody>
          {repos ? (
            repos.map((element, index) => (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{element.default_branch}</td>
                <td>{element.language}</td>
                <td><a href={element.html_url} rel="noopener">Ver repositorio</a></td>
              </tr>
            ))
          ) : (
            <p>Datos no disponibles</p>
          )}
        </tbody>
      </Table>
    </div>
  );
};

import React, { useState } from "react";
import Card from "./Card";
import Error from "./Error";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "",
    color: "",
  });
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  //Crear un estado para manejar el renderizado del mensaje de error
  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
    setFlag(false);
    setError(false);
  };
  const handleColor = (e) => {
    setCustomer({ ...customer, color: e.target.value });
    setFlag(false);
    setError(false);
  };
  const nameRegex = /^[A-ZÑa-zñ]{3,}$/;
  const colorHexRegex = /^#[0-9A-Fa-f]{6}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValidation = nameRegex.test(customer.name);
    const colorValidation = colorHexRegex.test(customer.color);
    setFlag(nameValidation && colorValidation);
    setError(!nameValidation || !colorValidation);
  };

  return (
    <div class="container mt-3">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <input type="text" class="form-control" value={customer.name} onChange={handleName} placeholder="Ingresa tu nombre"/>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" value={customer.color} onChange={handleColor} placeholder="Ingresa tu color favorito (formato HEX)"/>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary form-control">Enviar</button>
      </div>
      </form>
      {flag ? <Card name={customer.name} color={customer.color} /> : null}
      {error ? <Error/> : null}
    </div>
  );
};

export default App;

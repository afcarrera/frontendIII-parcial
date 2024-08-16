//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({ name, color }) => {
  return (
    <div class="container mt-3">
      <h2>Hola {name}!</h2>
      <h2>Sabemos que tu color favorito es:</h2>
      <button class="btn btn-primary form-control" style={{ backgroundColor: color }}>
        {color}
      </button>
    </div>
  );
};

export default Card;

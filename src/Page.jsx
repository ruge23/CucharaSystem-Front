import React, { Component } from 'react';

const styles = {
  fontWeight: 'bold',
  fontFamily: '"Arial", sans-serif',
  fontSize: 12
};

class Page extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data ?
          data.map((dato) => (
            <div key={dato.edad}>
              <p style={styles}> Nombre: {dato.nombre} </p>
              <p> Apellido: {dato.apellido} </p>
              <p> Edad: {dato.edad} </p>
              <p> Sexo: {dato.sexo} </p>
            </div>
          ))
        :
          <div> Nada que mostrar </div>
        }
      </div>
    );
  }
}

export default Page;

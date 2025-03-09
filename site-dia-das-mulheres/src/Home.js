import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">O que é o Dia Internacional das Mulheres?</h1>

      <img 
        src="/mulheres.JPG" 
        alt="Mulheres" 
        style={{ width: '800px', height: '500px' }} 
      />

      <div className="text-container">
        <p style={{ color: 'black' }}>
          O Dia Internacional da Mulher, comemorado em 8 de março, é uma data significativa que reconhece e celebra as
          inúmeras conquistas das mulheres em diferentes áreas, como a política, a economia e a sociedade. Ao longo da
          história, as mulheres desempenharam papéis cruciais na transformação de suas comunidades, mas frequentemente
          enfrentaram desigualdades e desafios significativos para ter suas vozes ouvidas e seus direitos reconhecidos.
        </p>
        
        <p style={{ color: 'black' }}>
          Esta data também serve como um lembrete das lutas contínuas por igualdade de direitos, liberdade e justiça para as
          mulheres em todo o mundo. Embora muitas conquistas já tenham sido alcançadas, ainda existem barreiras relacionadas
          à discriminação de gênero, violência doméstica, desigualdade salarial e o sub-representação em diversas áreas,
          como política e negócios.
        </p>
        
        <p style={{ color: 'black' }}>
          O Dia Internacional da Mulher também inspira ações globais, como campanhas e movimentos, que buscam educar e
          conscientizar sobre a importância de tratar todos, independentemente do sexo, com respeito e dignidade. É um
          momento para refletirmos sobre os progressos que ainda precisam ser feitos para alcançar uma sociedade mais justa
          e igualitária para as mulheres.
        </p>
      </div>
    </div>
  );
}

export default App;

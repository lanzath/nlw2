import React from 'react';
import './styles.css';
import whatsApp from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/39680004?s=460&u=0c0824f5c818b262b90b2677c110b0462151c2fd&v=4"
          alt="Thiago Lanza"
        />
        <div>
          <strong>Thiago Lanza</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta pelo universo Dev em busca de constante evolução
        <br />
        <br />
        Apaixonado por sofrer com códigos que não entende e colocar na prática aquele que entende, amante de javascript, typescript, php, laravel e node.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsApp} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
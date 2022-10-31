import React from "react";
import "./form.css";
import img1 from "../../assets/img1.jpeg";

export default function Form() {
  return (
    <div class="container-form">
      <div class="form-image">
        <img src={img1} alt="" />
      </div>
      <div class="form">
        <form action="#">
          <div class="form-header">
            <div class="title">
              <h1>Nos conte um pouco sobre você</h1>
            </div>
          </div>

          <div class="input-group">
            <div class="input-box">
              <label for="firstname">Primeiro Nome</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Digite seu primeiro nome"
                required
              />
            </div>

            <div class="input-box">
              <label for="lastname">Sobrenome</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>
            <div class="input-box">
              <label for="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div class="input-box">
              <label for="number">Celular</label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="(xx) xxxx-xxxx"
                required
              />
            </div>

            <div class="input-box">
              <label for="date">Aniversário</label>
              <input id="date" type="date" name="date" required />
            </div>
          </div>

          <div class="gender-inputs">
            <div class="gender-title">
              <h6>Gênero</h6>
            </div>

            <div class="gender-group">
              <div class="gender-input">
                <input id="female" type="radio" name="gender" />
                <label for="female">Feminino</label>
              </div>

              <div class="gender-input">
                <input id="male" type="radio" name="gender" />
                <label for="male">Masculino</label>
              </div>

              <div class="gender-input">
                <input id="others" type="radio" name="gender" />
                <label for="others">Outros</label>
              </div>

              <div class="gender-input">
                <input id="none" type="radio" name="gender" />
                <label for="none">Prefiro não dizer</label>
              </div>
            </div>
          </div>

          <div class="continue-button">
            <button>
              <a href="./form.jsx">Continuar</a>
            </button>
          </div><div class="container">
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Só mais algumas perguntas para sabermos qual o pet ideal para você?</h1>
                    </div>

                </div>

                <div class="input-group">
                    
      <div>
        <label class="form-label">Já tem algum bichinho de estimação no momento?</label>
        <label class="m-3">
          <input type="radio" name="pet" value="yes" checked />Sim
        </label>
        <label>
          <input type="radio" name="pet" value="no" />Não
        </label>
      </div>

      <div>
        <label class="form-label">Mora em casa ou apartamento?</label>
        <label class="m-3">
          <input type="radio" name="house" value="house" checked />Casa
        </label>
        <label>
          <input type="radio" name="house" value="ap" />Apartamento
        </label>
      </div>
      <div>

      <div>
        <label class="form-label">Tem quintal ou varanda?</label>
        <label class="m-3">
          <input type="radio" name="yard" value="yard" checked />Quintal
        </label>
        <label class="m-3">
          <input type="radio" name="yard" value="balcony" />Varanda
        </label>
        <label>
          <input type="radio" name="yard" value="none" />Nenhum
        </label>
      </div>

        
                    </div>
                </div>

                <div class="continue-button">
                    <button><a href="#">ENVIAR</a> </button>
                </div>
            </form>
        </div>
    </div>
        </form>

      </div>
    </div>
  );
}

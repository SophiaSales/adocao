import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <div class="cont">
      <div class="title">Cadastro</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Nome Completo</span>
              <input type="text" placeholder="Escreva seu nome" required />
            </div>
            <div class="input-box">
              <span class="details">CPF</span>
              <input type="text" placeholder="Escreva seu CPF" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Escreva seu email" required />
            </div>
            <div class="input-box">
              <span class="details">Número de Telefone</span>
              <input type="text" placeholder="Escreva seu número" required />
            </div>
            <div class="input-box">
              <span class="details">Endereço</span>
              <input type="text" placeholder="Digite seu endereço" />
            </div>
            <div class="input-box">
              <span class="details">Aniversário</span>
              <input type="date" />
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gênero</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Masculino</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Feminino</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefiro não dizer</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

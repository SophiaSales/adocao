import React from "react";
import "./about.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div class="container py-4">
      <div class="container-about" id="aboutID">
        <div class="container-fluid py-5">
          <h1 class="title-about">Sobre nós</h1>
          <p class="p-about">
            A AdoCÃO é uma ONG focada em resgatar, reabilitar e re-socializar
            animais em situações de maus tratos, ajudando-os a encontrar um lar
            e sua família ideal junto com o projeto Match Your Pet.
          </p>
          <p class="p-about">
            O objetivo da ONG é garantir que o bichinho vá para um lar
            estruturado e não esteja mais em uma situação de perigo, além de se
            sentir amado e seguro. Isso recebe o nome de adoção responsável de
            animais.
          </p>
          <p class="p-about">
            Quer adotar um amiguinho? Agora com o projeto Match Your Pet você
            pode encontrar seu cãopanheiro perfeito, preencha nosso formulário.
          </p>

          <button
            class="button-about"
            type="button"
            onclick="location.href='index.jsx'"
          >
          <Link to="/form" style={{color:"#fff", textDecoration: "none"}}>Formulário</Link>
          </button>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
        <div class="container-about">
            <h2 class="title-about2">Missão</h2>
            <p class="p-about">
              Resgatamos animais em situações precárias, realizamos os
              tratammentos e cuidados necessários para a reabilitação do pet,
              incluindo vacinações, vermífugos e todos os cuidados básicos que o
              animalzinho necessite no momento.
            </p>
          </div>
        </div>
        <div class="col-md-6">
        <div class="container-about">
            <h2 class="title-about2">Visão</h2>
            <p class="p-about">
              Ser uma ONG referência quando se trata de proteção e cuidado
              animal, ampliando o número de atendimento às demandas. Partindo
              sempre dos nossos princípios: Garra, determinação, integridade,
              comprometimento, respeito, ética e transparência.
            </p>
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

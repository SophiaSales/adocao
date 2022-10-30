import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div class="container py-4">
    <div class="p-5 mb-4 bg-light rounded-3" id="aboutID">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Sobre nós</h1>
        <p class="col-md-10 fs-5">A AdoCÃO é uma ONG focada em resgatar, reabilitar e re-socializar animais em situações de maus tratos, ajudando-os a encontrar um lar e sua família ideal junto com o projeto Match Your Pet.</p>
        <p>O objetivo da ONG é garantir que o bichinho vá para um lar estruturado e não esteja mais em uma situação de perigo, além de se sentir amado e seguro. Isso recebe o nome de adoção responsável de animais.
        </p>
        <p>Quer adotar um amiguinho? Agora com o projeto Match Your Pet você pode encontrar seu cãopanheiro perfeito, preencha nosso formulário.</p>
        
        <button class="button.btn" type="button" onclick="location.href='form.html'">Formulário</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Missão</h2>
          <p>Resgatamos animais em situações precárias, realizamos os tratammentos e cuidados necessários para a reabilitação do pet, incluindo vacinações, vermífugos e todos os cuidados básicos que o animalzinho necessite no momento.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Visão</h2>
          <p>Ser uma ONG referência quando se trata de proteção e cuidado animal, ampliando o número de atendimento às demandas. Partindo sempre dos nossos princípios: Garra, determinação, integridade, comprometimento, respeito, ética e transparência.</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

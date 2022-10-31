import React from "react";
import "./home.css";
import banner from "./images/banner.png";

export default function Home() {
  return (
    <div>
      <img
        src={banner}
        alt="banner"
        class="w-100"
        style={{ marginTop: "40px" }}
      ></img>
      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="dog"
              alt="dog"
              src="https://i.pinimg.com/originals/60/03/f9/6003f9c2376858f23b961ba6cbe273f2.gif"
            ></img>
            <br></br>
            <a class="title">Venha encontrar seu pet</a>
            <p>
              Na nossa plataforma, você poderá ter acesso ao nosso formulário
              para a adoção dos pets e também, encontrará fotos no nosso
              catálogo do seu futuro amiguinho!
            </p>
          </div>

          <div class="col-lg-4">
            <img
              class="doguinho"
              alt="dog"
              src="https://i.gifer.com/origin/a9/a9439d4b0c2b746be3b9b5dd651af77f.gif"
            ></img>
            <br></br>
            <a class="title"> Questionário de adoção</a>
            <p>
              Caso tenha interesse em oferecer um lar para um de nossos
              amiguinhos, por favor preencha nosso formulário para te conhecer
              melhor.
            </p>
          </div>

          <div class="col-lg-4">
            <img
              class="dog"
              alt="dog"
              src="https://thumbs.gfycat.com/SafeKlutzyCaiman-max-1mb.gif"
            ></img>
            <br></br>
            <a class="title"> Sobre nós</a>
            <p>
              Somos uma ONG focados em ajudar os bichinhos que estão sem lar,
              temos o objetivo de que todos os pets encontrem uma família e todo
              o apoio que merecem.
            </p>
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              {" "}
              Feira de Adoção!
              <span class="orange-title"> Fique de olho nas nossas datas!</span>
            </h2>
            <p class="lead text-justify">
              Costumamos abrir nossa feira de adoção aos finais de semanas e
              feriados. O horário é das 11h da manhã, até as 14h da tarde
            </p>
          </div>

          <div class="col-md-5">
            <img
              class="featurette-image img-fluid mx-auto"
              alt="Generic placeholder image"
              width="500"
              height="500"
              src="https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2021/03/feiras-de-adocao-em-marco-6.jpg&nocache=1"
            ></img>
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette" id="bottom">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Antes de adotar seu pet,{" "}
              <span class="orange-title">siga os cuidados corretos!</span>
            </h2>
            <p class="lead text-justify">
              Ao adotar um pet você se torna completamente responsável pela vida
              dele, lembrando que os animais não são objetos para ficarem
              passando de um lugar para o outro, ou até mesmo serem esquecidos e
              abandonados. Adote com consciência e responsabilidade.
            </p>
          </div>

          <div class="col-md-5 order-md-1">
            <img
              class="featurette-image img-fluid mx-auto"
              alt="Generic placeholder image"
              width="500"
              height="600"
              src="https://www.maxtotalalimentos.com.br/img/seo/9/426/adotar-cachorro-rua-quais-os-cuidados.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

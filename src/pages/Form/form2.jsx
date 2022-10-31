import React from "react";
import "./styles.css";
import img1 from "./images/imagem1.jpeg";
import Footer from "../../components/Footer";

export default function Form() {
  return (
    <div>
      <div class="container">
        <div class="form-image">
<img src={img1} alt="" />
        </div>
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
    <Footer />
    </div>
  );
}
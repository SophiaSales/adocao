import React from "react";

const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">
                <div class="footer-left">

                    <h3>Match your <span>Pet</span></h3>

                    <p class="footer-company-name">Match your Pet © 2022</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Rua Doutor Sales de Oliveira, 1661</span> Campinas - SP</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+55(19) 3886-7654 </p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="AdoteComAdoCAO@gmail.com">matchyourpet@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>Sobre a Instituição</span>
                        O Match your Pet foi criada em 2022 com o objetivo de unir animais de rua que precisam de um lar e um humano
                        que precisa de companhia. Atualmente são mais de 500 animais que conseguiram um lar e 300 que ainda
                        estão esperando por alguém a quem vão amar toda sua vida.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
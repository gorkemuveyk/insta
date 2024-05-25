import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <body>
      <div id="content-container">
        <section class="phones">
          <img src="/phones.png" alt="pictures on phone" class="phone-image" />
          <div class="display-phone">
            <img class="picture" src="/photo-1.png" alt="#" />
            <img class="picture" src="/photo-2.png" alt="#" />
            <img class="picture" src="/photo-3.png" alt="#" />
            <img class="picture" src="/photo-4.png" alt="#" />
            <img class="picture" src="/photo-5.png" alt="#" />
          </div>
        </section>

        <section class="user">
          <div class="login-container">
            <div class="instagram-logo-box">
              <img class="instagram-logo" src="/instagram-logo.png" />
            </div>

            <form id="login-post" method="POST">
              <div class="inputs-container">
                <input
                  type="text"
                  name="username"
                  placeholder="Telefon numarası veya e-posta"
                />
              </div>
              <div class="inputs-container">
                <input type="password" name="password" placeholder="Şifre" />
              </div>
              <a class="login-button" href="#" target="_blank">
                Giriş Yap
              </a>

              <div class="or-container">
                <div class="line"></div>
                <div class="or">YA DA</div>
                <div class="line"></div>
              </div>

              <div class="facebook-container">
                <a class="facebook-login" href="#" target="_blank">
                  <img class="facebook-logo" src="/facebook-logo.png" />
                  Facebook ile Giriş Yap
                </a>
              </div>
            </form>

            <a class="password-forgot" href="#" target="_blank">
              Şifreni mi unuttun?
            </a>
          </div>

          <div class="signup-container">
            <p>
              Hesabın yok mu?{" "}
              <a class="signup" href="#" target="_blank">
                Hesap oluştur
              </a>
            </p>
          </div>

          <div class="get-container">
            <p>Uygulamayı indir.</p>
            <div class="download-container">
              <a class="download-appstore" href="#" target="_blank">
                <img class="appstore" src="/applestore-logo.png" />
              </a>
              <a class="download-googleplay" href="#" target="_blank">
                <img class="googleplay" src="/googleplay-logo.png" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer class="page-footer">
        <div class="links-container">
          <ul class="links-list">
            <li>
              <a class="link" href="#" target="_blank">
                Meta
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Hakkında
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                İş Fırsatları
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Yardım
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Gizlilik
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                API
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Koşullar
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Konumlar
              </a>
            </li>
            <li>
              <a class="link" href="#" target="_blank">
                Threads
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-span-container">
          <span class="footer-span">© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </body>
  );
}

export default App;

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
              <a class="login-button" href="#">
                Giriş Yap
              </a>

              <div class="or-container">
                <div class="line"></div>
                <div class="or">YA DA</div>
                <div class="line"></div>
              </div>

              <div class="facebook-container">
                <a class="facebook-login" href="#">
                  <img class="facebook-logo" src="/facebook-logo.png" />
                  Facebook ile Giriş Yap
                </a>
              </div>
            </form>

            <a
              class="password-forgot"
              href="https://www.instagram.com/accounts/password/reset/"
            >
              Şifreni mi unuttun?
            </a>
          </div>

          <div class="signup-container">
            <p>
              Hesabın yok mu?{" "}
              <a
                class="signup"
                href="https://www.instagram.com/accounts/emailsignup/"
              >
                Hesap oluştur
              </a>
            </p>
          </div>

          <div class="get-container">
            <p>Uygulamayı indir.</p>
            <div class="download-container">
              <a
                class="download-appstore"
                href="https://apps.apple.com/tr/app/instagram/id389801252"
              >
                <img class="appstore" src="/applestore-logo.png" />
              </a>
              <a
                class="download-googleplay"
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
              >
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
              <a class="link" href="https://about.meta.com/">
                Meta
              </a>
            </li>
            <li>
              <a class="link" href="https://about.instagram.com/">
                Hakkında
              </a>
            </li>
            <li>
              <a class="link" href="https://about.instagram.com/blog">
                Blog
              </a>
            </li>
            <li>
              <a class="link" href="#">
                İş Fırsatları
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://about.instagram.com/about-us/careers"
              >
                Yardım
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
              >
                Gizlilik
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://developers.facebook.com/docs/instagram"
              >
                API
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://help.instagram.com/581066165581870/"
              >
                Koşullar
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://www.instagram.com/explore/locations/"
              >
                Konumlar
              </a>
            </li>
            <li>
              <a class="link" href="https://www.threads.net/login/">
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

import React, { useMemo, useEffect, useState, Fragment } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import "./assets/css/styles.css";
import "./assets/scss/styles.scss";

import { RiWhatsappLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";

import img1 from "./assets/img/project1.jpg";
import img2 from "./assets/img/project2.jpg";
import LogoB1 from "../../../Images/logo.png";
import img3 from "./assets/img/project3.jpg";
import img4 from "./assets/img/project4.jpg";
import img5 from "./assets/img/project5.jpg";

const ProfilePage = ({ displayPage }) => {
  const theme = useTheme();

  return (
    <>
      <body>
        <header class="profile container">
          <i class="ri-moon-line change-theme" id="theme-button"></i>

          <div class="profile__container grid">
            <div class="profile__data">
              <div class="profile__border">
                <div class="profile__perfil">
                  <img className="logoInProfile" src={LogoB1} alt="" />
                </div>
              </div>

              <h2 class="profile__name">كيكوو</h2>
              <h3 class="profile__profession">شركة تكنلوجيا</h3>
            </div>

            <div class="profile__info grid">
              <div class="profile__info-group">
                <h3 class="profile__info-number">7</h3>
                <p class="profile__info-description">
                  <strong>سنوات عمل</strong>
                </p>
              </div>
              <div class="profile__info-group">
                <h3 class="profile__info-number">70</h3>
                <p class="profile__info-description">
                  <strong>مشتركًا</strong>
                </p>
              </div>
              <div class="profile__info-group">
                <h3 class="profile__info-number">96</h3>
                <p class="profile__info-description">
                  <strong>تسجيلات الإعجاب</strong>
                </p>
              </div>
            </div>

            <div class="profile__buttons">
              <a class="button" href="https://www.kekoo.site" target="_blank">
                الموقع <i class="ri-download-line"></i>
              </a>

              <div class="profile__buttons-small">
                <a
                  href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                  target="_blank"
                  class="button button__small button__gray"
                >
                  <RiWhatsappLine></RiWhatsappLine>
                </a>
                <a
                  href="https://m.me/bedimcode"
                  target="_blank"
                  class="button button__small button__gray"
                >
                  <RiMessengerLine></RiMessengerLine>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main class="main">
          <section class="filters container">
            <ul class="filters__content">
              <button
                class="filters__button filter-tab-active"
                data-target="#projects"
              >
                الصفحة الرئيسية
              </button>
              <button class="filters__button" data-target="#skills">
                لمحة
              </button>
            </ul>

            <div class="filters__sections">
              <div
                class="projects__content grid filters__active"
                data-content
                id="projects"
              >
                <article class="projects__card">
                  <img src={img1} alt="" class="projects__img" />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Web</span>
                      <h3 class="projects__title">Payment Site</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article class="projects__card">
                  <img src={img2} alt="" class="projects__img" />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Web</span>
                      <h3 class="projects__title">Portfolio website</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article class="projects__card">
                  <img src={img3} alt="" class="projects__img" />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Movil</span>
                      <h3 class="projects__title">Fast food app</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article class="projects__card">
                  <img src={img4} alt="" class="projects__img" />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Movil</span>
                      <h3 class="projects__title">Travel app</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article class="projects__card">
                  <img src={img5} alt="" class="projects__img" />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Design</span>
                      <h3 class="projects__title">Music app design</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default ProfilePage;

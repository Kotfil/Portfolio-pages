import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./work/Projects";
import {Slogan} from "./offers/Slogan";
import {Contacts} from "./contacts/Contacts";
import './App.css'
import Footer from "./footer/Footer";

export const App = () => {
  return (
    <div className="App">
    <Header />
    <Main  />
    <Skills  />
    <Projects />
    <Slogan />
    <Contacts />
    <Footer />
    </div>
  );
}


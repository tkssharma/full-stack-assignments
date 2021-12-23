import React from "react";
import ReactDOM from "react-dom";
import './app.css';
import  { QuizProvider } from './context/quiz-score.context';
import MainPage from "./main-page";

ReactDOM.render(
  <main className="h-screen bg-lightBlue">
    <QuizProvider>
      <MainPage/>
    </QuizProvider>
  </main>,
  document.getElementById("root")
);

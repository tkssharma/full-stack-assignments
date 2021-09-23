import React from "react";

function Slides({ slides, next, previous, restart, currentSlide }) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
         disabled={currentSlide === 0}
          onClick={restart}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button disabled={currentSlide === 0}  onClick={previous} data-testid="button-prev" className="small">
          Prev
        </button>
        <button disabled={currentSlide === slides.length} onClick={next} data-testid="button-next" className="small">
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">
          {slides[currentSlide] && slides[currentSlide].title}
        </h1>
        <p data-testid="text">
          {slides[currentSlide] && slides[currentSlide].text}
        </p>
      </div>
    </div>
  );
}

export default Slides;

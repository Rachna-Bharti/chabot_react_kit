import React, { useState } from "react";
import FlashCard from "./FlashCard";
import "./Quiz.css";


const Quiz = (props) => {
  const { questions ,isBeatScoreQuiz } = props;
  const [info, setInfo] = useState("");

  const handleButtonClick = (color) => {
    switch (color) {
      case "red":
        setInfo("The color red represents unfavorable status, indicating potential health risks.");
        break;
      case "amber":
        setInfo("The color amber represents moderate or cautionary status, suggesting a need for attention.");
        break;
      case "green":
        setInfo("The color green represents a favorable status, indicating good health.");
        break;
      default:
        setInfo("");
    }
  };

  if (questions.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <div>
    
      {questions.map((question) => (
        <FlashCard
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
        {isBeatScoreQuiz &&  <div className="button-container">
      <button 
  onClick={() => handleButtonClick("red")}
  className="button button-red"
>
  Red
</button>
<button 
  onClick={() => handleButtonClick("amber")}
  className="button button-amber"
>
  Amber
</button>
<button 
  onClick={() => handleButtonClick("green")}
 
  className="button button-green"
>
  Green
</button>
        </div>  }
      <p>{info}</p>
    </div>
  );
};

export default Quiz;

import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "development projects",
      handler: props.actionProvider.heartPrintQuiz,
      id: 1,
      color: "#FFB3B3", // Pastel pink
      borderColor: "#E57373", // Darker pink
    },
    {
      text: "emojify- machine learning project",
      handler: props.actionProvider.SectorialQuiz,
      id: 2,
      color: "#B3E0FF", // Pastel blue
      borderColor: "#90CAF9", // Darker blue
    },
    {
      text: "pippo-voice assistant",
      handler: props.actionProvider.AssessmentQuiz,
      id: 3,
      color: "#B3FFB3", // Pastel green
      borderColor: "#81C784", // Darker green
    },
   
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="option-button"
      style={{
        backgroundColor: option.color,
        borderColor: option.borderColor,
      }}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;

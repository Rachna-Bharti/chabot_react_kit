import React from "react";

import "./SubOptions.css";

const SubOptions = (props) => {
  const options = [
    {
      text: "social media website-django",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
      color: "#FFB3B3", // Pastel pink
      borderColor: "#E57373", // Darker pink
    },
    {
      text: "chatbot-react",
      handler: props.actionProvider.handleBeatScoreQuiz,
      id: 2,
      color: "#B3E0FF", // Pastel blue
      borderColor: "#90CAF9", // Darker blue
    },
    {
      text: "wordedit-react",
      handler: props.actionProvider.handleTrendsQuiz,
      id: 3,
      color: "#B3FFB3", // Pastel green
      borderColor: "#81C784", // Darker green
    },
    {
      text: "others",
      handler: props.actionProvider.EHIQuiz,
      id: 4,
      color: "#FFEBB3", // Pastel yellow
      borderColor: "#FBC02D", // Darker yellow
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="suboption-button"
      style={{
        backgroundColor: option.color,
        borderColor: option.borderColor,
      }}
    >
      {option.text}
    </button>
  ));

  return <div className="suboptions-container">{buttonsMarkup}</div>;
};

export default SubOptions;

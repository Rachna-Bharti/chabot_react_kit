import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
 
  const  initialAction= () => {
    const message = createClientMessage("Development projects");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction1= () => {
    const message = createClientMessage("Emojify- machine learning project");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction2= () => {
    const message = createClientMessage("Pippo- voice assistant");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction3= () => {
    const message = createClientMessage("others");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction4= () => {
    const message = createClientMessage("social media website-django");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction5= () => {
    const message = createClientMessage("chatbot-react");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  initialAction6= () => {
    const message = createClientMessage("wordedit-react");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const handleGreet = () => {

    const message = createChatBotMessage("Hello friend.");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleJavascriptQuiz = () => {
    initialAction4();
    const message = createChatBotMessage(
      "It is a social media website for a particular organization which help the people of that organization to connect. Here are some related questions. Good luck!",
      { widget: "javascriptQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
 
  
  const heartPrintQuiz = () => {
    initialAction();
    const message = createChatBotMessage(
      "This section consist of frontend and full stack project information in react,django and angular.Below we have related topics!",
      { widget: "subOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const  handleBeatScoreQuiz = () => {
    initialAction5();
    const message = createChatBotMessage(
      "It is a chatbot based on react library. Here are some related questions. Good luck!",
      { widget: "BeatScoreQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const  handleTrendsQuiz = () => {
    initialAction6();
    const message = createChatBotMessage(
      "WordEdit is also a react project which performs basic word operations. Here are some related questions. Good luck!",
      { widget: "TrendsQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
 
  const  EHIQuiz = () => {
    initialAction3();
    const message = createChatBotMessage(
      "It consist of other frontend projects such as clock,calculator ,todo and insta clone webpage. Here are some related questions. Good luck!",
      { widget: "EHIQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  const SectorialQuiz = () => {
    initialAction1();
    const message = createChatBotMessage(
      "Emojify is a machine learning project which converts facial expressions into emojis. Here are some related questions. Good luck!",
      { widget: "SectorialQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const AssessmentQuiz = () => {
    initialAction2();
    const message = createChatBotMessage(
      "Pippo is a voice assistant based on python and its libraries and APIs.Here are some related questions. Good luck!",
      { widget: "AssessmentQuiz" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreet,
            handleJavascriptQuiz,
            SectorialQuiz,
            AssessmentQuiz,
            heartPrintQuiz,
            handleBeatScoreQuiz,
            handleTrendsQuiz,
            EHIQuiz,
            initialAction,
            initialAction1,
            initialAction2,
            initialAction3,
            initialAction4,
            initialAction5,
            initialAction6,
            // combinedHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

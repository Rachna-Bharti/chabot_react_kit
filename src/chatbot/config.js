import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import SubOptions from "../components/SubOptions/SubOptions";

const ChatHeader = ({ closeChat, handleResetChat }) => (
  <div
    style={{
      backgroundColor: "#2898ec",
      color: "white",
      padding: "6px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>ChatBot</span>
    
    <div>
    <button
        onClick={handleResetChat}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          marginRight: "2px"
        }}
      >
        &#x21bb; 
      </button>
      <button
        onClick={closeChat}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </div>
  </div>
);
const config  = (closeChat, handleResetChat) => ({
  customStyles: {
   
    botMessageBox: {
      backgroundColor: "#2898ec",
    },
    // chatButton: {
    //   display: 'none', 
    // },
    // userMessageBox: {
    //   display: 'none', 
    // },
    
   
  },
  botName: "ChatBot",
  initialMessages: [
    createChatBotMessage(`Hello! Here is the chatbot to tell you more about the projects here. what do you want to know about?`, {
      widget: "options",
    }),
  ],
  customComponents: {
    // Replaces the default header
   header: () =>  <ChatHeader closeChat={closeChat} handleResetChat={handleResetChat}/>
  //  // Replaces the default bot avatar
  //  botAvatar: (props) => <FlightBotAvatar {...props} />,
  //  // Replaces the default bot chat message container
  //  botChatMessage: (props) => <CustomChatMessage {...props} />,
  //  // Replaces the default user icon
  //  userAvatar: (props) => <MyUserAvatar {...props} />,
  //  // Replaces the default user chat message
  //  userChatMessage: (props) => <MyUserChatMessage {...props} />
 },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },{
   widgetName: "subOptions",
  widgetFunc: (props) => <SubOptions {...props} />,
  props: {
    title: "Development Projects",
    description: "This section consists of frontend and full stack project information in React, Django, and Angular.",
  },
},
{
  widgetName: "javascriptQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is social media website?",
        answer: "It is a full stack project for a particular organization that helps people connect within the organization.",
        id: 1,
      },
      {
        question: "what all technologies are used?",
        answer: "It uses django, css,html and js for frontend and default backend of django",
        id: 2,
      },
    ],
  },
},
{
  widgetName: "BeatScoreQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is the chatbot project?",
        answer: "It is a chatbot built using React. It offers interactive features and a dynamic user experience.",
        id: 1,
      },
      {
        question: "How was it implemented?",
        answer: "It was implemented using React components, state management, and chatbot-specific libraries.",
        id: 2,
      },
    ],
  },
},
{
  widgetName: "TrendsQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is WordEdit?",
        answer: "WordEdit is a React project that performs basic word operations like counting, editing, and formatting.",
        id: 1,
      },
      {
        question: "What are the core features of WordEdit?",
        answer: "WordEdit offers word count, text formatting, and basic editing features, making it a simple yet powerful text editor.",
        id: 2,
      },
    ],
  },
},
{
  widgetName: "EHIQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is the purpose of a clock project?",
        answer:
          "A clock project helps you learn how to manipulate time data and create a real-time display of hours, minutes, and seconds using JavaScript, HTML, and CSS.",
        id: 1,
      },
      {
        question: "What features does a calculator project typically include?",
        answer:
          "A basic calculator project typically includes arithmetic operations like addition, subtraction, multiplication, and division, as well as handling user input and displaying the result.",
        id: 2,
      },
      {
        question: "What is the goal of a to-do list project?",
        answer:
          "A to-do list project allows you to create, read, update, and delete tasks, helping you understand CRUD operations and working with user input in web development.",
        id: 3,
      },
      {
        question: "What is an Instagram clone webpage?",
        answer:
          "An Instagram clone webpage is a frontend project that mimics the UI/UX design of Instagram, focusing on responsive layout, image grid design, and interactive elements like buttons and forms.",
        id: 4,
      },
    ],
  },
},
{
  widgetName: "SectorialQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is Emojify?",
        answer: "Emojify is a machine learning project that converts facial expressions into emojis in real-time.",
        id: 1,
      },
      {
        question: "How does Emojify work?",
        answer: "Emojify uses machine learning models to detect facial expressions and map them to corresponding emojis.",
        id: 2,
      },
    ],
  },
},
{
  widgetName: "AssessmentQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is Pippo?",
        answer: "Pippo is a voice assistant built with Python and various libraries for speech recognition and natural language processing.",
        id: 1,
      },
      {
        question: "How does Pippo assist users?",
        answer: "Pippo assists users by responding to voice commands, performing tasks, and providing information through a conversational interface.",
        id: 2,
      },
    ],
  },
},
  ],
});

export default config;
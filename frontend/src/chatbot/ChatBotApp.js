// // import React from "react";
// // import { Chatbot } from "react-chatbot-kit";
// // import config from "./config";
// // import MessageParser from "./MessageParser";
// // import ActionProvider from "./ActionProvider";
// // import 'react-chatbot-kit/build/main.css';
// // import './chatbot.css'
// // function ChatbotApp() {
// //   return (
// //     <div className="chatbot-container">
// //       <Chatbot
// //         config={config}
// //         actionProvider={ActionProvider}
// //         messageParser={MessageParser}
// //       />
// //     </div>
// //   );
// // }

// // export default ChatbotApp;



// import React, { useState } from "react";
// import { Chatbot } from "react-chatbot-kit";
// import config from "./config";
// import MessageParser from "./MessageParser";
// import ActionProvider from "./ActionProvider";
// import 'react-chatbot-kit/build/main.css';
// import './chatbot.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { X } from 'react-bootstrap-icons';




// function ChatbotApp() {
//   const [showChatbot, setShowChatbot] = useState(false);

//   const handleChatbotButtonClick = () => {
//     setShowChatbot(prevState => !prevState);
//   }

//   return (
//     // <div>
//     //   <button className="chatbot-button" onClick={handleChatbotButtonClick}>
     

//     //     Chat with us!   <span className="bi bi-x-lg close-icon"></span>

//     //   </button>
//     //   {showChatbot &&
//     //     <div className="chatbot-container">
//     //          <button className="chatbot-close-button">
//     //       </button>

//     //       <Chatbot
//     //         config={config}
//     //         actionProvider={ActionProvider}
//     //         messageParser={MessageParser}
//     //       />
//     //     </div>
//     //   }
//     // </div>




//     <div>
//     <button className="chatbot-button" onClick={handleChatbotButtonClick}>
//       Chat with us! <X className="close-icon" />
//     </button>
//     {showChatbot && (
//       <div className="chatbot-container">
//         <button
//           className="chatbot-close-button"
//           onClick={() => setShowChatbot(false)}
//         >
//           <X />
//         </button>

//         <Chatbot
//           config={config}
//           actionProvider={ActionProvider}
//           messageParser={MessageParser}
//         />
//       </div>
//     )}
//   </div>

//   );
// }

// export default ChatbotApp;




import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { X } from 'react-bootstrap-icons';

function ChatbotApp() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotButtonClick = () => {
    setShowChatbot(prevState => !prevState);
  }

  return (
    <div>
      <button className="chatbot-button" onClick={handleChatbotButtonClick}>
        Chat with us!
        {showChatbot && <X className="close-icon" />}
      </button>
      {showChatbot && (
        <div className="chatbot-container">
          <button
            className="chatbot-close-button"
            onClick={() => setShowChatbot(false)}
          >
            <X />
          </button>

          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
}

export default ChatbotApp;


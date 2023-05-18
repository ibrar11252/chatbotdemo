import { createChatBotMessage } from 'react-chatbot-kit';
import {React,useEffect} from 'react'



var messages=[];
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hi, how can I help you?');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, greetingMessage],
    }));
   
  }

  
  

  handleHowAreYou() {
    const message = this.createChatBotMessage("I'm doing great, thanks for asking!");
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
  handleSizeQuestion = () => {
    const message = this.createChatBotMessage("We have shoes available in sizes 5-13. What size are you looking for?");

    this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));


  };



//   handleCategoryQuestion(){
//     const message = this.createChatBotMessage("We have category of loafers,formals,chelsea,jodhpur,formals,oxford,wholecut");
//     this.setState((prevState) => ({
//       ...prevState,
//       messages: [...prevState.messages, message],
//     }));
//   }

  handleCategoryQuestion() {
    const categories = [
      "loafers",
      "formals",
      "chelsea",
      "jodhpur",
      "oxford",
      "wholecut",
    ];
  
    const messages = categories.map((category) =>
      this.createChatBotMessage(`We have the ${category} category.`)
    );
  
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, ...messages],
    }));
  }
  
  handleAdvanceQuestion(){
    const message = this.createChatBotMessage('We make shoes on order thats why initial payment is must to book order');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

  }


  handleDeliveryDaysQuestion(){
    const message = this.createChatBotMessage('We deliver in 10-12 days');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

  }



   handleCustomShoesQuestion(){
    const message = this.createChatBotMessage('Custom shoes are made according to your design');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

   }

handleShopLocation(){
    const message = this.createChatBotMessage('Our factory is located in rawalpindi you can contact us and visit there');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

}



// imp questions


handleTrackQuestion(){
    const message = this.createChatBotMessage('You can reach us and ask for tracking');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

   }


   handleReturnQuestion(){
    const message = this.createChatBotMessage('As our shoes are customize it cannot be returned if there is no mistake from us');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

   }


   handleExchangeQuestion(){
    const message = this.createChatBotMessage('There is no exchange policy depending on your mood');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

   }


   handleMaterialQuestion() {
    const materialistic = [
      "leather",
      "suede",
      "patent",
      "rexin",
      "velvet"
    ];
  
    const messages = materialistic.map((category) =>
      this.createChatBotMessage(`We have ${category} products.`)
    );
  
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, ...messages],
    }));
    console.log(this.state.messages)
  }




    handleCustomerService(){
        const message = this.createChatBotMessage('Reach us through whatsapp at 0341-0192993');
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
    
       }


       
       handleCustomizeQuestion(){
        const message = this.createChatBotMessage('You can only customize a shoe');
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
    
       }


       handleWarrantyQuestion(){
        const message = this.createChatBotMessage('Warranty is 6 months');
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
    
       }

       




  handleDefault() {
    const message = this.createChatBotMessage('Sorry, I did not understand that.');
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
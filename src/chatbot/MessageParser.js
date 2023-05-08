import { createChatBotMessage } from 'react-chatbot-kit';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hy') ) {
      this.actionProvider.greet();
    } else if (message.toLowerCase() === 'how are you?') {
      this.actionProvider.handleHowAreYou();
    }
    
    else if (lowerCaseMessage.includes('size')) {
        this.actionProvider.handleSizeQuestion();
      }

      else if (lowerCaseMessage.includes('category')) {
        this.actionProvider.handleCategoryQuestion();
      }
      else if (lowerCaseMessage.includes('advance')) {
        this.actionProvider.handleAdvanceQuestion();
      }

      else if (lowerCaseMessage.includes('delivery')) {
        this.actionProvider.handleDeliveryDaysQuestion();
      }

      else if (lowerCaseMessage.includes('handleCustomShoesQuestion')) {
        this.actionProvider.handleAdvanceQuestion();
      }


      //imp questions
      else if (lowerCaseMessage.includes('track') || lowerCaseMessage.includes('tracking')) {
        this.actionProvider.handleTrackQuestion();
      }

      else if (lowerCaseMessage.includes('return')) {
        this.actionProvider.handleReturnQuestion();
      }

      else if (lowerCaseMessage.includes('exchange')) {
        this.actionProvider.handleExchangeQuestion();
      }

      else if (lowerCaseMessage.includes('material') || lowerCaseMessage.includes('quality')) {
        this.actionProvider.handleMaterialQuestion();
      }


      else if (lowerCaseMessage.includes('customer service') || lowerCaseMessage.includes('support') 
      || lowerCaseMessage.includes('customer support')
      ) {
        this.actionProvider.handleCustomerService();
      }



      else if (lowerCaseMessage.includes('customize') || lowerCaseMessage.includes('custom') || lowerCaseMessage.includes('shoe')) {
        this.actionProvider.handleCustomizeQuestion();
      }
        

      else if (lowerCaseMessage.includes('warranty')) {
        this.actionProvider.handleWarrantyQuestion();
      }




    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //
  },
  renderMessage: function(message){
  
    if(message.username === undefined){
      message.username = 'anonymous';
    }
    if(message.text === undefined){
      message.text = 'whooooohoooo';
    }
    if(message.text.includes('<')){
      message.text = 'hiiiii';
    }
    const html = MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  render: function(data) {
    //after input to form 
    //re render messages list
    const messages = data.results;
    for (let i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }  
  }

};
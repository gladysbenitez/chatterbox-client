var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //
  },
  renderMessage: function(input){
    

  },

  render: function(data) {
    //after input to form 
    //re render messages list
    var i, html = "";
    for (i = 0; i < data.results.length; i++) {
      if(data.results[i].username === undefined){
        data.results[i].username = 'anonymous';
      }
      if(data.results[i].text === undefined){
        data.results[i].text = 'whooooohoooo';
      }
      if(data.results[i].text.includes('<')){
        data.results[i].text = 'hiiiii';
      }
    html += MessageView.render(data.results[i]);
    }  
    MessagesView.$chats.append(html);

  }

};
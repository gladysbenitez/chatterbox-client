var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //
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
      console.log(MessageView.render(data.results[i]))
    html += MessageView.render(data.results[i]);
    }  
    console.log(html,'html')
    MessagesView.$chats.append(html);

  }

};
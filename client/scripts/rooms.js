var Rooms = {
     add: function(event){
         console.log('take in the event',event)
         var message = {
            username: App.username,
            roomname: $('#message').val(),
          };
          Parse.create(message);
          
     }

};
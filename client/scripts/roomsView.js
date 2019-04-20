var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log()
    RoomsView.$button.on('click', Rooms.add);

    //hook up button with click listener
    //display the room names from the data which we GET
  },
  handleClick: function(event){
   
  console.log('we added the room')
  },

  renderRoom: function(room) {
    const html = RoomsView.renderTemplate({'room':room});
    // console.log(html, 'this is the html')
    RoomsView.$select.append(html);
  },

  render: function(data) {
    var i, html= '';
    const uniqueRooms = {};
    let messages = data.results;// the array of objects
    for(var i = 0; i < messages.length; i++){
      if (messages[i].roomname) {
        uniqueRooms[messages[i].roomname] = messages[i].roomname;
      }
    }
    for (let key in uniqueRooms) {
      RoomsView.renderRoom(uniqueRooms[key]);
    }
  },

    renderTemplate: _.template(`
    <option value="room"><%- room %></option>
  `)
};

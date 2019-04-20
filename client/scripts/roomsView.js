var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log()
    RoomsView.$button.on('click', RoomsView.handleClick());

    //hook up button with click listener
    //display the room names from the data which we GET
  },
  handleClick: function(event){
  console.log('we added the room')
  },
  renderRoom: function(room) {

  },

  render: function(data) {
    var i, html= '';
//it erate through data.results which is an array.. each element of this array is an object 
//each object has a key 'roomname'
    const uniqueRooms = {};
    const messages = data.results;
    for(var i = 0; i < messages; i++){
      if (messages[i].roomname) {
        uniqueRooms[messages[i].roomname] = messages[i].roomname;
      }
    }
    const roomObj = [];
    for (let room in uniqueRooms) {
      roomObj.push({room: uniqueRoom[room]})
    }

    },
    renderTemplate: _.template(`
      
    <option value="volvo">Volvo</option>

  `)
    //when you add a room name to the form and click the add room button 
    //add the roomname to the room select list 

  

};

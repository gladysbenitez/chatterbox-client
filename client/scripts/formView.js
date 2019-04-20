var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();// prevents the browser from re freshing
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname:  $('#rooms select option:selected').text()
    };
    Parse.create(message);
    
    //post to server our message in our room
    //server should return it- update our feed
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
var Friends = {
  isFriend: false,
  ourFriends: [], 

    toggleStatus: function(event){
        let clickedFriend = $(event.target).text();
        Friends.ourFriends.push(clickedFriend);
        console.log(this);
    }

};
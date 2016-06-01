/*
Nichole Anderson
06/01/15
Anderson-Final

File: britain-videos.js
*/

//set up variable to list channel so it will load videos
var britChannel = 'AnglopheniaTV';
//setting up width and height for viewer(s)
var vidWidth = 500;
var vidHeight = 400;
var apiKey = 'AIzaSyA1sBt0s5xSjGMGHUsxuS84qQCn3kwoVZA';

$(document).ready(function() { 
  //start ajax to get brit channel videos
  $.get(
    "https://www.googleapis.com/youtube/v3/channels", {
        part:'contentDetails',
        forUsername: britChannel,
        key: apiKey
    },
    function(data){
      $.each(data.items, function(i, item){
          console.log(item);
          playlist = item.contentDetails.relatedPlaylists.uploads;
          getVids(playlist);
      });
    }
  );
  //create function to get videos
  function getVids(playlist){
    //get videos from selected playlist
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems", {
        part:'snippet',
        maxResults: 5,
        playlistId: playlist,
        key: apiKey
      },
      function(data){
        //parse data from api
        var output;
        $.each(data.items, function(i, item){
          console.log(item);
          var vidTitle = item.snippet.title;
          var videoId = item.snippet.resourceId.videoId;
          var videoDate = item.snippet.publishedAt;
          var prettyVideoDate = new Date(videoDate).toDateString();
          var videoDesc = item.snippet.description;
          //collect result
          output = '<p><h1>'+vidTitle+'</h1><p>'+videoDesc+'</p><p>'+prettyVideoDate+'</p><iframe height="'+vidHeight+'" width="'+vidWidth+'"src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></p><hr>';

          //append result to content div 
          $('#content').append(output);

        });// end .each
      }
    );//end get
  } //end getVids
});//end document.ready
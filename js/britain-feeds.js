/*
Nichole Anderson
06/01/15
Anderson-Final

File: britain-feeds.js
*/

//load method accepts the name of the particular API & vs as args
google.load("feeds", "1");

//set up a function to create rss feed
function doRssFeed() {
  
  var rssFeed = new google.feeds.Feed("http://feeds.skynews.com/feeds/rss/home.xml");
  
  //number of RSS entries to restrict
  rssFeed.setNumEntries(3);
  
  //load RSS info & identify the call back function
  rssFeed.load(viewFeed);
}

//create a function to determine what to do when the feed loads
function viewFeed(result) {
  //determine if the result exists, or returned an error
  if(!result.error)
  {
    //grab all of the entries - skipping info abt feed itself
    var newsEntries = result.feed.entries;
    
    //build the output
    var output = '<h2>British Headlines</h2><p id="para">Source: Sky News</p><hr>';
    
    for (i=0; i <newsEntries.length; i++)
    {
      output += '<p><a href="' + newsEntries[i].link + '" target="_blank">';
      output += newsEntries[i].title + '</a><br>'
      output += newsEntries[i].content + '</p>';
    }
    //finish output with horizontal line
    output += '<hr>'
    //display the output
    $('#sidebar').html(output);
  }
  else
  {
    $('#sidebar').html('<p>oops - feed unavailable!</p>');
  }
}

//calling the setup function 
$(document).ready( function() {

  //start the entire RSS process by calling the doRssFeed
  doRssFeed();
  
});//end document.ready

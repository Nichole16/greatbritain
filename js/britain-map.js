/*
Nichole Anderson
06/01/15
Anderson-Final

File: britain-map.js
*/

$(document).ready(function() {
  //Make a variable called markers in array that holds each marker with latitude, longitude, title, html, and content.  Popup to false so it doesn't show images too soon.
  //Each marker listed below has a custom title, custom HTML text describing the location, and every marker description includes an image 
  var markers = [
      {
        latitude : 51.382966,
        longitude : -2.359981,
        title: 'The Roman Baths',
        html: {
          content: "<h2>The Roman Baths</h2><p>Beneath the modern-day city of Bath are the well-preserved remains of the Roman spa town of Aquae Sulis. The Great Bath attracted visitors from across the Roman Empire and continues to this day to be fed by naturally hot, mineral rich water from the Sacred Spring.</p><img width='300' height='150'src='images/TheRomanBaths.jpg'></p>",
          popup: false
        }
      }, 
      {
        latitude : 51.179054,
        longitude : -1.826270,
        title: 'Stonehenge',
        html: {
          content: "<h2>Stonehenge</h2><p>Stonehenge is a prehistoric monument located in Wiltshire, England, about 2 miles west of Amesbury and 8 miles north of Salisbury.</p><img width='300' height='150'src='images/Stonehenge.jpg'></p>",
          popup: false
        }
      },
      {
        latitude : 51.484038,
        longitude : -0.604446,
        title: 'Windsor Castle',
        html: {
          content: "<h2>Windsor Castle</h2><p>The largest inhabited castle in the world, Windsor Castle has served as the summer residence of British Royals since William the Conqueror built the first fortress here in 1078.</p><img width='300' height='150'src='images/WindsorCastle.jpg'></p>",
          popup: false
        }
      },
      {
        latitude : 52.023145,
        longitude : -1.697086,
        title: 'The Cotswolds',
        html: {
          content: "<h2>The Cotswolds</h2><p>The Cotswolds cover some 787 sq mi and encompass parts of some of England's prettiest counties - Gloucestershire, Oxfordshire, Wiltshire, Somerset, Worcestershire and Warwickshire. And all of it begs to be explored.</p><img width='300' height='150'src='images/TheCotswolds.jpg'></p>",
          popup: false
        }
      },
      {
        latitude : 52.196593,
        longitude : -1.708705,
        title: "Shakespeare's Birthplace",
        html: {
          content: "<h2>Shakespeare's Birthplace</h2><p>William Shakespeare was born in Stratford and lived here until he was old enough to marry and spend the first five years of family life here with his new wife, Anne Hathaway.</p><img width='300' height='150'src='images/ShakespeareBirthplace.JPG'></p>",
          popup: false
        }
      }, 
      {
        latitude: 51.502095,
        longitude: -0.141367,
        title: 'Buckingham Palace',
        html: {
          content: "<h2>Buckingham Palace</h2><p>Home of the British Queen</p><p><img width='300' height='150'src='images/BuckinghamPalace.jpg'></p>",
          popup: false
        }
      }, 
      {
        latitude: 51.508135,
        longitude: -0.075960,
        title: 'Tower of London',
        html: {
          content: "<h2>Tower of London</h2><p>Medieval castle that holds the Crown Jewels</p><p><img width='300' height='150'src='images/TowerOfLondon.jpg'></p>",
          popup: false
        }   
      }
  ]
  //the map is centered on a particular place of interest
  $('#map').goMap({
    latitude: 52.023145,
    longitude: -1.697086,
    zoom: 7,
    scaleControl: true,
    //map should use a non-default map type
    maptype: 'Hybrid'
  });// end goMap 


  //Create markers w/functions so when user clicks, it will do the following:
  //Map markers appear in a group
  //Map markers disappear in a group
  var markersVisible = false;

  function createMarkers(){
    if (markersVisible === false){
      $.each(markers,function(i,marker) {
        $.goMap.createMarker(marker);
      }); // end each
      markersVisible = true;
    } //end if
  } //end createMarkers
  createMarkers();

 $('#clearMarkers').click(function() {
    $.goMap.clearMarkers();
    markersVisible = false;
  }); // end click*/

 $('#showMarkers').click(function() {
  createMarkers();
 }); // end showing markers

});//end ready

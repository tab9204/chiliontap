//********Initalization script that starts the app*****//
//import the mithril library
import "../../libraries/mithril.min.js";
import {home} from '../views/home.js';
import {navigation} from "../components/navigation.js";

window.onload = async () =>{
  //register service worker
  if ('serviceWorker' in navigator) {
    var registration = await navigator.serviceWorker.register('service-worker.js');
    //if the registration has been changed update it
    registration.update();
  }
  else{
    console.log("Service Workers not supported");
  }
  //get the nav root container
  var navRoot = document.getElementById("navRoot");
  //render the nav html to the nav root container
  m.render(navRoot, m(navigation));
  //get the page root container
  var pageRoot = document.getElementById("pageRoot");
  //set up the app routes
  m.route(pageRoot, "/home",{
    "/home": home
  })
}

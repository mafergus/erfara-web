import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Parse from 'parse';
Parse.initialize("sQRHjpVVFNnSM2Xhchzw2rYH05dtpruHCBbCyU2c", "Ian5VuPM2yzB8FJiIZtMvLOvPbXJUTbmJIKH75yw");


// Launch hoisted functions and variables below
main();

function main() {

  // This is called once the facebook SDK is loaded
  window.fbAsyncInit = function() {                       
    Parse.FacebookUtils.init({                            
      appId      : '406833206191137',                     
      status     : true,                                  
      cookie     : true,                                  
      xfbml      : true,                                  
      version    : 'v2.5'                                 
    });                                                   
    console.log('fbAsyncInit complete')                   
  };                                                      
                                                                                        
  (function(d, s, id){                                   
     var js, fjs = d.getElementsByTagName(s)[0];          
     if (d.getElementById(id)) {return;}                  
     js = d.createElement(s); js.id = id;                 
     js.src = '//connect.facebook.net/en_US/sdk.js';      
     fjs.parentNode.insertBefore(js, fjs);                
   }(document, 'script', 'facebook-jssdk'));        

  // Create a div called app for App.jsx to be rendered into
  const app = document.createElement('div');
  document.body.appendChild(app);
  // Render App.jsx into
  ReactDOM.render(<App />, app);
}

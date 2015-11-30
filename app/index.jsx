import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Parse from 'parse';

Parse.initialize("sQRHjpVVFNnSM2Xhchzw2rYH05dtpruHCBbCyU2c", 
                      "Ian5VuPM2yzB8FJiIZtMvLOvPbXJUTbmJIKH75yw");

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
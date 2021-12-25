import App from 'app.js';

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);

// include('hellomessage.js');
// include('textbox.js');
// include('app.js');


// function include(file) {
//   var script  = document.createElement('script');
//   script.src  = file;
//   script.type = 'text/babel';
//   script.defer = true;
//   var el = document.getElementsByTagName('head').item(0).appendChild(script);
//   console.log(el);
// }

// console.log(document.getElementsByTagName('body').item(0));

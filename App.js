'use strict';

// var e = React.createElement;
// var App = React.createClass({
//   render: function(){
//     return React.DOM.h1(null, 'Hello React');
//   }
// });
// ReactDOM.render(e(App), document.body);

function App() {
  return (
    <UserList />
  );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);

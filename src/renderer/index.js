import React from 'react';
import ReactDOM from 'react-dom';

//fast refresh
if (module.hot) {
  module.hot.accept();
}

function App() {
  return <h1>Hello World!</h1>
}

ReactDOM.render(<App />, document.getElementById('app'));
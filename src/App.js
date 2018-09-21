import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store } from './store'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          {/* 这里预留页面扩展的可能 */}
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export default App;

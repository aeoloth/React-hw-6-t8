import React, {Component} from 'react';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {}
    console.log('constructor')
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
  return (
    <div className="viewStyle">
      <label className="textStyle">STAR GATE</label>
    </div>
  );
  }
}



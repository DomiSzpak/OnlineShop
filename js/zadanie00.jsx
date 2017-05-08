import React from 'react';
import ReactDOM from 'react-dom';

class Check extends React.Component {
  constructor() {
    super()
    this.state = {
      lel: "ok"
    }
  }

  componentDidMount() {
     console.log("TORLOLRORLR");
  }

  render() {
    return <div>{this.state.lel}</div>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Check />,
        document.getElementById('app')
    );
});

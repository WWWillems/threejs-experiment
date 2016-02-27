import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from './components/renderer';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    };
  }

  render(){
    return (<div>
              <h3>This is the top React Application!</h3>
              <Renderer />
            </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

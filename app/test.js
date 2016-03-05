import React from 'react';
import { Object3D, Mesh } from 'react-three';
import THREE from 'three';
import ReactDOM from 'react-dom';

class Test extends React.Component{
  constructor(props){
    super(props);

    this.setState = {

    };
  }

  componentDidMount() {
    window.THREE = THREE;

    var aspectratio = this.props.width / this.props.height;
    var cameraprops = {
      fov:75,
      aspect:aspectratio,
      near:1,
      far:5000,
      position:new THREE.Vector3(0,0,600),
      lookat:new THREE.Vector3(0,0,0)
    };

    let scene = new THREE.Scene(this.refs.canvas,this.refs.container);
    let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);

    // 2 SCENES? DIFF BETWEEN SCENE & RENDERER?
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  }

  render() {
    console.log("Render!");

    return (
      <div id="container" ref="container">qsd
        <canvas className="three" ref="canvas"></canvas>
      </div>
    );
  }
};

Test.propTypes = {
  //position: React.PropTypes.instanceOf(THREE.Vector3),
  //quaternion: React.PropTypes.instanceOf(THREE.Quaternion).isRequired
};

Test.displayName = 'Test';

export default Test;

ReactDOM.render(<Test />, document.getElementById('app'));

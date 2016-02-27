import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';
import { Renderer, Scene, Mesh, PerspectiveCamera } from 'react-three';

class SceneContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var aspectratio = this.props.width / this.props.height;
    var cameraprops = {
      fov:75,
      aspect:aspectratio,
      near:1,
      far:5000,
      position:new THREE.Vector3(0,0,600),
      lookat:new THREE.Vector3(0,0,0)
    };

    return (<span><Renderer width={this.props.width} height={this.props.height}>
      <Scene width={this.props.width} height={this.props.height} camera="maincamera">
          <PerspectiveCamera name="maincamera" {...cameraprops} />
          { /** <Cupcake {...this.props.cupcakedata} /> **/ }
      </Scene>
    </Renderer></span>);
  }
};

SceneContainer.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default SceneContainer;

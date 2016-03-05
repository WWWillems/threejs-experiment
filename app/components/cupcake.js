import React from 'react';
import { Object3D, Mesh } from 'react-three';
import THREE from 'three';

class Cupcake extends React.Component{
  constructor(props){
    super(props);

    this.setState = {

    };
  }

  render() {
    let assetpath = function(filename) { return './../images/' + filename; };
    let boxgeometry = new THREE.BoxGeometry( 200,200,200);
    //
    // Cupcake component is two cube meshes textured with cupcake textures
    //
    let cupcaketexture = THREE.ImageUtils.loadTexture( assetpath('cupCake.png') );
    let cupcakematerial = new THREE.MeshBasicMaterial( { map: cupcaketexture } );
    /** new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
});**/
    let creamtexture = THREE.ImageUtils.loadTexture( assetpath('creamPink.png') );
    let creammaterial = new THREE.MeshBasicMaterial( { map: creamtexture } );

    console.log("QUATER " , this.props.quaternion);

    let euler = new THREE.Quaternion().setFromEuler(new THREE.Euler(45,150));
    let test = euler.x * 10;
    //<Object3D quaternion={this.props.quaternion} position={this.props.position || new THREE.Vector3(0,0,0)}>
    console.log(this.props.position);
    console.log("Cupcake position : " , this.props.position);
    
    return  <Object3D quaternion={this.props.quaternion} position={this.props.position || new THREE.Vector3(0,0,0)}>
              <Mesh position={new THREE.Vector3(0,-100,0)} geometry={boxgeometry} material={cupcakematerial} />
              <Mesh position={new THREE.Vector3(0,100,0)} geometry={boxgeometry} material={creammaterial} />
            </Object3D>;
  }
};

Cupcake.propTypes = {
  position: React.PropTypes.instanceOf(THREE.Vector3),
  quaternion: React.PropTypes.instanceOf(THREE.Quaternion).isRequired
};

Cupcake.displayName = 'Cupcake';

export default Cupcake;

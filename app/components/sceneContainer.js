import React from 'react';
import ReactDOM from 'react-dom';
import THREE from 'three';
import ReactTHREE from 'react-three';
import RobotRobbyComponent from './models/robotRobby';
import RobotMechComponent from './models/robotMech';
import Constants from './../constants';

const ROBOT_ROBBY_Y = -25,
      ROBOT_MECH_Y = 0;

class SceneComponent extends React.Component{
  constructor(props){
        super(props);

        this.state = {
            modelPosition: new THREE.Vector3(0,0,0),
            modelRotation: 0
        };

        this._animate = this._animate.bind(this);
  }

  componentDidMount() {
        // Kick off animation
        this._animate();
  }

  render() {

          let x = this.state.modelPosition.x,
              y = this.state.modelPosition.y,
              z = this.state.modelPosition.z;

          // Adjust relative positions
          let robotRobbyPosition = new THREE.Vector3( x, y + ROBOT_ROBBY_Y, z ),
              robotMechPosition = new THREE.Vector3( x, y + ROBOT_MECH_Y, z );

          let modelEuler = new THREE.Euler(0, this.state.modelRotation),
              modelQuaternion = new THREE.Quaternion().setFromEuler(modelEuler);

          let CameraElement = React.createElement(
              ReactTHREE.PerspectiveCamera,   // type
              {                               // config
                  name: 'camera',
                  fov: 75,
                  aspect: window.innerWidth / window.innerHeight,
                  near: 1,
                  far: 1000,
                  position: new THREE.Vector3(0, 0, 50),
                  lookat: new THREE.Vector3(0, 0, 0)
              }
          );

          let RobotRobbyElement = React.createElement(
              RobotRobbyComponent,
              {
                  position: robotRobbyPosition,
                  quaternion: modelQuaternion,
                  visible: (this.props.robot === Constants.ROBOT.ROBBY),
                  scale: 7
              }
          );

          let RobotMechElement = React.createElement(
              RobotMechComponent,
              {
                  position: robotMechPosition,
                  quaternion: modelQuaternion,
                  visible: (this.props.robot === Constants.ROBOT.MECH),
                  scale: 5
              }
          );

          let AmbientLight = React.createElement(
              ReactTHREE.AmbientLight,
              {
                  color: new THREE.Color(0x333333),
                  intensity: 0.5,
                  target: new THREE.Vector3(0, 0, 0)
              }
          );

          let DirectionalLight = React.createElement(
              ReactTHREE.DirectionalLight,
              {
                  color: new THREE.Color(0xFFFFFF),
                  intensity: 1.5,
                  position: new THREE.Vector3(0, 0, 60)
              }
          );

          return React.createElement(
              ReactTHREE.Scene,
              {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  camera: 'camera',
                  antialias: true,
                  background: 0xEEEEEE
              },
              CameraElement,
              RobotRobbyElement,
              RobotMechElement,
              AmbientLight,
              DirectionalLight
          )
      }

      _animate() {
          let spinAmount = this.props.spinSpeed * Constants.SPIN_SPEED_MULTIPLIER;

          this.setState({modelRotation: this.state.modelRotation +
          (this.props.spinDirection === Constants.SPIN.LEFT ? spinAmount : -spinAmount)});

          requestAnimationFrame(this._animate);

      }

  }

  export default SceneComponent;

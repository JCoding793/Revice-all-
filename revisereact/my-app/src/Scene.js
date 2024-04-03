import { useFrame , extend , useThree} from "@react-three/fiber";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {OrbitControls} from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader  } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';
import Custome from "./Custome";
import Particles from "./Particals";
extend({OrbitControls:OrbitControls});


const Scene = ()=>{
    // const model = useLoader(GLTFLoader , './1.glb');
    
    const texture = useLoader(THREE.TextureLoader, './logo512.png');

    console.log(texture);
    // const cubeRef = useRef();
    // const planRef = useRef();
    const {gl, camera} = useThree();
    camera.position.x = 5;
    
    useFrame((state , delta)=>{
    //  cubeRef.current.rotation.y += delta;
    //  planRef.current.rotation.y +=delta;
    // state.camera.position.x = Math.sin(state.clock.elapsedTime);
     })

    return(
    <>
    <OrbitControls args={[camera, gl.domElement]}/>
    <axesHelper />
    <gridHelper />
    <mesh>
     <planeGeometry args={[3,3]}/>
     <meshBasicMaterial map={texture}/>
    </mesh>
    <Custome/>
    <Particles />
  {/* <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="yellow" wireframe={false}/>
  </mesh>  */}
  </>
    )
}
export default Scene;
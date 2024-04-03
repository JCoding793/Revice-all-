import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Model";
import { Suspense } from "react";
import Bike from "./Bike";
import {useControls} from "leva"
const Scene = () => {
  // const levaControls = useControls({
  //   Xposition: 0,
  //   color: "#ffffff"
  // }
  // )
  // const model = useLoader(GLTFLoader , './model/dog.glb')
  // console.log(Bike)
  return (
    <>
      <ambientLight intensity={2}/>
      <OrbitControls /> 
      {/* <Bike position = {[-0.5, 0.75 , 0]}/> */}
      <Suspense fallback={
        <mesh scale-y={2}>
          <boxGeometry/>
          <meshBasicMaterial />
        </mesh>
      }> 
         <Model />
      </Suspense>
    </>
  );
};

export default Scene;

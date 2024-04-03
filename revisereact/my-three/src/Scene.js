import { OrbitControls, useHelper , Sparkles, Stars, Environment, PerspectiveCamera, CubeCamera , Text, Text3D, Center, Html} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
const Scene = () => {
  const cubeRef = useRef();
const lightRef = useRef();
// useFrame((_, delta)=>{
//   cubeRef.current.rotation.x += delta;
//   cubeRef.current.rotation.y += delta;
// })
useHelper(lightRef , THREE.DirectionalLightHelper, 1)
  return (
    <>
    <OrbitControls />
    <mesh>
      <boxGeometry />
      <meshBasicMaterial />
      <Html>H</Html>
    </mesh>
    {/* position= {[-0.7 , 0.5 , 0.5]} */}
   {/* <Environment background files={"./envMap/1.hdr"} />
    <PerspectiveCamera makeDefault position={[0,0,5]} /> */}
   {/*  <CubeCamera>
      {(texture) =>(
        <mesh>
          <sphereGeometry args={[1, 64 ,64]}/>
          <meshStandardMaterial envMap={texture} roughness={0} metalness={0.9}/>
        </mesh>
      )}
    
    </CubeCamera>
    <mesh ref={cubeRef} position-z={5}>
      <boxGeometry />
      <meshBasicMaterial  color="purple"/>
    </mesh> /*}
       {/* <OrbitControls />
      <ambientLight />
      <directionalLight castShadow ref={lightRef}/>
     <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" />
      </mesh>

 <Sparkles count={200} />
 <Stars radius={2} depth={50} count={500} factor={4} />
      <mesh receiveShadow  position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
  </mesh>*/}
    </>
  );
};

export default Scene;

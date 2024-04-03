
import { useGLTF , useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model = ()=>{
  const model = useGLTF('./model/dog.glb');
  const animation = useAnimations(model.animations , model.scene);

    console.log(model);
    // useEffect(()=>{
    //   animation.actions.Pleased.play();
    // },[])
    return (
      <>
        <primitive  object={model.scene} />
      </>
    );
}

useGLTF.preload('./model/dog.glb');
export default Model;
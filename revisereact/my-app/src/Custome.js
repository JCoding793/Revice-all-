import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Custome = ()=>{
    const texture = useLoader(THREE.TextureLoader, './logo512.png');
console.log(texture)
    const positionArray = new Float32Array([
        0,0,0,
        0,1,0,
        1,0,0,
    ]);

return(
    <mesh position-x={-3}>
        <bufferGeometry>
            <bufferAttribute  attach="attributes-position" count={3} itemSize={3}
            array={positionArray} />
        </bufferGeometry> 
            
        <meshBasicMaterial map={texture} side={THREE.DoubleSide}/>
    </mesh>
)
};
export default Custome;

/////////
//     ///
//     /////
//     //////
//     /////
/////////


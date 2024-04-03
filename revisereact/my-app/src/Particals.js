import { useLoader } from "@react-three/fiber";
import * as THREE from "three"
const Particles = ()=>{
const texture = useLoader(THREE.TextureLoader, "./logo192.png")

const verticesAmount = 2000;
const positionArray = new Float32Array(verticesAmount * 3);
for(let i = 0; i<verticesAmount; i++){
    positionArray[i] = Math.random();
}
    return (
        <points position-x={3}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positionArray.length} itemSize={3} array={positionArray}/>
           </bufferGeometry>
            {/* <sphereGeometry /> */}
            <pointsMaterial size={0.02} alphaMap={texture} transparent />
        </points>
    )


}

export default Particles;
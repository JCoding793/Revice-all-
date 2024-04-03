import logo from './logo.svg';
import './App.css';
import Scene from './Scene';
import {Canvas} from "@react-three/fiber"
import { OrthographicCamera } from '@react-three/drei';

// const group = new Three.Group();


//mesh1
// BoxGemetry( , , , )
// MeshBasiMaterial
// mesh(boxgemo , meshhmera)

//mesh2
// BoxGemetry( , , , )
// MeshBasiMaterial
// mesh(boxgemo , meshhmera)
  const createHandler = (state)=>{
    state.gl.setClearColor("cyan");
  }
function App() {

  return (
   <Canvas 

   gl={{antialias: false}}
   camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [2 ,2 ,5],
  }}
  // onCreated={createHandler}
  >
    
       <Scene />
   </Canvas>
  );
}

export default App;

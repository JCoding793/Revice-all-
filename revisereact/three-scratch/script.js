//Scense Mesh camera Renderer


//Scene 

const scene = new THREE.Scene();

// Mesh

const geomertry = new THREE.BoxGeometry(1 ,1 ,1);
const material  = new THREE.MeshBasicMaterial({color: 'purple'});

const mesh = new THREE.Mesh(geomertry , material)

scene.add(mesh);

//camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera  = new THREE.PerspectiveCamera(75 , aspect.width / aspect.height); //1 2000

camera.position.z = 3;
scene.add(camera);

//Renderer

const canvas = document.querySelector(".draw"); //sleect the 
const renderer = new THREE.WebGLRenderer({canvas});
 renderer.setSize(aspect.width, aspect.height)
 
 
 const animate  =  () =>{
   mesh.rotation.x += 0.01;
   renderer.render(scene , camera)
   window.requestAnimationFrame(animate)
}
animate();


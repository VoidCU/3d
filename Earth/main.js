import * as THREE from 'three'

import earth from './img/globe.jpg'

const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)

const renderer=new THREE.WebGLRenderer({
    antialias:true
})
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)



const sphere=new THREE.Mesh(new THREE.SphereGeometry(5,50,50),new THREE.MeshBasicMaterial({
    map:new THREE.TextureLoader().load(earth)
}))

scene.add(sphere)

camera.position.z=15

function ani(time){
    renderer.render(scene,camera)
    sphere.rotation.y=time/5000;
}

renderer.setAnimationLoop(ani)
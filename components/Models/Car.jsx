import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const Model = () => {
  const gltf = useGLTF("/audi/scene.gltf");
  return (
    <>
      <primitive key={gltf.scene} object={gltf.scene} scale={0.4} />
    </>
  );
};

function Car() {
  return (
    <div className="car">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default Car;

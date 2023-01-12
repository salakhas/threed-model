import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const Model = () => {
  const gltf = useGLTF("/joker/scene.gltf");
  return (
    <>
      <primitive key={gltf.scene} object={gltf.scene} scale={1.05} />
    </>
  );
};

function Joker() {
  return (
    <div className="joker pt-[120px]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 4], fov: 40 }}>
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

export default Joker;

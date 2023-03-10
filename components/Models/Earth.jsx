import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const Model = () => {
  const gltf = useGLTF("/earth/scene.gltf");
  return (
    <>
      <primitive key={gltf.scene} object={gltf.scene} scale={0.008} />
    </>
  );
};

//shadows: The shadows prop is used to add shadows to the 3D model.
//dpr: The dpr prop is used to adjust the pixel value.
//camera: The camera prop is used for perspective projection. This projection mode is designed to mimic the way the human eye sees.
//fov: The fov is the "Field of View" for the 3D model.
//ambientLight: This light globally illuminates all objects in the scene equally. This light cannot be used to cast shadows as it does not have a direction.
//spotLight: This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.

function Earth() {
  return (
    <div className="globe">
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

export default Earth;

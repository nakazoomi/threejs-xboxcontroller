import { Effects, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import LoadModel from '../components/LoadModel';

// import * as THREE from 'three';
// import { Html } from '@react-three/drei';

// START FUNCTION
export default function Home() {
  return (
    <>
      <Canvas id="threejs-canvas" camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          {/* <Stage contactShadow={{ resolution: 1024, scale: 10 }}> */}
          <LoadModel />
          {/* </Stage> */}
        </Suspense>
      </Canvas>
    </>
  );
}

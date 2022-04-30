import React, { useRef } from 'react';
import { useGLTF, Edges } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    './models/xBoxController/xBoxController-transformed.glb'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -2.5, 0]}
            rotation={[0.3, -Math.PI / 2, 0]}
            scale={0.5}
          >
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.material}
            >
              {/* <Edges /> */}
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/xBoxController/xBoxController-transformed.glb');

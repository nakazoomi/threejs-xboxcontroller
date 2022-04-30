import * as THREE from 'three';
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Edges,
  Text,
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { angleToRadians } from './Angle';
import { useRef } from 'react';
import XBoxController from './models3D/XBoxController';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// IMPORTANT LINKS
// https://npmmirror.com/package/drei/v/1.5.0#meshdistortmaterial

export default function Threejs() {
  // Setting the camera angle *** START

  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(12));
      // orbitControlsRef.current.setPolarAngle((-y + 0.5) * angleToRadians(90));

      orbitControlsRef.current.update();
    }
  });

  // CONSOLE LOG - ORBIT CONTROLS
  // useEffect(() => {
  //   if (!!orbitControlsRef.current) {
  //     // console.log(orbitControlsRef.current);
  //   }
  // }, [orbitControlsRef]);

  // Setting the camera angle *** END

  return (
    <>
      {/***************************************************************************/}
      {/* CAMERA */}

      {/* <PerspectiveCamera position={(0, 0, 0)} /> */}
      <OrbitControls
        enableZoom={false}
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(90)}
        maxPolarAngle={angleToRadians(90)}
      />

      {/***************************************************************************/}
      {/* TEXT */}

      <Text
        color="#000" // invert #dd004e
        anchorX="center" // default
        anchorY="middle" // default
        font="fonts/RobotoMono/RobotoMono-Bold.woff" // default
        fontSize={1.25} // default
        fontWeight={700} // default
        lineHeight={1.5} // default
        letterSpacing={0} // default
        position={[0, 5, 0]} // default
        rotation={[0, 0, 0]} // default
        height={5}
      >
        Get started now!
      </Text>

      {/***************************************************************************/}
      {/* 3D MODELS */}

      <XBoxController />

      {/***************************************************************************/}
      {/* ENVIRONMENT */}

      {/* <Stars
        radius={50} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={12} // Size factor (default=4)
        saturation={1} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      /> */}

      {/***************************************************************************/}
      {/* LIGHT */}

      {/* Ambient Light */}
      <ambientLight args={['#ffffff', 2]} />

      {/* Directional Light */}
      {/* <directionalLight args={['#ffffff', 1]} position={[0, 0, 1]} /> */}

      {/* Point Light */}
      {/* <pointLight args={['#00ff91', 1]} position={[0, 0, 2]} /> */}
    </>
  );
}

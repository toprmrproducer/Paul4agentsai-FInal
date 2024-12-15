import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ring3D } from './3DRing';
import { Loader, Environment } from '@react-three/drei';
import * as THREE from 'three';

export function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5
        }}
      >
        <Suspense fallback={null}>
          <Ring3D />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
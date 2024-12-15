import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Logo3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      // Smooth rotation based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouse.y * 0.5,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.5,
        0.1
      );

      // Organic movement
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
      
      // Pulse effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#ff1493"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={1}
        emissive="#ff1493"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}
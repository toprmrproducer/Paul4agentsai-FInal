import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

export function Ring3D() {
  const ringRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  
  // Target rotation and position for smooth movement
  const targetRotation = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0, z: 0 });
  const baseRotation = useRef({ x: 0, y: 0, z: 0 });

  useFrame((state, delta) => {
    if (!ringRef.current) return;

    // Convert mouse coordinates to world space
    const x = (mouse.x * viewport.width) / 4;
    const y = (mouse.y * viewport.height) / 4;

    // Update target position based on mouse
    targetPosition.current.x = x;
    targetPosition.current.y = y;

    // Smooth position transition
    ringRef.current.position.x = THREE.MathUtils.lerp(
      ringRef.current.position.x,
      targetPosition.current.x,
      0.1
    );
    ringRef.current.position.y = THREE.MathUtils.lerp(
      ringRef.current.position.y,
      targetPosition.current.y,
      0.1
    );

    // Base rotation (continuous)
    baseRotation.current.y += (Math.PI * 2 * delta) / 5;

    // Mouse influence on rotation
    targetRotation.current.x = mouse.y * Math.PI * 0.2;
    targetRotation.current.y = mouse.x * Math.PI * 0.2;

    // Apply smooth rotations
    ringRef.current.rotation.x = THREE.MathUtils.lerp(
      ringRef.current.rotation.x,
      targetRotation.current.x,
      0.1
    );
    
    ringRef.current.rotation.y = baseRotation.current.y + THREE.MathUtils.lerp(
      0,
      targetRotation.current.y,
      0.1
    );

    // Add organic movement
    const time = state.clock.getElapsedTime();
    ringRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;

    // Scale based on mouse distance from center
    const mouseDistance = Math.sqrt(mouse.x ** 2 + mouse.y ** 2);
    const scale = THREE.MathUtils.lerp(0.65, 0.7, mouseDistance * 0.2);
    ringRef.current.scale.setScalar(scale);
  });

  return (
    <group>
      <Torus 
        ref={ringRef} 
        args={[2, 0.4, 64, 128]}
      >
        <meshPhysicalMaterial
          color="#ff1493"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          envMapIntensity={2}
          emissive="#ff1493"
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </Torus>
    </group>
  );
}
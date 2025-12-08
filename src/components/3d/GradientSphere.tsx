import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function MainSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 128, 128]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#ec4899"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.9}
      />
    </Sphere>
  );
}

interface GradientSphereProps {
  className?: string;
}

export default function GradientSphere({ className = '' }: GradientSphereProps) {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ec4899" />
        <pointLight position={[5, -5, 5]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#3b82f6" />
        <MainSphere />
      </Canvas>
    </div>
  );
}


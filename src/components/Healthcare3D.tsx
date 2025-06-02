
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Heart component with pulsing animation
const AnimatedHeart = ({ position }: { position: [number, number, number] }) => {
  const heartRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1);

  useFrame((state) => {
    if (heartRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      heartRef.current.scale.setScalar(pulse);
      setScale(pulse);
    }
  });

  return (
    <group position={position}>
      <Sphere ref={heartRef} args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#ff6b6b" />
      </Sphere>
      <Sphere position={[-0.15, 0.15, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#ff6b6b" />
      </Sphere>
      <Sphere position={[0.15, 0.15, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#ff6b6b" />
      </Sphere>
    </group>
  );
};

// Medical cross component
const MedicalCross = ({ position }: { position: [number, number, number] }) => {
  const crossRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (crossRef.current) {
      crossRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={crossRef} position={position}>
      <Box args={[0.8, 0.2, 0.1]}>
        <meshStandardMaterial color="#4f46e5" />
      </Box>
      <Box args={[0.2, 0.8, 0.1]}>
        <meshStandardMaterial color="#4f46e5" />
      </Box>
    </group>
  );
};

// Stethoscope component
const Stethoscope = ({ position }: { position: [number, number, number] }) => {
  const scopeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (scopeRef.current) {
      scopeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={scopeRef} position={position}>
      {/* Main tube */}
      <Cylinder args={[0.02, 0.02, 1.5]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#2d3748" />
      </Cylinder>
      {/* Chest piece */}
      <Cylinder args={[0.15, 0.15, 0.05]} position={[0.5, -0.5, 0]}>
        <meshStandardMaterial color="#e2e8f0" />
      </Cylinder>
      {/* Earpieces */}
      <Sphere args={[0.08]} position={[-0.5, 0.5, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Sphere>
      <Sphere args={[0.08]} position={[-0.3, 0.6, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Sphere>
    </group>
  );
};

// Medicine pill component
const Pill = ({ position }: { position: [number, number, number] }) => {
  const pillRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (pillRef.current) {
      pillRef.current.rotation.x += 0.01;
      pillRef.current.rotation.y += 0.02;
      pillRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group ref={pillRef} position={position}>
      <Cylinder args={[0.15, 0.15, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Cylinder>
      <Sphere args={[0.15]} position={[0.2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      <Sphere args={[0.15]} position={[-0.2, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Sphere>
    </group>
  );
};

// Main 3D Scene
const HealthcareScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Healthcare elements */}
      <AnimatedHeart position={[0, 1, 0]} />
      <MedicalCross position={[-3, 0, -1]} />
      <Stethoscope position={[3, -1, 0]} />
      <Pill position={[-1.5, -2, 1]} />
      <Pill position={[1.5, -2.5, -1]} />
      <Pill position={[0, -3, 0]} />

      {/* Floating text */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#4f46e5"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        TEACH1 Healthcare
      </Text>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const Healthcare3D = () => {
  return (
    <section className="section bg-gradient-to-br from-teach-blue-light/10 to-teach-blue/10">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-teach-blue mb-4">Experience Healthcare Innovation</h2>
          <p className="text-teach-gray-dark max-w-2xl mx-auto">
            Interactive 3D visualization of our healthcare services and commitment to family care
          </p>
        </div>
        
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm border border-teach-blue/20">
          <HealthcareScene />
          <div className="absolute bottom-4 left-4 text-sm text-teach-gray-dark bg-white/80 px-3 py-2 rounded-lg">
            Drag to rotate • Auto-rotating view
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-teach-gray-dark">
            Our 3D healthcare visualization represents the comprehensive care and training we provide to families
          </p>
        </div>
      </div>
    </section>
  );
};

export default Healthcare3D;

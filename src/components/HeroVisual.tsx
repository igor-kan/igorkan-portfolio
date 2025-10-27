'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = () => {
  const points = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      const vertex = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      vertex.multiplyScalar(Math.random() * 5 + 1);
      positions[i3] = vertex.x;
      positions[i3 + 1] = vertex.y;
      positions[i3 + 2] = vertex.z;
    }
    return positions;
  });

  useFrame((state) => {
    if (points.current) {
      const { clock, mouse } = state;
      points.current.rotation.y = clock.getElapsedTime() * 0.1;

      const positions = points.current.geometry.attributes.position.array as Float32Array;
      if (!points.current.geometry.userData.initialPositions) {
        points.current.geometry.userData.initialPositions = new Float32Array(positions);
      }
      const initialPositions = points.current.geometry.userData.initialPositions as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = initialPositions[i];
        const y = initialPositions[i + 1];
        

        const dx = x - mouse.x * 5;
        const dy = y - mouse.y * 5;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - distance / 5);

        positions[i] = x + dx * force * 0.1;
        positions[i + 1] = y + dy * force * 0.1;
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64FFDA"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';

const HeroVisual = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <ParticleSystem />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroVisual;
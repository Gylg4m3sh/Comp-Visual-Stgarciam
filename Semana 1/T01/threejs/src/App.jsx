import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Edges, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Model({ displayMode }) {
  const { nodes } = useGLTF('/modelo.gltf');
  const meshNode = Object.values(nodes).find((node) => node.isMesh);

  if (!meshNode) return null;

  const geometry = meshNode.geometry;

  return (
    <group scale={2}>
      {displayMode === 'faces' && (
        <mesh geometry={geometry}>
          <meshStandardMaterial color="royalblue" />
        </mesh>
      )}

      {displayMode === 'edges' && (
        <mesh geometry={geometry}>
          <meshBasicMaterial color="white" transparent opacity={0.1} />
          <Edges color="cyan" threshold={15} />
        </mesh>
      )}

      {displayMode === 'vertices' && (
        <Points geometry={geometry}>
          <PointMaterial color="yellow" size={2} sizeAttenuation={false} />
        </Points>
      )}
    </group>
  );
}

export default function App() {
  const [displayMode, setDisplayMode] = useState('faces');

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a1a' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, background: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '8px', fontFamily: 'sans-serif' }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Inspector 3D</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={() => setDisplayMode('faces')}>⬛ Mostrar Caras</button>
          <button onClick={() => setDisplayMode('edges')}>🕸️ Mostrar Aristas</button>
          <button onClick={() => setDisplayMode('vertices')}>✨ Mostrar Vértices</button>
        </div>
      </div>

      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <React.Suspense fallback={null}>
          <Model displayMode={displayMode} />
        </React.Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
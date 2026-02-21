import React, { useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function ModelRenderer({ format, setModelInfo }) {
  let modelData;

  if (format === 'GLTF') {
    const gltf = useLoader(GLTFLoader, '/modelo.gltf');
    modelData = gltf.scene || gltf;
    React.useEffect(() => setModelInfo({ vertices: "Depende de la escena", faces: "Múltiples mallas" }), [format]);
    return <primitive object={modelData} scale={2} />;
  } 
  
  if (format === 'OBJ') {
    const obj = useLoader(OBJLoader, '/modelo.obj');
    React.useEffect(() => {
      let verts = 0;
      obj.traverse((child) => { if (child.isMesh) verts += child.geometry.attributes.position.count; });
      setModelInfo({ vertices: verts, faces: verts / 3 });
    }, [format, obj]);
    return <primitive object={obj} scale={2} />;
  } 
  
  if (format === 'STL') {
    const stl = useLoader(STLLoader, '/modelo.stl');
    React.useEffect(() => {
      setModelInfo({ vertices: stl.attributes.position.count, faces: stl.attributes.position.count / 3 });
    }, [format, stl]);
    return (
      <mesh geometry={stl} scale={2}>
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }

  return null;
}

export default function App() {
  const [format, setFormat] = useState('GLTF');
  const [modelInfo, setModelInfo] = useState({ vertices: 0, faces: 0 });

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#2a2a2a' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, background: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '8px', fontFamily: 'sans-serif' }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Conversor de Formatos 3D</h2>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => setFormat('GLTF')} style={{ fontWeight: format === 'GLTF' ? 'bold' : 'normal' }}>.GLTF</button>
          <button onClick={() => setFormat('OBJ')} style={{ fontWeight: format === 'OBJ' ? 'bold' : 'normal' }}>.OBJ</button>
          <button onClick={() => setFormat('STL')} style={{ fontWeight: format === 'STL' ? 'bold' : 'normal' }}>.STL</button>
        </div>

        <div style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
          <strong>Información del Modelo:</strong>
          <p style={{ margin: '5px 0' }}>Formato activo: {format}</p>
          <p style={{ margin: '5px 0' }}>Vértices: {modelInfo.vertices}</p>
          <p style={{ margin: '5px 0' }}>Caras estimadas: {modelInfo.faces}</p>
        </div>
      </div>

      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Html><div style={{color: 'white'}}>Cargando modelo...</div></Html>}>
          <ModelRenderer format={format} setModelInfo={setModelInfo} />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
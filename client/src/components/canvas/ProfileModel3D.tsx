import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';
import profileNoBg from "@assets/Profile-removebg-preview_1772305727207.png";

function ExtrudedProfile({ imagePath }: { imagePath: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(imagePath);
  
  const layers = 12;
  const layerData = useMemo(() => {
    return Array.from({ length: layers }).map((_, i) => ({
      zPos: i * -0.04,
      opacity: i === 0 ? 1 : 1 - (i * 0.08),
      scale: 1 - (i * 0.005),
      isBack: i === layers - 1
    }));
  }, [layers]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* GLOW AURA BEHIND PERSON */}
      <mesh position={[0, 0, -0.6]}>
        <planeGeometry args={[3, 4.5]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {layerData.map((layer, i) => (
        <mesh 
          key={i} 
          position={[0, 0, layer.zPos]} 
          scale={[layer.scale, layer.scale, 1]}
        >
          <planeGeometry args={[2.8, 4.0]} />
          <meshBasicMaterial 
            map={layer.isBack ? null : texture}
            color={layer.isBack ? "#0a0a2e" : "white"}
            transparent={true}
            opacity={layer.opacity}
            side={THREE.DoubleSide}
            alphaTest={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function RotatingStars() {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={400} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function ProfileModel3D() {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[350px] md:min-h-[500px] lg:h-[80vh]">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 42 }}
        style={{ background: 'transparent', touchAction: 'pan-y' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <pointLight position={[2, 3, 4]} intensity={1.5} color="#06b6d4" />
          
          <ExtrudedProfile imagePath={profileNoBg} />
          <RotatingStars />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.2}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
            makeDefault
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

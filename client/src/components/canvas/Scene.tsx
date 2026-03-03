import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingShapes } from './FloatingShapes';

export function SceneBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050510]">
      {/* Background shapes removed for a cleaner look */}
    </div>
  );
}

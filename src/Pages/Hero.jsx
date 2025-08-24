import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { SciFiWorker } from "../components/Animated";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [1, 1, 3], fov: 45 }}>
  <Suspense fallback={<Loader />}>
    {/* Add lights */}
    <ambientLight intensity={0.6} />
    <directionalLight position={[1, 8, 7]} intensity={2.5} />
    <pointLight position={[-5, -5, -5]} intensity={0.6} />

    <SciFiWorker
      scale={isMobile ? 0.81 : 2}
      position={isMobile ? [0, -2.3, 0] : [-0.5, -4.3, -4.5]}
      rotation={[-1.9, 3.07, 3]} 
    />

    <Rig />
  </Suspense>
</Canvas>


      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;

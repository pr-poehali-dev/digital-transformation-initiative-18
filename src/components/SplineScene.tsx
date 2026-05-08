import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei"

const MODEL_URL = "https://cdn.poehali.dev/projects/5fbe0796-d856-4bd0-b6dd-21d3b9f293d9/bucket/models/mascot.glb"

function OctopusModel() {
  const { scene } = useGLTF(MODEL_URL)
  return <primitive object={scene} scale={2.2} position={[0, -1.2, 0]} />
}

function Fallback() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-end pr-8 md:pr-16">
      <div className="mascot-wrapper">
        <div className="h-[420px] md:h-[540px] w-[300px] animate-pulse bg-primary/10 rounded-2xl" />
        <div className="mascot-glow" />
      </div>
    </div>
  )
}

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-3, 3, 3]} intensity={0.8} color="#9b5de5" />
          <pointLight position={[3, -2, 2]} intensity={0.4} color="#ffc800" />
          <OctopusModel />
          <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={6} blur={2} />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

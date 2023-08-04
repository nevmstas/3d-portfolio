import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Loader from "../loader"

interface IBall {
    icon: string
}
const Ball = ({ icon }: IBall) => {
    const [decal] = useTexture([icon])

    return <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={4} />
        <directionalLight position={[0, 0, 0.5]} />
        <mesh scale={2.75} castShadow receiveShadow>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color={"white"}
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading
            />
            <Decal
                position={[0, 0, 1]}
                rotation={[2 * Math.PI, 0, 6.25]}
                map={decal}
            />
        </mesh>
    </Float>
}

const BallCanvas = ({ icon }: IBall) => {
    return <Canvas
        // frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<Loader />} >
            <OrbitControls enablePan={false} enableZoom={false} />
            <Ball icon={icon} />
        </Suspense>
        <Preload all />
    </Canvas>
}

export default BallCanvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import Loader from "../loader"

const Robot = () => {
    const robot = useGLTF('./robot_playground/scene.gltf')

    return <mesh>
        <hemisphereLight intensity={5} groundColor={"black"} />
        <primitive object={robot.scene}
            scale={0.0022}
            position={[0, -0.8, 0]}
            rotation={[0.2, 0, 0]}
        />
    </mesh>
}

const RobotCanvas = () => {
    return <Canvas
        frameloop="demand"
        shadows
        camera={{ fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<Loader />} >
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Robot />
        </Suspense>
        <Preload all />
    </Canvas>
}
export default RobotCanvas   
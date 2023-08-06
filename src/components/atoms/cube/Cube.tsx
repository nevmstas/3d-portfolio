import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Loader } from ".."
import { OrbitControls, useGLTF } from "@react-three/drei"

const Cube = () => {
    const cube = useGLTF('./ghost_w_tophat/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={5} groundColor={"black"} />
            <primitive object={cube.scene} />
        </mesh>
    )
}

const CubeCanvas = () => {
    return <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<Loader />}>
            <OrbitControls
                autoRotate
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Cube />
        </Suspense>
    </Canvas>
}
export default CubeCanvas 
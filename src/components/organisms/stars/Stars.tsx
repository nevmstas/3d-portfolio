import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Loader } from "../../atoms"
import { PointMaterial, Points, Preload } from "@react-three/drei"
import { inSphere } from "maath/random";

const Stars = () => {
    const ref = useRef<any>()

    const sphere = inSphere(new Float32Array(5000), { radius: 1.2 })

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} as any stride={3} frustumCulled >
            <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
        </Points>
    </group>
}

const StarsCanvas = () => {
    return <div className="w-full h-full absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />} >
                <Stars />
            </Suspense>
            <Preload all />
        </Canvas>
    </div>
}
export default StarsCanvas 
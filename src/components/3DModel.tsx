'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds, OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model() {
    const { scene } = useGLTF('/models/dog.glb') // ensure this file exists in /public/models/
    // rotate model every frame
    // useFrame(() => {
    //     scene.rotation.y += 0.004 // adjust speed here
    // })
    return <primitive object={scene} />
}

export default function VoxelModel() {
    return (
        <div className="relative m-auto h-[640px] w-[640px] border-2 border-black">
            <Canvas dpr={[1, 2]} camera={{ fov: 60, position: [8, 8, 8] }} className="absolute inset-0" shadows>
                {/* Simple lighting so you can see the mesh */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 5]} intensity={1.1} castShadow />

                <Suspense fallback={null}>
                    <Model />

                    <OrbitControls
                        makeDefault
                        autoRotate
                        autoRotateSpeed={5} // tweak speed
                        enableZoom
                        zoomSpeed={0.8}
                        enablePan={false}
                        minDistance={0.5}
                        maxDistance={20}
                        target={[0.25, -0.2, 0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

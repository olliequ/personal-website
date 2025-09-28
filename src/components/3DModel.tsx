'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'

function Model({ isInteracting }: { isInteracting: boolean }) {
    const { scene } = useGLTF('/models/dog.glb')
    const frameCount = useRef(0)

    // Tunables
    const INTRO_FRAMES = 100 // length of the intro
    const IDLE_SPEED = 0.004 // your steady-state speed
    const TARGET_TURNS = 4 // four fast spins
    const TARGET_ROT = TARGET_TURNS * Math.PI * 2

    // We'll use an ease-out curve for velocity: easeOutCubic(t) = 1 - (1 - t)^3
    // The average of (1 - easeOutCubic(t)) over t∈[0,1] is exactly 1/4.
    // Solve for v0 so total intro rotation ~ TARGET_ROT:
    // mean v = IDLE + (v0 - IDLE) * A, where A = 1/4  → v0 = 4*TARGET_ROT/INTRO - 3*IDLE
    const AVERAGE_ONE_MINUS_EASE = 0.25
    const v0 = (4 * TARGET_ROT) / INTRO_FRAMES - 3 * IDLE_SPEED // derived from the average above

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    useFrame(() => {
        if (isInteracting) return

        if (frameCount.current < INTRO_FRAMES) {
            const t = frameCount.current / INTRO_FRAMES // 0 → 1 over intro
            const ease = easeOutCubic(t)
            // Velocity blends from v0 down to IDLE_SPEED; it matches IDLE at t=1
            const v = IDLE_SPEED + (v0 - IDLE_SPEED) * (1 - ease)

            scene.rotation.y += v
            frameCount.current += 1
        } else {
            // post-intro steady rotation
            scene.rotation.y += IDLE_SPEED
        }
    })

    return <primitive object={scene} />
}

export default function VoxelModel() {
    const [isInteracting, setIsInteracting] = useState(false)

    return (
        <div className="relative mx-auto h-[640px] w-[640px]">
            {/* fov and position to control angle and how zoomed in */}
            <Canvas dpr={[1, 2]} camera={{ fov: 60, position: [8, 8, 8] }} className="absolute inset-0" shadows>
                <ambientLight intensity={2} />
                <directionalLight position={[5, 10, 5]} intensity={1.1} castShadow />

                <Suspense fallback={null}>
                    <Model isInteracting={isInteracting} />

                    <OrbitControls
                        makeDefault
                        enableZoom
                        zoomSpeed={0.8}
                        enablePan={false}
                        minDistance={0.5}
                        maxDistance={20}
                        target={[0.25, -0.5, 0]} // translate model within the frame (second number for y)
                        // toggle rotation on drag
                        onStart={() => setIsInteracting(true)}
                        onEnd={() => setIsInteracting(false)}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

"use client"

import { useRef, useEffect, useState, useMemo, Suspense, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Float, Preload, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

// Optimized Sphere with better performance
function OptimizedSphere({
  position,
  color,
  speed = 1,
  size = 1,
}: {
  position: [number, number, number]
  color: string
  speed?: number
  size?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Memoize geometry to prevent recreation
  const geometry = useMemo(() => new THREE.SphereGeometry(size, 32, 32), [size])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed
      meshRef.current.rotation.x = Math.sin(time) * 0.1
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.15
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.05
    }
  })

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      geometry.dispose()
    }
  }, [geometry])

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  )
}

// Optimized Particle Field
function OptimizedParticleField() {
  const points = useRef<THREE.Points>(null)
  const particlesCount = 800

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [particlesCount])

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.elapsedTime
      points.current.rotation.x = time * 0.02
      points.current.rotation.y = time * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} />
    </points>
  )
}

function Scene() {
  const { camera, gl } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 8)
    camera.updateProjectionMatrix()

    // Optimize renderer settings
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    gl.antialias = true
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
  }, [camera, gl])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <OptimizedParticleField />

      <OptimizedSphere position={[-3, 0, 0]} color="#3b82f6" speed={0.8} size={1} />
      <OptimizedSphere position={[3, 1, -2]} color="#8b5cf6" speed={1.2} size={0.8} />
      <OptimizedSphere position={[0, -2, 1]} color="#06b6d4" speed={0.6} size={0.9} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

// Enhanced loading fallback
function LoadingFallback() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 20
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-b-purple-500 rounded-full animate-spin animate-reverse" />
      </div>
      <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Loading 3D Experience...</p>
    </div>
  )
}

export default function OptimizedThreeScene() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleError = useCallback((error: any) => {
    console.error("Three.js scene error:", error)
    setHasError(true)
  }, [])

  useEffect(() => {
    setMounted(true)

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: [0.1],
        rootMargin: "100px",
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    return <LoadingFallback />
  }

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 opacity-50 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">3D visualization unavailable</p>
          <button
            onClick={() => {
              setHasError(false)
              setIsVisible(false)
              setTimeout(() => setIsVisible(true), 100)
            }}
            className="mt-2 text-xs text-blue-600 hover:text-blue-700 underline"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: "transparent" }}
          performance={{ min: 0.5 }}
          dpr={[1, 2]}
          onError={handleError}
        >
          <Suspense fallback={null}>
            <Scene />
            <Preload all />
          </Suspense>
        </Canvas>
      ) : (
        <LoadingFallback />
      )}
    </div>
  )
}

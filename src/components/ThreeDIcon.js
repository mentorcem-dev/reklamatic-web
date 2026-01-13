"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';

function MusicNote(props) {
    const mesh = useRef();
    useFrame((state) => {
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * rotationRange;
        mesh.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    });

    return (
        <group {...props} ref={mesh}>
            {/* Note head */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Note stem */}
            <mesh position={[0.3, 0.8, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1.6, 16]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Wave lines */}
            <mesh position={[-0.5, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
                <torusGeometry args={[0.3, 0.05, 16, 50]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
            </mesh>
        </group>
    );
}

function Building(props) {
    const mesh = useRef();
    useFrame((state) => {
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * rotationRange;
        mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    });

    return (
        <group {...props} ref={mesh}>
            {/* Main building */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.5, 1]} />
                <meshStandardMaterial color="#3b82f6" metalness={0.4} roughness={0.3} />
            </mesh>
            {/* Roof */}
            <mesh position={[0, 0.95, 0]}>
                <coneGeometry args={[0.7, 0.5, 4]} />
                <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.2} />
            </mesh>
            {/* Windows */}
            {[-0.3, 0, 0.3].map((y, i) => (
                <mesh key={i} position={[0.51, y, 0]}>
                    <boxGeometry args={[0.05, 0.2, 0.2]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

function VideoCamera(props) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * rotationRange;
    });

    return (
        <group {...props} ref={mesh}>
            {/* Camera body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.8, 0.6, 1]} />
                <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Lens */}
            <mesh position={[0, 0, 0.7]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#3b82f6" metalness={1} roughness={0} />
            </mesh>
            {/* Red record light */}
            <mesh position={[0.3, 0.35, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} />
            </mesh>
        </group>
    );
}

function Rocket(props) {
    const mesh = useRef();
    useFrame((state) => {
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * rotationRange;
        mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    });
    return (
        <group {...props} ref={mesh}>
            <mesh position={[0, 0, 0]}>
                <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
                <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.6, 0.6]} rotation={[0.5, 0, 0]}>
                <boxGeometry args={[0.2, 0.5, 0.5]} />
                <meshStandardMaterial color="#8b5cf6" />
            </mesh>
            <mesh position={[0, -0.6, -0.6]} rotation={[-0.5, 0, 0]}>
                <boxGeometry args={[0.2, 0.5, 0.5]} />
                <meshStandardMaterial color="#8b5cf6" />
            </mesh>
            <mesh position={[0.6, -0.6, 0]} rotation={[0, 0, -0.5]}>
                <boxGeometry args={[0.5, 0.5, 0.2]} />
                <meshStandardMaterial color="#8b5cf6" />
            </mesh>
            <mesh position={[-0.6, -0.6, 0]} rotation={[0, 0, 0.5]}>
                <boxGeometry args={[0.5, 0.5, 0.2]} />
                <meshStandardMaterial color="#8b5cf6" />
            </mesh>
        </group>
    );
}

function MapPin(props) {
    const mesh = useRef();
    useFrame((state) => {
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * rotationRange;
        mesh.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.5;
    });

    return (
        <group {...props} ref={mesh}>
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.1} />
            </mesh>
            <mesh position={[0, -0.2, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.6, 1.5, 32]} />
                <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0.5, 0.5]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

function Calendar(props) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        // Oscillate rotation within 70 degrees front view
        const rotationRange = (70 * Math.PI) / 180;
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * rotationRange;
    });

    return (
        <group {...props} ref={mesh}>
            <mesh>
                <boxGeometry args={[1.5, 1.2, 0.2]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 0.4, 0.05]}>
                <boxGeometry args={[1.5, 0.4, 0.2]} />
                <meshStandardMaterial color="#ec4899" />
            </mesh>
            <mesh position={[-0.4, 0.6, 0]}>
                <torusGeometry args={[0.1, 0.02, 16, 30]} />
                <meshStandardMaterial color="silver" />
            </mesh>
            <mesh position={[0.4, 0.6, 0]}>
                <torusGeometry args={[0.1, 0.02, 16, 30]} />
                <meshStandardMaterial color="silver" />
            </mesh>
        </group>
    )
}

const Robot = (props) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    });
    return (
        <group {...props} ref={mesh}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.8, 0.7, 0.7]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.2, 0.1, 0.36]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[-0.2, 0.1, 0.36]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0, -0.2, 0.36]}>
                <boxGeometry args={[0.4, 0.05, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#ec4899" />
            </mesh>
        </group>
    );
};

const Nodes = (props) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.z += 0.005;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    });
    return (
        <group {...props} ref={mesh}>
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[-0.5, -0.4, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.5, -0.4, 0]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
            </mesh>
            {/* Connections */}
            <mesh position={[-0.25, 0.05, 0]} rotation={[0, 0, 1]}>
                <cylinderGeometry args={[0.02, 0.02, 1.1]} />
                <meshStandardMaterial color="white" opacity={0.3} transparent />
            </mesh>
            <mesh position={[0.25, 0.05, 0]} rotation={[0, 0, -1]}>
                <cylinderGeometry args={[0.02, 0.02, 1.1]} />
                <meshStandardMaterial color="white" opacity={0.3} transparent />
            </mesh>
            <mesh position={[0, -0.4, 0]} rotation={[0, 0, 1.57]}>
                <cylinderGeometry args={[0.02, 0.02, 1]} />
                <meshStandardMaterial color="white" opacity={0.3} transparent />
            </mesh>
        </group>
    );
};

const Clapper = (props) => {
    const mesh = useRef();
    const topRef = useRef();
    useFrame((state) => {
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
        // Clap animation
        const t = Math.sin(state.clock.elapsedTime * 3);
        if (topRef.current) topRef.current.rotation.z = Math.max(0, t * 0.5);
    });
    return (
        <group {...props} ref={mesh}>
            <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[1.2, 0.8, 0.1]} />
                <meshStandardMaterial color="#1f2937" />
            </mesh>
            {/* Stripes */}
            <mesh position={[0, -0.4, 0.06]}>
                <planeGeometry args={[1, 0.05]} />
                <meshBasicMaterial color="white" />
            </mesh>
            {/* Top Part */}
            <group position={[-0.6, 0.2, 0]} ref={topRef}>
                <mesh position={[0.6, 0.05, 0]}>
                    <boxGeometry args={[1.2, 0.15, 0.1]} />
                    <meshStandardMaterial color="#ec4899" />
                </mesh>
                <mesh position={[0.6, 0.05, 0.06]}>
                    <planeGeometry args={[1.1, 0.1]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </group>
        </group>
    );
};

const ThreeDIcon = ({ type, size = 200 }) => {
    return (
        <div style={{ width: '100%', height: `${size}px` }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {type === 'music' && <MusicNote />}
                    {type === 'building' && <Building />}
                    {type === 'camera' && <VideoCamera />}
                    {type === 'viral' && <Rocket />}
                    {type === 'maps' && <MapPin />}
                    {type === 'booking' && <Calendar />}
                    {type === 'robot' && <Robot />}
                    {type === 'nodes' && <Nodes />}
                    {type === 'clapper' && <Clapper />}
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default ThreeDIcon;

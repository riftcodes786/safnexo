"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { motion, useAnimation } from 'framer-motion';
import { SectionReveal } from '@/components/ui/section-reveal';

// =================================
//  SHADER & 3D COMPONENTS
// =================================

// Create a reusable shader material for the fluid effect
const FluidMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uColorA: new THREE.Color("#4B5563"), // Darker grey for less brightness
    uColorB: new THREE.Color("#374151"), // Even darker grey
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec3 vNormal;

    // Simplex 3D noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
        vNormal = normalize(normalMatrix * normal);
        float mouseDist = distance(position.xy, uMouse * 2.0);
        float displacement = snoise(position * 2.5 + uTime * 0.2) * 0.3;
        displacement -= smoothstep(0.0, 1.5, mouseDist) * 0.5;

        vec3 newPosition = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec3 vNormal;
    void main() {
        float fresnel = pow(1.0 + dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 color = mix(uColorA, uColorB, vNormal.y * 0.5 + 0.5);
        gl_FragColor = vec4(color + fresnel * 0.2, 1.0);
    }
  `
);

extend({ FluidMaterial });

// The internal 3D scene component
const FluidScene = () => {
    const materialRef = useRef<any>();
    const mouse = useRef(new THREE.Vector2(0,0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const { clock } = state;
        if (materialRef.current) {
            materialRef.current.uTime = clock.getElapsedTime();
            materialRef.current.uMouse.lerp(mouse.current, 0.05);
        }
    });

    const isDarkMode = useMemo(() => {
        if (typeof window === 'undefined') return true;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);

    const lightColorA = useMemo(() => new THREE.Color("#4B5563"), []);
    const lightColorB = useMemo(() => new THREE.Color("#374151"), []);
    const darkColorA = useMemo(() => new THREE.Color("#4B5563"), []);
    const darkColorB = useMemo(() => new THREE.Color("#374151"), []);

    return (
        <mesh>
            <icosahedronGeometry args={[1.5, 64]} />
            <fluidMaterial 
                ref={materialRef} 
                key={FluidMaterial.key}
                uColorA={isDarkMode ? darkColorA : lightColorA}
                uColorB={isDarkMode ? darkColorB : lightColorB}
                blending={isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending}
                transparent={isDarkMode}
            />
        </mesh>
    );
};


// --- Main Hero Component ---
export const LivingFluidHero = () => {
  const textControls = useAnimation();

  useEffect(() => {
    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.8,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }));
  }, [textControls]);

  const headline = "Safenexo";
  
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background gradient matching home page */}
      <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
      
      
      {/* Hero Content - Professional Hero Section */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 md:px-12 text-center min-h-screen">
        <SectionReveal>
          <div className="space-y-6 max-w-5xl">
            {/* Main Headline */}
            <motion.h1 
              custom={0}
              initial={{ opacity: 0, y: 30 }} 
              animate={textControls}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                lineHeight: '1.1'
              }}
            >
              {headline.split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  custom={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={textControls} 
                  style={{ display: 'inline-block' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              custom={headline.length}
              initial={{ opacity: 0, y: 20 }}
              animate={textControls}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
            >
              We transform businesses through intelligent technology, pixel-perfect design, and strategic automation that drives measurable growth.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              custom={headline.length + 1}
              initial={{ opacity: 0, y: 20 }}
              animate={textControls}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Start Your Project
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              custom={headline.length + 2}
              initial={{ opacity: 0, y: 20 }}
              animate={textControls}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-slate-400"
            >
              <span>✓ 50+ Projects Delivered</span>
              <span>✓ 24/7 Support</span>
              <span>✓ 100% Client Satisfaction</span>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default LivingFluidHero;

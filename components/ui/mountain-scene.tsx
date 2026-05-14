"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function GenerativeMountainScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const segments  = isMobile ? 60 : 120;
    const dpr       = Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5);

    // ── Use window dimensions as guaranteed size ──────────────────────────────
    const W = el.offsetWidth  || window.innerWidth;
    const H = el.offsetHeight || window.innerHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 100);
    camera.position.set(0, 1.8, 3.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(dpr);
    // Key fix: clear to transparent so the section bg shows through
    renderer.setClearColor(0x000000, 0);

    // Key fix: explicit CSS so the canvas fills its parent
    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset     = "0";
    canvas.style.width     = "100%";
    canvas.style.height    = "100%";
    canvas.style.display   = "block";
    el.appendChild(canvas);

    // ── Geometry ──────────────────────────────────────────────────────────────
    const geometry = new THREE.PlaneGeometry(14, 9, segments, segments);

    // ── Shader ────────────────────────────────────────────────────────────────
    //  Colors: steel-blue highlights over deep graphite — high contrast
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime:      { value: 0 },
        uLightPos:  { value: new THREE.Vector3(2, 3, 4) },
        // Base = deep graphite, peak = steel blue / silver
        uColorLow:  { value: new THREE.Color("#0B1623") },   // deep blue-graphite
        uColorMid:  { value: new THREE.Color("#1D4F7A") },   // steel blue
        uColorHigh: { value: new THREE.Color("#8AACCA") },   // silver-blue peak
      },
      vertexShader: /* glsl */`
        uniform float uTime;
        varying vec3  vPos;
        varying float vElev;
        varying vec3  vNorm;

        // Simplex noise helpers
        vec3 mod289v3(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec4 mod289v4(vec4 x){return x-floor(x*(1./289.))*289.;}
        vec4 permute(vec4 x){return mod289v4(((x*34.)+1.)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

        float snoise(vec3 v){
          const vec2 C=vec2(1./6.,1./3.);
          const vec4 D=vec4(0.,.5,1.,2.);
          vec3 i=floor(v+dot(v,C.yyy));
          vec3 x0=v-i+dot(i,C.xxx);
          vec3 g=step(x0.yzx,x0.xyz);
          vec3 l=1.-g;
          vec3 i1=min(g.xyz,l.zxy);
          vec3 i2=max(g.xyz,l.zxy);
          vec3 x1=x0-i1+C.xxx;
          vec3 x2=x0-i2+C.yyy;
          vec3 x3=x0-D.yyy;
          i=mod289v3(i);
          vec4 p=permute(permute(permute(
            i.z+vec4(0.,i1.z,i2.z,1.))
            +i.y+vec4(0.,i1.y,i2.y,1.))
            +i.x+vec4(0.,i1.x,i2.x,1.));
          float n_=0.142857142857;
          vec3 ns=n_*D.wyz-D.xzx;
          vec4 j=p-49.*floor(p*ns.z*ns.z);
          vec4 x_=floor(j*ns.z);
          vec4 y_=floor(j-7.*x_);
          vec4 xx=x_*ns.x+ns.yyyy;
          vec4 yy=y_*ns.x+ns.yyyy;
          vec4 h=1.-abs(xx)-abs(yy);
          vec4 b0=vec4(xx.xy,yy.xy);
          vec4 b1=vec4(xx.zw,yy.zw);
          vec4 s0=floor(b0)*2.+1.;
          vec4 s1=floor(b1)*2.+1.;
          vec4 sh=-step(h,vec4(0.));
          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
          vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);
          vec3 p1=vec3(a0.zw,h.y);
          vec3 p2=vec3(a1.xy,h.z);
          vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
          m=m*m;
          return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }

        void main(){
          vPos  = position;
          vNorm = normal;

          float t  = uTime * 0.12;
          float f1 = 0.65;  float f2 = f1*2.1;  float f3 = f1*4.2;
          float a1 = 0.70;  float a2 = a1*0.42; float a3 = a1*0.18;

          float d = snoise(vec3(position.x*f1, position.y*f1 - t,        0.0)) * a1
                  + snoise(vec3(position.x*f2, position.y*f2 - t*1.3,    0.5)) * a2
                  + snoise(vec3(position.x*f3, position.y*f3 - t*1.7,    1.0)) * a3;

          vElev = d;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal*d, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3  uLightPos;
        uniform vec3  uColorLow;
        uniform vec3  uColorMid;
        uniform vec3  uColorHigh;
        varying vec3  vPos;
        varying float vElev;
        varying vec3  vNorm;

        void main(){
          vec3 n = normalize(vNorm);

          // Elevation blend: low→mid→high
          float t1 = clamp((vElev + 0.55) / 0.75, 0.0, 1.0);
          float t2 = clamp((vElev - 0.05) / 0.65, 0.0, 1.0);
          vec3 terrColor = mix(mix(uColorLow, uColorMid, t1), uColorHigh, t2);

          // Diffuse
          vec3  lDir  = normalize(uLightPos - vPos);
          float diff  = max(dot(n, lDir), 0.0) * 0.8 + 0.35;  // ambient floor

          // Edge fresnel for depth
          float fresnel = pow(1.0 - max(dot(n, vec3(0.,0.,1.)), 0.0), 3.0);

          vec3 col = terrColor * diff + uColorHigh * fresnel * 0.30;

          // Alpha: solid on peaks, semi-transparent at low/edges
          float alpha = 0.75 + t1*0.22 - fresnel*0.12;

          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2 + 0.08;   // slight tilt for better perspective
    scene.add(mesh);

    // ── Point light (follows mouse on desktop) ────────────────────────────────
    const light = new THREE.PointLight(0x4084be, 2.5, 20);
    light.position.set(2, 3, 4);
    scene.add(light);

    // ── Animation loop ────────────────────────────────────────────────────────
    let frameId: number;
    const t0 = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!prefersReduced) {
        material.uniforms.uTime.value = (performance.now() - t0) * 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = el.offsetWidth  || window.innerWidth;
      const h = el.offsetHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Mouse light (desktop only) ────────────────────────────────────────────
    const onMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth)  * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      light.position.set(nx * 6, 3 + ny * 2, 4);
      material.uniforms.uLightPos.value = light.position;
    };
    if (!isMobile) window.addEventListener("mousemove", onMouse, { passive: true });

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMouse);
      if (canvas.parentNode === el) el.removeChild(canvas);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

export default GenerativeMountainScene;

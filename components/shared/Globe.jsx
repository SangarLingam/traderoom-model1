import { useEffect, useRef } from 'react';

/**
 * 3D rotating globe built with Three.js (loaded from CDN via useEffect).
 * Props:
 *   size  – canvas size in px (default 420)
 *   small – render a simpler version without the particle cloud (default false)
 */
export default function Globe({ size = 420, small = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // THREE is loaded via <script> in _document.jsx — wait for it
    if (typeof window === 'undefined') return;

    const loadThree = () => {
      if (typeof THREE === 'undefined') {
        // dynamically inject the Three.js CDN script once
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => initGlobe();
        document.head.appendChild(script);
      } else {
        initGlobe();
      }
    };

    const initGlobe = () => {
      const mount = mountRef.current;
      if (!mount) return;

      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      cam.position.z = small ? 3 : 2.6;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      // Core sphere
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.MeshPhongMaterial({ color: 0x004743, emissive: 0x001f1d, specular: 0x00b09a, shininess: 45 })
      );
      scene.add(sphere);

      // Wireframe overlay
      const wire = new THREE.Mesh(
        new THREE.SphereGeometry(1.015, 22, 22),
        new THREE.MeshBasicMaterial({ color: 0x00c4a7, wireframe: true, transparent: true, opacity: 0.08 })
      );
      scene.add(wire);

      // Orbiting rings
      const mkRing = (r, t, op, rx, ry) => {
        const m = new THREE.Mesh(
          new THREE.TorusGeometry(r, t, 16, 120),
          new THREE.MeshBasicMaterial({ color: 0x00c4a7, transparent: true, opacity: op })
        );
        m.rotation.x = rx;
        m.rotation.y = ry;
        scene.add(m);
        return m;
      };
      const r1 = mkRing(1.18, 0.007, 0.32, Math.PI / 2.5, 0);
      const r2 = mkRing(1.35, 0.004, 0.16, Math.PI / 4, Math.PI / 6);

      // Surface dots (Fibonacci sphere distribution)
      const dots = new THREE.Group();
      for (let i = 0; i < 150; i++) {
        const phi   = Math.acos(-1 + (2 * i) / 150);
        const theta = Math.sqrt(150 * Math.PI) * phi;
        const d = new THREE.Mesh(
          new THREE.SphereGeometry(0.006, 4, 4),
          new THREE.MeshBasicMaterial({ color: 0x00d4b5, transparent: true, opacity: 0.9 })
        );
        d.position.setFromSphericalCoords(1.02, phi, theta);
        dots.add(d);
      }
      scene.add(dots);

      // Floating particles (skip on small variant)
      if (!small) {
        const pg = new THREE.BufferGeometry();
        const pos = new Float32Array(300 * 3);
        for (let i = 0; i < 300; i++) {
          const r   = 1.6 + Math.random() * 3;
          const t   = Math.random() * Math.PI * 2;
          const p   = Math.acos(2 * Math.random() - 1);
          pos[i * 3]     = r * Math.sin(p) * Math.cos(t);
          pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
          pos[i * 3 + 2] = r * Math.cos(p);
        }
        pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        scene.add(new THREE.Points(
          pg,
          new THREE.PointsMaterial({ color: 0x00c4a7, size: 0.012, transparent: true, opacity: 0.3 })
        ));
      }

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const dl = new THREE.DirectionalLight(0xffffff, 0.9);
      dl.position.set(5, 3, 5);
      scene.add(dl);
      const rl = new THREE.DirectionalLight(0x00c4a7, 0.6);
      rl.position.set(-3, -1, -2);
      scene.add(rl);

      // Animation loop
      let raf;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        sphere.rotation.y  += 0.004;
        wire.rotation.y    -= 0.002;
        wire.rotation.x    += 0.001;
        dots.rotation.y    += 0.004;
        r1.rotation.z      += 0.004;
        r2.rotation.z      -= 0.003;
        r2.rotation.x      += 0.001;
        renderer.render(scene, cam);
      };
      tick();

      // Cleanup
      mount._cleanup = () => {
        cancelAnimationFrame(raf);
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        renderer.dispose();
      };
    };

    loadThree();

    return () => {
      mountRef.current?._cleanup?.();
    };
  }, [size, small]);

  return <div ref={mountRef} style={{ width: size, height: size }} />;
}

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve rendering on high-DPI screens
    containerRef.current.appendChild(renderer.domElement);

    // Create Point Cloud Geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const particleCount = 20000;

    for (let i = 0; i < particleCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(50); // Random X position
      const y = THREE.MathUtils.randFloatSpread(50); // Random Y position
      const z = THREE.MathUtils.randFloatSpread(50); // Random Z position
      vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    // Material for Points
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
      transparent: true,
      opacity: 0.8,
    });

    // Create Point Cloud
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Mouse movement tracking
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Handle window resizing
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      // animate w/o movement
      pointCloud.rotation.x += 0.0005;
      pointCloud.rotation.y += 0.0008;

      camera.position.x += (mouseX * 10 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed", // Fixed to fill the viewport
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Behind other elements
      }}
    />
  );
};

export default ThreeBackground;
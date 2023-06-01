import React from "react";
import { Canvas } from "@react-three/fiber";
import Birds from "./World/models/Birds";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Lights from "./World/components/Lights";
import Gridlines from "./World/components/Gridlines";

function App() {
  const { Parrot, Flamingo, Stork } = Birds();

  return (
    <div id="canvas-container">
      <Canvas>
        {/*camera={{ position: [-3, 1.5, 12], fov: 26, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 100 }} */}
        <Gridlines />
        <OrbitControls />
        <Lights />
        <Parrot />
        <Flamingo />
        <Stork />
      </Canvas>
    </div>
  );
}

export default App;

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird2.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Bird = () => {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { nodes, materials, scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = 0;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = Math.PI;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.006, 0.006, 0.006]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" 
        rotation={[-0.33, 2.3, 0]}
        >
          <group name="33640762e7c94d0abafaf30409222f2dfbx"
          // rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="eagle" position={[0, 10.607, 0]}
                // rotation={[-Math.PI / 2, 0, 0]} 
                />
                <group name="birdWeightShiftControl" position={[0, 15.976, 1.769]}>
                  <group name="spineBoneConnection" position={[0, 0.674, -3.5]}>
                    <group name="Object_7">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_10"
                        geometry={nodes.Object_10.geometry}
                        material={materials['03_-_Default']}
                        skeleton={nodes.Object_10.skeleton}
                      />
                      <group
                        name="Object_9"
                        position={[0, 10.607, 0]}
                        // rotation={[-Math.PI / 2, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="lookAtTarget"
                  position={[0, 13.537, 34.187]}
                  // rotation={[-Math.PI / 2, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
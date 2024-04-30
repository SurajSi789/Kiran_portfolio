import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/ufo.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
const UFO = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} scale={[2,2,2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Metall Black']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_1.geometry}
        material={materials['Light Red']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_2.geometry}
        material={materials['Light Blue']}
      />
    </group>
  );
}

export default UFO;
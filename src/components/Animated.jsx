import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function SciFiWorker(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/animated.glb")
  useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 0]} // reset to origin
          rotation={[0, 0, 0]} // reset rotation
          scale={0.01} // keep scale manageable
        >
          <group
            name="244f3f7d690442fea3be8b8f4a7612befbx"
            rotation={[Math.PI, 0, 0]} // flipped
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sci_fi_worker">
                  <primitive object={nodes._rootJoint_1} />
                  <skinnedMesh
                    name="Object_227"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_227.geometry}
                    material={materials.texture_pbr_v128_002_Merged0_LOD0_Bake}
                    skeleton={nodes.Object_227.skeleton}
                  />
                  <skinnedMesh
                    name="Object_229"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_229.geometry}
                    material={materials.texture_pbr_v128_006_Merged0_LOD0_Bake}
                    skeleton={nodes.Object_229.skeleton}
                  />
                  <skinnedMesh
                    name="Object_231"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_231.geometry}
                    material={materials.texture_pbr_v128_011_DefaultOptimize_Merged0_LOD0_Bake}
                    skeleton={nodes.Object_231.skeleton}
                  />
                  <skinnedMesh
                    name="Object_233"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_233.geometry}
                    material={materials.texture_pbr_v128_0_Merged0_LOD0_Bake}
                    skeleton={nodes.Object_233.skeleton}
                  />
                  <skinnedMesh
                    name="Object_235"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_235.geometry}
                    material={materials.texture_pbr_v128_0_Merged0_LOD0_Bake_0}
                    skeleton={nodes.Object_235.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models/animated.glb")

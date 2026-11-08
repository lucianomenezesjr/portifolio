import * as THREE from 'three'
import { GLTF as GLTFThree } from 'three-stdlib'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any
      mesh: any
    }
  }
}

declare module 'three-stdlib' {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, THREE.Mesh>
    materials: Record<string, THREE.Material>
  }
}
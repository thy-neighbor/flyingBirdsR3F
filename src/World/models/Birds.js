import { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ParrotGLB from '../../assets/Parrot.glb';
import FlamingoGLB from '../../assets/Flamingo.glb';
import StorkGLB from '../../assets/Stork.glb';
import { useAnimations } from '@react-three/drei';

function Birds() {
  const Parrot = () => {
    const model = useLoader(GLTFLoader, ParrotGLB);
    const { actions } = useAnimations(model.animations, model.scene);

    //console.log("Parrot: ", model, actions);

    useEffect(()=> {
      actions?.KeyAction?.play();
    }, []);

    return(
      <object3D position={[0, 0, 2.5]}>
        <primitive object={model.scene}/>
      </object3D>
    );
  };

  const Flamingo = () => {
    const model = useLoader(GLTFLoader, FlamingoGLB);
    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(()=> {
      actions?.KeyAction?.play();
    }, []);

    return(
      <object3D position={[7.5, 0, -10]}>
        <primitive object={model.scene}/>
      </object3D>
    );
  };

  const Stork = () => {
    const model = useLoader(GLTFLoader, StorkGLB);
    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(()=> {
      actions?.KeyAction?.play();
    }, []);
    
    return(
      <object3D position={[0, -2.5, -10]}>
        <primitive object={model.scene}/>
      </object3D>
    );
  };

  return {
    Parrot,
    Flamingo,
    Stork
  };
}

export default Birds;



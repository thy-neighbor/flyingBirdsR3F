import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = ({testing}) =>{
    const lightRef = useRef();
    
    //useHelper(lightRef, DirectionalLightHelper, 5,'red');

    return(
        <>
            <ambientLight intensity={0.1} skyColor='white' groundColor= 'darkslategrey' />
            <directionalLight ref={lightRef} color="white" position={[10, 10, 10]} />
        </> 
    );
};

export default Lights;
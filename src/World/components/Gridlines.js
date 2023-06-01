import { Stats } from "@react-three/drei";

const Gridlines = ({testing}) => {
    return(
        <>
        {testing ?
            <>
              <Stats />
              <axesHelper args={[2]} />
              <gridHelper args={[10,10]} /> 
            </> 
            : null };
        </>
        
    );
};

export default Gridlines;
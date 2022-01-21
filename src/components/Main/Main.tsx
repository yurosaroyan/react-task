import React, {useState, useEffect, useRef} from 'react';
import Tabs from "../Tabs/Tabs";
import './Main.scss';
import reactPic from '../../assets/img/react.png';

const Main: React.FC = () => {
    const inpVal = useRef(null);
    const [value, setValue] = useState('');
    const handleInput = () => {
        console.log('Input value is ',value)
    }

    
    useEffect(() => {
        const key = localStorage.getItem("loada")
        if(key === null) {
            alert("Component loaded correctly")
        }
        localStorage.setItem("loada","true")
    },[])

    
    useEffect(()=>{
            if(value.includes('a')){
                inpVal.current.classList.add('input_active');
            }else{
                inpVal.current.classList.remove('input_active');

            }

    },[value])

    return (
        <section className="container d_flex">
            <Tabs/>
            <div className="content d_flex">
                <div className="lef_side d_flex">
                    <input ref={inpVal} type="text" onChange={e => setValue(e.target.value)}/>
                    <button className='btn' onClick={() => handleInput()}>ENVIAR</button>
                </div>
                <div className="right_side">
                    <img src={reactPic} alt="React Logo"/>
                </div>
            </div>
        </section>
    );
}

export default Main;

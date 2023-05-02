import './App.css';
import React,{useState} from 'react';

function App(){
    const [Hori, setHori] = useState(10)
    const [Veri, setVeri] = useState(10)
    const [Blur, setBlur] = useState(10)
    const [Color, setColor] = useState('Black')
    return (
        <div className="App">
            <div className="controls">
                <label>Horizontal Length</label>
                <input className="range-field" type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}></input><br/>
                <label>Vertical Length</label>
                <input className="range-field" type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}></input><br/>
                <label>Blur</label>
                <input className="range-field" type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}></input><br/>
                <label>Shadow Color</label>
                <input className="range-field" type="color" value={Color} onChange={(e)=>setColor(e.target.value)}></input><br/>
            </div>
            <div className="output">
                <div className="box" style={{boxShadow: `${Hori}px ${Veri}px ${Blur}px ${Color}`}}>
                    <p>box-Shadow : {Hori}px {Veri}px {Blur}px {Color}</p>
                </div>
            </div>
        </div>
    )
}

export default App;
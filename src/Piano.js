function Piano(props) {
    const pianoKeys = [];
    const octaves = props.octaves || 4;
    const octaveWidth = props.octaveWidth || 161;
    const octaveHeight = props.octaveHeight || 120;
    const whiteKeyWidth = octaveWidth/7;
    const blackKeyWidth = octaveWidth/12;
    for (let i = 0; i < octaves; i++) {
        pianoKeys.push(
            <>
                <rect id={`pianoKey_c${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*0)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_d${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*1)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_e${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*2)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_f${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*3)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_g${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*4)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_a${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*5)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                <rect id={`pianoKey_b${i}`}  fill={props.whiteKeysColor || "#ffffff"} stroke={props.stroke || "black"} x={i*octaveWidth + (whiteKeyWidth*6)}
                      y="0" width={whiteKeyWidth} height={octaveHeight}/>
                
                <rect id={`pianoKey_cs${i}`} fill={props.blackKeysColor || "#000000"} stroke={props.stroke || "black"} x={i*octaveWidth + (1*whiteKeyWidth - blackKeyWidth/2)}
                      y="0" width={blackKeyWidth} height={octaveHeight*0.6}/>
                <rect id={`pianoKey_ds${i}`} fill={props.blackKeysColor || "#000000"} stroke={props.stroke || "black"} x={i*octaveWidth + (2*whiteKeyWidth - blackKeyWidth/2)}
                      y="0" width={blackKeyWidth} height={octaveHeight*0.6}/>
                <rect id={`pianoKey_fs${i}`} fill={props.blackKeysColor || "#000000"} stroke={props.stroke || "black"} x={i*octaveWidth + (4*whiteKeyWidth - blackKeyWidth/2)}
                      y="0" width={blackKeyWidth} height={octaveHeight*0.6}/>
                <rect id={`pianoKey_gs${i}`} fill={props.blackKeysColor || "#000000"} stroke={props.stroke || "black"} x={i*octaveWidth + (5*whiteKeyWidth - blackKeyWidth/2)}
                      y="0" width={blackKeyWidth} height={octaveHeight*0.6}/>
                <rect id={`pianoKey_as${i}`} fill={props.blackKeysColor || "#000000"} stroke={props.stroke || "black"} x={i*octaveWidth + (6*whiteKeyWidth - blackKeyWidth/2)}
                      y="0" width={blackKeyWidth} height={octaveHeight*0.6}/>
            </>
        );
    }

    return (
        <div className="Piano">
            <svg width={octaveWidth*octaves} height={octaveHeight}>
                {pianoKeys}
            </svg>
        </div>
    );
};

export default Piano;

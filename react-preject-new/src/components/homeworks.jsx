import React, { useState, useEffect, useRef } from 'react';

export default function Homeworks() {
    // State for Gmail validation
    const [gmailInput, setGmailInput] = useState('');
    const [gmailResult, setGmailResult] = useState('');
    const regExp = /^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/;

    // State and refs for moving block
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [cntX, setCntX] = useState(0);
    const [cntY, setCntY] = useState(0);

    // State for stopwatch
    const [counter, setCounter] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    // Effect for moving block
    useEffect(() => {
        const moveBlock = () => {
            const parentBlock = parentRef.current;
            const childBlock = childRef.current;
            if (!parentBlock || !childBlock) return;

            const maxWidthOfParent = parentBlock.offsetWidth - childBlock.offsetWidth;
            const maxHeightOfParent = parentBlock.offsetHeight - childBlock.offsetHeight;

            if (cntX < maxWidthOfParent && cntY <= 0) {
                setCntX(cntX + 1);
            } else if (cntY <= maxHeightOfParent && cntX >= maxWidthOfParent) {
                setCntY(cntY + 1);
            } else if (cntY > maxHeightOfParent && cntX > 0) {
                setCntX(cntX - 1);
            } else if (cntX >= 0 && cntY > 0) {
                setCntY(cntY - 1);
            }

            requestAnimationFrame(moveBlock);
        };

        moveBlock();
    }, [cntX, cntY]);

    // Gmail validation handler
    const handleGmailValidation = () => {
        if (regExp.test(gmailInput)) {
            setGmailResult('Successful');
        } else {
            setGmailResult('Unsuccessful');
        }
    };

    // Stopwatch handlers
    const startStopwatch = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopStopwatch = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetStopwatch = () => {
        setCounter(0);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    return (
        <>
            <div className="gmail_block">
                <div className="container">
                    <h3>Home work 1 (part 1)</h3>
                    <div className="inner_gmail_block">
                        <div className="form_gmail">
                            <label htmlFor="gmail_input"></label>
                            <input
                                type="text"
                                id="gmail_input"
                                placeholder="your gmail"
                                value={gmailInput}
                                onChange={e => setGmailInput(e.target.value)}
                            />
                            <button className="btn" id="gmail_button" onClick={handleGmailValidation}>Check gmail</button>
                            <span className="checker" id="gmail_result" style={{ color: gmailResult === 'Successful' ? 'green' : 'red' }}>
                {gmailResult}
              </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="move_block">
                <div className="container">
                    <h3>Home work 1 (part 2)</h3>
                    <div className="inner_move_block">
                        <div className="parent_block" ref={parentRef} style={{ position: 'relative', width: '300px', height: '300px', border: '1px solid black' }}>
                            <div className="child_block" ref={childRef} style={{ position: 'absolute', width: '50px', height: '50px', backgroundColor: 'blue', left: cntX, top: cntY }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stopwatch">
                <div className="container">
                    <h3>Home work 2</h3>
                    <div className="time">
                        <div className="time_block">
                            <div className="interval" id="seconds">{counter}</div>
                        </div>
                    </div>
                    <div className="time_buttons">
                        <button className="btn" id="start" onClick={startStopwatch}>Start</button>
                        <button className="btn" id="stop" onClick={stopStopwatch}>Stop</button>
                        <button className="btn" id="reset" onClick={resetStopwatch}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}

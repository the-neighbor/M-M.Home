import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, typingSpeed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, typingSpeed]);

    return (
        <div className="typewriter">
            <span className="typed-text">{displayedText}</span>
            <span className="cursor">_</span>
        </div>
    );
};

export default Typewriter;

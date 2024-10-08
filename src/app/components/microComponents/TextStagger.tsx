import { motion } from 'framer-motion';
import React from 'react';

interface TextStaggerProps {
    text: string;
    title: boolean;
}

export default function TextStagger(props: TextStaggerProps) {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.05,
                duration: 0
            }
        })
    };

    const characters = props.text.split('').map((char, index) => ({
        char: char === ' ' ? '\u00A0' : char, // Replace spaces with non-breaking space
        index
    }));

    

    return (
        <motion.div
            className={'staggered-text flex flex-wrap justify-start ' + (props.title ? ' title' : '')}
            initial='hidden'
            animate='visible'
        >
            {characters.map(({ char, index }) => (
                <motion.span
                    key={index}
                    variants={textVariants}
                    custom={index}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}

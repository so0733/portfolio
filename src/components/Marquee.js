import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Cover = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ justify }) => justify || 'flex-start'};
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
    
    &:nth-child(1) {
        margin-top: 10vh;
    }

    &:nth-child(4) {
        margin-bottom: 10vh;
    }
`;

const Text = styled.p`
    display: flex;
    padding: 2vh 0;
    color: white;
    font-size: clamp(1vw, 4vw, 4rem);
    font-family: "notosans_1_font";
    white-space: nowrap;
`;

const textData = [
    {
        className: 'first-parallel',
        text: 'Language C++ HTML CSS JavaScript Language C++ HTML CSS JavaScript ',
        rotate: -2,
        justify: 'flex-start',
    },
    {
        className: 'second-parallel',
        text: 'Frontend React Styled-Components Bootstrap Redux',
        rotate: 2,
        justify: 'flex-end',
    },
    {
        className: 'third-parallel',
        text: "Backend NodeJS Database MongoDB MySQL DevOps GitHub",
        rotate: -2,
        justify: 'flex-start',
    },
];

const Marquee = () => {
    const pTagRefs = useRef([]);

    useEffect(() => {
        const counts = [0, 0, 0];
        
        function initTexts(element, textArray) {
            const fullText = [...textArray, ...textArray].join('\u00A0\u00A0\u00A0\u00A0');
            element.innerText = fullText;
        }
        
        function marqueeText(count, element, direction) {
            if (count > element.scrollWidth / 2) {
                element.style.transform = `translate3d(0, 0, 0)`;
                count = 0;
            }
            element.style.transform = `translate3d(${direction * count}px, 0, 0)`;
            return count;
        }
        
        function animate() {
            counts.forEach((count, i) => {
                counts[i] += 1;
                counts[i] = marqueeText(counts[i], pTagRefs.current[i], i % 2 === 0 ? -1 : 1);
            });
            requestAnimationFrame(animate);
        }
        
        function scrollHandler() {
            counts.forEach((_, i) => (counts[i] += 15));
        }

        pTagRefs.current.forEach((pTag, i) => {
            initTexts(pTag, textData[i].text.split(' '));
        });
        
        window.addEventListener('scroll', scrollHandler);
        animate();
        
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    
    return (
        <>
            {textData.map((data, index) => (
                <Cover key={index} rotate={data.rotate} justify={data.justify} className="cover">
                    <Text ref={(el) => (pTagRefs.current[index] = el)} />    
                </Cover>
            ))}
            <Container />
        </>
    );
};

export default Marquee;

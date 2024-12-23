import { useState, useEffect } from 'react';

export function useWindowSize(props: { 
    useState: typeof useState; 
    useEffect:  typeof useEffect
}) {
    const [windowSize, setWindowSize] = props.useState<{width:number,height:number}>({
        width: 0,
        height: 0,
    });
    props?.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

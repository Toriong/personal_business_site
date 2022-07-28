import React, { useEffect, useState } from 'react'
import { useGetViewPortHookReturnVal } from '../interfaces/interfaces';


const useGetViewPortWidth = (): useGetViewPortHookReturnVal => {
    const [widthPixels, setWidthPixels] = useState(0);

    const handleViewPortResize = () => {
        const innerWidth = window.innerWidth;
        setWidthPixels(innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleViewPortResize);
        const innerWidth = window.innerWidth;
        setWidthPixels(innerWidth);
    }, [window.innerWidth]);

    return { widthPixels };
}

export default useGetViewPortWidth
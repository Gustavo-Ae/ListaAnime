import React, { useRef } from 'react'

export default function useDebounce(fn, delay){  //(função, tempo de espera)
    
    const timeoutRef = useRef(null)

    function debouncedFn(...args){
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            fn(...args)
        }, delay)
    }

    return debouncedFn;
}
 

/*
    timeoutRef = vai armazenar o id do evento anterior , para depois cancelar utilizando o window.clearTimeout(); 
    clearTimeout = cancela o evento;
    window.setTimeout = É uma função que esperar 500ms(delay) e depois executa;
*/

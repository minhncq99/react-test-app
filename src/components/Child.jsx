import { useEffect, useState } from "react";

export default function Child({state1, state2}) {

    const [state3, setState3] = useState(0);
    const [state4, setState4] = useState(0);
    const [state5, setState5] = useState(0);
    const [state6, setState6] = useState(0);
    const [state7, setState7] = useState(0);
    const [state8, setState8] = useState(0);

    useEffect(_ => {
        console.log('Testing Child');
    }, [state1, state2]);

    return (
        <>
        </>
    )
}
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "../redux/Counter";
import {getStudent} from "../redux/student";

export const House = () => {
    const counter = useSelector((store) => store.counter);
    const store = useSelector((store) => store.student)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStudent());
    },[])

        return(
        <>
            <h1>Hello {counter.data}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>
                    +
                </button>
                <button onClick={() => dispatch(decrement({a: 5}))}>
                    -
                </button>
                {store.student.map((value, index)=> {
                    return(
                        <h1 key={index}>{value.id} {value.name}</h1>
                )
                })}
            </div>
            {/*<h2>Hello{student.value}</h2>*/}
        </>
    );
};

export default House;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPets} from "../../store/petsSlice";
import {Spinner} from "react-bootstrap";

const PetsPage = () => {

    const {pets, preloading} = useSelector(state => state.petsSliceReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('иди нпхуй')
        dispatch(getPets())

        console.log(preloading)

    }, []);

    return (
        <div>
            {
                preloading ?
                    (
                        pets.map((pet, i) =>(
                            <>
                                <h2 id={i}>
                                    Id: {pet.id}
                                    <br/>
                                    full_name: {pet.full_name}
                                    <br/>
                                    status: {pet.status}

                                </h2>
                                <br/>
                            </>

                        ))
                    ) : (
                        <Spinner animation="border"/>
                    )
            }
        </div>
    );
};

export default PetsPage;
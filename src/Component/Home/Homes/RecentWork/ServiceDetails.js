import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    let { id } = useParams()


    // const [store, setStore] = useState([])
    // const [single,setSingle]=useState({})

    // useEffect(() => {

    //     fetch('/tamal.json')
    //         .then(res => res.json())
    //         .then(data => setStore(data));
    // }, [id])

    // useEffect(() => {

    //     const values = store.find((people) => people.id === id);
    //     setSingle(values)
    //     console.log(values)
    // }, [store])
    return (
        <div>
            {/* <h1>{single?.name}</h1> */}
            <h1>tamal</h1>
        </div>
    );
};

export default ServiceDetails;
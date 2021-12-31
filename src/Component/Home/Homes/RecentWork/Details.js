import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';

const Details = () => {

    let { id } = useParams()


    const [store, setStore] = useState([])
    const [single,setSingle]=useState({})

    useEffect(() => {

        fetch('/tamal.json')
            .then(res => res.json())
            .then(data => setStore(data));
    }, [id])

    useEffect(() => {

        const values = store.find((people) => people.id === id);
        setSingle(values)
        console.log(values)
    }, [store])
    return (
        <div>
      <Navigation></Navigation>
            <div>
            <img className="image-design" src={single?.image1} class="card-img-top" alt="..." />
            <img className="image-design" src={single?.image2} class="card-img-top" alt="..." />
            <img className="image-design" src={single?.image3} class="card-img-top" alt="..." />
            </div>
            <h1>details part</h1>
            <h2>{single?.name}</h2>
           <div className="container">
           <h5>{single?.description}</h5>
            <a>site link: {single?.site} </a>
            <h6>server link: {single?.server}</h6>
            <h6>client link: {single?.client}</h6>
           </div>
           
        </div>
    );
};

export default Details;
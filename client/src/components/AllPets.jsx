import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const AllPets = (props) => {


    const [allPets,setAllPets] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const {id} = useParams();

    const history = useHistory();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                console.log("Response when trying to get all pets: ",res)
                setAllPets(res.data.results)
            })
            .catch(err=>{
                console.log("Error when trying to get all pets: ",err)
            })

    },[])





    return (
        <div>
            {
                allPets.map((item,i)=>{
                    return (
                        <div style={{border: "1px solid black"}} key={i}>
                            <p> Pet name: {item.name} </p>
                            <p>Type: {item.type}</p>
                            <Link to={`/pet/single/${item._id}`} className="btn btn-info">Details</Link>
                            <Link to={`/pet/edit/${item._id}`} className="btn btn-warning">Edit Pet</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}






export default AllPets;
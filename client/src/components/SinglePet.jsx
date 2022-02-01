import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";

const SinglePet = () => {

    const [petObj, setPetObj] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: 0
    })
    
    const {id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                setPetObj(res.data.results)
            })
            .catch(err=>{
                console.log("Error when retrieving single pet: ",err)
            })
    },[])


    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("Logging deleted pet: ",res)
                history.push("/")
            })
    }

    const likePet = () => {
        // e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/like/${id}`)
            .then(res=>{
                console.log("This pet has been liked",res)
            })
            .catch(err=>console.log("Error when liking a pet: ",err))
    }


    return (
        <div>
            <div>
                <h6>
                Details About: {petObj.name}
                <button onClick={deletePet} className="btn btn-danger">Adopt {petObj.name}</button>
                <Link to="/" className="btn btn-info">Return to the home screen</Link>
                </h6>
            </div>
            <div>
                Pet type: {petObj.type}
            </div>
            <div>
                Pet description: {petObj.description}
            </div>
            <div>
                Skill #1: {petObj.skill1?petObj.skill1:"No skills here... Yet!"}
            </div>
            <div>
                Skill #2: {petObj.skill2?petObj.skill2:"No skills here... Yet!"}
            </div>
            <div>
                Skill #3: {petObj.skill3?petObj.skill3:"No skills here... Yet!"}
            </div>

            <div>
                Likes: {petObj.likes}
                <button onClick={()=>likePet(petObj._id)} className="btn btn-info">Like Pet</button>
            </div>
        </div>
    );
};


export default SinglePet;
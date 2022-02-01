import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const EditPetForm = (props) => { //change function name for each project

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
    
    let [formErrors, setFormErrors] = useState({});


    const changeHandler = e => {
        setPetObj({
            ...petObj,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                if (res.data.message) {
                    history.push("/error")
                }
                else {
                    setPetObj(res.data.results)
                }
            })
            .catch(err=>console.log("Error when retrieving single pet: ",err))
    },[])


    const updatePetForm = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${id}`, petObj)
            .then(res=>{
                console.log("Response on front end when editing a pet: ",res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else {
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log("Error when submitting new pet form: ",err)
            })
    }

    return (
        <div>
            <h6>Submit your changes to this pet below</h6>
            <form action="" onSubmit={updatePetForm}>

                <div className="form-group">
                    <label htmlFor="">Pet Name: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.name} className="form-control" name="name" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Type: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.type} className="form-control" name="type" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Description: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.description} className="form-control" name="description" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #1 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.skill1} className="form-control" name="skill1" onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #2 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.skill2} className="form-control" name="skill2" onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #3 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" value={petObj.skill3} className="form-control" name="skill3" onChange={changeHandler}/>
                </div>

                <hr />
                <input type="submit" value="Submit Changes" className="btn btn-success" />
                <Link to="/" className="btn btn-info">Return to the home screen</Link>
                {/* <p>{FormData.message="Pets validation failed: name: Error, expected `name` to be unique. Value: `Rusty`"?"Pet name is already taken!":""}</p> */}
            </form>
        </div>
    );
};



export default EditPetForm;
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";


const NewPetForm = (props) => { //change function name for each project

    const [petObj, setPetObj] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: 0
    })



    let [formErrors, setFormErrors] = useState({});
    const history = useHistory();


    const changeHandler = e => {
        setPetObj({
            ...petObj,
            [e.target.name]: e.target.value
        })
    }


    const submitNewPetForm = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/pets', petObj)
            .then(res=>{
                console.log("Response on front end when submitting new pet form: ",res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else if (res.data.keyPattern) {
                    setFormErrors({message: "Name already taken"})
                }
                else {
                    // we need to adjust a prop here
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log("Error when submitting new pet form: ",err)
            })
    }

    return (
        <div>
            <h6>Know a pet who needs a home?</h6>
            <form action="" onSubmit={submitNewPetForm}>

                <div className="form-group">
                    <label htmlFor="">Pet Name: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="name" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.name?.message}</p>
                    <p className="text-danger">{formErrors.message?formErrors.message:""}</p>


                </div>

                <div className="form-group">
                    <label htmlFor="">Type: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="type" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Description: </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="description" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #1 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="skill1" onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #2 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="skill2" onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill #3 (optional): </label> {/* change labels and inputs for each project*/ }
                    <input type="text" className="form-control" name="skill3" onChange={changeHandler}/>
                </div>

                <hr />
                <input type="submit" value="Add Your Pet" className="btn btn-success" />
                <Link to="/" className="btn btn-info">Return to the home screen</Link>

            </form>
        </div>
    );
};



export default NewPetForm;
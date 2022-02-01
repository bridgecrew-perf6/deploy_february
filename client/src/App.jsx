import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, {useState} from 'react';
import NewPetForm from './components/NewPetForm';
import AllPets from './components/AllPets';
import SinglePet from './components/SinglePet';
import EditPetForm from './components/EditPetForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3>Welcome to the Pet Shelter!</h3>
        <hr />

        <Switch>

          <Route exact path="/">
            <h6>
              These lovely pets need a home. Click below for details.
              <Link to="/pets" className="m-5">Add a new pet to the shelter</Link>
              <hr />
              <AllPets/>
            </h6>
          </Route>

          <Route exact path="/pets">
            <NewPetForm/>
          </Route>

          <Route exact path="/pet/single/:id">
            <SinglePet/>
          </Route>

          <Route exact path="/pet/edit/:id">
            <EditPetForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

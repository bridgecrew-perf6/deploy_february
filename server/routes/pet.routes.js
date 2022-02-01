// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "pet.controller" //change this for each project

const PetController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets)
    app.get('/api/pets/:id', PetController.getOnePet)
    app.post('/api/pets', PetController.createPet)
    app.put('/api/pets/:id', PetController.updatePet)
    app.put('/api/pets/like/:id',PetController.likePet)
    app.delete('/api/pets/:id',PetController.deletePet)
}

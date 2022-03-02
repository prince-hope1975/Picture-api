import Pictures from "../models/pictures.js"

// Query the database for all Pictures
const getAllPics = (req, res) => {
  res.send("All pictures");
};

// Upload single picture to the dataBase
const uploadPicture = async (req, res) => {
    const pic = await Pictures.create(req.body)
  res.status(201).json({pic});
};

// Retrieve single picture from the database
const getPicture = (req, res) => {
    const {id }= req.params
  res.json({id});
};

// Allows to edit propertires of the upload
const editPicture = (req, res) => {
    const {id }= req.params
  res.json({edit:id, status: "success"});
};

// Allows delete of specific assets
const deletePicture = (req, res) => {
  res.send("Delete");
};

export { getAllPics, uploadPicture, editPicture, deletePicture, getPicture };

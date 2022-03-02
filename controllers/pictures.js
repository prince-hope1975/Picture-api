import Pictures from "../models/pictures.js";

// Query the database for all Pictures
const getAllPics = async (req, res) => {
  try {
    const allPics = await Pictures.find({});
    console.log(allPics);
    res.status(200).json({ Pictures: allPics });
  } catch (e) {
    console.error(e);
    res.status(501).json(e);
  }
};

// Upload single picture to the dataBase
const uploadPicture = async (req, res) => {
  try {
    const pic = await Pictures.create(req.body);
    res.status(201).json({ pic });
  } catch (e) {
    res.status(500).json({ msg: e });
    console.error(e);
  }
};

// Retrieve single picture from the database
const getPicture = async (req, res) => {
  try {
    const { id } = req.params;
    const pic = await Pictures.findById(id);
    if (!pic) {
      res.status(404).json({ msg: "No Pic with the id "+ id });
      return;
    }
    res.json({ Pictures: [pic] });
  } catch (e) {
    console.error(e);
    res.status(501).json({ msg: e });
  }
};

// Allows to edit propertires of the upload
const editPicture = (req, res) => {
  const { id } = req.params;
  res.json({ edit: id, status: "success" });
};

// Allows delete of specific assets
const deletePicture = async(req, res) => {
   try {
    const { id } = req.params;
    const pic = await Pictures.findByIdAndDelete(id);
    if (!pic) {
      res.status(404).json({ msg: "No Pic with the id "+ id });
      return;
    }
    console.log(pic)
    res.json({ Pictures: [pic] });
  } catch (e) {
    console.error(e);
    res.status(501).json({ msg: e });
  }
};


export { getAllPics, uploadPicture, editPicture, deletePicture, getPicture };

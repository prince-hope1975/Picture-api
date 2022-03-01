const getAllPics = (req, res) => {
  res.send("All pictures");
};
const uploadPicture = (req, res) => {
  res.json(req.body);
};
const getPicture = (req, res) => {
    const {id }= req.params
  res.json({id});
};
const editPicture = (req, res) => {
    const {id }= req.params
  res.json({edit:id, status: "success"});
};
const deletePicture = (req, res) => {
  res.send("Delete");
};

export { getAllPics, uploadPicture, editPicture, deletePicture, getPicture };

import express from "express";
const router = express.Router();
import {
  getAllPics,
  uploadPicture,
  editPicture,
  deletePicture,
  getPicture,
} from "../controllers/pictures.js";

router.route("/").get(getAllPics);

router.route("/").post(uploadPicture);

router.route("/:id").get(getPicture);

router.route("/:id").patch(editPicture);

router.route("/:id").delete(deletePicture);

export { router };

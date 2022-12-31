import { Schema, model, models } from "mongoose";

const FormationSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Le champ titre est obligatoire"],
      trim: true,
      unique: true,
      maxlength: [40, "Le titre ne peut pas être supérieur à 40 caractéres"],
    },
    description: {
      type: String,
      required: [true, "Le champ description est obligatoire"],
      trim: true,
      maxlength: [
        400,
        "La description ne peut pas être supérieur à 400 caractéres",
      ],
    },
    domain: {
      type: String,
      required: [true, "Le champ domaine est obligatoire"],
      trim: true,
    },
    thumb: {
      type: String,
      required: false,
      trim: true,
    },
    videos: {
      type: String,
      required: false,
      trim: true,
    },
    duration: {
      type: Number,
      required: false,
      trim: true,
    },
    numberOfVideos: {
      type: Number,
      required: false,
      trim: true,
    },
    instructor: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Formation || model("Formation", FormationSchema);

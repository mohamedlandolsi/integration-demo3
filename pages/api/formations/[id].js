import Formation from "../../../model/Formation";
import { dbConnect, runMiddleware } from "../../../utils/index";
import Morgan from "morgan";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;
  const morgan = Morgan("dev");

  switch (method) {
    case "GET":
      try {
        const formation = await Formation.findById(id);
        if (!formation)
          return res.status(404).json({ msg: "Formation n'existe pas" });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(formation);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedFormation = await Formation.findByIdAndDelete(id);
        if (!deletedFormation)
          return res.status(404).json({ msg: "Formation n'existe pas" });
        await runMiddleware(req, res, Morgan);
        return res.status(204).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedFormation = await Formation.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!updatedFormation)
          return res.status(404).json({ msg: "Formation n'existe pas" });
        return res.status(200).json(updatedFormation);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};

import Formation from "../../../model/Formation";
import { dbConnect, runMiddleware } from "../../../utils/index";
import Morgan from "morgan";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("dev");

  switch (method) {
    case "GET":
      try {
        const formations = await Formation.find();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(formations);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newFormation = new Formation(body);
        const savedFormation = await newFormation.save();
        await runMiddleware(req, res, Morgan);
        return res.status(200).json(savedFormation);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};

import { services } from "../../../app";
import StatusCode from "status-code-enum";
export const validateRoomCreation = async (req, res, next) => {
  const { name, isPublic, solo, score, ...rest } = req.body;
  if (Object.keys(rest).length > 0) {
    return res
      .status(StatusCode.ClientErrorBadRequest)
      .json({ message: "Invalid request parameters" });
  }
  if (!name) {
    return res
      .status(StatusCode.ClientErrorBadRequest)
      .send("Room name is required");
  }
  console.log("! req", req["user"]);
  if (services.room.exist(req.user.id))
    return res
      .status(StatusCode.ClientErrorConflict)
      .json({ message: "You already own a room" });
  next();
};

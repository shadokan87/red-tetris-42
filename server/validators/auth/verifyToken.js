import { services } from "../../app";
import { StatusCode } from "status-code-enum";

export const verifyToken = async (req, res, next) => {
  if (req.user || req.decoded)
    return res.status(StatusCode.ClientErrorForbidden).send("Forbidden");

  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res
      .status(StatusCode.ClientErrorUnauthorized)
      .json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  let decoded;
  let user;
  try {
    decoded = await services.auth.verify(token);
    user = await services.user.findByUserName(decoded.username);
    console.log("!!+++++++++ user", user);
  } catch (err) {
    return res.status(StatusCode.ClientErrorUnauthorized).send("Unauthorized");
  }

  if (!decoded)
    return res.status(StatusCode.ClientErrorUnauthorized).send("Unauthorized");

  req.decoded = decoded;
  req.user = user;
  next();
};

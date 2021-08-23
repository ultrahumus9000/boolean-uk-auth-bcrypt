import findUserInfo from "./service";
import { Response, Request } from "express";
async function getUserInfoAfterAuthentication(req: Request, res: Response) {
  const checkedInfo = req.body;
  try {
    const result = await findUserInfo(checkedInfo);
    res.json({ id: result.id, email: result.email });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export default getUserInfoAfterAuthentication;

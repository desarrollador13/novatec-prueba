import { Request, Response } from 'express';
import Controller from 'contrib/interfaces/controllerInterface';
import GenericResponse from '../contrib/utils/generalResponse';
import { HTTP_STATUS } from '../contrib/utils/httpUtils';
const info = require("../../package.json")
export class VersionController implements Controller {

    public async create(_req: Request, res: Response) {
        let code: any = HTTP_STATUS.CREATED;
        let response: GenericResponse<any> = new GenericResponse<any>();
        try {
            response.setData(info.version);
            response.setMessage("Succesfully Information");
        }catch (e:any) {
            code = e.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
            response.setMessage(e.message);
        }
        return res.status(code).send(response);
    }

}
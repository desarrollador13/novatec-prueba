import { VersionController } from '../controllers/versionController'
import { Application } from 'express';

export default class VersionRouter {
    private endPoint: string;
    private controllers: VersionController;

    constructor(app: Application) {
        this.endPoint = "/api/version";
        this.controllers = new VersionController();

        app.route(this.endPoint)
        .post(this.controllers.create.bind(this.controllers));
    }
}
import VersionRouter from "./routes/versionRouter";

module.exports = function(app:any) {
    new VersionRouter(app);
}
import express from 'express';
const Application = express();
import VersionRouter from '../../routes/versionRouter';
const versionRouter =  new VersionRouter(Application);
import chai from 'chai';

const expect = chai.expect;

describe("Crear endpoint para prueba",()=>{
    test(`el objecto PruebaN1Router debe contener las propiedades del endpoint`,()=>{
        expect(versionRouter).to.be.instanceof(VersionRouter);
    })

    test(`se debe establecer el valor de /api/version`,()=>{
        expect(versionRouter).to.has.property("endPoint").to.be.eq("/api/version");
    })
})
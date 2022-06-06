import {VersionController} from '../../controllers/versionController';
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai)

const versionController = new VersionController();
describe("Pruebas unitarias sobre Controller",()=>{
    test(`Debe existir un objecto VersionController`,()=>{
        expect(versionController).to.be.instanceof(VersionController);
    })

    test(`El objecto VersionController debe responder al metodo`,()=>{
        expect(versionController).respondsTo("create");
    })

    test(`verifica que la opcion create no se ha nula`,()=>{
        expect(versionController.create).is.not.null;
    })
})
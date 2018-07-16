const evalPolish = require('../js/evalPolish');
const assert = require('assert');

describe('Testing evalPolish', () => {
    
    it('Debe de devolver 3 para "1 2 +"', ()=>{
        assert.equal(evalPolish("1 2 +"), 3);
    });

    it('Debe de devolver 10 para "1 2 + 3 4 + +"', ()=>{
        assert.equal(evalPolish("1 2 + 3 4 + +"), 10);
    });

    it('Debe de lanzar un error para "1 2 + 3 4 +"', () => {
        assert.throws( () => evalPolish("1 2 + 3 4 +") , Error );
    });

    it('Debe de lanzar un error para "ola k ase?"', () => {
        assert.throws( () => evalPolish("ola k ase?") , Error );
    });
    
    it('Debe de lanzar un error para "1 2 3 4 5"', () => {
        assert.throws( () => evalPolish("1 2 3 4 5") , Error );
    });

    it('Debe de lanzar un error para "+ + + + +"', () => {
        assert.throws( () => evalPolish("+ + + + +") , Error );
    });
})
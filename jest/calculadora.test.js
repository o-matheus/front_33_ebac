const calc = require('./calculadora')

describe('Testes para a calculadora', () => {
    test('Somar 2 e 2 deve resultar em 4', () => {
        const minhaSoma = calc.soma(2, 2);
    
        expect(minhaSoma).toBe(4);
    });
    
    test('Multiplicar 3 e 3 deve resultar em 9', () => {
        const minhaMultiplicacao = calc.multiplicacao(3, 3);
    
        expect(minhaMultiplicacao).toBe(9);
    });
})


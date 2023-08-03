const getControllerOrbs = require('./getControllerOrbs');

describe('A função retorna um array com a quantidade de orbes apenas dos controladores', () => {
    it('Ao executar a função, retorna um array contendo o nome dos agentes, e o número de orbes de suas ultimates.', () => {
        const arrayControllers = [ 'Astra: 7', 'Brimstone: 7', 'Omen: 7', 'Viper: 7' ]
        expect(getControllerOrbs()).toEqual(arrayControllers);
    })
    it('O primeiro elemento do array deve ser a Astra.',() => {
        const firstElement = [...getControllerOrbs()].shift();
        expect(firstElement).toBe('Astra: 7');
    })
    it('O último elemento do array deve ser a Viper.',() => {
        const lastElement = [...getControllerOrbs()].pop();
        expect(lastElement).toBe('Viper: 7');
    })
})
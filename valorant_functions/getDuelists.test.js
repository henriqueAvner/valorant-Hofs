const getDuelists = require('./getDuelists');

describe('A função retorna apena um grupo específico do array', () => {
    it('Retorna um novo array, apenas com os 6 duelistas;', () => {
        expect(getDuelists().length).toEqual(6);
    })
    it('O último objeto deve ser o Yoru;', () => {
       const yoru = {
        name: 'Yoru',
        pais: 'Japão',
        classe: 'Duelista',
        habilidades: [
          'ponto cego',
          'passagem dimensional',
          'distração',
          'espionagem dimensional'
        ],
        orbes: 6
      }
      expect(getDuelists()[5]).toEqual(yoru);
    })
    it('Todos os objeto devem possuir a classe DUELISTA;', () => {
        const classDuel = getDuelists().filter(duel => duel).map(classe => classe.classe);
        expect(classDuel).toContain('Duelista');
    })
    it('O primeiro duelista do array de objetos é a Jett', () => {
        const duelJett = getDuelists().filter(duel => duel).map(nome => nome.name);
        expect(duelJett).toContain('Jett');
    })
})
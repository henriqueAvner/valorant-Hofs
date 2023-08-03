const agents = require('../valorant_functions/agents');

const getDuelists = () => {
   return agents.filter((duel) => {
    if (duel.classe === 'Duelista') {
        return duel;
    }
   })
}

    
module.exports = getDuelists;
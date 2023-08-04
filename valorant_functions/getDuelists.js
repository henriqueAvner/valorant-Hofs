const agents = require('../valorant_functions/agents');

const getDuelists = () => agents
    .filter((duel) => duel.classe === 'Duelista' ? duel : '');

    
module.exports = getDuelists;
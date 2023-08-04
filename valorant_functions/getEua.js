const agents = require('../valorant_functions/agents');

const getEuas = () => agents
    .filter((country) => country.pais === 'Estados Unidos' ? country : '')
    .map((agent) => agent.name);
    
module.exports = getEuas;
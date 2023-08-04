const agents = require('../valorant_functions/agents');

const getAlfabeticAgents = () => agents
    .filter((agent) => agent)
    .map((nome) =>nome.name)
    .sort((a, b) => a.localeCompare(b));
module.exports = getAlfabeticAgents;
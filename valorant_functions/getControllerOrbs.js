const agents = require('../valorant_functions/agents');

const getControllerOrbs = () => agents
    .filter(agent => agent.classe === 'Controlador' ? agent : '')
    .map((number) =>`${number.name}: ${number.orbes}`);

module.exports = getControllerOrbs;
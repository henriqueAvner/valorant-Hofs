const agents = require('../valorant_functions/agents');

const getControllerOrbs = () => {
    return agents.filter(agent => {
        if (agent.classe === 'Controlador') {
            return agent;
        }
    }).map((number) => {
        return `${number.name}: ${number.orbes}`;
    });
}

module.exports = getControllerOrbs;
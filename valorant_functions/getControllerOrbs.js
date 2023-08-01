const agents = require('../valorant_functions/agents');

const getControllerOrbs = () => {
    return agents.filter(agent => {
        if (agent.classe === 'Controlador') {
            return agent;
        }
    }).map((number) => {
        return `Orbes: ${number.orbes}`;
    });
}
console.log(getControllerOrbs());
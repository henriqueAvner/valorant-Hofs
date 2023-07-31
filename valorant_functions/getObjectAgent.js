const agents = require('../valorant_functions/agents');

const getObjectAgent = (agentObject) => {
   return agents.filter((agent) => {
        if (agentObject === agent.name) {
            return agent;
        }
    })
}
console.log(getObjectAgent('Viper'));
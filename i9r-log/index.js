'use strict';

//Add npm modules
var log = require("winston");

//winston defaults
var winston_default = {
    transports: [
        {
            type: "Console",
            level: "info"
        },
        {
            type: "File",
            level: "info",
            filename: "log.log"
        }
    ]
}

//return log object to use
module.exports = function logger_setup(config) {
    if(!config){
        config=winston_default;
    }
    return new(winston.Logger)(config);
};

const {species} = require("./index");
module.exports.users = [
    { id: "1", name: "Jon", email: "decaryi@gmail.com" },
    { id: "2", name: "Shannon", email: "shay.kelley@gmail.com" },
];
module.exports.tasks = [
    { id: "1", name: "washTanks", completed: true, userId: "1" },
    { id:  "2", name: "waterTanks", completed: false, userId: "2" },
    { id: "3", name: "feedGeckos", completed: false, userId: "1" },
    { id: "4", name: "eggCheck", completed: true, userId: "2" },
];
module.exports.geckos = [
    { id: "1", name: "noh", latinName: "rhachodactylus leachianus", origin: "captiveBred", hatchDate: "feb5", gender: true, description: "blah" },
    { id: "2", name: "houdini", latinName: "phelsuma standingii", origin: "wildCaught", hatchDate: "1/12/21", gender: false, description: "blah" },
    { id: "3", name: "honda", latinName: "", origin: "petStore", hatchDate: "1/2/33", gender: false, description: "blah"},
    { id: "4", name: "george", latinName: "eurodactylodes viellerdi", origin: "privateBreeder", hatchDate: "dec", gender: false, description: ""},
    { id: "5", name: "pady", latinName: "rhachodactylus crested", origin: "petco", hatchDate: "st  padys", gender: false, description: "blah"},
];
module.exports.breeds = [
    { id: "1", latinName: "rhachodactylus leachianus", commonName: "giant gecko", naturalHabitat: "New Caledonia", tempHigh: 95, tempLow: 55, humidity: 70, speciesReqs: "large cage"},
    { id: "2", latinName: "eurodactylodes viellerdi", commonName: "chameleon gecko", naturalHabitat: "New Caledonia", tempHigh: 96, tempLow: 56, humidity: 75, speciesReqs: "blah" },
    { id: "3", latinName: "phelsuma standingii", commonName: "standings day gecko", naturalHabitat: "madagascar", tempHigh: 110, tempLow: 60, humidity: 70, speciesReqs: "blah blah" },
];
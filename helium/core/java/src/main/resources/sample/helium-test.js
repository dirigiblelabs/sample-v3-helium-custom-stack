var helium = require("sample/helium");
var isInert = helium.isInert();
console.info(isInert);

var response = require("http/v3/response");
response.println("Is Helium an inert gas? - " + isInert);
response.flush();
response.close();
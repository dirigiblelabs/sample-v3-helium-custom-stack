var java = require('core/v3/java');

exports.isInert = function() {
	var output = java.call('io.dirigible.helium.HeliumFacade', 'isInert', []);
	return output;
};

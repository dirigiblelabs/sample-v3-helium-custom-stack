var factory = require('db/v4/dao');
var dao = factory.create({
	'table': 'SAMPLE_HELIUM',
	'properties': [
		{
			'name':  'id',
			'column': 'HELIUM_ID',
			'type':'INTEGER',
			'id': true,
			'required': true
		},		{
			'name':  'key',
			'column': 'HELIUM_KEY',
			'type':'VARCHAR',
			'id': false,
			'required': false
		},		{
			'name':  'value',
			'column': 'HELIUM_VALUE',
			'type':'VARCHAR',
			'id': false,
			'required': false
		}]
});

exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

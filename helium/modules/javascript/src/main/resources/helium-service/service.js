var rs = require('http/v3/rs');
var response = require('http/v3/response');
var dao = require('helium-service/dao.js');

// HTTP 200
var sendResponseOk = function(entity) {
	sendResponse(200, entity);
};

// HTTP 201
var sendResponseCreated = function(entity) {
	sendResponse(201, entity);
};

// HTTP 200
var sendResponseNoContent = function() {
	sendResponse(204);
};

// HTTP 400
var sendResponseBadRequest = function(message) {
	sendResponse(404, {
		'code': 400,
		'message': message
	});
};

// HTTP 404
var sendResponseNotFound = function(message) {
	sendResponse(404, {
		'code': 404,
		'message': message
	});
};

// Generic
var sendResponse = function(status, body) {
	response.setContentType('application/json');
	response.setStatus(status);
	if (body) {
		response.println(JSON.stringify(body));
	}
};


rs.service()
	.resource('')
		.get(function() {
			var entities = dao.list();
			sendResponseOk(entities);
		})
	.resource('{id}')
		.get(function(ctx) {
			var id = ctx.pathParameters.id;
			var entity = dao.get(id);
			if (entity) {
			    sendResponseOk(entity);
			} else {
				sendResponseNotFound('Property not found');
			}
		})
	.resource('')
		.post(function(ctx, request, response) {
			var entity = request.getJSON();
			entity.id = dao.create(entity);
			response.setHeader('Content-Location', '/services/v3/js/helium-service/service.js/' + entity.id);
			sendResponseCreated(entity);
		})
	.resource('{id}')
		.put(function(ctx, request) {
			var entity = request.getJSON();
			entity.id = ctx.pathParameters.id;
			dao.update(entity);
			sendResponseOk(entity);
		})
	.resource('{id}')
		.delete(function(ctx) {
			var id = ctx.pathParameters.id;
			var entity = dao.get(id);
			if (entity) {
				dao.delete(id);
				sendResponseNoContent();
			} else {
				sendResponseNotFound('Property not found');
			}
		})
.execute();

/*
 * Copyright (c) 2018 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

angular.module('helium', [])
.controller('HeliumController', ['$scope', '$http', function ($scope, $http) {

	$http.get('/services/v4/js/helium-service/service.js').then(function(response) {
		$scope.properties = response.data;
	});


}]).config(function($sceProvider) {
    $sceProvider.enabled(false);
});

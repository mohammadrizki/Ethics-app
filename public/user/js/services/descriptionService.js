var app = angular.module("descriptionService", []);


// Description service
app.factory('$descriptionService', function($http, $log, config, $authenticationService) {

    return {
        getByRevision: function(revision_id) {
            return $http.get(config.apiURL + "/revisions/" + revision_id + "/descriptions", {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        },
        save: function(description_id, data) {
            return $http.put(config.apiURL + "/descriptions/" + description_id, data, {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        }
    };

});

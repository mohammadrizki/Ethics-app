var app = angular.module("recoveryService", []);


// Recovery service
app.factory('$recoveryService', function($http, $log, config) {

    return {
        findByEmail: function(email_address) {
            return $http.get(config.getApiEndpoint() + "/recovery/user/" + email_address);
        }
    };

});

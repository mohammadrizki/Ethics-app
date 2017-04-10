var app = angular.module("instituteService", []);


// Institute service
app.factory('$instituteService', function($http, $log, config, $authenticationService) {

    var institutes;

    return {
        get: function(){
            return institutes;
        },
        set: function(data){
            institutes = data;
        },
        list: function(){
            return $http.get(config.apiURL + "/institutes", {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        },
        create: function(data){
            return $http.post(config.apiURL + "/institutes" , data, {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        },
        retrieve: function(institute_id){
            return $http.get(config.apiURL + "/institutes/" + institute_id, {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        },
        edit: function(institute_id, data){
            return $http.put(config.apiURL + "/institutes/" + institute_id, data, {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        },
        remove: function(){
            return $http.delete(config.apiURL + "/institutes/" + institute_id, {
                headers: {
                    'Authorization': 'Bearer ' + $authenticationService.getToken()
                }
            });
        }
    };

});
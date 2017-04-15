kanban.factory('dataFromServer', function ($q, $http) {
    var factory = {}
    var baseUrl = "http://localhost:49554/api/";
    
    factory.getData = function (endpoint) {
        var defered = $q.defer();
        $http({
            url: baseUrl + endpoint,
            method: "GET"
        }).then(function (response) {
            defered.resolve(response.data)
        }, function (error) {
            defered.reject(error)
        })
        return defered.promise;
    }


     factory.postData = function (endpoint, _data) {

        var defered = $q.defer();
        $http({
            url: baseUrl + endpoint,
            method: "POST",
            data: JSON.stringify(_data),
        }).then(function (response) {
            defered.resolve(response.data)
        }, function (error) {
            defered.reject(error)
        })
        return defered.promise;
    }

     factory.deletList = function (endpoint, id) {
        var defered = $q.defer();
        $http({
            url: baseUrl + endpoint + '/' +  id,
            method: "DELETE"
        }).then(function (response) {
            defered.resolve(response.data)
        }, function (error) {
            defered.reject(error)
        })
        return defered.promise;
    }

    factory.moveTask = function (endpoint,_data,listsId) {
        var defered = $q.defer();
        $http({
            url: baseUrl + endpoint,
            method: "PUT",
             data: JSON.stringify(_data),
        }).then(function (response) {
            defered.resolve(response.data)
        }, function (error) {
            defered.reject(error)
        })
        return defered.promise;
    }
    // factory.deletList = function (id) {
    //     var defered = $q.defer();
    //     $http({
    //         url: "http://localhost:49554/api/lists/" + id,
    //         method: "DELETE"
    //     }).then(function (response) {
    //         defered.resolve(response.data)
    //     }, function (error) {
    //         defered.reject(error)
    //     })
    //     return defered.promise;
    // }

  



    return factory;
})





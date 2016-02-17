$http({
    method: 'GET',
    url: '/doesNotExist'
}).then(function successCallback(response) {
    // Use “response” within the application
}, function errorCallback(response) {
    // Well-handled error (details are logged)
    $exceptionHandler(“An error has occurred.\nHTTP error: ” + response.status + “ (“ + response.statusText + “)”);
    alert(“An error has occurred.”);
});
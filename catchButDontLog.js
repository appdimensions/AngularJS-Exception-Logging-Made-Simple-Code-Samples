$http({
    method: 'GET',
    url: '/doesNotExist'
}).then(function successCallback(response) {
    // Use “response” within the application
}, function errorCallback(response) {
    // Poorly-handled error (not logged anywhere)
    alert(“An error has occurred.”);
});


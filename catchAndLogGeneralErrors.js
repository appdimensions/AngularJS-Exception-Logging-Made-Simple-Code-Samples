$http({
    method: 'GET',
    url: '/doesNotExist'
}).then(function successCallback(response) {
    // Use “response” within the application
}, function errorCallback(response) {
    // Poorly-handled error (too general)
    $exceptionHandler(“An error has occurred.”);
    alert(“An error has occurred.”);
});


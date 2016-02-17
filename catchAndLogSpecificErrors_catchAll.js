angular.module('ErrorCatcher', [])
        .factory('errorHttpInterceptor', function ($exceptionHandler, $q) {
            return {
                responseError: function responseError(rejection) {
                    $exceptionHandler("An HTTP request error has occurred.\nHTTP config: " + rejection.config + ".\nStatus: " + rejection.status);
                    return $q.reject(rejection);
                }
            };
        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('errorHttpInterceptor');
        });


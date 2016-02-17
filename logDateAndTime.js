angular.module('app', [])
        .config(['$provide', function ($provide) {
                $provide.decorator('$log', ['$delegate', function ($delegate) {
                        // Keep track of the original debug method, we'll need it later.
                        var origError = $delegate.error;
                        /*
                         * Intercept the call to $log.debug() so we can add on 
                         * our enhancement. We're going to add on a date and 
                         * time stamp to the message that will be logged.
                         */
                        $delegate.error = function () {
                            var args = [].slice.call(arguments);
                            args[0] = [new Date().toString(), ': ', args[0]].join('');

                            // Send on our enhanced message to the original debug method.
                            origError.apply(null, args)
                        };

                        return $delegate;
                    }]);
            }]);


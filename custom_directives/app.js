//Module
angular.module("Controlador", [])
    //Controller
    .controller("DirectiveController", function($scope, $http) {
        $scope.repos = [];
   $http.get("https://api.github.com/users/oruizrubio/repos")
            .success(function(data) {
                $scope.posts = data;
                for (var i = data.length - 1; i >= 0; i--) {
                    var repo = data[i];
                    $scope.repos.push(repo.name);
                };
            })
            .error(function(err) {
                console.log(err);
            });
        $scope.optionSelected = function(data) {
            $scope.$apply(function() {
                $scope.main_repo = data;
            })
        }
        $scope.clean = function() {
            $scope.main_repo = null;
            $('input').val('');
        };
    })
    //Directive
    .directive('myAutocomplete', function() {
        function postLink($scope, elem, attrs) {
            $(elem).autocomplete({
                source: $scope.$eval(attrs.myAutocomplete),
                select: function(ev, ui) {
                    ev.preventDefault();
                    if (ui.item) {
                        $scope.optionSelected(ui.item.value);
                    }
                },
                focus: function(ev, ui) {
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }
            });
        };
        return {
            link: postLink
        };
    })
    //Directive
    .directive("backImg", function() {
        return function(scope, element, attrs) {
            attrs.$observe("backImg", function(value) {
                element.css({
                    "background": "url(" + value + ")",
                    "background-size": "cover",
                    "background-position": "center",
                });
            });
        };
    })
	
	
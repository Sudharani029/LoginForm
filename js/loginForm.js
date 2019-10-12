var app = angular.module('myApp', []);
app.controller('validateCtrl', function ($scope, $window) {

    $scope.formSubmit = function () {
       
        if (($scope.username == "Queen") && ($scope.password == "123456")) {
            $window.location.href = 'home.html';
        }
        else {
            $scope.error = "Invalid username and password";
        }
    }
});

$('.inputbox').each(function () {
    if ($(this).val().trim() != '') {
        $(this).parent('.line100').addClass('has-val');
    }
    $(this).on('focus', function () {
        $(this).parent('.line100').addClass('has-val');
    })
    $(this).on('blur', function () {
        if ($(this).val().trim() != "") {
            $(this).parent('.line100').addClass('has-val');
        } else {
            $(this).parent('.line100').removeClass('has-val');
        }
    });
});
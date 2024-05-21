angular.module('ticketBookingApp', [])
.controller('TicketController', function($window) {
    var ctrl = this;
    ctrl.from = '';
    ctrl.to = '';
    ctrl.date = '';
    ctrl.class = '';
    ctrl.category = 'GENERAL';
    ctrl.disability = false;
    ctrl.flexibleDate = false;
    ctrl.availableBerth = false;
    ctrl.passConcession = false;
    ctrl.searchResults = [];
    ctrl.totalCost = 0;
    ctrl.seats = 1; // Default number of seats
    ctrl.cost = 500; // Default cost per seat

    ctrl.search = function() {
        var searchData = {
            from: ctrl.from,
            to: ctrl.to,
            date: ctrl.date,
            class: ctrl.class,
            category: ctrl.category,
            disability: ctrl.disability,
            flexibleDate: ctrl.flexibleDate,
            availableBerth: ctrl.availableBerth,
            passConcession: ctrl.passConcession
        };

        // Simulating search results
        ctrl.searchResults = [
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '08:00 AM',
                arrivalTime: '12:00 PM'
            },
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '02:00 PM',
                arrivalTime: '06:00 PM'
            },
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        ];

        // Calculate total cost based on the number of seats and cost per seat
        ctrl.totalCost = ctrl.seats * ctrl.cost;
    };

    ctrl.redirectToIRCTC = function() {
        $window.location.href = 'https://www.irctc.co.in';
    };

    ctrl.redirectToPayment = function() {
        // Passing the total cost to the payment page using query parameters
        $window.location.href = 'payment.html?totalCost=' + ctrl.totalCost;
    };
});

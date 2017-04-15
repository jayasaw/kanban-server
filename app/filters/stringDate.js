kanban.filter('stringDate', function () {
    return function (date) {
        var _date = new Date(date)

        return _date.toDateString();

    }

})
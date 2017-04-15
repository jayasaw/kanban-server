kanban.filter('selectNotFilter', function() {

    return function(input, arg) {

        console.log(input, arg);
        var newList = input.filter(function(item) {
            if (item.name !== arg.name) {
                return item;
            }
        });

        console.log(newList);
        return newList;

    }

})
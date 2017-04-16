kanban.filter('selectNotFilter', function () {

    return function (input, criteria) {

      //  console.log(input, criteria);
        var newList = input.filter(function (item) {
            for (var x in criteria) {
                if (item[x] !== criteria[x]) {
                    return item;
                }
            }

        });

       // console.log(newList);
        return newList;

    }

})
kanban.service('dataService', function($q, $http) {

    /**/
    var SBI = [
        { name: "New Tasks", position: 1 },
        { name: "On Hold", position: 2 },
        { name: "In Progress", position: 3 },
        { name: "Done", position: 4 }
    ];
    /**/
    var ICICI = [
        { name: 'Understand the requirement', dueDate: 'Fri Mar 17 2017', priority: 1, status: "Done", index: 0 },
        { name: 'Create the design', dueDate: 'Sat Mar 18 2017', priority: 1, status: "Done", index: 1 },
        { name: 'Start the project structure', dueDate: 'Sat Mar 18 2017', priority: 1, status: "Done", index: 2 },
        { name: 'Start Writing the code', dueDate: 'Sat Mar 18 2017', priority: 2, status: "Done", index: 3 },
        { name: 'Create the header section', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 4 },
        { name: 'Create the List section', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 5 },
        { name: 'Test the List section', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 6 },
        { name: 'Create the Task section', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 7 },
        { name: 'Test the Task section', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 8 },
        { name: 'Create the Task Edit Menu', dueDate: 'Sat Mar 18 2017', priority: 3, status: "Done", index: 9 },
        { name: 'Test the Task Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3, status: "In Progress", index: 10 },
        { name: 'Create the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3, status: "In Progress", index: 11 },
        { name: 'Test the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3, status: "In Progress", index: 12 },
        { name: 'Create the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3, status: "Done", index: 13 },
        { name: 'Test the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3, status: "Done", index: 14 },
        { name: 'Test the project', dueDate: 'Sun Mar 19 2017', priority: 3, status: "New Tasks", index: 15 },
        { name: 'Send the project by 4pm', dueDate: 'Sun Mar 19 2017', priority: 1, status: "New Tasks", index: 15 },
        { name: 'Modifiy the datepicker', dueDate: 'Sun Mar 19 2017', priority: 5, status: "On Hold", index: 16 },
        { name: 'Modifiy the date formate', dueDate: 'Sun Mar 19 2017', priority: 5, status: "On Hold", index: 17 },
        { name: 'Validation of Task Form', dueDate: 'Sun Mar 19 2017', priority: 5, status: "On Hold", index: 18 },
        { name: 'sorting of Task list', dueDate: 'Sun Mar 19 2017', priority: 5, status: "On Hold", index: 19 },
        { name: 'Comment the code lines', dueDate: 'Sun Mar 19 2017', priority: 5, status: "On Hold", index: 20 },
    ];

    /**/
    this.getDataFromSBI = function() {

        return SBI;
    }

     this.getListsData = function() {

        $http({url:"http://localhost:49554/api/tasks", method:"GET"})
        .then(function(res){
                console.log(res);
        },function(err){
                console.log(err);
        })
    }
    this.getListsData();

    /**/
    this.getDataFromIci = function() {
        return ICICI;
    }

    /**/
    this.addNewList = function(_name) {
            var index = SBI.length + 1;
            console.log(angular.copy(SBI));
            SBI.push({ name: _name, position: index });
            console.log(SBI)

        }
        /**/
    this.editListName = function(index) {
        SBI.splice(index, 1);
    }

    /**/
    this.addNewTask = function(_name, _dueDate, _priority, _status) {
        var _index = ICICI.length;
        console.log({ name: _name, dueDate: _dueDate, priority: _priority, status: _status, index: _index })
        ICICI.push({ name: _name, dueDate: _dueDate, priority: _priority, status: _status, index: _index })

    }

    /*
     */
    this.updatetask = function(status, index) {
        ICICI[index].status = status;
    }

    /*
     */
    this.removeTaskList = function(index) {
        ICICI.splice(index, 1);
        //fix the index after deleting one record.
        ICICI.map(function(item, i) {
            item.index = i;
            return item;
        });
    }

    this.sortTaskName = function() {
        SBI.sort();
    }
});
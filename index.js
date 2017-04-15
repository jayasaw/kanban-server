var kanban = angular.module('kanban', []);
kanban.controller('myCtrl', function (dataService, dataFromServer) {

    var vm = this;
    vm.model = {};
    vm.submitted = false;

    // vm.withId = function (item) {

    //     console.log(item);
    // }
    //var test = 20;
    //vm.listData = dataService.getDataFromSBI()
    dataFromServer.getData("lists")
        .then(function (response) {
            vm.listData = response;
        }).catch(function (error) {
            console.log(error);
        });

    dataFromServer.getData('tasks').then(function (response) {
        vm.taskList = response;
    }).catch(catchError);

    // vm.taskList = dataService.getDataFromIci();

    vm.priorities = [1, 2, 3, 4, 5];

    // vm.menuData = function (listName) {

    //     var newList = vm.listData.map(mapFun)

    //     return newList;
    // }

    // var mapFun = function (item) {

    //     if (item.name !== listName) {
    //         return item;
    //     }
    // }

    function catchError(error) {
        console.log(error)
    }

    vm.addList = function () {
        if (vm.listName !== '' && vm.listName !== undefined) {

            var listsData = { listsName: vm.listName, createdDate: new Date(), modifiedDate: new Date() }
            // dataService.addNewList(vm.listName);
            dataFromServer.postData("lists", listsData)
                .then(function (response) {
                    vm.listData.push(response);
                }).catch(catchError)

            vm.submitted = false;
        } else {
            vm.submitted = true;
        }

    }
    vm.editList = function (listsId) {
        dataFromServer.deletList("lists/", listsId).then(function (response) {
            for (var i = 0; i < vm.listData.length; i++) {
                if (vm.listData[i].listsId == listsId) {
                    vm.listData.splice(i, 1);
                }

            }
        })
    }
    // dataService.editListName(index);


    vm.addTask = function (myTaskForm, listsId, index) {
        if (myTaskForm.$valid === true) {
            vm.model.listsId = listsId;
            dataFromServer.postData("tasks", vm.model)
                .then(function (response) {

                    vm.taskList.push(response);
                }).catch(catchError)
                //vm.cancelTask();
            vm.model = {};
            vm.taskSubmitted = false;
            vm.addTaskItem[index] = !vm.addTaskItem[index];
        } else {
            vm.taskSubmitted = true;
           // return false;
        }

        // dataService.addNewTask(vm.taskName, dueDate, vm.priority, status);
    }

    vm.cancelTask = function(index){
            vm.addTaskItem[index] = !vm.addTaskItem[index];
               vm.taskSubmitted = false;
                   vm.model = {};
    }

    vm.moveTo = function (listsId, index) {

        dataFromServer.moveTask("tasks", listsId).then(function (response) {



        })
        // dataService.updatetask(_moveToList, index);
        // console.log(_moveToList, index);
    }
    vm.removeTask = function (taskId) {
        dataFromServer.deletList('tasks', taskId).then(function (response) {
            for (var i = 0; i < vm.taskList.length; i++) {
                if (vm.taskList[i].tasksId == taskId) {
                    vm.taskList.splice(i, 1)
                }
            }

        })
        // dataService.removeTaskList(index)
    }


})







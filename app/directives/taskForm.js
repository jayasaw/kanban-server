kanban.directive('taskForm', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/taskForm.html',
            controller: 'taskCtrl',
            controllerAs: 'taskCtrl',
        }
})
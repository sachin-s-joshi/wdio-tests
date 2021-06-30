import { Given, When, Then } from '@cucumber/cucumber'
import todoPage from '../pageObjects/todoPage';

let lists: [string];
Given('I am on todo app with no tasks added', function () {
    browser.reloadSession();
    browser.url('https://todomvc.com/examples/react/#/');

});

When('I add the <tasks> by typing under input boxes', function (dataTable: any) {
    lists = dataTable.raw();
    todoPage.addTask(lists)
});

Then('I can see the tasks getting added as my todo list', function () {
    expect(todoPage.tasklists).toHaveLength(lists.length);
});

Then('I can delete tasks from the list', function () {
    todoPage.removeTask0(lists);
})

Then('I mark my {string} complete', function (taskname: string) {
    todoPage.markTaskComplete(taskname)
})

Then('I verify {string} is striked out', function (taskname: string) {
    todoPage.checkIfCompleted(taskname)
})

Then('I can update my <tasks> to <updated>', function (table: any) {
    let row: [string] = table.rows()
    for (var i = 0; i < row.length; i++) {
        console.info(row[i][0], row[i][1])
        todoPage.updateTaskName(row[i][0], row[i][1])
    }

    browser.pause(5000)

})

Then('I should not see {string} tasks on active tab', function (task: string) {
    todoPage.notInactiveTab(task)
})
Then('I should now see only completed tasks {string} on completed tab', function (completedTask: string) {
    todoPage.checkInCompletedTab(completedTask);
})
Then('I can clear all my task from the todo list', function () {
    todoPage.clearCompleted();
})
Then('I can mark all my tasks complete', function () {
    todoPage.completeall();

})
Then('I should not see any task under active tab', function () {
    todoPage.notInactiveTab();
})
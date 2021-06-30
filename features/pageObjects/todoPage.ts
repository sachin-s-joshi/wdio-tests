import { todoHome } from "../Identifiers/todoHome";

class TodoPage {

    get taskInput() { return $('.new-todo') }
    get tasklists() { return $$('.todo-list > li') }

    addTask(lists: [string]) {
        expect(this.taskInput).toBeDisplayed();
        lists.forEach(i => {
            this.taskInput.setValue(i);
            browser.keys("Enter");
        })
    }

    removeTask0(lists: string[]) {
        var task0 = $("//*[text()='" + lists[0] + "']")
        task0.moveTo();
        task0.nextElement().click();
        expect(this.tasklists).toHaveLength(lists.length - 1);
    }

    markTaskComplete(task: string) {
        try {
            var taskToComplete = $("//*[text()='" + task + "']");
            taskToComplete.previousElement().click();
        }
        catch (err) {
            console.log(err);
            expect('0').toBe('1');
        }

    }

    checkIfCompleted(task: string) {
        try {
            var taskToComplete = $("//*[text()='" + task + "']");
            const striked = taskToComplete.getCSSProperty('text-decoration').value;
            expect(striked).toContain('line-through');
        }
        catch (err) {
            console.log(err);
            expect('0').toBe('1');
        }
    }

    updateTaskName(old: string, updated: string) {
        var taskToUpdate = $("//*[text()='" + old + "']");
        taskToUpdate.doubleClick();
        taskToUpdate.addValue(updated);
        browser.keys("Enter");
    }

    notInactiveTab(task: string) {
        console.log(task);
        $('*=Active').click();
        expect(this.tasklists).not.toContain(task);  //wdio inbuilt helper will ensure that task does not exists in active list
    }

    checkInCompletedTab(completedTask: string) {
        console.log(`Task completed:${completedTask}`);
        $('*=Completed').click();
        browser.pause(3000)
        expect(this.tasklists).toHaveTextContaining(completedTask)
    }

    clearCompleted() {
        $('button*=Clear').click();
        $('*=Completed').click();
        expect(this.tasklists).not.toBePresent()
    }

}

export default new TodoPage();
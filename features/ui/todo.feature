Feature: I am able to add, delete, update tasks in todo app

    Background: Open todo App
        Given I am on todo app with no tasks added
        When I add the <tasks> by typing under input boxes
            | Task 1     |
            | Task 2     |
            | Reminder 1 |
            | Reminder 2 |

    Scenario: Adding task to todo app
        Then I can see the tasks getting added as my todo list

    Scenario: Deleting Tasks after adding
        Then I can see the tasks getting added as my todo list
        Then I can delete tasks from the list

    Scenario: Marking my task comeplete
        Then I mark my "Task 1" complete
        And I verify "Task 1" is striked out


    # Scenario: I am able to update my tasks
    #     Then I can update my <tasks> to <updated>
    #         | old    | updated    |
    #         | Task 1 | new Task 1 |
    #         | Task 2 | new Task 2 |

    Scenario: I should see only pending tasks in active tab
        Then I mark my "Task 1" complete
        And I should not see "Task 1" tasks on active tab


    Scenario: I should only see completed tasks in completed tab
        Then I mark my "Task 1" complete
        And I should now see only completed tasks "Task 1" on completed tab

    Scenario: I can clear my tasks using clear option
        Then I mark my "Task 1" complete
        And I can clear all my task from the todo list

    Scenario: I can mark all my tasks complate in one go
        Then I can mark all my tasks complete
        And I should not see any task under active tab
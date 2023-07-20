## Pre-requisites

Some basic knowledge of Git is required. A good introduction to understand git branching can be found [learngitbranching](https://learngitbranching.js.org)

VSCode is the preferred IDE and comes with some preconfigured settings.

## Development Workflow

1. Clone the repository and add remote.

   `git clone https://github.com/jacuzzi-technologies/js-practice.git`

   `git remote add origin https://github.com/jacuzzi-technologies/js-practice.git`

2. Open Terminal and navigate to `/js-practice`

3. Create and checkout a local feature branch

   `git checkout -b <development-branch> <your-feature-branch>`

4. When you are ready to commit your changes

   `git status` (to view your recent changes)

   `git add <filename> <filename>` (to stage changes)

   `git commit -m "a descriptive message" ` (to commit staged changes and include a descriptive commit message)

   After committing your code, several pre-commit hooks will run and will reject your commit if any errors are found. Make sure to correct any errors or merge conflicts before committing your work.

   `git push origin <your-feature-branch>`

   Make a mistake? Git being weird?
   Learn about some common solutions to undo git changes

   [ohshitgit](https://ohshitgit.com/)

5. Open a pull request (PR) in Github and add reviewer (@ryanvazquez)

   **Do not make a pull request to the main branch.**

   All pull requests should be made to your development branch, it will look something like this

   `<your-development-branch> <----- <your-feature-branch>`

6. Address any code comments

7. When pull request is accepted, **merge your feature branch into your development branch**.

8. Pull down your development branch which now contains your changes.

   `git pull origin <your-development-branch>`

9. Checkout a new feature branch off of your development branch

   `git checkout -b <your-next-feature> <your-github-username>`

10. To update your local development branch with main

    `git pull origin main`
    
    `git checkout <your-development-branch>`
    
    `git rebase main`

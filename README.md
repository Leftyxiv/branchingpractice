# branchingpractice

## git commands you'll likely use

git checkout -b branchname
 - creates a new branch and switches to it

git checkout branchname
 - switches to the specified branch

git merge frombranchname
 - merges the specified branch into the current branch

## syncing your local repository with the remote repository

git checkout master
git pull origin master
git checkout branchname
git merge master
 - this will change your current branch to the master branch, pull down the latest changes from the remote repository, and merge the master branch into your current branch

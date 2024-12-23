// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName



<!-- reset git commit history to previous commit -->
git log
git reset --soft <commit-hash>
...comits....
git push origin <your-branch-name> --force



git checkout featureBranch -- file1.txt file2.txt
git checkout featureBranch -- *

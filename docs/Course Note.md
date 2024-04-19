# Notes on important information in the course
## 1. Git flow
> ### Basic Flow:
> - git init 
>   - [Create new local git repository]
> - git add [filename | . ]
>   - [__Working Directory -> Staging area__]
> - git status 
>   - [Check Working Directory & Staging area __status__]
> - git diff [filename | . ] 
>   - [__Check Different between__ Working Directory & Staging area]
> - git commit [filename | . ] 
>   - [__Staging area -> local repository__]
> - git log 
>   - [Log commit list]

> ### Git Remote Flow: 
> - git branch -M main 
>   - [Rename the current branch to "main"]
> - git remote add origin [link] 
>   - [Set up a connection between __local__ repository & __remote__ repository]
> - git push -u origin main 
>   - [Push main branch to origin (remote) repository]
>   - [-u == --set-upstream mean __"main" branch in local == "main" branch in origin__]
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
> - git commit -m "[message]"
>   - [__Commit change in Staging area -> local repository__]
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

## 2. Thunder Client

## 3. Initialize project
> - npm init -y
> - npm install express

## 4. Project Structure

## 5. Route & Controller divide

## 6. Basic CRUD for Contact & User

## 7. Middleware:
- Built-in JSON body parser middleware
- Error handler middleware
- JWT handler
## 8. File .env:
- require("dotenv").config()
- process.env.<Variable name>

## 9. Error Handler & throw Error

## 10. Async Controller:
- Bởi vì các công việc truy cập đến database là async

## 11. Mongodb Setup & Mongoose
- Schema => Model

## 12. Simple Validating 

## 13. Login logic & Hashing password & JWT
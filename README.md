# CypressAPI-POC

# Introduction 

This repository is for cypress API POC. In this poc we have shown how cypress will help in api testing and created the api for blog CRUD operation perform and tested.
In this poc we have two main folder 

1. Blog API 
2. cypress API testing 

Initiallly we have to clone the repo or download the zip file of the poc for cloning repo we can use the below command ,go to the code editor that you have use below command and clone the repo.

```bash
$ git clone https://github.com/TestrigTechnologies/CypressAPI-POC.git
```
Then navigate to the Blog Api folder. In Blog API folder we have two api models one is for blog and another for user. The database that we have used in this poc is mongodb.In Blog Api folder you have to cratet your own .env file which mainly contain the below infomation such as the PORT, NODE_ENV, MONGO_URI, JWT_SECRET as per the below image. 

![image](https://user-images.githubusercontent.com/108255822/211130551-79ef1140-1e06-41e9-9d8c-d49e73540484.png)

start the server with below command. 
```bash
npm run server
```
After starting the server you are able to see it is running on the port as similar to the below image. 
![image](https://user-images.githubusercontent.com/108255822/211130338-15dd2a62-6880-4f48-84a6-ff58423db01f.png)

Then navigate to the cypress api testing folder and start the runner with below command 
```bash
npx cypress open 
```
we can see their are seven spec file basically four related to the CRUD operation on blog api and Three related to the user auth for user model and you are 
!Good To GO to test the api locally.

## Run spec file with docker 
First you have to install the docker in your machine for that you can use the below url.Just download the exe file as per the os you have and execute it. 
```bash
https://docs.docker.com/desktop/install/windows-install/
```

Then if you don't have a docker hub account create one to see your repo of the docker.Just use the below link for that 
```bash
https://hub.docker.com/
```

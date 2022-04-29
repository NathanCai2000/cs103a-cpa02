# NHRL Robot Finder

The Norwalk Havoc Robots League is a combat robot competition that happens every 1.5 months in Norwalk, CT. The event draws in a large list of competitors and robots every event, including the Brandeis Robotics Club!, and looking through all the bots can be a pain! This app is here to help!

-----

This finder app is designed to help you parse through the big list of robots. There are 4 features:
1) Search for a bot's name
2) Show all bots in a single weight class
3) Show all bots from a team
4) Show all bots built by one builder

----
Installation:
--
Download the project from github and download nodejs and npm from https://nodejs.org and cd into the folder

Install the packages with
```
npm install
```
Start the project with
```
node app.js
```
or install nodemon (the node monitoring app) with
```
npm install -g nodemon
```
and start the project with
```
nodemon
```

---
Tour of app:
---
When you first boot up the app, you will be presented with the main page.

![Main Menu](https://user-images.githubusercontent.com/55816613/165958617-ac96eb5b-7c65-4abc-8527-a309f671b425.PNG)

Here you will have 4 options to choose from to sort through the bots.

1) Find a bot by its name by typing into the box and hitting submit. Once you do that, you will be given a link that will link you to the NHRL wiki, and display your desired bot if it exists.

![Link Page](https://user-images.githubusercontent.com/55816613/165958643-7f3534a6-0ab5-4bbe-82f5-e52fc6981aec.PNG)

2) List all bots in a particular weight class. NHRL currently only has four weight classes: 3lb, 12lb, 12lb Sportsman, and 30lb. You can type in your selection and it will display to you a list of all bots in the weight class.

![Sorted Page](https://user-images.githubusercontent.com/55816613/165958684-332738e2-7032-436d-b38c-ca3f7b4cc07e.PNG)

3) List all in Team name and List all from builder are similar to List all bots in weight class, but instead will give bots under those parameters instead.

# MyUber

<hr>

<br>

This app is an app that simulates the operation of uber is not complete as the uber eats part is not working, but it can be implemented in the future. The project was done with google maps api and redux

<br>

<hr>

- [Installation](#intallation)

  - [Nodejs](#nodejs)

  - [Expo](#expo)

  - [Redux](#redux)

  - [GoogleApi](#google-api)

- [HomeScreen]()

<hr>

<br>

## Intallation

<hr>

<br>

### Nodejs

For the installation of both Expo and React Native there is a need before the installation of **nodejs**, that it is a version higher than 14, since both frameworks are based on of it. The installation of nodejs changes depending on the operating system used, in our our case we used ubuntu, and we can install it with the following commands:

<br>

`sudo apt install nodejs`

<br>

Check the version of Node.js installed:

<br>

`nodejs -v`

<br>

Also we need NPM is a Package Manager for Node.js (Node Package Manager) needed to install modules and packages for use with Node.js.

<br>

`sudo apt install npm`

<br>

Check the version of NPM installed:

<br>

`npm -v`

<br>

### Expo

<hr>

We will then go on to install expo, in which before installing there is a need to register on the official site (for free) and create the project.

<br>

To install expo:

<br>

`npm install -g expo-cli`

<br>

To verify that everything was successful.

<br>

`expo whoami`

<br>

To register for the site, type

<br>

`expo register`

<br>

After registering we can log in with the command:

<br>

`expo login`

<br>

### Redux

<hr>

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

<br>

For installation:

<br>

`npm install @reduxjs/toolkit`

<br>

### Google Api

<hr>

<br>

For the project google api was used, activate google api you need to go to the appropriate site and activate billing, then the api key will be generated. The following were used in the api key.

<br>

- **Places Autocomplete**
- **Distance Matrix**
- **Directions Api**

<hr>

## Home

In this section we can find the search bar to look for the place where we want to go, the two views where we have if we want to book a ride or food, plus at the bottom are icons that show our references.

**As mentioned above, it is not possible to use the part for food reservation.**

![home](./Screen/screen1.jpeg)

<br>

![home2](./Screen/screen2.jpeg)

<br>

![home3](./Screen/screen3.jpeg)

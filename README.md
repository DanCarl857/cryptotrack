### Cryptotrack Mobile application

[![NPM version](https://img.shields.io/npm/v/cryptotrack.svg?style=flat-square)](https://www.npmjs.com/package/cryptotrack)
[![Build](https://travis-ci.org/DanCarl857/cryptotrack.svg?branch=master)](https://travis-ci.org/DanCarl857/cryptotrack)
[![codecov.io](https://codecov.io/github/DanCarl857/cryptotrack/coverage.svg?branch=master)](https://codecov.io/github/DanCarl857/cryptotrack?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is a simple mobile application built for android and iOS using React Native. This application
lets users get brief and updated summaries of cryptocurrencies. It also shows the current cryptocurrency values along 
with their prices and value changes of the past 1hour, 24hours and 7days.

### Deployment

Due to costs, the application is currently hosted on the Google Play Store as [CryptoTrack]()

### Development

The development was done using the following tech stack:
* React Native
* Redux
* Redux Thunk
* Redux Logger
* Jest
* Enzyme
* Fastlane
* Travis CI

#### Running the project

* Clone the project: `git clone https://github.com/DanCarl857/cryptotrack.git`
* Change directory into the currently downloaded folder: `cd cryptotrack`
* Install all dependencies: `npm install` or `yarn install`
* Run app on android device: `react-native run-android` - You should have an android emulator or actual device running.
* Run app on iOS device: `react-native run-ios`

### Running tests

To run the tests,
* `yarn test`

All the tests are found in the `__tests__/` folder

### Contributors

* [Daniel Carlson](https://github.com/DanCarl857)
![License badge](https://img.shields.io/badge/license-MIT-green)
# fitness-tracker

## Description
 This app is able to view create and track daily workouts. It will allow to log multiple exercises in a workout on a given day. It  also tracks the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, It will track the distance traveled.

The user able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises on the `stats` page.


## Table of Content
1. [Installation](#Installation)
2. [Database](#Database)
3. [License](#License)
4. [Contribution](#Contribution)
5. [Tests](#Tests)
6. [Questions](#Questions)
7. [Demo](#Demo)

## Installation
The dependencies are [Mongoose](https://mongoosejs.com/) for ODM.
[EXPRESS](https://expressjs.com/) server for routing.
[MongoDBAtlas](https://www.mongodb.com/cloud/atlas) for live mongoDB database

Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install
```

## Database
The GitHub contains a seeds to help setup the database:

* **Workout**:
  * **day** - type Date to hold day of workout

* **exercises**:
  * **type** - String to hold type of workout
  * **name** - String to hold workout name
  * **duration** - Number to hold workout duration
  * **weight** - Number to hold work weight
  * **reps** - Number to hold workout reps
  * **sets** - Number to hold workout sets
  * **distance** - Number to hold distance covered while workout



  
## License
```
This is MIT license
```

## Contribution
```
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.
```

## Tests
Testing was completed using node.js and express before deploying finished application on Heroku.

## Questions
- Pradeep Marasini </br>
 GitHub: <a href="https://github.com/marasinipradeep">https://github.com/marasinipradeep</a> </br>
 Email: <a href="marasinipradeep@gmail.com">marasinipradeep@gmail.com</a>

  
## Demo
<a href="https://www.youtube.com/watch?v=BTH5oNE8aMM&feature=youtu.be">Click here for a video demo</a>
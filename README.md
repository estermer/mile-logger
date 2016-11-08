# Mile Logger App

[http://milelogger.heroku.com/](Deployed Heroku App Link)

Designed for runners to log their miles
can be customized for your team

![runner](http://www.pd4pic.com/images/icon-wooden-fire-tree-cartoon-free-wood-log.png)

### Day 1-4
After taking the first 4 days of this weeks app project trying to create
an app that allows users to mass friend or follow on social media platforms,
I decided that I needed to scrap that project for now since most social media
sites dont allow that functionality with Oauth. 

Tonight is night 4, so I am taking time to create this GitHub repo, start user
stories, and wirefram the general design for this Mile Logger app. 

Mile logger is going to be an app allowing for users to log in, be a part of a team,
view each other team members log, log new runs, an hopefully even get map my run
functionality and a VDOT calculator to calculate pace.

### Day 5
Data Modeling
```
TEAM {
  name: String,
  joinPassword: String,
  members: [UserSchema]
}

USER {
  username: String,
  password: String,
  runningLog: [RunSchema],
  longestRun: RunSchema,
  fastestRun: RunSchema,
  team: String
}

RUN {
  runName: String,
  distance: Number,
  time: String,
  pace: String,
  rpe: Number,
  description: String
}
```

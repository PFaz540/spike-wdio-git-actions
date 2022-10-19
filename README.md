# spike-wdio-git-actions

## About:
Proof of concept for executing WDIO tests via GitHub Actions.

In short, this just means that every time something is pushed to master/main in this repo the WDIO tests will be triggered.
Using Docker massively simplifies this.

Normally we'd have to tell GitHub Actions to:
   - Use a specific version of NodeJS
   - Download our browser(s) of choice
   - Perform an npm install
   - Then run the specific npm command to run our tests

with Docker, we can just tell GitHub Actions to run our Docker Compose file which has all the info it needs.
We can also run that same Docker Compose file locally too.
So running the WDIO tests on your machine should be the same as running them via GitHub actions.

## Running The Tests Locally:

All you need is Docker installed.

Run the below command in a Terminal window:

```
   docker-compose up --abort-on-container-exit
```

This tells Docker to look for a `docker-compose.yml` file which has all the Docker Images inside it:
   - Selenium Hub
   - Our browser nodes (Chrome, FireFox etc.)
   - Our WDIO test code in this very repo

We also tell Docker to shutdown the containers once the tests have successfully finished.
Once the tests are running, you can view the local instance of Selenium Hub in your browser by navigating to: http://localhost:4444/ui/index.html
The Selenium Hub will also shutdown once the tests have finished.

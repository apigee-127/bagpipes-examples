# Overview

Given a resource of /order in Usergrid, re-expose this resource such that:
1. POST /order sends a push notification to a group that it was created and adds a secret attribute
2. GET /order increments a global in-memory counter and filters out the secret attribute
3. DELETE /order sends an email alert that an order was deleted

# Usage

1. Check out this code
2. Run npm install
3. Get Mailgun credentials
4. Get Usergrid credentials
5. Put your Usergrid and Mailgun credentials here: [config/default.yaml](config/default.yaml)
6. Run the app: `a127 project start` or `node app.js`

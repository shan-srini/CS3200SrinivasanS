# CS3200SrinivasanS
ScrutinyFB CS3200 Database Design Project

In order to run this application follow these steps
Please make sure to have an updated version of node and Xcode installed on your machine
ADDITIONALLY THIS APPLICATION HAS BEEN BUILT FOR USAGE ON AN IOS DEVICE, to my knowledge the XCODE ios simulator is only available on macbooks, and thus these instructions are written for macbook users 

1. download files locally
2. inside /scrutinyFB_front folder on terminal run "npm i"
3. /scrutinyFB_front/sfb_front folder on terminal run "npm i"
4. run "npm run ios"
5. As long as all dependencies installed correctly, and xcode is working properly, this will launch the ios simulator on your macbook to run our app

IF THE ABOVE DOESNT WORK OR YOU DONT WANT TO INSTALL XCODE BECAUSE IT TAKES UP SPACE OR ANOTHER VALID REASON FOR NOT WANTING XCODE THEN PLEASE FOLLOW INSTRUCTIONS BELOW
You may also run "expo start" within /scrutinyFB_front/sfb_front folder on terminal after running npm i in the correct folders
This will launch the expo localhost application server on your web browser
From there you can download the expo application to your phone and run on our app on there


(Our formatting so far has worked on any iPhone 6+, so any of those devices should produce the result which we are expecting, though this is an app which we intend on publishing, UI in such apps takes a while to develop, we have ensured everything is reactive as possible to screen sizes, but some newer phones like the iPhone XR have weird resizing traits that we had to manually account for, we believe it is now working fine, and hopefully in your testing it looks just as good as we hope it does)

IMPORTANT
Running the database locally on your machine will have no impact on this application
We are using a REST API hosted on heroku with a database hosted on the cloud
https://scrutiny-fb-api.herokuapp.com/

CRUD
</nl>
<br/>
Create: Create a user through our login page, create tuples by adding players to that user's favorites list
<br/>
READ: There are read operation EVERYWHERE in this application, the home screen has a read operation to get all player names, the player page (second page) is dynamic (color wise) to the player's current team, there is basic information about the player such as height and weight on the player page, and the stats page quite obviously is reading from the database as well, in addition the login pages all support read operation to see what players are in the user's favorite list, what players can be added, etc..
<br/>
Update: Hit change password on the login page to check out an update operation
<br/>
Delete: Delete players from a users favorites

Though our stored procedures may seem a little limited, please understand that we have many queries in our REST API as it was easier for us to query the database appropriately through the REST API directly and use Pandas to format the data in Python rather than using stored procedure results (which though it is the same thing, requires extra code to place that data in a pandas dataframe and do what needs to be done to it)

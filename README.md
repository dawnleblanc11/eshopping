

![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  
  # eshopping
  ### Back end for an e-commerce site.
 
 ## User Story
A manager at an internet retail company
wants a back end e-commerce website that uses the latest technologies so that the company can compete with other e-commerce companies
  
  ## Installation
  Clone the files from git hub indicated below. Create a database using the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like MySQL username, password, and database name.
  
  ## Usage 
  Clone the logic from the GitHub repository indicated above.
  Run `node server.js` to sync the Sequelize models to the MySQL database on server start.
  
  Run `node seeds` to seed data to the database
  
  ## Credits
  Starter code provided by UConn. 
  
##
## License <br>https://opensource.org/licenses/MIT
  ## Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [dawnleblanc11](https://github.com/dawnleblanc11/eshopping)
  * not deployed at this time
  * Email: dawnleblanc11@gmail.com
## Badges <br> 
    MySQL2, dotenv, Node, Sequelize, Insomnia
  ## Features
  Database model established with all fields, validations and relationships as identified in requirements.
  Executed association methods on the Sequelize models to create the required relationships.
  
  ## Contributing  
  no contributions at this time
  ## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
  ## Tests
  The included animations show examples of the application's API routes being tested in Insomnia.

![Set up in VScode and user tests in Insomnia “GET All" and "Get One" for Categories, Products and Tags](https://drive.google.com/file/d/1vaIFVHBLOrPrIg9ZlNSoq1GjtL53h9yh/view?usp=sharing)
Shows the schema, seeds and DB connection functioning, , connecting to a database using Sequelize, database is created and is seeded with test data, enter the command to invoke the application, my server is started and the Sequelize models are synced to the MySQL database
Shows GET routes to return all categories, all products, and all tags being tested in Insomnia.
Shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia.

![In Insomnia, the user tests  “CREATE” “UPDATE and “DELETE" for Category, Product and Tags](https://drive.google.com/file/d/13hiefqW_yAYdqIvZMmA0CKd_JRhIoHf8/view?usp=sharing)

Shows the POST, PUT, and DELETE routes for categories being tested in Insomnia.
Shows the POST, PUT, and DELETE routes for products being tested in Insomnia.
Shows the POST, PUT, and DELETE routes for tags being tested in Insomnia.





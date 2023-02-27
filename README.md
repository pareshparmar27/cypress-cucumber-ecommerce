# Test automation of ecommerce application using Cypress

### Setup & Installation

1. Clone git repository or download zip file
2. Go to cypress-cucumber-ecommerce folder
3. run command as "npm install" to install all dependencies

### Run test (run mode)

1. "npm run login" for only login tests
2. "npm run home" for only home tests
3. "npm run product" for only product tests
4. "npm run checkout" for only checkout test
5. "npm run test" to run all tests

### Run test (open mode)

1. "npx cypress open" to open cypress
2. Click on "E2E Testing"
3. Choose a browser (eg. Chrome)
4. Click on "Start E2E Testing in Chrome"
5. Select any feature file to run

### Run test (github workflow)

1. Go to cypress-cucumber-ecommerce repository
2. Go to Actions
3. Click on "On Demand Test"
4. Click on "Run workflow"
5. Enter following details
   -  Select "main" branch
   -  Select any browser (eg. chrome)
   -  Select any tag (eg. regression)
   -  Enter title
6. Click on "Run workflow" green button
   ![Initiate test from github](/images/github_trigger_test.jpg)
7. Check test results in cypress dashboard
   ![Cypress test results](/images/cypress_recorded_testresults.jpg)

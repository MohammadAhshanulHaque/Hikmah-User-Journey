1. For this test I use Playwright which is an open-source test automation framework & VS Code [Visual Studio Code].

2. Environment Setup for Playwright:

      Install Node.js

      Create a Project Folder 

      Initialize a Node.js Project

      Install Playwright [npm init playwright@latest from VS code terminal]

3. project structure that looks like:

       HIKMAH USER JOURNEY --> tests --> Hikmah_User Journey.spec.js
   
       scripting language used: JS

4. How to run test scripts:

       npx playwright test Hikmah_User Journey.spec.js --headed [From VS code terminal]        

       Sometimes the whole test script doesn't pass, so if it happens, please run the test individually, and then the tests will pass.


5. How to show HTML report: 

       npx playwright show-report [From VS code terminal]

NB: For automation test scripts, I use Codegen, which is the built-in Playwright tool that records browser actions and automatically generates test scripts. 

6. How to run codegen:

       npx playwright codegen [From VS code terminal]

7. Test Scenarios Covered for both the script files:

       a. Verify Browser has correct title
       b. Verify Login page has correct header
       c. Verify Sucessful Login with valid credential
       d. Verify Login failed with valid username & invalid password
       e. Verify the post is updated
       f. Verify Sucessful Logout







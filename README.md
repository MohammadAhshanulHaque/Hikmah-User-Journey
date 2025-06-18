For this test I use Playwright which is an open-source test automation framework & VS Code [Visual Studio Code].

Environment Setup for Playwright:
a. Install Node.js
b. Create a Project Folder
c. Initialize a Node.js Project
d. Install Playwright [npm init playwright@latest from VS code terminal]

project structure that looks like:
HIKMAH USER JOURNEY --> tests --> Hikmah_User Journey.spec.js
scripting language used for: JS

How to run test scripts:
npx playwright test Hikmah_User Journey.spec.js --headed [From VS code terminal]
Sometimes the whole test scripts din't pass so if it happen please run the test individually then the tests get pass. 

How to show HTML report: 
npx playwright show-report [From VS code terminal]

NB: For automation test scripts, I use Codegen, which is the built-in Playwright tool that records browser actions and automatically generates test scripts.

How to run codegen:
npx playwright codegen [From VS code terminal]

Test Scenarios Covered for both the script files:
1. Verify Browser has correct title
2. Verify Login page has correct header
3. Verify Sucessful Login with valid credential
4. Verify Login failed with valid username & invalid password
5. Verify the post is updated
6. Verify Sucessful Logout







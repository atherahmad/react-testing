# React-Testing 
## RTL and JEST
### Using React (React Testing Library) with Typescript template

<pre>
    <code>
        npx create-react-app . --template typescript
    </code>
</pre>

### TEST DRIVEN DEVELOPMENT (TDD)
Test driven development is a software development process where we write our tests before writing the software code.

Once the tests have been written , you then write the cod to ensure the tests pass.

    - Create test that verify the functionality of a specific feature.
    - Write software code that will run the tests successfully when re-executed.
    - Refactor the code for optimization while ensuring the test continue to pass.

Also called red-green testing as all tests go from a red failed state to green passed state. 

## Watch Mode in Jest
Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute test related only to those changed files.

An optimization designed to make your tests run fast regardless of how many tests you have.
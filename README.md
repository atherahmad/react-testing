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
On running we npm run test we are starting Jest with watch mode.

### Filtering Tests with Jest
* with flag <code>a</code> we run all the tests.
* with flag <code>o</code> it will run test for changed files.
* with flag <code>p</code> it will run test by file names regex pattern.
* with flag <code>t</code> it will run tests according to test names.

### Only and Skip Methods of test

There are two more ways to filter the tests in a test file that contains multiple tests.
* if we call <code>.only()</code> method of test global method and run the test then only test called with <code> .only()</code> method will run. <code> test.only()</code> 
* if we call <code>.skip()</code> method of test global method and run the test then that test called with <code> .skip()</code> will be skipped from the test file and rest tests method will run. <code> test.skip()</code>

### Grouping Test with Jest
If you prefer to group tests you can use describe method provided by global test method.
To do that we will use <code>describe(name, function/cb)</code>  method and in function we will write all the tests that we want to group together.

    describe("Title grouped with Describe", ()=>{
    test(' renders Welcome correctly' , ()=>{
        render(<Title />)
        const textElement = screen.getByText(/welcome/i)
        expect(textElement).toBeInTheDocument()
    })
    test('renders Welcome with a name', ()=>{
        render(<Title name='YYYY'/>)
        const textElement = screen.getByText(/welcome yyyy/i)
        expect(textElement).toBeInTheDocument()
    })
})
</code>
* We can also use nested describe methods.
* We can also use only and skip method on describe as we previously used for test global method.

### Describe vs Suites
Test suite corresponds to the test files that are processed , so one file is one suite and describe is a group of tests.

### Filename Conventions
* Files with .test.js or .test.tsx suffix.
* Files with .spec.js or .spec.tsx suffix.
* Files with .js or .tsx suffix in __tests__ folders.

* !Important : Recommendation is to always put your tests next to the code they are testing so that relative imports are shorter.

* There is an alternative to test method we can also use <code>it()</code> method in Jest. Similarly we can also use skip or only with <code>it()</code> method but syntax will be little different. 
- we will use `xit`method to skip one test and to run a particular test we use `fit`method.

### Code Coverage
A metric that can help you understand how much of your software code is tested.

* Statement coverage: how many statements in the software code have ben executed.
* Branches coverage: how many branches of the control structures have been executed.`e.g. if statements for instance`.
* Function coverage: how many functions defined have been called.
* Line coverage: how many of lines of source code have been tested.

we will create another script in package.json `"coverage": "npm run test -- --coverage"`. It takes more time that is why we added a different script for it and not updated our test script.

We can also pass the directory for coverage e.g. `npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'`

### Setting Threshold in Jest for tests:
`  "jest":{
    "coverageThreshold":{
      "global":{
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }` By adding this property to package.json we can set the threshold for coverage and it is very useful to check how many function , statements, lines or conditions are there with out tests.

  * jest also creates an html file for our coverage report. With coverage implementation you can check in coverage you will find index.html file inside lcov-report folder.

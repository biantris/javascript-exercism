### About Basics

JavaScript is a dynamic, prototype-based language. It has a few **primitives**, and everything else is considered an object.

While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js. The language is actively being developed; and because of its multi-paradigm property, allows for many styles of programming. JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

### (Re-)Assignment

There are a few primary ways to assign values to names in JavaScript - using variables or constants. On Exercism, variables are always written in **camelCase**; constants are written in **SCREAMING_SNAKE_CASE**. There is no official guide to follow, and various companies and organizations have various style guides. Feel free to write variables any way you like. The upside from writing them the way the exercises are prepared is that they'll be highlighted differently in the web interface and most IDEs.

https://en.wikipedia.org/wiki/Camel_case

https://en.wikipedia.org/wiki/Snake_case

Variables in JavaScript can be defined using the **`const`**, **`let`** or **`var`** keyword.

A variable can reference different values over its lifetime when using `let` or `var`. For example, `myFirstVariable` can be defined and redefined many times using the assignment operator `=`:

```js
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

In contrast to `let` and `var`, variables that are defined with `const` can only be assigned once. This is used to define constants in JavaScript.

const MY_FIRST_CONSTANT = 10;

```js
// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

### Constant Assignment

The `const` keyword is mentioned both for variables and constants. Another concept often mentioned around constants is **(im)-mutability**.

The `const` keyword only makes the binding immutable, that is, you can only assign a value to a `const` variable once. In JavaScript, only **primitive** values are immutable. However, **non-primitive** values can still be mutated.

```js
const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' };

// This is possible
MY_MUTABLE_VALUE_CONSTANT.food = 'pear';

MY_MUTABLE_VALUE_CONSTANT;
// => { food: "pear" }
```

https://en.wikipedia.org/wiki/Immutable_object

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

### Constant Value (Immutability)

As a rule, on Exercism, and many other organizations and project style guides, don't mutate values that look like `const SCREAMING_SNAKE_CASE`. Technically the values can be changed, but for clarity and expectation management on Exercism this is discouraged. When this must be enforced, use **`Object.freeze(value)`**.

```js
const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' });

// This silently fails
MY_MUTABLE_VALUE_CONSTANT.food = 'pear';

MY_MUTABLE_VALUE_CONSTANT;
// => { food: "apple" }
```

In the wild, it's unlikely to see `Object.freeze` all over a code base, but the rule to not mutate a `SCREAMING_SNAKE_CASE` value ever, is a good rule; often enforced using automated analysis such as a linter.

### Function Declarations

In JavaScript, units of functionality are encapsulated in functions, usually grouping functions together in the same file if they belong together. These functions can take parameters (arguments), and can return a value using the `return` keyword. Functions are invoked using `()` syntax.

> 💡 In JavaScript there are many different ways to declare a function. These other ways look different than using the `function` keyword. The track tries to gradually introduce them, but if you already know about them, feel free to use any of them. In most cases, using one or the other isn't better or worse.

### Export and Import

The `export` and `import` keywords are powerful tools that turn a regular JavaScript file into a **JavaScript module**. Apart from allowing code to selectively expose components, such as functions, classes, variables and constants, it also enables a whole range of other features, such as:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

- **Renaming exports and imports**, which allows you to avoid naming conflicts;
- **Dynamic Imports**, which loads code on demand;
- **Tree shaking**, which reduces the size of the final code by eliminating side-effect free modules and even contents of modules that are not used;
- Exporting **live bindings**, which allows you to export a value that mutates everywhere it's imported if the original value mutates.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#renaming_imports_and_exports

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports

https://2ality.com/2015/07/es6-module-exports.html#es6-modules-export-immutable-bindings

A concrete example is how the tests work on Exercism's JavaScript Track. Each exercise has at least one implementation file, for example lasagna.js, and each exercise has at least one test file, for example `lasagna.spec.js` . The implementation file uses `export` to expose the public API and the test file uses `import` to access these, which is how it can test the implementation's outcomes.

```js
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```
### Learn More
- https://developer.mozilla.org/en-US/docs/Glossary/Primitive

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#renaming_imports_and_exports

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports

- https://en.wikipedia.org/wiki/Immutable_object

- https://bitsofco.de/what-is-tree-shaking/

- https://2ality.com/2015/07/es6-module-exports.html#es6-modules-export-immutable-bindings
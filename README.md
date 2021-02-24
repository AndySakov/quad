# Quad.js
**THIS IS A NODE PROJECT** as you might've surmised so run it with node
_P.S you can find the command in the `package.json` file_

## Stuff to note
* I used arrow functions throughout
* There are some bugs I haven't quite figured out yet with the numbers and their tendency to explode when `a > 1`
* I used an external module for the prompting called `prompt-sync` which you can install using the following command in the project directory on terminal
```bash
    npm i prompt-sync
```

### Code breakdown
* **`println` function**
    ```javascript
        const println = (a) => {
            console.log(a)
        }
    ```
    This is just a function I carried over from being used to Scala that wraps around the `console.log` function for output in JS
* **`gcd` function**
    ```javascript
        const gcd = (a, b) => {
            return b == 0 ? a : gcd(b, (a % b));
        }
    ```
    This is just syntactic sugar to reduce code. It can also be written as
    ```javascript
        function gcd(a, b) {
            if (b == 0)
                return a;
            else
                return gcd(b, (a % b));
        }
    ```

* Importing `prompt-sync`
    ```javascript
        const prompt = require('prompt-sync')({sigint: true})
    ```
* Main quadratic formula
    ```javascript
        const ans = () => {
            const mB = b*-1
            const D = Math.pow(b, 2) - 4*a*c
            const x1 = (mB + Math.sqrt(D))/a*2
            const x2 = (mB - Math.sqrt(D))/a*2
            const div = Math.abs(gcd(x1, x2))

            println(`x1 = ${x1/div} & x2 = ${x2/div}`)
        }
    ```
    * `mB` is the part that turns `b` negative
    * `D` is the quantity defining `b^2 - 4*a*c`
    * `x1` is the first root of the equation
    * `x2` is the second root of the equation
    * `div` is the greatest common divisor of the 2 roots _it's use is defined in a comment in the code_
    * Obviously the last line just prints out the result

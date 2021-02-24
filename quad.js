const println = (a) => {
    console.log(a)
}

//quad formular is (-b +/- root(b^2 + 4ac))/2a
println('Quadratic equations solver')

println('The format for quadratic equations is ax^2 + bx + c')

const prompt = require('prompt-sync')({sigint: true})

const a = Number(prompt('Input a: '))
const b = Number(prompt('Input b: '))
const c = Number(prompt('Input c: '))

const gcd = (a, b) => {
   return b == 0 ? a : gcd(b, (a % b));
}

if(a===0){
    println('a cannot be equal to 0')
}

const ans = () => {
    const mB = b*-1
    const D = Math.pow(b, 2) - 4*a*c
    const x1 = (mB + Math.sqrt(D))/a*2
    const x2 = (mB - Math.sqrt(D))/a*2
    /*
        This next const is here serve as the greatest common divisor of the two roots cos the quad formula inflates them to higher values.
        So we bring it down with this
    */
    const div = Math.abs(gcd(x1, x2))

    println(`x1 = ${x1/div} & x2 = ${x2/div}`)
}
ans()

// console.log( fib(100) )
// console.log(fib_cache(10))
// console.log(fib_initialCache(10))
// console.log(fib_bottomUp(100000))

console.log(optimization(10))

// naive recursive fibonacci solution
function fib(n) {
    if ( n===0 ) {
        return 0
    } else if ( n === 1 ) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

// optimized by caching subproblem results
function fib_initialCache(n) {

    // if n is 0 or 1, return n
    if ( n < 2 ) return n

    // create empty array for cache
    let cache = []

    // make as many indices as n + 1
    for ( let i = 0 ; i < n + 1 ; i++ ) {
        cache[i] = -1
    }

    cache[0] = 0
    cache[1] = 1
    return (fib_cache(n, cache))

}

function fib_cache(n, cache) {
    
    // if value is set in cache, return
    if (cache[n] >= 0) return cache[n]

    // compute and add to cache before returning
    cache[n] = fib_cache(n-1, cache) + fib_cache(n-2, cache)

    return cache[n]

}

// turn the solution around
function fib_bottomUp(n) {

    // if n = 0, return n
    if ( n === 0 ) return n

    // init cache
    let cache = []

    // we will return cache[n], so if n = 0 or n = 1, cache[n] = n
    cache[0] = 0
    cache[1] = 1

    // fill cache iteratively when n >= 2
    for ( let i = 2 ; i <= n ; i++ ) {
        cache[i] = cache[i-1] + cache[i-2]
    }

    return cache[n]

}

// optimization - only need to keep track of the last 2
function optimization(n) {
    if ( n < 2 ) return n
    let n1 = 1
    let n2 = 0
    let n0

    for ( let i = 2 ; i < n ; i++ ) {
        n0 = n1 + n2
        n2 = n1
        n1 = n0
    }

    return n1 + n2

}
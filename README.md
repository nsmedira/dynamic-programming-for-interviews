# http://www.dynamicprogrammingbook.com

# https://github.com/samgh/DynamicProgrammingEbook

# Two Most Important Concepts [^1]

1. Have a system to solve every problem
2. All dynamic programming problems are very similar

# Recursion

The first step of the FAST method reqires you to find a recursive solution to the problem.[^2]

# Dynamic Programming

Dynamic programming is the technique of storing repeated computations in memory, rather than recomputing them every time you need them.[^3]

All problems that can be optimized using dynamic programming have **optimal substructure** and **overlapping subproblems**.[^3]

## Optimal Substructure

Optimal substructure requires that you can solve a problem based on the solutions of subproblems.[^3]

If you can solve a problem recursively, it most likely has an optimal substructure.[^3]

## Overlapping Subproblems

When you split your problem into subproblems, you sometimes get the same subproblem multiple times.[^4]

# Key Terms

## Memoization

The technique of writing a function that remembers the results of previous computations.[^4]

To use memoization, a function can use a data structure (like an array or HashMap) to store the values it has previously computed and then look them up when it gets called.[^4]

## Top-down

A top-down solution starts with the final result and recursively breaks it down into subproblems.[^4]

Top-down = recursive.[^4]

## Bottom-up

The bottom-up method takes an iterative approach to solve the subproblems first and then works up to the desired solution.[^4]

Bottom=up = iterative.[^4]

# The FAST method [^5]

1. First solution
2. Analyze the first solution
3. Identify the Subproblems
4. Turn the solution around.

## First solution

This solution will be brute force and recursive.[^6]

Restrictions:
- The recursive calls must be self-contained. That means no global variables.[^6]
- You cannot do tail recursion. Your solution must compute the results to each subproblem and then combine them afterwards.[^6]
    - Tail recursion: A recursive function is tail recursive when recursive call is the last thing executed by the function.[^7]
- Do not pass in unnecessary variables. Eg. If you can count the depth of your recursion as you reutrn, don't pass a count variable into your recursive function.[^6]

## Analyze the first solution

Determine the time and space complexity of your first solution and ask whether there is obvious room for improvement.[^6]

Ask whether the first solution has the two characteristics of problems with dynamic solutions.[^6]
- Does it have an optimal substructure? Since our solution's recursive, then there is a strong likelihood that it meets this criteria.
- Are there overlapping subproblems? It may be necessary to try a medium-sized test case. This will enable you to see if you end up calling the same function with the same input multiple times.

## Find the Subproblems

If our solution can be made dynamic, the exact subproblems to memoize must be codified.[^8]

Our recursive solution can be made dynamic by caching the values.[^8]

## Turn the solution around

Can stop with a top-down solution (which we have by this point).

Write a completely different function that iteratively computes the results of successive subproblems until desired result is reached.[^8]

# Fibonacci Numbers

Problem: Given an integer **n**, write a function that will return the **n**th Fibonacci number.[^9]

[^1]: p. 5
[^2]: p. 6
[^3]: p. 7
[^4]: p. 8
[^5]: p. 9
[^6]: p. 10
[^7]: https://www.geeksforgeeks.org/tail-recursion/
[^8]: p. 11
[^9]: p. 12
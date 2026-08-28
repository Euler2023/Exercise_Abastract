---
title: "Exercise LA324: Integer Kernel of Two Linear Equations"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - integer-kernels
  - free-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 4, Diagonalizing Integer Matrices, Ex. 4.4, printed p. 438, PDF p. 450"
created: 2026-08-28
---

# Exercise LA324: Integer Kernel of Two Linear Equations

## Problem Statement

> [!question] Exercise 4.4
> Find a basis for the $\mathbb Z$-module of integer solutions of
>
> $$
> x+2y+3z=0,
> \qquad
> x+4y+9z=0.
> $$

## Hints

> [!hint]- Hint 1
> Subtract the first equation from the second.

## Solution

> [!success]- Solution
> Subtraction gives
>
> $$
> 2y+6z=0,
> $$
>
> so $y=-3z$. Substituting in the first equation yields $x=3z$. Therefore every integer solution is
>
> $$
> (x,y,z)=z(3,-3,1),
> $$
>
> and a $\mathbb Z$-basis is
>
> $$
> \boxed{(3,-3,1)^{\mathsf T}.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Routing:** Linear Algebra is primary because the solution module is an integer kernel.
- **Source status:** [S1, Ch. 14, §14.4, Ex. 4.4, printed p. 438, PDF p. 450]. The elimination is independent.

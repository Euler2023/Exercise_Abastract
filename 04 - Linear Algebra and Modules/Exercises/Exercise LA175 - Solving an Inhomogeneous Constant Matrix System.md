---
title: "Exercise LA175: Solving an Inhomogeneous Constant Matrix System"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - differential-equations
  - affine-systems
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §3, Ex. 3.4, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA175: Solving an Inhomogeneous Constant Matrix System

## Problem Statement

> [!question] Exercise 3.4
> Let $A$ and $B$ be constant matrices, with $A$ invertible. Solve the inhomogeneous differential equation
>
> $$
> \frac{dX}{dt}=AX+B
> $$
>
> in terms of the solutions to $dX/dt=AX$.

## Hints

> [!hint]- Hint 1
> Look for a constant particular solution.

## Solution

> [!success]- Solution
> The constant function $X_p=-A^{-1}B$ is a particular solution because
>
> $$
> AX_p+B=-AA^{-1}B+B=0.
> $$
>
> If $Y$ is any solution of $Y'=AY$, then
>
> $$
> X=Y-A^{-1}B
> $$
>
> satisfies $X'=AX+B$. Conversely, every solution has this form after setting $Y=X+A^{-1}B$. With initial value $X(0)=X_0$, this becomes
>
> $$
> X(t)=e^{tA}(X_0+A^{-1}B)-A^{-1}B.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** [S1, Ch. 5, §3, Ex. 3.4, printed p. 151, PDF p. 163]; independent solution.


---
title: "Exercise LA168: Inverse from the Cayley-Hamilton Theorem"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - cayley-hamilton
  - matrix-inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §2, Ex. 2.1, printed p. 151, PDF p. 163"
created: 2026-08-24
---

# Exercise LA168: Inverse from the Cayley-Hamilton Theorem

## Problem Statement

> [!question] Exercise 2.1
> Use the Cayley-Hamilton Theorem to express $A^{-1}$ in terms of $A$, $(\det A)^{-1}$, and the coefficients of the characteristic polynomial. Verify your expression in the $2\times2$ case.

## Hints

> [!hint]- Hint 1
> Write $p_A(t)=t^n+c_{n-1}t^{n-1}+\cdots+c_1t+c_0$ and multiply $p_A(A)=0$ by $A^{-1}$.

## Solution

> [!success]- Solution
> Since $A$ is invertible, $c_0=(-1)^n\det A\ne0$. Cayley-Hamilton gives
>
> $$
> A^n+c_{n-1}A^{n-1}+\cdots+c_1A+c_0I=0.
> $$
>
> Multiplying by $A^{-1}$ and solving for it yields
>
> $$
> A^{-1}=-\frac1{c_0}\left(A^{n-1}+c_{n-1}A^{n-2}+\cdots+c_2A+c_1I\right).
> $$
>
> For $n=2$,
>
> $$
> p_A(t)=t^2-(\operatorname{tr}A)t+\det A,
> $$
>
> so
>
> $$
> A^{-1}=\frac{(\operatorname{tr}A)I-A}{\det A},
> $$
>
> which is the usual $2\times2$ inverse formula.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Proved in the source:** The Cayley-Hamilton Theorem is proved in Chapter 5; its application here is independently derived.
- **Source status:** [S1, Ch. 5, §2, Ex. 2.1, printed p. 151, PDF p. 163].


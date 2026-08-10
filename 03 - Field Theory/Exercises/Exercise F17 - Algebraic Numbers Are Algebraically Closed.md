---
title: "Exercise F17: Algebraic Numbers Are Algebraically Closed"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-closure
  - algebraic-numbers
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 10, Ex. 10.1, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise F17: Algebraic Numbers Are Algebraically Closed

## Problem Statement

> [!question] Exercise
> Prove that the subset of $\mathbb C$ consisting of the algebraic numbers is algebraically closed.

## Hints

> [!hint]- Hint 1
> Put the finitely many coefficients of a polynomial into one finite extension of $\mathbb Q$.

> [!hint]- Hint 2
> Use transitivity of algebraicity.

## Solution

> [!success]- Solution
> Let $\overline{\mathbb Q}\subset\mathbb C$ be the field of algebraic numbers, and take a nonconstant polynomial
> $$
> f(x)\in\overline{\mathbb Q}[x].
> $$
> Its finitely many coefficients generate a finite extension $K/\mathbb Q$. By the Fundamental Theorem of Algebra, $f$ has a root $\alpha\in\mathbb C$. Since $\alpha$ satisfies a polynomial over $K$, it is algebraic over $K$. The extension $K/\mathbb Q$ is algebraic, so transitivity of algebraicity implies that $\alpha$ is algebraic over $\mathbb Q$. Hence $\alpha\in\overline{\mathbb Q}$.
>
> Thus every nonconstant polynomial over $\overline{\mathbb Q}$ has a root in $\overline{\mathbb Q}$, so $\overline{\mathbb Q}$ is algebraically closed.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

The Fundamental Theorem of Algebra is an external input at this point; S1 states it as Theorem 15.10.1 and gives a topological winding-number outline on printed pp. 471–472, PDF pp. 483–484. The remaining argument is independently derived.

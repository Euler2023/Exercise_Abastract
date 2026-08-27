---
title: "Exercise R56: Minimal Degree and Principal Polynomial Ideals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - polynomial-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.11, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R56: Minimal Degree and Principal Polynomial Ideals

## Problem Statement

> [!question] Exercise 3.11
> Let $R$ be a ring and $I$ an ideal of $R[x]$. Let $n$ be the lowest degree among nonzero elements of $I$. Prove or disprove: $I$ contains a monic polynomial of degree $n$ if and only if it is a principal ideal.

## Hints

> [!hint]- Hint 1
> Division by a monic polynomial works over any coefficient ring.

> [!hint]- Hint 2
> For the converse, consider $(2x)\subset\mathbb Z[x]$.

## Solution

> [!success]- Solution
> One implication is true. If $f\in I$ is monic of minimal degree $n$, divide any $g\in I$ by $f$:
>
> $$
> g=qf+r,\qquad \deg r<n.
> $$
>
> Since $r=g-qf\in I$, minimality forces $r=0$. Thus $I=(f)$.
>
> The converse is false. In $\mathbb Z[x]$, the principal ideal $I=(2x)$ has lowest nonzero degree $1$, but every degree-$1$ element of $I$ has even leading coefficient, so none is monic. Therefore the proposed equivalence is false.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Method boundary:** The monic hypothesis is precisely what permits polynomial division over an arbitrary ring.
- **Source status:** The problem is from [S1, Ch. 11, §3, Ex. 3.11, printed p. 355, PDF p. 367]. The counterexample and valid implication are independent.


---
title: "Exercise R127: Comparing Eisenstein and Mod-Two Factorization"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - eisenstein-criterion
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.6, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R127: Comparing Eisenstein and Mod-Two Factorization

## Problem Statement

> [!question] Exercise 4.6
> Factor $x^5+5x+5$ into irreducible factors in $\mathbb Q[x]$ and in $\mathbb F_2[x]$.

## Hints

> [!hint]- Hint 1
> Over $\mathbb Q$, apply Eisenstein's criterion at $5$.

> [!hint]- Hint 2
> Over $\mathbb F_2$, test the only irreducible quadratic and then check that the cubic quotient has no root.

## Solution

> [!success]- Solution
> In $\mathbb Q[x]$, the prime $5$ divides every nonleading coefficient of
>
> $$
> x^5+0x^4+0x^3+0x^2+5x+5,
> $$
>
> and $25$ does not divide the constant coefficient. Eisenstein's criterion shows that $x^5+5x+5$ is already irreducible.
>
> Modulo $2$, the polynomial becomes $x^5+x+1$, and multiplication gives
>
> $$
> x^5+x+1=(x^2+x+1)(x^3+x^2+1).
> $$
>
> The quadratic has no root in $\mathbb F_2$. The cubic also has no root, since its values at $0$ and $1$ are both $1$. Thus both factors are irreducible, and the displayed product is the irreducible factorization in $\mathbb F_2[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because the task compares irreducible factorization before and after coefficient reduction.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.6, printed p. 380, PDF p. 392]. The proof is independent.


---
title: "Exercise R189: Testing Polynomial Identities over the Reals"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-identities
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 3, Identities, Ex. 3.2, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise R189: Testing Polynomial Identities over the Reals

## Problem Statement

> [!question] Exercise 3.2
> It might be convenient to verify an identity only for the real numbers. Would this suffice?

## Hints

> [!hint]- Hint 1
> Repeat Exercise 3.1 with $\mathbb R$ in place of $\mathbb C$.

## Solution

> [!success]- Solution
> Yes. The real field is infinite, so a polynomial in $\mathbb R[x_1,\ldots,x_n]$ that vanishes at every point of $\mathbb R^n$ is the zero formal polynomial, by the same induction as in Exercise 3.1.
>
> In a permanence argument, subtract the two sides of the proposed identity to obtain a polynomial $F$ with integer coefficients in all formal entries. If the identity holds for every real substitution, then $F$ is the zero polynomial in $\mathbb R[\mathbf x]$. Its integer coefficients are consequently all zero already in $\mathbb Z$, so every substitution homomorphism $\mathbb Z[\mathbf x]\to R$ sends $F$ to zero for any commutative ring $R$. Thus verification over $\mathbb R$ suffices for genuine polynomial identities.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Exercises/Exercise R188 - A Complex Polynomial Is Determined by Its Values|A Complex Polynomial Is Determined by Its Values]]

## Notes

- **Routing:** Ring Theory is primary because the argument concerns universal substitution from an integer polynomial ring.
- **Method boundary:** This applies to polynomial identities, not to assertions involving order, division by a nonunit, existence, or inequalities.
- **Source status:** [S1, Ch. 14, §14.3, Ex. 3.2, printed p. 437, PDF p. 449]. The justification is independent.

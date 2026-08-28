---
title: "Exercise R130: Eisenstein Binomials x^n-p"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - eisenstein-criterion
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.9, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R130: Eisenstein Binomials x^n-p

## Problem Statement

> [!question] Exercise 4.9
> For which primes $p$ and which integers $n$ is the polynomial $x^n-p$ irreducible in $\mathbb Q[x]$?

## Hints

> [!hint]- Hint 1
> A polynomial exponent must be nonnegative; the nonconstant case has $n\ge1$.

> [!hint]- Hint 2
> Apply Eisenstein's criterion using the same prime $p$ that occurs in the constant term.

## Solution

> [!success]- Solution
> Let $p$ be any prime and let $n\ge1$. In
>
> $$
> x^n+0x^{n-1}+\cdots+0x-p,
> $$
>
> the prime $p$ divides every nonleading coefficient, it does not divide the leading coefficient $1$, and $p^2$ does not divide the constant coefficient $-p$. Eisenstein's criterion therefore proves that $x^n-p$ is irreducible in $\mathbb Q[x]$.
>
> Hence the answer is:
>
> $$
> \boxed{\text{every prime }p\text{ and every positive integer }n.}
> $$
>
> For $n=0$, the expression is the constant polynomial $1-p$, which is not a nonconstant irreducible polynomial. Negative $n$ do not define polynomials in $\mathbb Q[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because Eisenstein's criterion settles irreducibility uniformly.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.9, printed p. 380, PDF p. 392]. The proof is independent.


---
title: "Exercise F58: Repeated Factors from a Common Derivative Divisor"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - polynomial-derivatives
  - repeated-factors
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 6, Adjoining Roots, Ex. 6.1, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F58: Repeated Factors from a Common Derivative Divisor

## Problem Statement

> [!question] Exercise 6.1
> Let $F$ be a field of characteristic zero, let $f'$ denote the derivative of a polynomial $f$ in $F[x]$, and let $g$ be an irreducible polynomial that is a common divisor of $f$ and $f'$. Prove that $g^2$ divides $f$.

## Hints

> [!hint]- Hint 1
> Write $f=gq$ and differentiate. In characteristic zero, an irreducible polynomial cannot divide its own derivative.

## Solution

> [!success]- Solution
> Since $g\mid f$, write $f=gq$. Differentiating gives
>
> $$
> f'=g'q+gq'.
> $$
>
> The hypothesis $g\mid f'$ therefore implies $g\mid g'q$. Because the characteristic is zero, $g'\ne0$ and $\deg g'<\deg g$. Irreducibility of $g$ then gives $\gcd(g,g')=1$. Euclid's lemma forces $g\mid q$.
>
> Thus $q=gh$ for some $h\in F[x]$, and
>
> $$
> f=gq=g^2h.
> $$
>
> Therefore $g^2\mid f$.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Field Theory is primary because the derivative criterion detects repeated irreducible factors and underlies separability.
- **Hypothesis boundary:** In positive characteristic an irreducible polynomial may have zero derivative, so the step $\gcd(g,g')=1$ requires modification.
- **Source status:** [S1, Ch. 15, §15.6, Ex. 6.1, printed p. 473, PDF p. 485]. The proof is independent.

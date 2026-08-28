---
title: "Exercise R106: Factorization over Small Finite Fields"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-factorization
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.1, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R106: Factorization over Small Finite Fields

## Problem Statement

> [!question] Exercise 2.1
> Factor the following polynomials into irreducible factors in $\mathbb F_p[x]$:
>
> **(a)** $x^3+x^2+x+1$, $p=2$;
>
> **(b)** $x^2-3x-3$, $p=5$;
>
> **(c)** $x^2+1$, $p=7$.

## Hints

> [!hint]- Hint 1
> For a quadratic over a field, reducibility is equivalent to having a root in that field.

> [!hint]- Hint 2
> In part (a), group the first two and last two terms. In parts (b) and (c), list the quadratic residues in the relevant field.

## Solution

> [!success]- Solution
> **(a)** In $\mathbb F_2[x]$,
>
> $$
> x^3+x^2+x+1=(x+1)(x^2+1).
> $$
>
> Since $x^2+1=x^2+2x+1=(x+1)^2$ in characteristic $2$,
>
> $$
> x^3+x^2+x+1=(x+1)^3.
> $$
>
> The linear factor $x+1$ is irreducible.
>
> **(b)** Modulo $5$, the constant term $-3$ equals $2$, and
>
> $$
> (x-1)(x-2)=x^2-3x+2=x^2-3x-3.
> $$
>
> Hence the irreducible factorization is
>
> $$
> x^2-3x-3=(x-1)(x-2)
> $$
>
> in $\mathbb F_5[x]$.
>
> **(c)** The squares in $\mathbb F_7$ are $0,1,2,4$. Thus $-1=6$ is not a square, so $x^2+1$ has no root in $\mathbb F_7$. A quadratic over a field is reducible exactly when it has a root, hence $x^2+1$ is irreducible in $\mathbb F_7[x]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Ring Theory is primary because the task is explicit factorization in polynomial rings; finite fields are a prerequisite.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.1, printed p. 379, PDF p. 391]. The solution is an independent derivation.


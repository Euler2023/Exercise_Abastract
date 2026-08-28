---
title: "Exercise R123: Two Irreducibility Tests over Finite Fields"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.2, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R123: Two Irreducibility Tests over Finite Fields

## Problem Statement

> [!question] Exercise 4.2
> Prove that the following polynomials are irreducible:
>
> **(a)** $x^2+1$ in $\mathbb F_7[x]$;
>
> **(b)** $x^3-9$ in $\mathbb F_{31}[x]$.

## Hints

> [!hint]- Hint 1
> A quadratic or cubic over a field is reducible exactly when it has a root.

> [!hint]- Hint 2
> If $9$ were a cube in $\mathbb F_{31}^{\times}$, then $9^{10}$ would equal $1$.

## Solution

> [!success]- Solution
> **(a)** The square residues modulo $7$ are $0,1,2,4$. Since $-1=6$ is not among them, $x^2+1$ has no root in $\mathbb F_7$. It is therefore irreducible.
>
> **(b)** A root of $x^3-9$ would make $9$ a cube in the cyclic group $\mathbb F_{31}^{\times}$ of order $30$. Every cube $a^3$ satisfies
>
> $$
> (a^3)^{10}=a^{30}=1.
> $$
>
> But direct modular arithmetic gives
>
> $$
> 9^2\equiv19,\qquad
> 9^4\equiv20,\qquad
> 9^5\equiv25,\qquad
> 9^{10}\equiv25^2\equiv5\pmod{31}.
> $$
>
> Thus $9$ is not a cube, so $x^3-9$ has no root in $\mathbb F_{31}$. A cubic with no root is irreducible.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the task is polynomial irreducibility; the multiplicative group of a finite field supplies the root test in part (b).
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.2, printed p. 380, PDF p. 392]. The proof is independent.


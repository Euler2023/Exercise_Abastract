---
title: "Exercise F30: Quadratic Fields over $\\mathbb F_3$, $\\mathbb F_5$, and $\\mathbb F_7$"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - quadratic-extensions
  - irreducible-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.11, printed p. 99, PDF p. 111"
created: 2026-08-23
---

# Exercise F30: Quadratic Fields over $\mathbb F_3$, $\mathbb F_5$, and $\mathbb F_7$

## Problem Statement

> [!question] Exercise 1.11
> Prove that $\{a+bi:a,b\in\mathbb F_3\}$ is a field with nine elements when addition and multiplication mimic the complex numbers. Does the same construction work over $\mathbb F_5$? Over $\mathbb F_7$?

## Hints

> [!hint]- Hint 1
> The construction is $\mathbb F_p[x]/(x^2+1)$.

> [!hint]- Hint 2
> It is a field exactly when $x^2+1$ has no root in $\mathbb F_p$.

## Solution

> [!success]- Solution
> The formal rule $i^2=-1$ identifies the construction with
> 
> $$
> \mathbb F_p[x]/(x^2+1).
> $$
> 
> Over $\mathbb F_3$, the squares are $0,1$, so $-1=2$ is not a square. Thus $x^2+1$ is irreducible, the quotient is a field, and its $3^2=9$ coefficient pairs are distinct.
> 
> Over $\mathbb F_5$, $-1=4=2^2$, so $x^2+1=(x-2)(x+2)$ and the quotient has zero divisors; the method does not give a field.
> 
> Over $\mathbb F_7$, the nonzero squares are $1,2,4$, so $-1=6$ is not a square. The polynomial is irreducible and the same method gives a field with $49$ elements.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.11, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.

---
title: "Exercise F70: Splitting a Frobenius Power Minus One"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 9, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F70: Splitting a Frobenius Power Minus One

## Problem Statement

> [!question] Lang, Chapter V, Exercise 9
> Find the splitting field of $X^{p^s}-1$ over the field $\mathbb Z/p\mathbb Z$.

## Hints

> [!hint]- Hint 1
> Use the Frobenius identity in characteristic $p$.

## Solution

> [!success]- Solution and proof status
> Over $\mathbb F_p$, repeated application of $(a+b)^p=a^p+b^p$ gives
> $$
> X^{p^s}-1=(X-1)^{p^s}.
> $$
> Thus the only root is $1$, with multiplicity $p^s$. All roots already belong to the base field, and the splitting field is $\mathbb F_p$, of degree one. The exponent denotes a power of $p$; this is different from the polynomial $X^{p^s}-X$, which is separable and describes a finite field of $p^s$ elements.

## Related Concepts

- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Notation:** As customary here, $p$ is prime and $s$ is a nonnegative integer (the same answer holds at $s=0$).

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 9, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.

---
title: "Exercise F64: Squaring a Generator of an Odd Degree Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 2, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F64: Squaring a Generator of an Odd Degree Extension

## Problem Statement

> [!question] Lang, Chapter V, Exercise 2
> Let $E=F(\alpha)$ where $\alpha$ is algebraic over $F$, of odd degree. Show that $E=F(\alpha^2)$.

## Hints

> [!hint]- Hint 1
> Use the tower $F\subseteq F(\alpha^2)\subseteq F(\alpha)$.

## Solution

> [!success]- Solution and proof status
> Write $n=[F(\alpha):F]$, an odd integer, and $M=F(\alpha^2)$. The element $\alpha$ is a root of $X^2-\alpha^2\in M[X]$, so $[E:M]\le2$. The tower law says
> $$
> n=[E:M][M:F].
> $$
> Thus $[E:M]$ is an odd positive integer at most two and must be one. Hence $E=M$. This also works in characteristic two; no separability hypothesis is used.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Related exercise:** [[03 - Field Theory/Exercises/Exercise F45 - Squaring a Generator of a Quintic Extension|F45]] is the degree-five special case.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 2, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.

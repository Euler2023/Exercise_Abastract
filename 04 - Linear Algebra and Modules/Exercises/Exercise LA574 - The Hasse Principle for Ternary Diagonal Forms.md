---
title: 'Exercise LA574: The Hasse Principle for Ternary Diagonal Forms'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 5, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-5
created: '2026-10-23'
---

# Exercise LA574: The Hasse Principle for Ternary Diagonal Forms

## Problem Statement

> [!question] Neukirch VI.4.5
> A quadratic form $ax^2+by^2+cz^2$, $a,b,c\in K^*$, represents zero if and only if it represents zero everywhere locally.
> **Printed remark:** In complete generality, one has the following “local-to-global principle”:
> **Theorem of Minkowski-Hasse:** A quadratic form over a number field $K$ represents zero if and only if it represents zero over every completion $K_{\mathfrak p}$.
> The proof follows from the result stated in Exercise 5 by pure algebra (see [113]).

## Hints

> [!hint]- Hint
> Use the preceding exercise locally to make $z\ne0$, divide by $z^2$, and reduce to the preceding norm equation.

> [!hint]- Stronger hint
> Choose local zeros with z nonzero and divide by a z^2, reducing to the quadratic norm equation with coefficients -b/a and -c/a.

## Solution

> [!success]- Independent derivation
> Let $K$ be a number field. A nontrivial global zero gives a nontrivial zero in every completion. Conversely, suppose there is a nontrivial zero in every $K_v$. The field $K_v$ has characteristic $0$ and more than five elements, and $a,b,c$ are nonzero. The corrected version of the preceding exercise gives a local zero with $z\ne0$. Set $u=x/z$ and $w=y/z$. Then
> $$
> u^2-\left(-\frac ba\right)w^2=-\frac ca
> $$
> is solvable in every completion. The Hasse principle for quadratic norms in VI.§4 Exercise 3 gives a global solution $u,w\in K$. Hence $(u,w,1)$ is a nontrivial global zero of the original ternary form.
> This proves only the ternary case requested in the exercise. The accompanying Minkowski–Hasse theorem in arbitrary dimension still requires the additional algebraic induction indicated by the book; that accompanying statement is not counted as proved here.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 5, printed p.385, PDF p.404]. The solution is an independent derivation.

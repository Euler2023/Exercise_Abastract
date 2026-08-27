---
title: "Exercise R95: Finitely Many Singular Points on an Irreducible Curve"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-curves
  - singularities
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.9, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R95: Finitely Many Singular Points on an Irreducible Curve

## Problem Statement

> [!question] Exercise 9.9
> An irreducible plane algebraic curve $C$ is the zero locus of an irreducible $f(x,y)\in\mathbb C[x,y]$. A point is singular if $f=\partial f/\partial x=\partial f/\partial y=0$. Prove that an irreducible curve has only finitely many singular points.

## Hints

> [!hint]- Hint 1
> At least one partial derivative is nonzero, and $f$ cannot divide a nonzero polynomial of lower degree.

## Solution

> [!success]- Solution
> Since $\mathbb C$ has characteristic zero and $f$ is nonconstant, at least one partial derivative, say $f_x$, is nonzero. Its degree is lower than that of $f$, so the irreducible polynomial $f$ does not divide $f_x$. Thus $f$ and $f_x$ have no common nonconstant factor. Artin's finite-intersection theorem for plane curves implies that $V(f,f_x)$ is finite. Every singular point belongs to this set, so the singular locus is finite.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Source input:** The finite-intersection theorem from Artin §11.9 is used; its exact hypothesis is that the two plane polynomials have no common nonconstant factor.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.9, printed p. 358, PDF p. 370]. The reduction is independent.


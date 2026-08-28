---
title: "Exercise R135: Irreducibility of a Complex Affine Conic"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - irreducible-polynomials
  - affine-curves
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.14, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R135: Irreducibility of a Complex Affine Conic

## Problem Statement

> [!question] Exercise 4.14
> By analyzing the locus $x^2+y^2=1$, prove that the polynomial $x^2+y^2-1$ is irreducible in $\mathbb C[x,y]$.

## Hints

> [!hint]- Hint 1
> If a quadratic polynomial in two variables were reducible, its zero locus would contain an affine line coming from a linear factor.

> [!hint]- Hint 2
> Parametrize a putative line by $(x,y)=(at+b,ct+d)$ and compare the three coefficients after substitution.

## Solution

> [!success]- Solution
> Suppose $x^2+y^2-1$ were reducible. Since its total degree is $2$, it would be a product of two nonconstant affine-linear polynomials. Its zero locus would therefore contain an affine line.
>
> Let a nonconstant line be parametrized by
>
> $$
> x=at+b,\qquad y=ct+d,
> $$
>
> where $(a,c)\neq(0,0)$. If the entire line lay on the locus, then
>
> $$
> (at+b)^2+(ct+d)^2-1
> $$
>
> would be the zero polynomial in $t$. Its coefficients would give
>
> $$
> a^2+c^2=0,\qquad ab+cd=0,\qquad b^2+d^2=1.
> $$
>
> From $a^2+c^2=0$, either $c=ia$ or $c=-ia$; in either case $a\neq0$. If $c=ia$, the middle equation gives $b+id=0$, and hence $b^2+d^2=0$, contradicting the last equation. The case $c=-ia$ is identical.
>
> Thus the complex affine conic contains no affine line. It cannot be a union of the zero loci of two linear factors, so $x^2+y^2-1$ is irreducible in $\mathbb C[x,y]$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Notes

- **Routing:** Ring Theory is primary because the conclusion is polynomial irreducibility; the affine-locus analysis supplies the proof.
- **Geometric boundary:** Over $\mathbb C$ this locus is a complex affine conic, not merely the real unit circle.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.14, printed p. 380, PDF p. 392]. The line-containment argument is independent.


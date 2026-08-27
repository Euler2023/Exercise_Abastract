---
title: "Exercise R87: Maximal Ideals on an Affine Curve"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - maximal-ideals
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.1, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R87: Maximal Ideals on an Affine Curve

## Problem Statement

> [!question] Exercise 9.1
> Let $I=(y^2+x^3-17)\subset\mathbb C[x,y]$. Which of the following sets generate maximal ideals in $R=\mathbb C[x,y]/I$?
>
> $$
> (x-1,y-4),\qquad(x+1,y+4),\qquad(x^3-17,y^2).
> $$

## Hints

> [!hint]- Hint 1
> Lift each generated ideal to $\mathbb C[x,y]$ and inspect the resulting quotient.

## Solution

> [!success]- Solution
> For $(x-1,y-4)$, the point $(1,4)$ lies on the curve because $16+1-17=0$. The quotient by the lifted ideal is $\mathbb C$, so the generated ideal in $R$ is maximal.
>
> For $(x+1,y+4)$, substitution gives $16-1-17=-2$. Thus the lifted ideal together with $I$ contains a nonzero constant and is the whole ring; its image is not a proper ideal.
>
> For $(x^3-17,y^2)$, the quotient is
>
> $$
> \mathbb C[x,y]/(x^3-17,y^2),
> $$
>
> in which the nonzero residue of $y$ is nilpotent. It is not a field, so the ideal is not maximal. Hence only $(x-1,y-4)$ generates a maximal ideal of $R$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Routing rationale:** The decisive computations use quotient rings and maximal ideals; the curve is geometric context.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.1, printed p. 357, PDF p. 369]. The quotient tests are independent.


---
title: "Exercise F59: Square Roots inside a Quadratic Extension"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - quadratic-extensions
  - square-classes
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 6, Adjoining Roots, Ex. 6.2, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F59: Square Roots inside a Quadratic Extension

## Problem Statement

> [!question] Exercise 6.2
> **(a)** Let $F$ be a field of characteristic zero. Determine all square roots of elements of $F$ that a quadratic extension of the form $F(\sqrt a)$ contains.
>
> **(b)** Classify quadratic extensions of $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Square a general element $u+v\sqrt a$ and compare the coefficients of $1$ and $\sqrt a$.

## Solution

> [!success]- Solution
> **(a)** Assume $a$ is a nonsquare, so $E=F(\sqrt a)$ is quadratic. If $z=u+v\sqrt a$ with $u,v\in F$ and $z^2\in F$, then
>
> $$
> z^2=u^2+av^2+2uv\sqrt a.
> $$
>
> Since $1$ and $\sqrt a$ are linearly independent over $F$ and $\operatorname{char}F=0$, one has $uv=0$. Thus either $v=0$ and $z\in F$, or $u=0$ and $z\in F\sqrt a$. Conversely, every element in either of these two one-dimensional $F$-subspaces has square in $F$. Hence the required square roots are exactly
>
> $$
> \boxed{F\ \cup\ F\sqrt a.}
> $$
>
> **(b)** Let $K/\mathbb Q$ have degree $2$. If $\alpha\in K\setminus\mathbb Q$ has minimal polynomial $x^2+bx+c$, then
>
> $$
> (2\alpha+b)^2=b^2-4c\in\mathbb Q,
> $$
>
> so $K=\mathbb Q(\sqrt d)$ after removing a rational square factor from the discriminant. Thus every quadratic extension has the form
>
> $$
> \boxed{\mathbb Q(\sqrt d),}
> $$
>
> where $d$ is a squarefree integer with $d\ne0,1$. Conversely, each such field has degree $2$. With $d$ squarefree, the parameter is unique.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Field Theory is primary because the exercise classifies elements and extensions of degree two.
- **Hypothesis boundary:** Part (a) only needs characteristic different from $2$; the source assumes characteristic zero.
- **Source status:** [S1, Ch. 15, §15.6, Ex. 6.2, printed p. 473, PDF p. 485]. The classification is independent.

---
title: "Exercise F49: Roots of Unity of Degree at Most Three"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - roots-of-unity
  - euler-totient
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.5, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F49: Roots of Unity of Degree at Most Three

## Problem Statement

> [!question] Exercise 3.5
> Determine the values of $n$ such that $\zeta_n$ has degree at most $3$ over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> The degree is $\varphi(n)$, and $\varphi(n)$ is even for $n>2$.

## Solution

> [!success]- Solution
> Since $[\mathbb Q(\zeta_n):\mathbb Q]=\varphi(n)$, we need $\varphi(n)\le3$. For $n>2$, the reduced residue classes modulo $n$ pair as $a$ and $-a$, so $\varphi(n)$ is even. Hence only the values $1$ and $2$ can occur.
>
> We have
>
> $$
> \varphi(n)=1\iff n\in\{1,2\},
> \qquad
> \varphi(n)=2\iff n\in\{3,4,6\}.
> $$
>
> Therefore
>
> $$
> \boxed{n=1,2,3,4,6.}
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** Field Theory is primary because the classification is by cyclotomic extension degree.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.5, printed p. 472, PDF p. 484]. The classification is independent.

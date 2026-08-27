---
title: "Exercise R92: Decomposition of Plane Varieties"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-geometry
  - plane-curves
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.6, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R92: Decomposition of Plane Varieties

## Problem Statement

> [!question] Exercise 9.6
> Prove that every variety in $\mathbb C^2$ is the union of finitely many points and algebraic curves.

> [!warning] Source issue
> Under the definition in Artin §11.9, $\mathbb C^2$ itself is a variety, but it is not a finite union of points and curves. The intended statement therefore requires a **proper** variety, equivalently a nonzero defining ideal. The printed wording is preserved above.

## Hints

> [!hint]- Hint 1
> Choose one nonzero equation, factor it into irreducibles, and study the remaining equations on each irreducible component.

## Solution

> [!success]- Solution
> Taken literally, the statement has the counterexample $X=\mathbb C^2$. For the intended proper-variety statement, let $X=V(I)$ with $I\ne0$. Choose $0\ne f\in I$ and factor
>
> $$
> f=c\prod_{j=1}^s p_j^{e_j}
> $$
>
> into irreducibles. Then $X\subseteq\bigcup_j V(p_j)$. For a fixed $j$, either every element of $I$ is divisible by $p_j$, in which case the whole curve $V(p_j)$ lies in $X$, or some $g\in I$ is not divisible by $p_j$. In the latter case $p_j$ and $g$ have no common irreducible factor, so Artin's finite-intersection theorem implies $V(p_j,g)$ is finite. Summing over the finitely many factors gives finitely many complete irreducible curves plus finitely many points.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Source input:** The finite intersection of coprime plane curves is the theorem established in Artin §11.9.
- **Source issue:** The proof covers the intended proper-variety formulation; the literal printed formulation has the counterexample recorded above.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.6, printed p. 357, PDF p. 369]. The decomposition argument is independent.

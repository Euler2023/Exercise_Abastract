---
title: "Exercise R105: Maximal Ideals of Continuous Functions on an Interval"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - maximal-ideals
  - continuous-functions
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.7, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R105: Maximal Ideals of Continuous Functions on an Interval

## Problem Statement

> [!question] Exercise M.7
> Let $X=[0,1]$ and let $R$ be the ring of continuous functions $X\to\mathbb R$.
>
> **(a)** If $f_1,\ldots,f_n$ have no common zero, prove that they generate the unit ideal. Hint: consider $f_1^2+\cdots+f_n^2$.
>
> **(b)** Establish a bijection between maximal ideals of $R$ and points of the interval.

## Hints

> [!hint]- Hint 1
> The sum of squares has a continuous reciprocal.

> [!hint]- Hint 2
> If a maximal ideal had no common zero, compactness would reduce that fact to finitely many of its elements.

## Solution

> [!success]- Solution
> **(a)** Let $s=\sum_i f_i^2$. It is continuous and strictly positive on compact $X$, so $1/s$ is continuous. Therefore
>
> $$
> 1=\sum_i f_i\frac{f_i}{s},
> $$
>
> proving that the $f_i$ generate $(1)$.
>
> **(b)** For each $x\in X$, evaluation $\operatorname{ev}_x:R\to\mathbb R$ is surjective, so
>
> $$
> M_x=\{f:f(x)=0\}
> $$
>
> is maximal. Conversely, let $M$ be maximal. If its functions had no common zero, then for every $x$ some $f_x\in M$ would be nonzero near $x$. Compactness gives finitely many such neighborhoods covering $X$, so finitely many members of $M$ would have no common zero. Part (a) would imply $1\in M$, impossible. Hence all functions in $M$ vanish at some $x$, so $M\subseteq M_x$ and maximality gives equality. Distinct points give distinct ideals because continuous functions separate points.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]

## Notes

- **External standard input:** Compactness of $[0,1]$ and separation of points by continuous real functions are used.
- **Source status:** The starred problem and hint are from [S1, Ch. 11, Misc. Exercises, Ex. M.7, printed p. 358, PDF p. 370]. The proof is independent.


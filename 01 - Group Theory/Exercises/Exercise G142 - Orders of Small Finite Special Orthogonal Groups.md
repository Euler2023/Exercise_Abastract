---
title: "Exercise G142: Orders of Small Finite Special Orthogonal Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - orthogonal-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.9, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G142: Orders of Small Finite Special Orthogonal Groups

## Problem Statement

> [!question] Exercise 8.9
> Compute the orders of (a) $SO_2(\mathbb F_3)$, (b) $SO_3(\mathbb F_3)$, (c) $SO_2(\mathbb F_5)$, and (d) $SO_3(\mathbb F_5)$.

## Hints

> [!hint]- Hint 1
> In dimension two, count pairs $(a,b)$ satisfying $a^2+b^2=1$.

> [!hint]- Hint 2
> In dimension three, first count unit vectors and then count the oriented orthonormal completions of each one.

## Solution

> [!success]- Solution
> Every element of $SO_2(\mathbb F_q)$ has the form
>
> $$
> \begin{pmatrix}a&-b\\b&a\end{pmatrix},
> \qquad a^2+b^2=1.
> $$
>
> Over $\mathbb F_3$, the four solutions are $(\pm1,0)$ and $(0,\pm1)$. Over $\mathbb F_5$, the same four pairs are the only solutions. Hence
>
> $$
> |SO_2(\mathbb F_3)|=4,
> \qquad |SO_2(\mathbb F_5)|=4.
> $$
>
> In $\mathbb F_3^3$, the equation $x_1^2+x_2^2+x_3^2=1$ has $6$ solutions: exactly one coordinate is nonzero. The stabilizer of a unit vector is $SO_2(\mathbb F_3)$, so
>
> $$
> |SO_3(\mathbb F_3)|=6\cdot4=24.
> $$
>
> In $\mathbb F_5^3$, a direct square-class count gives $30$ unit vectors. The stabilizer of each is $SO_2(\mathbb F_5)$, so
>
> $$
> |SO_3(\mathbb F_5)|=30\cdot4=120.
> $$
>
> Thus the four requested orders are $4,24,4,120$.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- The dimension-three values agree with the general formula $|SO_3(\mathbb F_q)|=q(q^2-1)$ for odd $q$, but the requested cases were counted directly.
- **Source status:** Ex. 8.9 was visually checked at [S1, Ch. 9, §9.8, printed p. 287, PDF p. 299]. The finite counts are independent computations.

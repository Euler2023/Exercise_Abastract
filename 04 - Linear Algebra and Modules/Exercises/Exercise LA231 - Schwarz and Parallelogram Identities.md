---
title: "Exercise LA231: Schwarz and Parallelogram Identities"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - euclidean-space
  - cauchy-schwarz
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 5, Ex. 5.1, printed p. 256, PDF p. 268"
created: 2026-08-24
---

# Exercise LA231: Schwarz and Parallelogram Identities

## Problem Statement

> [!question] Exercise 5.1
> Let $V$ be a Euclidean space.
>
> **(a)** Prove the Schwarz inequality $|(v,w)|\le |v||w|$.
>
> **(b)** Prove the parallelogram law $|v+w|^2+|v-w|^2=2|v|^2+2|w|^2$.
>
> **(c)** Prove that if $|v|=|w|$, then $(v+w)\perp(v-w)$.

## Hints

> [!hint]- Hint 1
> For (a), use nonnegativity of $|v-cw|^2$ with a suitable scalar $c$.

> [!hint]- Hint 2
> Expand both squared norms in (b) and the inner product in (c).

## Solution

> [!success]- Solution
> **(a)** If $w=0$, the result is immediate. Otherwise choose $c=(w,v)/|w|^2$. Then
>
> $$
> 0\le |v-cw|^2
> =|v|^2-\frac{|(v,w)|^2}{|w|^2}.
> $$
>
> Multiplying by $|w|^2$ and taking square roots gives $|(v,w)|\le |v||w|$.
>
> **(b)** Bilinearity and symmetry give
>
> $$
> |v\pm w|^2=|v|^2\pm2(v,w)+|w|^2.
> $$
>
> Adding the two identities proves the parallelogram law.
>
> **(c)** Finally,
>
> $$
> (v+w,v-w)=|v|^2-|w|^2=0
> $$
>
> when $|v|=|w|$. Hence $v+w$ and $v-w$ are orthogonal.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- The source uses “Schwarz inequality”; it is also called the Cauchy–Schwarz inequality.
- **Source status:** All three parts were visually verified at [S1, Ch. 8, §5, Ex. 5.1, printed p. 256, PDF p. 268]. The proofs are independent.


---
title: "Exercise LA261: Coefficient Criterion for a Circle"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - conics
  - circles
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 7, Ex. 7.3, printed p. 258, PDF p. 270"
created: 2026-08-24
---

# Exercise LA261: Coefficient Criterion for a Circle

## Problem Statement

> [!question] Exercise 7.3
> Give a necessary and sufficient condition, in terms of the coefficients of its equation, for a conic to be a circle.

## Hints

> [!hint]- Hint 1
> A circle has a quadratic part that is a nonzero scalar multiple of $x_1^2+x_2^2$.

> [!hint]- Hint 2
> Complete squares to distinguish a circle from a point or the empty set.

## Solution

> [!success]- Solution
> Write Artin's equation as
>
> $$
> a_{11}x_1^2+2a_{12}x_1x_2+a_{22}x_2^2+b_1x_1+b_2x_2+c=0.
> $$
>
> It represents a circle exactly when
>
> $$
> \boxed{a_{12}=0,\qquad a_{11}=a_{22}=a\ne0,\qquad b_1^2+b_2^2-4ac>0}.
> $$
>
> Indeed, under the first two conditions, completing squares gives
>
> $$
> \left(x_1+\frac{b_1}{2a}\right)^2
> +\left(x_2+\frac{b_2}{2a}\right)^2
> =\frac{b_1^2+b_2^2-4ac}{4a^2}.
> $$
>
> The final inequality says that the squared radius is positive. Conversely, translating a circle changes only its linear and constant terms, so its quadratic matrix remains a scalar multiple of the identity and the displayed conditions follow.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- Equality in the final condition gives a single point; a negative value gives the empty locus. Both are degenerate rather than circles in Artin's terminology.
- **Source status:** Verified at [S1, Ch. 8, §7, Ex. 7.3, printed p. 258, PDF p. 270] and against equation (8.7.1). The criterion is independent.

---
title: "Exercise Rep15: Self-Intersections of One-Parameter Groups"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - exponential-map
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.1, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep15: Self-Intersections of One-Parameter Groups

## Problem Statement

> [!question] Exercise 5.1
> Can the image of a one-parameter group in $GL_n$ cross itself?

## Hints

> [!hint]- Hint 1
> If $\varphi(s)=\varphi(t)$ with $s<t$, use the homomorphism law to find a period.

> [!hint]- Hint 2
> Compare the tangent vectors at the two parameter values.

## Solution

> [!success]- Solution
> Let $\varphi(u)=e^{uA}$. If $\varphi(s)=\varphi(t)$ for $s<t$, then
>
> $$
> \varphi(t-s)=\varphi(-s)\varphi(t)=I.
> $$
>
> Hence $T=t-s$ is a period:
>
> $$
> \varphi(u+T)=\varphi(u)\varphi(T)=\varphi(u)
> $$
>
> for every $u$. Thus the parametrized curve retraces its whole image; it does not have an isolated or transverse self-intersection. Indeed,
>
> $$
> \varphi'(s)=A\varphi(s)=A\varphi(t)=\varphi'(t).
> $$
>
> So the image cannot cross itself with two different tangent directions. It may be periodic, in which case the same closed image is traversed repeatedly.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- “Cross” is interpreted as a genuine self-crossing, not periodic repetition.
- **Source status:** Ex. 5.1 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The periodicity and tangent argument are independent.


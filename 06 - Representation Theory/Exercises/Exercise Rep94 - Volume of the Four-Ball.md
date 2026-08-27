---
title: "Exercise Rep94: Volume of the Four-Ball"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.1, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep94: Volume of the Four-Ball

## Problem Statement

> [!question] Exercise 8.1
> Calculate the four-dimensional volume of the $4$-ball $B_r^4$ of radius $r$ in $\mathbb R^4$, the locus $x_0^2+\cdots+x_3^2\le r^2$, by slicing with three-dimensional slices. Check your answer by differentiating.

## Hints

> [!hint]- Hint 1
> At coordinate $x_0=t$, the slice is a $3$-ball of radius $\sqrt{r^2-t^2}$.

## Solution

> [!success]- Solution
> The slice volume is $\frac{4\pi}{3}(r^2-t^2)^{3/2}$, so
>
> $$
> \operatorname{vol}_4(B_r^4)=\frac{4\pi}{3}\int_{-r}^r(r^2-t^2)^{3/2}\,dt.
> $$
>
> With $t=r\sin\theta$, the integral is $r^4\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta=3\pi r^4/8$. Hence
>
> $$
> \operatorname{vol}_4(B_r^4)=\frac{\pi^2}{2}r^4.
> $$
>
> Differentiation gives the $3$-volume of the boundary sphere, $2\pi^2r^3$, confirming the expected scaling. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]

## Notes

- Though the computation is analytic, it supplies the volume normalization used for $SU_2\cong S^3$.
- **Source status:** [S1, Ch. 10, §8, Ex. 8.1, printed p. 320, PDF p. 332].


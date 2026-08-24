---
title: "Exercise LA283: Two Circle Parametrizations of Real Lines"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - projective-line
  - stereographic-projection
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 2, Ex. 2.2, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise LA283: Two Circle Parametrizations of Real Lines

## Problem Statement

> [!question] Exercise 2.2
> One can parametrize proper subspaces of $\mathbb R^2$ by a circle in two ways. First, if a subspace $W$ intersects the horizontal axis with angle $\theta$, one can use the double angle $\alpha=2\theta$. The double angle eliminates the ambiguity between $\theta$ and $\theta+\pi$. Or, one can choose a nonzero vector $(y_1,y_2)$ in $W$, and use the inverse of stereographic projection to map the slope $\lambda=y_2/y_1$ to a point of $S^1$. Compare these two parametrizations.

## Hints

> [!hint]- Hint 1
> For a nonvertical line, $\lambda=\tan\theta$.

> [!hint]- Hint 2
> Apply the inverse stereographic formula to $\lambda\in\mathbb R$ and use the double-angle identities.

## Solution

> [!success]- Solution
> A line has an unoriented angle $\theta$ modulo $\pi$. Thus the double-angle map sends it to
>
> $$
> d(W)=(\cos2\theta,\sin2\theta)\in S^1.
> $$
>
> For a nonvertical line, $\lambda=\tan\theta$. With the north pole $(1,0)$, inverse stereographic projection is
>
> $$
> \sigma(\lambda)=
> \left(
> \frac{\lambda^2-1}{\lambda^2+1},
> \frac{2\lambda}{\lambda^2+1}
> \right).
> $$
>
> The double-angle identities give
>
> $$
> \cos2\theta=\frac{1-\lambda^2}{1+\lambda^2},
> \qquad
> \sin2\theta=\frac{2\lambda}{1+\lambda^2}.
> $$
>
> Hence
>
> $$
> \sigma(\lambda)=(-\cos2\theta,\sin2\theta).
> $$
>
> The two parametrizations therefore differ by reflection of the circle across the vertical axis. The vertical line corresponds to $\theta=\pi/2$, hence to $(-1,0)$ under the double-angle map, while its infinite slope corresponds to the north pole $(1,0)$ under inverse stereographic projection, exactly as the reflection predicts.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- The space of real one-dimensional subspaces is the real projective line $\mathbb RP^1$, and both constructions exhibit $\mathbb RP^1\cong S^1$.
- **Source status:** The two parametrizations were visually verified at [S1, Ch. 9, Ex. 2.2, printed p. 284, PDF p. 296]. The comparison is independently derived.


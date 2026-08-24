---
title: "Exercise Rep40: Tangent Vector Field on the Punctured Complex Plane"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - tangent-vector-fields
  - complex-multiplication
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.6, printed p. 287, PDF p. 299"
figures:
  - "[[Attachments/artin-algebra-2e-ch09-ex-7.6-cstar-tangent-field.png]]"
created: 2026-08-24
---

# Exercise Rep40: Tangent Vector Field on the Punctured Complex Plane

## Problem Statement

> [!question] Exercise 7.6
> Sketch the tangent vector field $PA$ to the group $\mathbb C^{\times}$, when $A=1+i$.

## Hints

> [!hint]- Hint 1
> At $P=z=x+iy$, compute $z(1+i)$ in real coordinates.

## Solution

> [!success]- Solution
> At $z=x+iy$, the vector is
>
> $$
> z(1+i)=(x-y)+i(x+y),
> $$
>
> so the real vector field is $F(x,y)=(x-y,x+y)$. Its integral curve through $z_0$ is
>
> $$
> z(t)=z_0e^{(1+i)t}=z_0e^te^{it}.
> $$
>
> Thus trajectories are logarithmic spirals: as $t$ increases they rotate counterclockwise while moving radially outward. The vector at every point is the sum of the outward radial vector $z$ and its counterclockwise quarter-turn $iz$. $\square$

## Figure

![[Attachments/artin-algebra-2e-ch09-ex-7.6-cstar-tangent-field.png]]

*The field $(x-y,x+y)$ on $\mathbb C^{\times}$ and one exact integral curve $z_0e^{(1+i)t}$. Asset type: source-independent TikZ construction; editable source and vector PDF are stored beside the PNG.*

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** Ex. 7.6 was visually checked at [S1, Ch. 9, §9.7, printed p. 287, PDF p. 299]. The coordinate field and integral curves are independent. The new construction was compiled outside the sandbox and visually verified against the field formula.

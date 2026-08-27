---
title: "Exercise R90: Unions and Intersections of Varieties"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-geometry
  - ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §9, Ex. 9.4, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R90: Unions and Intersections of Varieties

## Problem Statement

> [!question] Exercise 9.4
> Let $U,V$ be varieties in $\mathbb C^n$. Prove that $U\cup V$ and $U\cap V$ are varieties. What does $U\cap V=\varnothing$ mean algebraically? What does $U\cup V=\mathbb C^n$ mean algebraically?

## Hints

> [!hint]- Hint 1
> If $U=V(I)$ and $V=V(J)$, use $I+J$ and $IJ$.

## Solution

> [!success]- Solution
> If $U=V(I)$ and $V=V(J)$, then
>
> $$
> U\cap V=V(I+J),
> \qquad
> U\cup V=V(IJ).
> $$
>
> Indeed, every generator of $I+J$ vanishes exactly where both families vanish, while all products $fg$ with $f\in I$, $g\in J$ vanish exactly where at least one family vanishes.
>
> By the weak Nullstellensatz, $U\cap V=\varnothing$ is equivalent to $I(U)+I(V)=(1)$. Also
>
> $$
> I(U\cup V)=I(U)\cap I(V).
> $$
>
> Thus $U\cup V=\mathbb C^n$ means $I(U)\cap I(V)=0$. Since the polynomial ring is a domain, two nonzero ideals have nonzero product inside their intersection; hence one vanishing ideal is zero, so one of $U,V$ is all of $\mathbb C^n$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source input:** The weak Nullstellensatz used for the empty-set equivalence is proved earlier in Artin §11.9.
- **Source status:** The problem is from [S1, Ch. 11, §9, Ex. 9.4, printed p. 357, PDF p. 369]. The ideal identities are independently derived.


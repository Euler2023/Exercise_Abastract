---
title: "Exercise G162: Orbit-Coset Bijection for Square Vertices"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - dihedral-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 8, Ex. 8.3, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G162: Orbit-Coset Bijection for Square Vertices

## Problem Statement

> [!question] Exercise 8.3
> Exhibit the bijective map (6.8.4) explicitly, when $G$ is the dihedral group $D_4$ and $S$ is the set of vertices of a square.

## Hints

> [!hint]- Hint 1
> Choose a vertex $v_0$ and let $H$ be its stabilizer.

> [!hint]- Hint 2
> If $r$ is a quarter-turn, the four cosets $r^kH$ should map to the four vertices $r^kv_0$.

## Solution

> [!success]- Solution
> Write
>
> $$
> D_4=\langle r,s:r^4=s^2=1, srs=r^{-1}\rangle,
> $$
>
> where $r$ is a quarter-turn and $s$ is reflection in the diagonal through a chosen vertex $v_0$. Then
>
> $$
> H=\operatorname{Stab}(v_0)=\{1,s\}.
> $$
>
> The four left cosets are $H,rH,r^2H,r^3H$. Formula (6.8.4) is the map
>
> $$
> \Phi:D_4/H\longrightarrow S,qquad gH\longmapsto g(v_0).
> $$
>
> Explicitly,
>
> $$
> \Phi(r^kH)=r^k(v_0),qquad k=0,1,2,3.
> $$
>
> These are the four distinct vertices, so $\Phi$ is bijective. It is well-defined because elements of $H$ fix $v_0$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- This is the concrete model for the general equivariant bijection $G/G_x\cong Gx$.
- **Source status:** The reference to formula (6.8.4) and the complete statement were visually checked at [S1, Ch. 6, §8, Ex. 8.3, printed p. 191, PDF p. 203]. The explicit map is independent.


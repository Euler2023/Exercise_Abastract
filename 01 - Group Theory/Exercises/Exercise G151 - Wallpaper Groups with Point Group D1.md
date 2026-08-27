---
title: "Exercise G151: Wallpaper Groups with Point Group D1"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - classification
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.4, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G151: Wallpaper Groups with Point Group D1

## Problem Statement

> [!question] Exercise 6.4
> Classify plane crystallographic groups with point group $D_1=\{1,\overline r\}$.

## Hints

> [!hint]- Hint 1
> Choose the $x$-axis parallel to the $+1$ eigenspace of $\overline r$. The translation lattice is either primitive rectangular or centered rectangular relative to these axes.

> [!hint]- Hint 2
> In the primitive case, a lift of $\overline r$ is either a reflection or a glide by half a primitive translation.

## Solution

> [!success]- Solution
> Let $L$ be the translation lattice. Since $\overline r(L)=L$, choose orthogonal axes along the $+1$ and $-1$ eigenspaces of $\overline r$. Up to rescaling, an invariant lattice has one of two forms.
>
> **Primitive rectangular lattice.** Take $L=\mathbb Ze_1\oplus\mathbb Ze_2$ and $r(x,y)=(x,-y)$. A lift of $\overline r$ can be normalized, by translating the origin and multiplying by a lattice translation, to either
>
> $$
> r(x,y)=(x,-y)
> $$
>
> or
>
> $$
> g(x,y)=\left(x+\frac12,-y\right),qquad g^2=t_{e_1}.
> $$
>
> These give the types $pm$ and $pg$. The half-translation in the second formula cannot be removed modulo $L$, so the two groups are inequivalent.
>
> **Centered rectangular lattice.** Normalize
>
> $$
> L=\mathbb Z(1,0)+\mathbb Z\left(\frac12,\frac12\right).
> $$
>
> Reflection $r(x,y)=(x,-y)$ preserves this lattice and gives the type $cm$. In primitive rectangular coordinates its mirror rows are offset by a half-translation, so it is not equivalent to $pm$.
>
> Conversely, the invariant-lattice alternatives and the reflection/glide normalization exhaust all lifts of $D_1$. Hence, up to a change of origin and scale, exactly three plane crystallographic groups occur:
>
> $$
> pm,qquad pg,qquad cm.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]

## Notes

- The modern symbols $pm,pg,cm$ name the three affine-conjugacy types.
- **Source status:** Artin poses the classification but does not print its solution at [S1, Ch. 6, §6, Ex. 6.4, printed p. 190, PDF p. 202]. The normal-form argument above is independent.


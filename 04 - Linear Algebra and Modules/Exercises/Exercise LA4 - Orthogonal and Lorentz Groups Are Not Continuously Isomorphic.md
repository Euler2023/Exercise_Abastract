---
title: "Exercise LA4: Orthogonal and Lorentz Groups Are Not Continuously Isomorphic"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - orthogonal-groups
  - lorentz-groups
  - compactness
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.3, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA4: Orthogonal and Lorentz Groups Are Not Continuously Isomorphic

## Problem Statement

> [!question] Exercise 1.3
> Prove that there is no continuous isomorphism from the orthogonal group $O_4$ to the Lorentz group $O_{3,1}$.

## Hints

> [!hint]- Hint 1
> Show that $O_4$ is closed and bounded in $M_4(\mathbb R)$.

> [!hint]- Hint 2
> Produce an unbounded one-parameter family in $O_{3,1}$ using $\cosh t$ and $\sinh t$.

## Solution

> [!success]- Solution
> The group
> $$
> O_4=\{P\in M_4(\mathbb R):P^{\mathsf T}P=I\}
> $$
> is closed, because it is defined by polynomial equations in the matrix entries. It is bounded because every column of an orthogonal matrix has Euclidean length $1$, so every entry lies in $[-1,1]$. By the Heine–Borel theorem, $O_4$ is compact.
>
> Now consider
> $$
> L_t=
> \begin{pmatrix}
> \cosh t&0&0&\sinh t\\
> 0&1&0&0\\
> 0&0&1&0\\
> \sinh t&0&0&\cosh t
> \end{pmatrix}.
> $$
> With $I_{3,1}=\operatorname{diag}(1,1,1,-1)$, the identity
> $$
> \cosh^2t-\sinh^2t=1
> $$
> gives
> $$
> L_t^{\mathsf T}I_{3,1}L_t=I_{3,1}.
> $$
> Thus $L_t\in O_{3,1}$. Since $\cosh t$ is unbounded, $O_{3,1}$ is unbounded and therefore noncompact.
>
> If a continuous group isomorphism
> $$
> \varphi:O_4\longrightarrow O_{3,1}
> $$
> existed, its image would be compact because a continuous image of a compact space is compact. Surjectivity would make that image all of $O_{3,1}$, contradicting its noncompactness. Therefore no such continuous isomorphism exists. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

The obstruction is topological, not merely algebraic: compactness is preserved by continuous surjections. No classification of either group is needed.

**Source status:** The two groups and the topological viewpoint are introduced in [S1, Ch. 9, §9.1, printed pp. 261–262, PDF pp. 273–274]. The compactness argument is a complete independent proof of Ex. 1.3.

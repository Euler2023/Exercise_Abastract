---
title: "Exercise G167: Full Symmetry Group of the Tetrahedron"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - symmetry-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 9, Ex. 9.4, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G167: Full Symmetry Group of the Tetrahedron

## Problem Statement

> [!question] Exercise 9.4
> Identify the group $T'$ of all symmetries of a regular tetrahedron, including orientation-reversing symmetries.

## Hints

> [!hint]- Hint 1
> Every symmetry permutes the four vertices.

> [!hint]- Hint 2
> Every permutation of the vertices extends to a unique affine isometry of a regular tetrahedron.

## Solution

> [!success]- Solution
> The action on the four vertices gives a homomorphism
>
> $$
> T'\longrightarrow S_4.
> $$
>
> It is injective because an isometry fixing four affinely independent vertices is the identity. Conversely, a regular tetrahedron has the same pairwise distance between every two distinct vertices, so every permutation of its vertices preserves all distances and extends uniquely to an orthogonal symmetry. The homomorphism is therefore surjective, and
>
> $$
> T'\cong S_4,qquad |T'|=24.
> $$
>
> The subgroup $A_4$ corresponds to the rotations. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The vertex-permutation model includes reflections automatically, so it gives the full group rather than only $A_4$.
- **Source status:** [S1, Ch. 6, §9, Ex. 9.4, printed p. 191, PDF p. 203]; independent proof, cross-checked against a selected-solutions source.


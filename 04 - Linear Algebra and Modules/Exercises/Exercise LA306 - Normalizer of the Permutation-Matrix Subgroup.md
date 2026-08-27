---
title: "Exercise LA306: Normalizer of the Permutation-Matrix Subgroup"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 6, Ex. 6.3, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise LA306: Normalizer of the Permutation-Matrix Subgroup

## Problem Statement

> [!question] Exercise 6.3
> Let $P\le GL_n(\mathbb R)$ be the subgroup of permutation matrices. Determine $N(P)$.

## Hints

> [!hint]- Hint 1
> Compute the centralizer, then the automorphism induced on $S_n$.

## Solution

> [!success]- Solution
> For $n\ge2$, the matrices commuting with every permutation matrix are exactly $aI+bJ$, where $J$ is all ones; invertibility means $a\ne0$ and $a+nb\ne0$. If $g$ normalizes $P$, conjugation induces an automorphism of $S_n$. Every automorphism realized by this permutation representation is inner. For $n=6$, the exceptional outer automorphism cannot occur because it exchanges transpositions and triple transpositions, whose permutation matrices have different traces. Hence, after multiplying $g$ by a permutation matrix, it centralizes $P$. Thus
>
> $$
> N(P)=\{P_\sigma(aI+bJ):\sigma\in S_n, a\ne0, a+nb\ne0\}.
> $$
>
> For $n=1$, $N(P)=GL_1(\mathbb R)$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 7, §6, Ex. 6.3, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.

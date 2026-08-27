---
title: "Exercise G163: Cosets of the Point Stabilizer in Sn"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - cosets
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 8, Ex. 8.4, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G163: Cosets of the Point Stabilizer in Sn

## Problem Statement

> [!question] Exercise 8.4
> Let $H$ be the stabilizer of the index $1$ for the operation of the symmetric group $G=S_n$ on the set of indices $\{1,\ldots,n\}$. Describe the left cosets of $H$ in $G$ and the map (6.8.4) in this case.

## Hints

> [!hint]- Hint 1
> Two permutations lie in the same left coset of $H$ exactly when they send $1$ to the same index.

> [!hint]- Hint 2
> Use the transpositions $(1\ i)$ as representatives.

## Solution

> [!success]- Solution
> The subgroup
>
> $$
> H=\{\sigma\in S_n:\sigma(1)=1\}\cong S_{n-1}
> $$
>
> fixes the first index. For each $i$, let $\tau_i=(1\ i)$, with $\tau_1=1$. Then
>
> $$
> S_n/H=\{\tau_iH:1\le i\le n\}.
> $$
>
> Indeed, $\sigma H=\tau_iH$ exactly when $\sigma(1)=i$. Formula (6.8.4) becomes
>
> $$
> \Phi:S_n/H\longrightarrow\{1,\ldots,n\},qquad
> \sigma H\longmapsto\sigma(1),
> $$
>
> and explicitly $\Phi(\tau_iH)=i$. This is a bijection. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- The left coset is determined by the image of $1$ because right multiplication by an element of $H$ does not change that image.
- **Source status:** [S1, Ch. 6, §8, Ex. 8.4, printed p. 191, PDF p. 203]; independent proof, cross-checked against a selected-solutions source.

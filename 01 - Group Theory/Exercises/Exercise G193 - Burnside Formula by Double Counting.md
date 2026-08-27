---
title: "Exercise G193: Burnside Formula by Double Counting"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - burnside-lemma
  - counting
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.7, printed p. 194, PDF p. 206"
created: 2026-08-27
---

# Exercise G193: Burnside Formula by Double Counting

## Problem Statement

> [!question] Miscellaneous Exercise M.7
> Let a finite group $G$ operate on a finite set $S$. Put $S^g=\{s\in S:gs=s\}$ and let $G_s$ be the stabilizer of $s$.
>
> (a) Construct a true–false table for the action of $D_3$ on the vertices of a triangle.
>
> (b) Prove $\sum_{s\in S}|G_s|=\sum_{g\in G}|S^g|$.
>
> (c) Prove Burnside's Formula: $|G|\cdot(\text{number of orbits})=\sum_{g\in G}|S^g|$.

## Hints

> [!hint]- Hint 1
> Count the true entries in the table first by columns and then by rows.

> [!hint]- Hint 2
> On each orbit, $|G_s|=|G|/|Gs|$.

## Solution

> [!success]- Solution
> **(a)** Let $r,r^2$ be the nontrivial rotations and let $s_i$ be the reflection fixing vertex $v_i$:
>
> | $g\backslash v$ | $v_1$ | $v_2$ | $v_3$ |
> |---|---|---|---|
> | $1$ | T | T | T |
> | $r$ | F | F | F |
> | $r^2$ | F | F | F |
> | $s_1$ | T | F | F |
> | $s_2$ | F | T | F |
> | $s_3$ | F | F | T |
>
> **(b)** Let $X=\{(g,s)\in G\times S:gs=s\}$. Counting by $s$ gives $|X|=\sum_s|G_s|$; counting by $g$ gives $|X|=\sum_g|S^g|$.
>
> **(c)** On an orbit $O$, orbit–stabilizer gives $|G_s|=|G|/|O|$. Therefore
>
> $$
> \sum_{s\in O}|G_s|=|O|\frac{|G|}{|O|}=|G|.
> $$
>
> Summing over all orbits and using part (b) yields
>
> $$
> |G|\cdot|S/G|=\sum_{g\in G}|S^g|.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- The common form $|S/G|=|G|^{-1}\sum_g|S^g|$ is Burnside's lemma.
- **Source status:** The notation $S^g$, table request, and both formulas were visually checked at [S1, Ch. 6, M.7, printed p. 194, PDF p. 206]. The double count is independent.


---
title: "Exercise G307: Conjugation and Cycle Type in Symmetric Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - conjugacy
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 37, printed p. 78, PDF p. 93"
created: 2026-08-28
---

# Exercise G307: Conjugation and Cycle Type in Symmetric Groups

## Problem Statement

> [!question] Exercise 37
> (a) If $\sigma=(i_1\,\dots\,i_m)$ is a cycle and $\gamma\in S_n$, show that
>
> $$
> \gamma\sigma\gamma^{-1}=(\gamma(i_1)\,\dots\,\gamma(i_m)).
> $$
>
> (b) Prove that two permutations in $S_n$ are conjugate if and only if their disjoint-cycle decompositions have the same cycle lengths, including fixed points.

## Hints

> [!hint]- Hint 1
> Conjugation merely relabels the entries of every cycle.

## Solution

> [!success]- Solution
> **(a)** For each $j$ (indices modulo $m$),
>
> $$
> (\gamma\sigma\gamma^{-1})(\gamma(i_j))=\gamma(\sigma(i_j))=\gamma(i_{j+1}),
> $$
>
> and all points outside the displayed support remain fixed. This proves the cycle formula.
>
> **(b)** Part (a) shows that conjugation preserves the multiset of cycle lengths. Conversely, suppose $\sigma$ and $\tau$ have equally many cycles of every length. Pair cycles of equal length and define $\gamma$ by sending the entries of each cycle of $\sigma$, in cyclic order, to the corresponding entries of its paired cycle of $\tau$. These assignments partition the underlying set, so they define a permutation $\gamma$. Part (a) then gives $\gamma\sigma\gamma^{-1}=\tau$.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 37, printed p. 78, PDF p. 93]. The proof is independently derived.

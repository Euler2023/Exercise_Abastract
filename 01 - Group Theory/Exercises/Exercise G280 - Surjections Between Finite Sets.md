---
title: "Exercise G280: Surjections Between Finite Sets"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - finite-sets
  - induction
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.4, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise G280: Surjections Between Finite Sets

## Problem Statement

> [!question] Exercise A.4
> Let $\varphi:S\to T$ be a surjective map between finite sets. Prove by induction that $|S|\ge|T|$ and that if $|S|=|T|$, then $\varphi$ is bijective.

## Hints

> [!hint]- Hint 1
> Remove one element $s\in S$ and ask whether the restricted map is still surjective.

## Solution

> [!success]- Solution
> We induct on $|S|$. If $S$ is empty, surjectivity forces $T$ to be empty, and the assertion holds.
>
> Let $S$ be nonempty, choose $s\in S$, and put $t=\varphi(s)$. There are two cases.
>
> If $\varphi|_{S\setminus\{s\}}$ is still onto $T$, induction gives
>
> $$
> |S|-1\ge|T|,
> $$
>
> so $|S|>|T|$.
>
> Otherwise $t$ is the only value lost after deleting $s$, and the restriction is a surjection
>
> $$
> S\setminus\{s\}\longrightarrow T\setminus\{t\}.
> $$
>
> Induction gives $|S|-1\ge|T|-1$, hence $|S|\ge|T|$.
>
> Finally suppose $|S|=|T|$. The first case is impossible. In the second case, induction makes the restricted map bijective, and $s$ is the unique preimage of $t$. Therefore every element of $T$ has exactly one preimage, so $\varphi$ is bijective.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Routing:** Group Theory is the closest existing topic because cardinality comparisons for finite maps are a recurring input to finite-group arguments.
- **Source status:** [S1, Appendix, §A.1, Ex. A.4, printed p. 521, PDF p. 533]. The induction is independent.

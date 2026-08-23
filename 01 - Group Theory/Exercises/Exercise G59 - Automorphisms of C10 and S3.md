---
title: "Exercise G59: Automorphisms of $C_{10}$ and $S_3$"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - automorphisms
  - cyclic-groups
  - symmetric-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 6, Ex. 6.10, printed p. 72, PDF p. 84"
created: 2026-08-23
---

# Exercise G59: Automorphisms of $C_{10}$ and $S_3$

## Problem Statement

> [!question] Exercise 6.10
> Find all automorphisms of (a) a cyclic group of order $10$ and (b) $S_3$.

## Hints

> [!hint]- Hint 1
> A cyclic-group automorphism sends a generator to a generator.

> [!hint]- Hint 2
> An automorphism of $S_3$ permutes its three transpositions.

## Solution

> [!success]- Solution
> If $C_{10}=\langle x\rangle$, an automorphism is determined by
> 
> $$
> x\longmapsto x^k,qquad k\in\{1,3,7,9\},
> $$
> 
> the residue classes coprime to $10$. Thus $\operatorname{Aut}(C_{10})\cong(\mathbb Z/10\mathbb Z)^\times\cong C_2\times C_2$.
> 
> In $S_3$, the three transpositions are exactly the elements of order $2$, so every automorphism permutes them. Because they generate $S_3$, this action is faithful, giving $\operatorname{Aut}(S_3)\hookrightarrow S_3$. Conjugation by elements of $S_3$ realizes all six permutations of the three transpositions, and $Z(S_3)=1$, so these inner automorphisms are distinct. Hence
> 
> $$
> \operatorname{Aut}(S_3)=\operatorname{Inn}(S_3)\cong S_3.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §6, Ex. 6.10, printed p. 72, PDF p. 84]. The solution is an independent derivation for this vault, not a solution printed in Artin.

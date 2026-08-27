---
title: "Exercise G204: Tetrahedral and Octahedral Groups as A4 and S4"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.6, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G204: Tetrahedral and Octahedral Groups as A4 and S4

## Problem Statement

> [!question] Exercise 4.6
> **(a)** Prove that the tetrahedral group $T$ is isomorphic to $A_4$, and that the octahedral group $O$ is isomorphic to $S_4$.
>
> **(b)** Two tetrahedra can be inscribed into a cube $C$, each one using half the vertices. Relate this to the inclusion $A_4\subset S_4$.

## Hints

> [!hint]- Hint 1
> Let the groups act on four vertices or on four body diagonals.

## Solution

> [!success]- Solution
> The rotation group $T$ acts faithfully on the four vertices of a tetrahedron, giving an injection $T\hookrightarrow S_4$. All rotations induce even permutations and $|T|=12=|A_4|$, so $T\cong A_4$.
>
> The cube rotation group $O$ acts faithfully on its four body diagonals. Since $|O|=24=|S_4|$, this gives $O\cong S_4$.
>
> The two inscribed tetrahedra are exchanged by precisely the odd permutations of the four body diagonals and each is preserved by the even ones. Therefore the stabilizer of either tetrahedron is the index-two subgroup $A_4\subset S_4$, geometrically realizing $T\subset O$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Alternating Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.6, printed p. 223, PDF p. 235]; problem checked against the source PDF; solution independently derived for this vault.

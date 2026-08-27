---
title: "Exercise G154: Stabilizers in the Symmetry Group of a Square"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - stabilizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.1, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G154: Stabilizers in the Symmetry Group of a Square

## Problem Statement

> [!question] Exercise 7.1
> Let $G=D_4$ be the dihedral group of symmetries of the square.
>
> (a) What is the stabilizer of a vertex? Of an edge?
>
> (b) $G$ operates on the set of two elements consisting of the diagonal lines. What is the stabilizer of a diagonal?

## Hints

> [!hint]- Hint 1
> A vertex or edge has an orbit of size $4$; a diagonal has an orbit of size $2$.

> [!hint]- Hint 2
> Use orbit–stabilizer and then identify the symmetries geometrically.

## Solution

> [!success]- Solution
> Let $r$ be a quarter-turn and let $s$ be reflection in the diagonal through a chosen vertex $v$. The orbit of $v$ has four vertices, so its stabilizer has order $8/4=2$. It is
>
> $$
> G_v=\{1,s\}.
> $$
>
> For a chosen edge $e$, the only nonidentity symmetry preserving it setwise is reflection in its perpendicular bisector. Thus $G_e\cong C_2$ as well.
>
> Let $d$ be the diagonal fixed pointwise by $s$. Its orbit consists of the two diagonals, hence $|G_d|=8/2=4$. Explicitly,
>
> $$
> G_d=\{1,r^2,s,r^2s\}\cong C_2\times C_2.
> $$
>
> Here $r^2$ exchanges the two endpoints of $d$, while $s$ fixes them. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Orbit–stabilizer in group actions]]

## Notes

- A vertex stabilizer fixes the vertex as a point; an edge stabilizer is setwise because the action is on the set of edges.
- **Source status:** The full statement was visually checked at [S1, Ch. 6, §7, Ex. 7.1, printed p. 190, PDF p. 202]. The solution is independent.

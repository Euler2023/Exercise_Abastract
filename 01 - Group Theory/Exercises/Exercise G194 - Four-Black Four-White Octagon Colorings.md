---
title: "Exercise G194: Four-Black Four-White Octagon Colorings"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - burnside-lemma
  - dihedral-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.8, printed p. 194, PDF p. 206"
created: 2026-08-27
---

# Exercise G194: Four-Black Four-White Octagon Colorings

## Problem Statement

> [!question] Miscellaneous Exercise M.8
> There are $70=\binom84$ ways to color the edges of an octagon with four black and four white. The group $D_8$ operates on this set, and its orbits represent equivalent colorings. Use Burnside's Formula to count the number of equivalence classes.

## Hints

> [!hint]- Hint 1
> Group rotations by cycle type on the eight edges.

> [!hint]- Hint 2
> For either reflection type, count invariant colorings using fixed edges and transposed edge pairs.

## Solution

> [!success]- Solution
> The identity fixes all $70$ colorings. Rotations by $1,3,5,7$ steps fix none. Rotations by $2$ or $6$ steps have two four-cycles, so each fixes $2$ colorings. The half-turn has four two-cycles and fixes $\binom42=6$ colorings.
>
> Four reflections have four transposed edge pairs and fix $\binom42=6$ colorings each. The other four have two fixed edges and three transposed pairs. To obtain four black edges, either choose two black pairs or both fixed edges and one black pair, giving
>
> $$
> \binom32+\binom31=3+3=6
> $$
>
> fixed colorings for each such reflection.
>
> Burnside's Formula therefore gives
>
> $$
> \frac1{16}\left(70+2+2+6+8\cdot6\right)
> =\frac{128}{16}=8.
> $$
>
> Hence there are $8$ equivalence classes. $\square$

## Related Concepts

- [[01 - Group Theory/Exercises/Exercise G193 - Burnside Formula by Double Counting|Exercise G193]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The action is on edges, so the two geometric reflection types have different fixed-edge structures, though both happen to fix six admissible colorings.
- **Source status:** The number $70$, edge action, and four-black/four-white condition were visually checked at [S1, Ch. 6, M.8, printed p. 194, PDF p. 206]. The Burnside count is independent.

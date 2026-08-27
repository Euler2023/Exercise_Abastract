---
title: "Exercise G181: Dual Polyhedra Have Isomorphic Symmetry Groups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - symmetry-groups
  - polyhedra
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 12, Ex. 12.1, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G181: Dual Polyhedra Have Isomorphic Symmetry Groups

## Problem Statement

> [!question] Exercise 12.1
> Explain why the groups of symmetries of the dodecahedron and the icosahedron are isomorphic.

## Hints

> [!hint]- Hint 1
> The dodecahedron and icosahedron are dual: face centers of one are vertices of the other.

> [!hint]- Hint 2
> A symmetry preserves incidence and therefore acts on the dual polyhedron.

## Solution

> [!success]- Solution
> Center a regular dodecahedron at the origin and place a vertex at the center direction of each face. Their convex hull is a regular icosahedron. Every orthogonal symmetry of the dodecahedron permutes its faces and therefore their centers, so it induces a symmetry of the dual icosahedron.
>
> This construction is reversible: dualizing the icosahedron recovers the dodecahedron. The two induced homomorphisms are inverse. Hence the full symmetry groups are isomorphic; the same argument also identifies their rotational subgroups:
>
> $$
> \operatorname{Sym}(\text{dodecahedron})\cong
> \operatorname{Sym}(\text{icosahedron}).
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G166 - Full Symmetry Group of the Dodecahedron|Exercise G166]]

## Notes

- Duality preserves the distinction between orientation-preserving and orientation-reversing symmetries.
- **Source status:** [S1, Ch. 6, §12, Ex. 12.1, printed p. 192, PDF p. 204]; independent duality proof.


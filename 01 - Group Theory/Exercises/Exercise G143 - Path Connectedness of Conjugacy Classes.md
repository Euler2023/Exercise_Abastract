---
title: "Exercise G143: Path Connectedness of Conjugacy Classes"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - path-connectedness
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.3, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G143: Path Connectedness of Conjugacy Classes

## Problem Statement

> [!question] Miscellaneous Exercise M.3
> Are the conjugacy classes in a path-connected group $G$ path connected?

## Hints

> [!hint]- Hint 1
> Realize the conjugacy class of $x$ as the image of a continuous map from $G$.

## Solution

> [!success]- Solution
> Yes. Fix $x\in G$ and consider
>
> $$
> c_x:G\longrightarrow G,
> \qquad c_x(g)=gxg^{-1}.
> $$
>
> This map is continuous, and its image is exactly the conjugacy class of $x$. A continuous image of a path-connected space is path connected. Therefore every conjugacy class in $G$ is path connected. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The claim uses the topology and continuity of the group operations, not merely abstract path connectedness of an underlying set.
- **Source status:** M.3 was visually checked at [S1, Ch. 9, Misc. Ex. M.3, printed p. 287, PDF p. 299]. The continuous-image proof is independent.


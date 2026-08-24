---
title: "Exercise G113: Points with Trivial Stabilizer"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - discrete-groups
  - group-actions
  - stabilizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.9, printed p. 189, PDF p. 201"
created: 2026-08-24
---

# Exercise G113: Points with Trivial Stabilizer

## Problem Statement

> [!question] Exercise 5.9
> Let $G$ be a discrete subgroup of $M$ whose translation group is not trivial. Prove that there is a point $p_0$ in the plane that is not fixed by any element of $G$ except the identity.

## Hints

> [!hint]- Hint 1
> A nonidentity plane isometry with fixed points is either a rotation, whose fixed set is one point, or a reflection, whose fixed set is one line.

> [!hint]- Hint 2
> A discrete subset of the finite-dimensional isometry group is countable. A countable union of points and lines cannot cover $\mathbb R^2$.

## Solution

> [!success]- Solution
> A plane isometry has a fixed point only in the following nonidentity cases: a rotation fixes its center, and a reflection fixes its axis. Nonzero translations and glide reflections have no fixed points. Thus, for each $g\in G\setminus\{1\}$, the fixed set $\operatorname{Fix}(g)$ is empty, one point, or one line.
>
> The isometry group $M$ is a finite-dimensional metric space. Any discrete subset of such a space is countable: cover $M$ by countably many compact coordinate boxes and, within each box, use the isolating neighborhoods of the discrete points. Hence $G$ is countable.
>
> A countable union of points and lines cannot cover the plane. Indeed, choose a line $\ell$ whose slope differs from the slopes of all fixed lines. Then $\ell$ meets each fixed line in at most one point; after also removing the countably many isolated fixed points, uncountably many points of $\ell$ remain.
>
> Choose $p_0$ among the remaining points. Then $p_0\notin\operatorname{Fix}(g)$ for every $g\ne1$, so
>
> $$
> G_{p_0}=\{1\}.
> $$
>
> This proves the assertion. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]

## Notes

- The hypothesis about a nontrivial translation group places the exercise in the discrete-pattern setting, although the countability argument proves the same conclusion for every discrete plane-isometry group.
- **External standard input:** a discrete subset of a second-countable metric space is countable; the proof above specializes this fact to $M$.
- **Source status:** [S1, Ch. 6, §5, Ex. 5.9, printed p. 189, PDF p. 201]; independent proof.


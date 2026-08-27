---
title: "Exercise G165: Cube Stabilizer Orbit Decompositions"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - symmetry-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 9, Ex. 9.2, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise G165: Cube Stabilizer Orbit Decompositions

## Problem Statement

> [!question] Exercise 9.2
> Let $G$ be the group of rotational symmetries of a cube, let $G_v,G_e,G_f$ be the stabilizers of a vertex $v$, an edge $e$, and a face $f$, and let $V,E,F$ be the sets of vertices, edges, and faces. Determine the formulas that represent the decomposition of each of the three sets into orbits for each of the subgroups.

## Hints

> [!hint]- Hint 1
> The three stabilizers have orders $3,2,4$.

> [!hint]- Hint 2
> Describe objects by incidence with the fixed vertex, edge, or face and its opposite.

## Solution

> [!success]- Solution
> Write only orbit sizes; the incidence description identifies each orbit uniquely.
>
> **Vertex stabilizer $G_v\cong C_3$.** Let $v'$ be opposite $v$.
>
> $$
> V:1+1+3+3,qquad E:3+3+3+3,qquad F:3+3.
> $$
>
> On $V$, the singleton orbits are $v,v'$, followed by the three neighbors of each. On $E$, the first two triples are the edges incident to $v,v'$, and the six remaining edges split into two alternating triples. The faces split into the three incident to $v$ and the three incident to $v'$.
>
> **Edge stabilizer $G_e\cong C_2$.** Let $e'$ be the opposite edge on the same rotation axis.
>
> $$
> V:2+2+2+2,qquad E:1+1+2+2+2+2+2,qquad F:2+2+2.
> $$
>
> The half-turn pairs all vertices; it fixes $e,e'$ setwise and pairs the ten other edges; it pairs the six faces.
>
> **Face stabilizer $G_f\cong C_4$.** Let $f'$ be the opposite face.
>
> $$
> V:4+4,qquad E:4+4+4,qquad F:1+1+4.
> $$
>
> The vertex orbits are the vertices of $f$ and $f'$. The edge orbits are the edges of $f$, those of $f'$, and the four lateral edges. The face orbits are $\{f\},\{f'\}$, and the four side faces. Each displayed sum equals $|V|=8$, $|E|=12$, or $|F|=6$ as appropriate. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G164 - Rotation Groups of the Cube and Tetrahedron|Exercise G164]]

## Notes

- An edge or face stabilizer is setwise; its nonidentity elements need not fix every point of that edge or face.
- **Source status:** The nine requested subgroup actions were visually checked in the statement at [S1, Ch. 6, §9, Ex. 9.2, printed p. 191, PDF p. 203]. The decompositions are independent.


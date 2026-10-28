---
title: "Exercise G366: Subgroup Index under a Homomorphism"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.6, printed p. 230, PDF p. 244"
source_refs:
  - "S7/ch-6/sec-2/ex-6"
created: 2026-10-28
---

# Exercise G366: Subgroup Index under a Homomorphism

## Problem Statement

> [!question] Original Exercise 6.2.6
> Let $\pi:G\longrightarrow\pi(G)$ be a group homomorphism and let $H$ be a subgroup of $G$. Show that $[\pi(G):\pi(H)]\le[G:H]$.

## Hints

> [!hint]- Hint 1
> Map each left coset $gH$ to the left coset $\pi(g)\pi(H)$.

> [!hint]- Hint 2
> Prove this map is well defined and onto. Normality of $H$ is not required.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Define a map of coset sets
> $$
> G/H\longrightarrow\pi(G)/\pi(H),\qquad gH\longmapsto\pi(g)\pi(H).
> $$
> If $gH=g'H$, then $g'=gh$ for some $h\in H$, so $\pi(g')=\pi(g)\pi(h)$ and the image cosets agree. This proves well-definedness. Conversely, every coset of $\pi(H)$ has a representative $\pi(g)$ by the definition of $\pi(G)$, so the map is surjective. The number of target cosets is therefore at most the number of source cosets, which is the asserted index inequality.
>
> For finite index this is an inequality of nonnegative integers. With the usual set-theoretic comparison of cardinalities, the same surjection also proves the assertion for infinite indices.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Boundary:** $G/H$ and $\pi(G)/\pi(H)$ are coset sets here, not necessarily quotient groups.
- **Routing:** Cosets and subgroup indices are the primary group-theoretic tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

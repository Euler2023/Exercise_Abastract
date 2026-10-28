---
title: "Exercise G375: Continuity of Homomorphisms at the Identity"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.3, printed p. 389, PDF p. 401"
source_refs:
  - "S7/ch-9/sec-3/ex-3"
created: 2026-10-28
---

# Exercise G375: Continuity of Homomorphisms at the Identity

## Problem Statement

> [!question] Original Exercise 9.3.3
> Let $\rho:G\longrightarrow H$ be a homomorphism of topological groups. Show that $\rho$ is continuous if and only if $\rho^{-1}(V)$ is open for each $V$ in a basis of neighborhoods of the identity $1_H$.

## Hints

> [!hint]- Hint 1
> Translation is a homeomorphism in every topological group.

> [!hint]- Hint 2
> For an open set $O\subseteq H$ and $g$ mapping into it, choose $V$ with $\rho(g)V\subseteq O$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Continuity implies all the required inverse images are open. Conversely suppose these inverse images are open. Let $O\subseteq H$ be open and $g\in\rho^{-1}(O)$. Translation makes $\rho(g)^{-1}O$ an identity neighborhood; choose a basis neighborhood $V$ inside it. Then $g\rho^{-1}(V)$ is open, contains $g$, and maps into $\rho(g)V\subseteq O$. Taking its union over every $g\in\rho^{-1}(O)$ shows the latter set is open. Thus $\rho$ is continuous. No surjectivity or first-countability hypothesis is required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

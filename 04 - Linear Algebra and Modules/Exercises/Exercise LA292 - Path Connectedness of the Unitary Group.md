---
title: "Exercise LA292: Path Connectedness of the Unitary Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - unitary-groups
  - path-connectedness
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 7, Ex. 7.1, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise LA292: Path Connectedness of the Unitary Group

## Problem Statement

> [!question] Exercise 7.1
> Prove that the unitary group $U_n$ is path connected.

## Hints

> [!hint]- Hint 1
> Unitarily diagonalize a given $P\in U_n$ and choose arguments for its eigenvalues.

## Solution

> [!success]- Solution
> The spectral theorem gives
>
> $$
> P=V\operatorname{diag}(e^{i\theta_1},\ldots,e^{i\theta_n})V^*
> $$
>
> for some $V\in U_n$ and real $\theta_j$. Then
>
> $$
> \gamma(t)=V\operatorname{diag}(e^{it\theta_1},\ldots,e^{it\theta_n})V^*,
> \qquad 0\le t\le1,
> $$
>
> is a continuous path in $U_n$ from $I$ to $P$. Hence $U_n$ is path connected. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** Ex. 7.1 was visually checked at [S1, Ch. 9, §9.7, printed p. 286, PDF p. 298]. The spectral-theorem path is independent.


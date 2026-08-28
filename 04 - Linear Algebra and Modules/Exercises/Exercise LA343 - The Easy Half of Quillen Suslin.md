---
title: "Exercise LA343: The Easy Half of Quillen-Suslin"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - quillen-suslin
  - base-change
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 9, Polynomial Rings in Several Variables, Ex. 9.4, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA343: The Easy Half of Quillen-Suslin

## Problem Statement

> [!question] Exercise 9.4
> Prove the easy half of the theorem of Quillen and Suslin: If $V$ is free, then the rank of $A(c)$ is constant.

## Hints

> [!hint]- Hint 1
> Evaluate at $c$ by tensoring the presentation with the residue field $R/\mathfrak m_c\cong\mathbb C$.

## Solution

> [!success]- Solution
> Let $R=\mathbb C[x_1,\ldots,x_k]$ and suppose the $m\times n$ matrix $A$ presents a free module $V\cong R^r$:
>
> $$
> R^n\xrightarrow{A}R^m\longrightarrow V\longrightarrow0.
> $$
>
> For $c\in\mathbb C^k$, tensor this right-exact sequence with
>
> $$
> R/\mathfrak m_c\cong\mathbb C.
> $$
>
> The resulting sequence is
>
> $$
> \mathbb C^n\xrightarrow{A(c)}\mathbb C^m\longrightarrow\mathbb C^r\longrightarrow0.
> $$
>
> Hence the cokernel of $A(c)$ has dimension $r$, and rank–nullity in the codomain gives
>
> $$
> \operatorname{rank}A(c)=m-r.
> $$
>
> This number is independent of $c$, proving the required direction without using the difficult converse.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]

## Notes

- **Routing:** Module Theory is primary because specialization is a base change of the presentation.
- **Method boundary:** Only right exactness of tensor product is needed. The converse constant-rank-implies-free direction is the deep Quillen–Suslin input.
- **Source status:** [S1, Ch. 14, §14.9, Ex. 9.4, printed p. 440, PDF p. 452]. The base-change proof is independent.

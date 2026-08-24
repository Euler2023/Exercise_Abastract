---
title: "Exercise Rep23: Kernels of One-Parameter Groups"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - kernels
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.9, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep23: Kernels of One-Parameter Groups

## Problem Statement

> [!question] Exercise 5.9
> Let $\varphi:\mathbb R^+\to GL_n$ be a one-parameter group. Prove that $\ker\varphi$ is either trivial, or an infinite cyclic group, or the whole group.

## Hints

> [!hint]- Hint 1
> Regard $\mathbb R^+$ as the additive group of real numbers and note that the kernel is closed.

> [!hint]- Hint 2
> Classify closed subgroups of $(\mathbb R,+)$ using the least positive element when it exists.

## Solution

> [!success]- Solution
> The notation $\mathbb R^+$ here denotes the additive real group. Since $\varphi$ is continuous,
>
> $$
> K=\ker\varphi=\varphi^{-1}(\{I\})
> $$
>
> is a closed subgroup of $\mathbb R$.
>
> If $K=\{0\}$ or $K=\mathbb R$, the first or third alternative holds. Otherwise, suppose $K$ contains positive elements and let
>
> $$
> a=\inf(K\cap(0,\infty)).
> $$
>
> If $a=0$, then $K$ contains arbitrarily small positive elements. Integer multiples approximate every real number, so $K$ is dense; closedness would give $K=\mathbb R$, contrary to assumption. Hence $a>0$. Closedness gives $a\in K$. For any $x\in K$, division with remainder writes $x=qa+r$ with $q\in\mathbb Z$ and $0\le r<a$. Since $r=x-qa\in K$, minimality forces $r=0$. Thus
>
> $$
> K=a\mathbb Z,
> $$
>
> an infinite cyclic group. These are all possibilities.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- The three cases correspond respectively to an injective flow, a periodic flow, and the constant flow.
- **Source status:** Ex. 5.9 was visually checked at [S1, Ch. 9, §9.5, printed p. 286, PDF p. 298]. The closed-subgroup classification is proved above rather than imported.


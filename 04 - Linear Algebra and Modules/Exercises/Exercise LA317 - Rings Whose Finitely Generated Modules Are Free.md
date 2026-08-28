---
title: "Exercise LA317: Rings Whose Finitely Generated Modules Are Free"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - free-modules
  - fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 2, Free Modules, Ex. 2.2, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA317: Rings Whose Finitely Generated Modules Are Free

## Problem Statement

> [!question] Exercise 2.2
> Prove that a ring $R$ having the property that every finitely generated $R$-module is free is either a field or the zero ring.

## Hints

> [!hint]- Hint 1
> Apply the hypothesis to the cyclic module $R/I$ for a proper ideal $I$.

## Solution

> [!success]- Solution
> Suppose $R$ is not the zero ring. Let $I$ be a proper ideal. The cyclic module $R/I$ is finitely generated, hence free by hypothesis. It is nonzero. A nonzero free module is faithful: if an element of $R$ annihilates every basis vector, it is zero. But the annihilator of $R/I$ is exactly $I$. Therefore $I=0$.
>
> Thus the only ideals of $R$ are $0$ and $R$. In a nonzero commutative ring with identity, this means every nonzero element generates $R$ and is invertible. Hence $R$ is a field. The zero ring separately has the stated property, because its only module is the zero free module.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Routing:** Module Theory is primary because freeness of the cyclic quotients forces the ideal structure.
- **Source status:** [S1, Ch. 14, §14.2, Ex. 2.2, printed p. 437, PDF p. 449]. The proof is independent.

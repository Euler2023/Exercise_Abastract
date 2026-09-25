---
title: "Exercise G328: Unipotent Upper Triangular Quotient"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 12, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise G328: Unipotent Upper Triangular Quotient

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 12
> Let $G$ be the group of upper triangular matrices with non-zero diagonal elements. Let $H$ be the subgroup consisting of those matrices whose diagonal element is $1$. (Actually prove that $H$ is a subgroup.) How would you describe the factor group $G/H$?

## Hints

> [!hint]- Hint 1
> The diagonal of a product is the coordinatewise product of the two diagonals.

> [!hint]- Hint 2
> Map $G$ to $(k^\times)^n$ and identify $H$ as its kernel.

## Solution

> [!success]- Independently derived solution
> The matrices are over the field $k$ of the surrounding matrix exercises. Define
>
> $$
> \delta:G\longrightarrow(k^\times)^n,
> \qquad A\longmapsto(a_{11},\ldots,a_{nn}).
> $$
>
> Upper triangular multiplication gives $(AB)_{ii}=a_{ii}b_{ii}$, so $\delta$ is a group homomorphism. Every diagonal tuple of nonzero field elements is realized by a diagonal matrix, hence $\delta$ is surjective. Its kernel comprises exactly the upper triangular matrices with all diagonal entries $1$, which is $H$. In particular, $H$ contains the identity and is closed under products and inverses; it is also normal. The group isomorphism theorem yields
>
> $$
> G/H\cong(k^\times)^n.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[02 - Ring Theory/Exercises/Exercise R298 - Strictly Upper Triangular Ideal and Diagonal Quotient|Exercise R298]]

## Notes

- **Routing:** Kernels, normality, and a quotient group do the main work; the matrices provide a concrete group.
- **Source and proof status:** The statement was checked against [S2, Ch. XIII, Ex. 12, printed p. 546, PDF p. 561]. The solution is independently derived. The source's singular “diagonal element” is understood as every diagonal entry.

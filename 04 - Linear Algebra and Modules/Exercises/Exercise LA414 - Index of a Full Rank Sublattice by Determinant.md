---
title: "Exercise LA414: Index of a Full Rank Sublattice by Determinant"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 27, printed p. 548, PDF p. 563"
created: 2026-09-26
---

# Exercise LA414: Index of a Full Rank Sublattice by Determinant

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 27
> Let $L$ be a free module over $\mathbb Z$ with basis $e_1,\ldots,e_n$. Let $M$ be a free submodule of the same rank, with basis $u_1,\ldots,u_n$. Let $u_i=\sum_jc_{ij}e_j$. Show that the index $(L:M)$ is given by the determinant: $(L:M)=|\det(c_{ij})|$.

## Hints

> [!hint]- Hint 1: Use coordinates
> Identify $L$ with $\mathbb Z^n$ via the $e_j$. The rows of $C=(c_{ij})$ form a basis of the coordinate image of $M$.

> [!hint]- Hint 2: Diagonalize over $\mathbb Z$
> Smith normal form preserves the index and changes $C$ into a diagonal matrix with nonzero diagonal entries.

## Solution

> [!success]- Solution
> The basis $e_1,\ldots,e_n$ identifies $L$ with $\mathbb Z^n$. The coordinate vectors of $u_1,\ldots,u_n$ are the rows of the integer matrix $C=(c_{ij})$, so the image of $M$ is $C^{\mathsf T}\mathbb Z^n$. Since the $u_i$ are linearly independent over $\mathbb Z$ and have the same rank as $L$, $\det C\ne0$.
>
> By Smith normal form for integer matrices, there are $U,V\in GL_n(\mathbb Z)$ such that
>
> $$
> UC^{\mathsf T}V=\operatorname{diag}(d_1,\ldots,d_n)
> $$
>
> with nonzero integers $d_i$. Multiplication by $U$ is an automorphism of the ambient $\mathbb Z^n$, while multiplication by $V$ only changes the basis of the sublattice. Hence
>
> $$
> (L:M)
> =[\mathbb Z^n:C^{\mathsf T}\mathbb Z^n]
> =[\mathbb Z^n:\operatorname{diag}(d_i)\mathbb Z^n]
> =\prod_{i=1}^n|d_i|
> =|\det C|.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA310 - Determinant Formula for Lattice Index|Exercise LA310]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 27, printed p. 548, PDF p. 563]. The source statement was checked visually. Smith normal form is a named prior structure theorem; its application here is explicit.
- **Relationship to existing note:** Exercise LA310 treats a two-dimensional Artin version with a source-ordering error. Lang's statement here has consistent inclusion and works in arbitrary finite rank.


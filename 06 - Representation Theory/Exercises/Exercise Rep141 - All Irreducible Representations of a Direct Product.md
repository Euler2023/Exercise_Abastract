---
title: "Exercise Rep141: All Irreducible Representations of a Direct Product"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - tensor-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 17, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep141: All Irreducible Representations of a Direct Product

## Problem Statement

> [!question] Lang XVIII.17
> With the same notation as in Exercise 16, show that every irreducible representation of $G_1\times G_2$ over $\mathbb C$ is isomorphic to a tensor product representation as in Exercise 16.
>
> *Original hint:* Prove that if a character is orthogonal to all the products $\chi_1\otimes\chi_2$ of Exercise 16(b), then the character is $0$.

> [!info] Notation
> The groups $G_1,G_2$ are finite. The tensor product is the external product, with $(g_1,g_2)$ acting on $E_1\otimes E_2$ as $\rho_1(g_1)\otimes\rho_2(g_2)$, as constructed in [[06 - Representation Theory/Exercises/Exercise Rep140 - External Tensor Products of Irreducible Representations|Lang XVIII.16]].

## Hints

> [!hint]- Hint 1: Count conjugacy classes of the product
> Two pairs are conjugate precisely when their first coordinates are conjugate in $G_1$ and their second coordinates are conjugate in $G_2$. Compare the dimension of the class-function space with the number of product characters.

> [!hint]- Hint 2: Use orthogonality twice
> The inner product of two product characters factors into the two character inner products on the factors. The product characters are therefore an orthonormal basis, not merely a linearly independent family.

## Solution

> [!success]- Independent derivation by a complete character basis
> Let $\chi_1,\ldots,\chi_r$ be all irreducible characters of $G_1$, and let $\psi_1,\ldots,\psi_s$ be all irreducible characters of $G_2$. The character-basis theorem says that $r,s$ are the respective numbers of conjugacy classes.
>
> For $1\le i\le r$ and $1\le j\le s$, put $\theta_{ij}(g,h)=\chi_i(g)\psi_j(h)$. The preceding exercise constructs an irreducible representation with this character. Directly factoring the finite sums gives
> $$
> \langle\theta_{ij},\theta_{k\ell}\rangle_{G_1\times G_2}
> =\langle\chi_i,\chi_k\rangle_{G_1}
> \langle\psi_j,\psi_\ell\rangle_{G_2}
> =\delta_{ik}\delta_{j\ell}.
> $$
> Thus the $rs$ product characters are orthonormal and in particular distinct.
>
> Conjugation in the direct product is coordinatewise:
> $$
> (a,b)(g,h)(a,b)^{-1}=(aga^{-1},bhb^{-1}).
> $$
> Each conjugacy class is therefore the product of a class of $G_1$ and a class of $G_2$. There are $rs$ such classes, so the space of complex class functions on the product has dimension $rs$. Our $rs$ orthonormal functions consequently form a basis. In particular a class function orthogonal to all of them is zero, proving the assertion in the original hint.
>
> Now let $\eta$ be any irreducible character of $G_1\times G_2$. If its representation were not isomorphic to any of the external products already constructed, irreducible-character orthogonality would give $\langle\eta,\theta_{ij}\rangle=0$ for every $i,j$. The basis property would then imply $\eta=0$, which is impossible because $\eta(1,1)$ is its positive dimension. Hence $\eta=\theta_{ij}$ for some pair. Complex semisimple representations with equal characters have equal irreducible multiplicities, and hence are isomorphic. This proves the desired assertion.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[06 - Representation Theory/Exercises/Exercise Rep140 - External Tensor Products of Irreducible Representations|External Tensor Products of Irreducible Representations]]

## Notes

- **Source and proof status:** The statement and full original hint were visually checked at [S2, Ch. XVIII, Exercise 17, printed p. 725, PDF p. 740]. The proof is independent, using the preceding exercise and the character-basis theorem checked at Ch. XVIII, Theorem 5.15, printed p. 684, PDF p. 699.
- **Uniqueness:** Orthogonality above also proves that the pair of irreducible factors is unique up to isomorphism. The result covers a trivial factor group as well.
- **Method boundary:** Algebraic closure and characteristic zero are supplied here by $\mathbb C$. No assertion about arbitrary nonsplitting coefficient fields is being made.

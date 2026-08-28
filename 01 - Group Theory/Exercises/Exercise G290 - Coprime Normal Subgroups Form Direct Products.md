---
title: "Exercise G290: Coprime Normal Subgroups Form Direct Products"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - normal-subgroups
  - direct-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 13, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G290: Coprime Normal Subgroups Form Direct Products

## Problem Statement

> [!question] Exercise 13
> **(a)** Let $H,N$ be normal subgroups of a finite group $G$ whose orders are relatively prime. Prove that elements of $H$ commute with elements of $N$ and that
>
> $$
> H\times N\cong HN.
> $$
>
> **(b)** Let $H_1,\ldots,H_r\trianglelefteq G$ have pairwise relatively prime orders. Prove that
>
> $$
> H_1\times\cdots\times H_r\cong H_1\cdots H_r.
> $$

## Hints

> [!hint]- Hint 1
> For $x\in H$ and $y\in N$, locate the commutator $xyx^{-1}y^{-1}$ in both subgroups.

## Solution

> [!success]- Solution
> **(a)** Normality gives
>
> $$
> [x,y]=xyx^{-1}y^{-1}\in H
> $$
>
> because $y x^{-1}y^{-1}\in H$, and similarly $[x,y]\in N$. Thus $[x,y]\in H\cap N$. The order of $H\cap N$ divides both $|H|$ and $|N|$, so coprimality forces $H\cap N=\{e\}$. Hence $[x,y]=e$ and $x,y$ commute.
>
> The multiplication map $H\times N\to HN$ is therefore a homomorphism. It is onto, and its kernel consists of pairs $(h,n)$ with $h=n^{-1}\in H\cap N$, so it is injective. Hence it is an isomorphism.
>
> **(b)** Every $H_i$ commutes elementwise with every $H_j$ for $i\ne j$. The multiplication map from the direct product onto $H_1\cdots H_r$ is therefore a homomorphism. If
>
> $$
> h_1\cdots h_r=e,
> $$
>
> then $h_i$ belongs to $H_i\cap\prod_{j\ne i}H_j$. The order of this intersection divides $|H_i|$ and also the product of the pairwise coprime orders $|H_j|$, so it is trivial. Thus every $h_i=e$, and the multiplication map is injective.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- **Consequence:** If all Sylow subgroups of a finite group are normal, the group is their direct product.
- **Source status:** [S2, Ch. I, Ex. 13, printed p. 76, PDF p. 91]. The proof is independent.

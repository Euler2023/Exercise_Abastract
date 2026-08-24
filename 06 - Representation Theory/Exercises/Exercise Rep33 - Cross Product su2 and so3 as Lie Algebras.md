---
title: "Exercise Rep33: Cross Product, su2, and so3 as Lie Algebras"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - cross-product
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.9, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep33: Cross Product, su2, and so3 as Lie Algebras

## Problem Statement

> [!question] Exercise 6.9
> (a) Show that the vector cross product makes $\mathbb R^3$ into a Lie algebra $L_1$.
>
> (b) Let $L_2=\operatorname{Lie}(SU_2)$ and $L_3=\operatorname{Lie}(SO_3)$. Prove that $L_1,L_2,L_3$ are isomorphic.

## Hints

> [!hint]- Hint 1
> Use the vector triple-product identity for Jacobi.

> [!hint]- Hint 2
> Compare vectors with pure imaginary quaternions and with cross-product matrices.

## Solution

> [!success]- Solution
> The cross product is bilinear and skew-symmetric. Moreover,
>
> $$
> a\times(b\times c)+b\times(c\times a)+c\times(a\times b)=0
> $$
>
> by the vector triple-product identity, so it is a Lie bracket.
>
> Identify $\mathfrak{su}_2$ with pure imaginary quaternions. Their commutator satisfies
>
> $$
> [u,v]=uv-vu=2u\times v.
> $$
>
> Therefore $a\mapsto a/2$ is a Lie algebra isomorphism from $(\mathbb R^3,\times)$ to $\mathfrak{su}_2$. Next let $[a]_{\times}$ denote the matrix of $x\mapsto a\times x$. The identity
>
> $$
> [[a]_{\times},[b]_{\times}]=[a\times b]_{\times}
> $$
>
> shows that $a\mapsto[a]_{\times}$ is an isomorphism onto $\mathfrak{so}_3$. Thus all three Lie algebras are isomorphic. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]

## Notes

- The factor $1/2$ is required because the quaternion commutator is twice the cross product.
- **Source status:** Ex. 6.9 was visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The explicit isomorphisms are independent.

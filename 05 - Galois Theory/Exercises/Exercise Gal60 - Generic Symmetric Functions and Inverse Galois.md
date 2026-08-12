---
title: "Exercise Gal60: Generic Symmetric Functions and Inverse Galois"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, symmetric-polynomials, inverse-galois]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 12, Ex. 12.4, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal60: Generic Symmetric Functions and Inverse Galois

## Problem Statement

> [!question] Exercise 12.4
> (a) Prove $F(u_1,\ldots,u_n)/F(s_1,\ldots,s_n)$ is Galois with group $S_n$. (b) For $n=5$, $w=u_1u_2+\cdots+u_5u_1$, determine the group of $F(u)$ over $F(s,w)$. (c) Prove every finite group occurs as a Galois group.

## Hints

> [!hint]- Hint 1
> The fixed field of the permutation action is the symmetric rational-function field.

## Solution

> [!success]- Solution
> The permutations of the algebraically independent $u_i$ give $n!$ automorphisms. The fundamental theorem of symmetric functions shows the fixed field is $F(s_1,\ldots,s_n)$, and the generic polynomial $\prod(x-u_i)$ splits upstairs, proving (a).
>
> For (b), the stabilizer in $S_5$ of the cycle-edge sum $w$ consists exactly of the symmetries of the pentagon: the five rotations and five reflections. Hence
> $$
> \operatorname{Gal}(F(u)/F(s,w))\cong D_5.
> $$
>
> For (c), embed a finite group $G$ in $S_n$ by Cayley's theorem. Let $S_n$ act on $F(u_1,\ldots,u_n)$; then the extension over the fixed field $F(u)^G$ is Galois with group exactly $G$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[08 - Arithmetic Geometry/Concepts/Inverse Galois Problem|Inverse Galois Problem]]

## Notes

Part (c) allows the base field to depend on $G$; it is not the inverse Galois problem over $\mathbb Q$.

---
title: "Exercise G140: Comparing PSLn with PGLn"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - quotient-groups
  - projective-linear-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.7, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise G140: Comparing PSLn with PGLn

## Problem Statement

> [!question] Exercise 8.7
> With $Z$ denoting the center of a group, is $PSL_n(\mathbb C)$ isomorphic to $GL_n(\mathbb C)/Z$? Is $PSL_n(\mathbb R)$ isomorphic to $GL_n(\mathbb R)/Z$?

## Hints

> [!hint]- Hint 1
> Ask whether every determinant has an $n$th root in the base field.

## Solution

> [!success]- Solution
> The natural map $SL_n(F)\to GL_n(F)/Z$ has kernel $Z\cap SL_n(F)$.
>
> Over $\mathbb C$, every nonzero determinant has an $n$th root. Given $A\in GL_n(\mathbb C)$, choose $\lambda$ with $\lambda^n=\det A$; then $\lambda^{-1}A\in SL_n(\mathbb C)$ and represents the same projective class. Hence
>
> $$
> PSL_n(\mathbb C)\cong GL_n(\mathbb C)/Z.
> $$
>
> Over $\mathbb R$, the same argument works when $n$ is odd, because every nonzero real number has a real $n$th root. Thus the answer is also yes for odd $n$.
>
> If $n$ is even, multiplication by a real scalar changes the determinant by $\lambda^n>0$, so determinant sign is a well-defined nontrivial invariant on $GL_n(\mathbb R)/Z$. The image of $PSL_n(\mathbb R)$ is precisely the index-two determinant-positive subgroup. Moreover, $PSL_n(\mathbb R)$ has no quotient of order $2$: every elementary matrix satisfies $E_{ij}(t)=E_{ij}(t/2)^2$, so every homomorphism to a group of exponent $2$ kills the elementary generators of $SL_n(\mathbb R)$. In contrast, determinant sign gives such a quotient of $PGL_n(\mathbb R)$. Therefore the two groups are not isomorphic even as abstract groups when $n$ is even. Topologically, the same distinction appears as connectedness versus two components.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- For even $n$, the natural map is still injective onto the identity component of $PGL_n(\mathbb R)$.
- **Source status:** Ex. 8.7 was visually checked at [S1, Ch. 9, §9.8, printed p. 287, PDF p. 299]. The scalar-root and component arguments are independent.

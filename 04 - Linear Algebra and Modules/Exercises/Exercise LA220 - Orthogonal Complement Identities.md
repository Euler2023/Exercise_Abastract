---
title: "Exercise LA220: Orthogonal Complement Identities"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-complements
  - subspaces
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Section 4, Ex. 4.11, printed p. 255, PDF p. 267"
created: 2026-08-24
---

# Exercise LA220: Orthogonal Complement Identities

## Problem Statement

> [!question] Exercise 4.11
> Let $W_1,W_2$ be subspaces of a vector space $V$ with a symmetric bilinear form. Prove
>
> **(a)** $(W_1+W_2)^\perp=W_1^\perp\cap W_2^\perp$,
>
> **(b)** $W\subset W^{\perp\perp}$,
>
> **(c)** if $W_1\subset W_2$, then $W_1^\perp\supset W_2^\perp$.

## Hints

> [!hint]- Hint 1
> Unpack the phrase “orthogonal to every vector” in each subspace.

> [!hint]- Hint 2
> Orthogonal complement reverses inclusions.

## Solution

> [!success]- Solution
> **(a)** A vector $v$ lies in $(W_1+W_2)^\perp$ exactly when
>
> $$
> (v,w_1+w_2)=0
> $$
>
> for every $w_1\in W_1$ and $w_2\in W_2$. Taking one summand at a time shows this is equivalent to $v\in W_1^\perp$ and $v\in W_2^\perp$. Hence the claimed equality holds.
>
> **(b)** If $w\in W$ and $u\in W^\perp$, then $(u,w)=0$. Symmetry gives $(w,u)=0$, so $w$ is orthogonal to every $u\in W^\perp$. Thus $w\in W^{\perp\perp}$.
>
> **(c)** If $W_1\subset W_2$ and $v\in W_2^\perp$, then $v$ is orthogonal to every vector of $W_2$, hence to every vector of $W_1$. Therefore $v\in W_1^\perp$, proving $W_2^\perp\subset W_1^\perp$.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- Equality $W=W^{\perp\perp}$ requires additional hypotheses, such as finite dimension and nondegeneracy of the ambient form.
- **Source status:** All three statements were visually verified at [S1, Ch. 8, §4, Ex. 4.11, printed p. 255, PDF p. 267]. The proofs are independent.


---
title: "Exercise Rep52: Irreducible Representations of S3"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 2, Ex. 2.3, printed p. 315, PDF p. 327"
created: 2026-08-27
---

# Exercise Rep52: Irreducible Representations of S3

## Problem Statement

> [!question] Exercise 2.3
> Suppose given a representation of the symmetric group $S_3$ on a vector space $V$. Let $x$ and $y$ denote the usual generators for $S_3$.
>
> **(a)** Let $u$ be a nonzero vector in $V$. Let $v=u+xu+x^2u$ and $w=u+yu$. By analyzing the $G$-orbits of $v,w$, show that $V$ contains a nonzero invariant subspace of dimension at most $2$.
>
> **(b)** Prove that all irreducible two-dimensional representations of $G$ are isomorphic, and determine all irreducible representations of $G$.

## Hints

> [!hint]- Hint 1
> The orbit of $v$ has at most two elements; if $v=0$, the three vectors in the orbit of $w$ sum to zero.

> [!hint]- Hint 2
> Use the relation $yxy=x^{-1}$ and then the dimension-sum formula.

## Solution

> [!success]- Solution
> **(a)** Since $xv=v$, the orbit of $v$ is contained in $\{v,yv\}$. If $v\ne0$, its span is a nonzero invariant subspace of dimension at most $2$. Suppose $v=0$. The vector $w$ is fixed by $y$, and
>
> $$
> w+xw+x^2w=(1+x+x^2)(1+y)u=v+yv=0.
> $$
>
> If $w\ne0$, its orbit span is therefore nonzero and at most two-dimensional. If also $w=0$, then $yu=-u$ and $x^2u=-u-xu$. The space $\langle u,xu\rangle$ is stable under $x$, while
>
> $$
> y(xu)=x^2(yu)=-x^2u=u+xu,
> $$
>
> so it is also $y$-stable and has dimension at most $2$.
>
> **(b)** The one-dimensional representations factor through $S_3^{\mathrm{ab}}\cong C_2$, so they are the trivial and sign representations. The sum of squares of irreducible dimensions is $|S_3|=6$; after the two one-dimensional representations, the remaining square is $4$. Thus there is exactly one additional irreducible representation, of dimension $2$. It is the standard representation on $\{(z_1,z_2,z_3):z_1+z_2+z_3=0\}$, and every irreducible two-dimensional representation is isomorphic to it. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Source status:** [S1, Ch. 10, §2, Ex. 2.3, printed p. 315, PDF p. 327]; the orbit argument and classification are independent.


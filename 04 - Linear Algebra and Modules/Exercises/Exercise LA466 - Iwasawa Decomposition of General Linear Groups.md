---
title: "Exercise LA466: Iwasawa Decomposition of General Linear Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - gram-schmidt
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 24, printed pp. 599-600, PDF pp. 614-615"
created: 2026-09-29
---

# Exercise LA466: Iwasawa Decomposition of General Linear Groups

## Problem Statement

> [!question] Lang XV.24 — Iwasawa decomposition
> We start with $GL_n(\mathbb R)$. Let:
>
> $G=GL_n(\mathbb R)$;
>
> $K=$ subgroup of real unitary $n\times n$ matrices;
>
> $U=$ group of real unipotent upper triangular matrices, that is having components $1$ on the diagonal, arbitrary above the diagonal, and $0$ below the diagonal;
>
> $A=$ group of diagonal matrices with positive diagonal components.
>
> Prove that the product map $U\times A\times K\to UAK\subseteq G$ is actually a bijection. This amounts to Gram–Schmidt orthogonalization. Prove the similar statement in the complex case, that is for $G(\mathbb C)=GL_n(\mathbb C)$, $K(\mathbb C)=$ complex unitary group, $U(\mathbb C)=$ complex unipotent upper triangular group, and $A$ the same group of positive diagonal matrices as in the real case.

## Hints

> [!hint]- Hint 1
> Orthogonalize the rows, starting with the last row. This produces an upper triangular factor on the left of a unitary factor.

> [!hint]- Hint 2
> An upper triangular unitary matrix is diagonal. Positive diagonal entries then force it to be the identity.

## Solution

> [!success]- Independent derivation
> Work over $\mathbb F=\mathbb R$ or $\mathbb C$, with $\langle x,y\rangle=\sum_\ell x_\ell\overline{y_\ell}$, linear in the first variable. Let $r_1,\ldots,r_n$ be the independent rows of $g\in GL_n(\mathbb F)$. Recursively for $i=n,n-1,\ldots,1$, set
> $$
> v_i=r_i-\sum_{j>i}\langle r_i,q_j\rangle q_j,\qquad
> t_{ii}=\|v_i\|,\qquad q_i=t_{ii}^{-1}v_i.
> $$
> The vectors already constructed form an orthonormal basis for the span of $r_{i+1},\ldots,r_n$. Thus $v_i\ne0$ by independence of the rows, and $t_{ii}>0$. Set $t_{ij}=\langle r_i,q_j\rangle$ for $j>i$ and $t_{ij}=0$ for $j<i$. The row identities give $g=tk$, where $k$ has rows $q_i$ and satisfies $kk^*=I$, and $t$ is upper triangular with positive diagonal.
>
> Put $a=\operatorname{diag}(t_{11},\ldots,t_{nn})$ and $u=ta^{-1}$. Then $a\in A$, $u\in U$, and $g=uak$, establishing existence for every $g$.
>
> For uniqueness, suppose $g=tk=t'k'$ with both triangular factors having positive diagonal. Then
> $$
> t'^{-1}t=k'k^{-1}
> $$
> is both upper triangular and unitary. To see that such a matrix is diagonal, its first column has only its first entry nonzero, of modulus one. Orthogonality with every other column forces all other entries in its first row to vanish. Apply the same argument to the remaining square block. Its diagonal entries here are positive real numbers, so they all equal $1$. Consequently $t=t'$ and $k=k'$. The positive diagonal factor is determined by the diagonal of $t$, and $u=ta^{-1}$ is then determined as well.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- Source: [S2, Ch. XV, Exercise 24, printed pp. 599-600, PDF pp. 614-615], checked against both rendered pages. “Real unitary” means orthogonal.
- The proof establishes the intended stronger assertion $UAK=G$ as well as uniqueness. This is the order $UAK$; ordinary forward row orthogonalization would give the wrong triangular orientation.
- The shared source preamble for Exercises 24–30 points to [JoL 01], *Spherical Inversion on $SL_n(\mathbb R)$*, Chapter I. That reference is recorded as a source pointer; the derivation here does not use it.
- The required inner-product projection identity and triangular-unitary lemma are proved in the derivation. The main toolkit is finite-dimensional linear algebra.

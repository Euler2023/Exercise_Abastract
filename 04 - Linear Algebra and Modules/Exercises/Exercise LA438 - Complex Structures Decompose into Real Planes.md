---
title: "Exercise LA438: Complex Structures Decompose into Real Planes"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - complex-structures
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 22, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA438: Complex Structures Decompose into Real Planes

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 22
> Let $V$ be a finite dimensional vector space over $\mathbb R$, and let $A:V\to V$ be an $\mathbb R$-linear map such that $A^2=-\operatorname{Id}$. Show that $\dim V$ is even, and that $V$ is a direct sum of $2$-dimensional $A$-invariant subspaces.

## Hints

> [!hint]- Hint 1: Interpret $A$ as multiplication by $i$
> Set $(a+bi)v=av+bAv$ for real $a,b$. Check multiplicativity using $A^2=-I$.

> [!hint]- Hint 2: Expand a complex basis into real vectors
> From a complex basis $v_1,\ldots,v_r$, consider the real subspaces $\mathbb Rv_j+\mathbb RAv_j$.

## Solution

> [!success]- Independent solution
> For $a,b\in\mathbb R$, define $(a+bi)v=av+bAv$. The identity $A^2=-I$ gives
>
> $$
> (aI+bA)(cI+dA)=(ac-bd)I+(ad+bc)A,
> $$
>
> exactly the multiplication law of complex numbers. Addition, distributivity, and the identity axiom follow from real linearity. Thus $V$ is a complex vector space whose multiplication by $i$ is $A$.
>
> A finite real basis also spans $V$ over $\mathbb C$, so choose a finite complex basis $v_1,\ldots,v_r$. Put $P_j=\mathbb Rv_j+\mathbb RAv_j$. If $av_j+bAv_j=0$, then $(a+bi)v_j=0$; since $v_j\ne0$, the field property implies $a+bi=0$, so $a=b=0$. Therefore $\dim_{\mathbb R}P_j=2$.
>
> Also $Av_j\in P_j$ and $A(Av_j)=-v_j\in P_j$, so $P_j$ is $A$-invariant. Any $v\in V$ can be written as $\sum_j(a_j+b_ji)v_j=\sum_j(a_jv_j+b_jAv_j)$, proving that the $P_j$ span $V$. If such a sum is zero, complex independence of the $v_j$ forces every $a_j+b_ji=0$, which makes each summand zero. Consequently
>
> $$
> V=P_1\oplus\cdots\oplus P_r,
> \qquad \dim_{\mathbb R}V=2r.
> $$
>
> In the ordered real basis $(v_j,Av_j)$ of each plane, the matrix of $A$ is $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. If $V=0$, take the empty direct sum and $r=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 22, printed p. 570, PDF p. 585], checked on the page image. The complex scalar structure and plane decomposition are derived independently.
- **Proof inputs:** Only the existence of a basis in a finite-dimensional vector space and the usual field structure of $\mathbb C$ are used. No spectral theorem or choice of an inner product is needed.
- **Boundary:** The decomposition need not be unique or orthogonal. The invariant planes are obtained from a choice of complex basis.

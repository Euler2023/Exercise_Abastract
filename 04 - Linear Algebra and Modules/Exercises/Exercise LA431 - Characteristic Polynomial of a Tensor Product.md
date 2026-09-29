---
title: "Exercise LA431: Characteristic Polynomial of a Tensor Product"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - tensor-product
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 15, printed p. 569, PDF p. 584"
created: 2026-09-29
---

# Exercise LA431: Characteristic Polynomial of a Tensor Product

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 15
> After reading the section on the tensor product of vector spaces, do the following exercise. Let $E,F$ be finite-dimensional vector spaces over an algebraically closed field $k$, and let $A:E\to E$ and $B:F\to F$ be $k$-endomorphisms. Let
> $$
> P_A(t)=\prod_i(t-\alpha_i)^{n_i},
> \qquad P_B(t)=\prod_j(t-\beta_j)^{m_j}
> $$
> be their characteristic polynomials factored into distinct linear factors. Show that
> $$
> P_{A\otimes B}(t)=\prod_{i,j}(t-\alpha_i\beta_j)^{n_i m_j}.
> $$
> **Source hint:** Decompose $E$ into the generalized eigenspaces $E_i$ annihilated by a power of $A-\alpha_i I$, and similarly decompose $F$ into $F_j$. Show that some power of $A\otimes B-\alpha_i\beta_j I$ annihilates $E_i\otimes F_j$. Use $E\otimes F=\bigoplus_{i,j}E_i\otimes F_j$ and $\dim_k(E_i\otimes F_j)=n_i m_j$.

## Hints

> [!hint]- Hint 1: Expand the tensor operator
> On $E_i$ write $A=\alpha_i I+N$, and on $F_j$ write $B=\beta_j I+M$. Subtract $\alpha_i\beta_j I$ from their tensor product.

> [!hint]- Hint 2: Use commuting nilpotents
> The operators $U=N\otimes I$ and $V=I\otimes M$ commute. Every monomial of sufficiently high total degree in $U,V$ vanishes.

## Solution

> [!success]- Independent derivation following the source hint
> Primary decomposition gives $E=\bigoplus_iE_i$ and $F=\bigoplus_jF_j$. Jordan form shows $\dim E_i=n_i$ and $\dim F_j=m_j$: these dimensions count the total block sizes for the corresponding eigenvalues. If either space is zero, both sides of the desired formula are the empty product $1$.
>
> Choose bases of each $E_i,F_j$. Their pairwise pure tensors form a basis of $E\otimes_kF$, partitioned into bases of $E_i\otimes_kF_j$. This proves the direct-sum and dimension statements in the hint.
>
> Fix $i,j$. Write $A|_{E_i}=\alpha_i I+N$ with $N^r=0$ and $B|_{F_j}=\beta_j I+M$ with $M^s=0$. On $E_i\otimes F_j$, put $U=N\otimes I$ and $V=I\otimes M$. Then $UV=VU$, $U^r=0$, $V^s=0$, and
> $$
> A\otimes B-\alpha_i\beta_j I
> =\beta_j U+\alpha_i V+UV.
> $$
> Every term of the $(r+s-1)$st power of the right side is a scalar multiple of $U^aV^b$ with $a+b\ge r+s-1$. It has $a\ge r$ or $b\ge s$, so it is zero. This also handles $\alpha_i=0$ or $\beta_j=0$ without division.
>
> A nilpotent operator on a $d$-dimensional space has characteristic polynomial $t^d$: a basis adapted to its kernel filtration gives a strictly triangular matrix. Therefore the restriction of $A\otimes B$ to $E_i\otimes F_j$ has characteristic polynomial $(t-\alpha_i\beta_j)^{n_i m_j}$. Taking the determinant of the block diagonal matrix on the direct sum yields
> $$
> P_{A\otimes B}(t)=\prod_{i,j}(t-\alpha_i\beta_j)^{n_i m_j}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA401 - Triangular Basis for a Nilpotent Map|Exercise LA401]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 15, printed p. 569, PDF p. 584], verified visually. The nilpotence calculation and completion of the printed hint are independent derivations.
- **Imported inputs:** Primary decomposition and Jordan form from [S2, Ch. XIV, §2, printed pp. 558-559, PDF pp. 573-574]; the elementary tensor-basis theorem is used as the forward prerequisite expressly named in the exercise.
- Distinct pairs $(i,j)$ can have the same product $\alpha_i\beta_j$. Their multiplicities add when the answer is regrouped by distinct eigenvalues. Diagonalizability of $A$ or $B$ is not required.

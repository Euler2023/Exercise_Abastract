---
title: "Exercise LA434: Cofactor Determinants and Generic Cayley Hamilton"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
  - cayley-hamilton
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 18, printed p. 569, PDF p. 584"
created: 2026-09-29
---

# Exercise LA434: Cofactor Determinants and Generic Cayley Hamilton

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 18
> Let $A=(a_{ij})$ be an $n\times n$ matrix over a commutative ring $k$. Let $A_{ij}$ be obtained by deleting row $i$ and column $j$. Put $b_{ij}=(-1)^{i+j}\det(A_{ij})$ and $B=(b_{ij})$. Show that
> $$
> \det B=(\det A)^{n-1}
> $$
> by reducing to a matrix with variable coefficients over the integers. Use the same method to give an alternative proof of the Cayley-Hamilton theorem:
> $$
> P_A(A)=0.
> $$

## Hints

> [!hint]- Hint 1: Work in a domain before specializing
> For the universal matrix $X=(x_{ij})$ over $R=\mathbb Z[x_{ij}]$, pass to the fraction field. There $\det X$ is nonzero and can be cancelled.

> [!hint]- Hint 2: Separate the generic eigenvalues
> The discriminant of $P_X$ is a polynomial in the $x_{ij}$. Specializing $X$ to $\operatorname{diag}(1,2,\ldots,n)$ shows that this polynomial is not zero. Prove Cayley-Hamilton over a splitting field, then descend the polynomial identity to $R$.

## Solution

> [!success]- Independent derivation by universal specialization
> Assume $n\ge1$; for $n=1$ use the empty-minor determinant $1$. Let $R=\mathbb Z[x_{ij}:1\le i,j\le n]$, let $X=(x_{ij})$, and let $C=(c_{ij})$ be its cofactor matrix. The monomial $x_{11}\cdots x_{nn}$ occurs with coefficient $1$ in $\det X$, so $\det X\ne0$ in the domain $R$.
>
> Cofactor expansion gives
> $$
> XC^{\mathsf T}=(\det X)I.
> $$
> For the $(i,\ell)$ entry, the sum $\sum_jx_{ij}c_{\ell j}$ is the determinant of $X$ with row $\ell$ replaced by row $i$. It equals $\det X$ if $i=\ell$, and is zero otherwise because two rows coincide. Taking determinants and cancelling the nonzero element $\det X$ in $R$ gives
> $$
> \det C=(\det X)^{n-1}.
> $$
> For any commutative ring $k$ and any matrix $A$ over it, the substitution homomorphism $R\to k$, $x_{ij}\mapsto a_{ij}$, sends $C$ to $B$ and gives the first identity. No cancellation in $k$ is involved.
>
> For Cayley-Hamilton let $F=\operatorname{Frac}(R)$. The discriminant $\Delta(P_X)$ lies in $R$: the squared product of root differences is symmetric in the roots and hence is an integral polynomial in the coefficients of the monic polynomial. At $X=\operatorname{diag}(1,\ldots,n)$ it becomes
> $$
> \prod_{1\le i<j\le n}(i-j)^2\ne0.
> $$
> Thus $\Delta(P_X)\ne0$ in $F$. Over a splitting field $L/F$, the polynomial $P_X$ has $n$ distinct roots $\lambda_1,\ldots,\lambda_n$.
>
> Each $\lambda_i$ has a nonzero eigenvector because $\det(\lambda_i I-X)=0$. Eigenvectors for distinct eigenvalues are linearly independent: a shortest nontrivial relation, after applying $X-\lambda_i I$ for one participating eigenvalue, would give a shorter nontrivial relation. The $n$ eigenvectors therefore form a basis. In that basis $P_X(X)$ is diagonal with entries $P_X(\lambda_i)=0$, so $P_X(X)=0$ over $L$.
>
> Every entry of $P_X(X)$ already belongs to $R$. The injections $R\hookrightarrow F\hookrightarrow L$ show that these entries vanish in $R$. Substituting $x_{ij}\mapsto a_{ij}$ now proves $P_A(A)=0$ over every commutative ring, including rings with zero divisors.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 18, printed p. 569, PDF p. 584], checked visually. Both universal-polynomial arguments are independently supplied in the requested method.
- **Notation:** $B$ is the cofactor matrix. The adjugate is $B^{\mathsf T}$; their determinants agree. Confusing the two matrices would give an incorrect matrix multiplication identity.
- **Imported inputs:** Determinant multiplicativity, the fundamental theorem on symmetric polynomials, and existence of a splitting field are named prior results. The discriminant specialization and eigenvector argument are given explicitly; Cayley-Hamilton is not invoked to prove itself.
- The determinant formula is stated for $n\ge1$; at $n=0$ its exponent $n-1$ would be negative and requires a separate convention. The positive-size case includes singular matrices by specialization.

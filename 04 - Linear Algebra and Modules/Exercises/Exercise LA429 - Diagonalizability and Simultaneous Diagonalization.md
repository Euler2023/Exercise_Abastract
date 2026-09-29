---
title: "Exercise LA429: Diagonalizability and Simultaneous Diagonalization"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - diagonalization
  - minimal-polynomials
  - commuting-operators
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Representation of One Endomorphism, Exercise 13, printed pp. 568-569, PDF pp. 583-584"
created: 2026-09-29
---

# Exercise LA429: Diagonalizability and Simultaneous Diagonalization

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 13 — Diagonalizable endomorphisms
> Let $E$ be a finite-dimensional vector space over a field $k$, and let $S\in\operatorname{End}_k(E)$. We say that $S$ is **diagonalizable** if there exists a basis of $E$ consisting of eigenvectors of $S$. The matrix of $S$ with respect to this basis is then a diagonal matrix.
>
> **(a)** If $S$ is diagonalizable, then its minimal polynomial over $k$ is of type
>
> $$
> q(t)=\prod_{i=1}^{m}(t-\lambda_i),
> $$
>
> where $\lambda_1,\ldots,\lambda_m$ are distinct elements of $k$.
>
> **(b)** Conversely, if the minimal polynomial of $S$ is of the preceding type, then $S$ is diagonalizable. **Printed hint:** The space can be decomposed as a direct sum of the subspaces $E_{\lambda_i}$ annihilated by $S-\lambda_i$.
>
> **(c)** If $S$ is diagonalizable, and if $F$ is a subspace of $E$ such that $SF\subset F$, show that $S$ is diagonalizable as an endomorphism of $F$, i.e. that $F$ has a basis consisting of eigenvectors of $S$.
>
> **(d)** Let $S,T$ be endomorphisms of $E$, and assume that $S,T$ commute. Assume that both $S,T$ are diagonalizable. Show that they are simultaneously diagonalizable, i.e. there exists a basis of $E$ consisting of eigenvectors for both $S$ and $T$. **Printed hint:** If $\lambda$ is an eigenvalue of $S$, and $E_\lambda$ is the subspace of $E$ consisting of all vectors $v$ such that $Sv=\lambda v$, then $TE_\lambda\subset E_\lambda$.

## Hints

> [!hint]- Hint 1
> On an eigenvector of eigenvalue $\lambda$, a polynomial $f(S)$ acts as multiplication by $f(\lambda)$. For the converse, use interpolation polynomials taking value $1$ at one $\lambda_i$ and $0$ at all the others.

> [!hint]- Hint 2
> Put $\ell_i(t)=\prod_{j\ne i}(t-\lambda_j)/(\lambda_i-\lambda_j)$. Show that $\sum_i\ell_i(S)=I$ and that $\ell_i(S)E\subseteq\ker(S-\lambda_iI)$. For (c), the minimal polynomial of a restriction divides that of $S$. For (d), restrict $T$ to each $S$-eigenspace and apply (c).

## Solution

> [!success]- Independent derivation expanding the printed hints
> We use the convention that the minimal polynomial of the unique endomorphism of the zero space is $1$. In that case the product in (a) is empty, and all the basis assertions hold using the empty basis. We may otherwise suppose $E\ne0$.
>
> **(a) Diagonalizability gives distinct linear factors.** Let $\mathcal B$ be an eigenbasis, and let $\lambda_1,\ldots,\lambda_m$ be the distinct eigenvalues appearing in it. For any polynomial $f\in k[t]$ and basis vector $v$ with eigenvalue $\lambda_i$, induction on powers gives $f(S)v=f(\lambda_i)v$. Consequently,
>
> $$
> f(S)=0\quad\Longleftrightarrow\quad f(\lambda_i)=0\text{ for every }i
> \quad\Longleftrightarrow\quad \prod_{i=1}^{m}(t-\lambda_i)\mid f(t).
> $$
>
> The last equivalence follows from the factor theorem and the fact that the distinct linear factors are relatively prime. Thus the monic polynomial of least degree annihilating $S$ is precisely the displayed product.
>
> **(b) Distinct linear factors give an eigenbasis.** Suppose $q(t)=\prod_i(t-\lambda_i)$ is the minimal polynomial, with all $\lambda_i$ distinct in $k$. Define
>
> $$
> \ell_i(t)=\prod_{j\ne i}\frac{t-\lambda_j}{\lambda_i-\lambda_j},
> \qquad P_i=\ell_i(S),
> \qquad E_i=\ker(S-\lambda_iI).
> $$
>
> All denominators are nonzero. Since $\ell_i(\lambda_j)=\delta_{ij}$, the polynomial $\sum_i\ell_i(t)-1$ has degree at most $m-1$ and vanishes at $m$ distinct elements, hence is zero. Also,
>
> $$
> (t-\lambda_i)\ell_i(t)
> =\frac{q(t)}{\prod_{j\ne i}(\lambda_i-\lambda_j)}.
> $$
>
> Substitution of $S$ therefore gives $\sum_iP_i=I$ and $(S-\lambda_iI)P_i=0$. Every $v\in E$ is the sum $v=\sum_iP_iv$, with $P_iv\in E_i$.
>
> To prove directness, if $\sum_i v_i=0$ with $v_i\in E_i$, apply $P_j$. Polynomial evaluation on an eigenvector gives $P_jv_i=\ell_j(\lambda_i)v_i=\delta_{ij}v_i$, so $v_j=0$. Thus
>
> $$
> E=\bigoplus_{i=1}^{m}E_i.
> $$
>
> Choosing a basis of each $E_i$ and taking their union gives an eigenbasis of $E$.
>
> **(c) Restriction to an invariant subspace.** The assumption $S(F)\subseteq F$ defines the restriction $S_F=S|_F$. Every polynomial in $S_F$ is the restriction of the same polynomial in $S$, so $q(S_F)=0$. The minimal polynomial $q_F$ of $S_F$ divides $q$: divide $q$ by $q_F$ to write $q=hq_F+r$ with $\deg r<\deg q_F$; evaluation gives $r(S_F)=0$, and minimality forces $r=0$. This also holds when $F=0$ and $q_F=1$.
>
> By (a), $q$ is a product of distinct linear factors over $k$. Its monic divisor $q_F$ has the same property, using a subset of those factors. Applying (b) to $S_F$ proves that $F$ has a basis of eigenvectors of $S$.
>
> **(d) Simultaneous diagonalization.** By (a) and (b), write $E=\bigoplus_\lambda E_\lambda$ for the eigenspaces of $S$. If $v\in E_\lambda$, commutation gives
>
> $$
> S(Tv)=T(Sv)=T(\lambda v)=\lambda Tv.
> $$
>
> Hence $T(E_\lambda)\subseteq E_\lambda$, as in [[04 - Linear Algebra and Modules/Exercises/Exercise LA428 - Commuting Maps Preserve Eigenvectors|Exercise LA428]]. Since $T$ is diagonalizable on $E$, part (c), applied to $T$ and its invariant subspace $E_\lambda$, gives a basis of $E_\lambda$ consisting of $T$-eigenvectors. Every vector of this basis is also an $S$-eigenvector with eigenvalue $\lambda$. The union of these bases over all $\lambda$ is a basis of $E$ of common eigenvectors, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA427 - Eigenspaces Are Linear Subspaces|Exercise LA427]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA428 - Commuting Maps Preserve Eigenvectors|Exercise LA428]]

## Notes

- **Source and proof status:** The introductory definition, parts (a)-(b), and the first printed hint were checked on [S2, Ch. XIV, Ex. 13, printed p. 568, PDF p. 583]; parts (c)-(d) and the second printed hint were checked on [S2, Ch. XIV, Ex. 13, printed p. 569, PDF p. 584]. All four parts remain in one note. The proof independently expands the printed decomposition and invariant-eigenspace hints using explicitly constructed interpolation projectors.
- **Field boundary:** Diagonalizability is over the specified field $k$. The minimal polynomial must split into distinct linear factors in $k[t]$; merely having no repeated roots in an algebraic closure is insufficient. For example, a real rotation through a right angle has minimal polynomial $t^2+1$ and is not diagonalizable over $\mathbb R$.
- **Notation:** The source's inclusions $SF\subset F$ and $TE_\lambda\subset E_\lambda$ express invariance and allow equality. In $S-\lambda_i$, scalar multiplication by $\lambda_i$ means $\lambda_iI$.

---
title: "Exercise LA415: Fischer Pairing and Harmonic Decomposition"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - harmonic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 33, printed pp. 550-551, PDF pp. 565-566"
created: 2026-09-26
---

# Exercise LA415: Fischer Pairing and Harmonic Decomposition

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 33 — Harmonic polynomials
> Let $\operatorname{Pol}(n,d)$ be the space of homogeneous polynomials of degree $d$ in $X_1,\ldots,X_n$ over a field $k$ of characteristic $0$. For $\nu=(\nu_1,\ldots,\nu_n)$ with $\nu_i\ge0$, write $M_\nu(X)=X_1^{\nu_1}\cdots X_n^{\nu_n}$.
>
> (a) Prove that the number of degree-$d$ monomials, hence $\dim\operatorname{Pol}(n,d)$, is $\binom{n-1+d}{n-1}$.
>
> (b) Put $D_i=\partial/\partial X_i$ and define $\langle P,Q\rangle=P(D)Q(0)$ for $P,Q\in\operatorname{Pol}(n,d)$. Prove that this is a symmetric non-degenerate scalar product. Over a real ground field, $\langle P,P\rangle>0$ for $P\ne0$; over a non-real field, nonzero isotropic vectors may occur. Show that the degree-$d$ monomials are orthogonal and compute $\langle M_\nu,M_\nu\rangle$.
>
> (c) Show that $P\mapsto P(D)$ identifies $\operatorname{Pol}(n,d)$ with its dual.
>
> (d) Put $\Delta=D_1^2+\cdots+D_n^2$. Prove that $\Delta:\operatorname{Pol}(n,d)\to\operatorname{Pol}(n,d-2)$ is surjective.
>
> (e) Put $\operatorname{Har}(n,d)=\ker\Delta$. Prove the printed formula
>
> $$
> \dim\operatorname{Har}(n,d)=\frac{(n+d-3)!(n+2d-2)}{(n-2)!d!},
> $$
>
> and, in particular, $\dim\operatorname{Har}(3,d)=2d+1$.
>
> (f) Put $r^2=X_1^2+\cdots+X_n^2$, and let $S$ multiply by $r^2$. Prove $\langle\Delta P,Q\rangle=\langle P,SQ\rangle$ for $P\in\operatorname{Pol}(n,d)$, $Q\in\operatorname{Pol}(n,d-2)$, so ${}^t\Delta=S$. More generally, prove $\langle R(D)P,Q\rangle=\langle P,RQ\rangle$ for $R\in\operatorname{Pol}(n,m)$ and $Q\in\operatorname{Pol}(n,d-m)$.
>
> (g) Prove $[\Delta,S]=4d+2n$ on $\operatorname{Pol}(n,d)$, equivalently $[\Delta,S]=4E+2n$ with $E=\sum_iX_iD_i$.
>
> (h) Prove the orthogonal direct sum $\operatorname{Pol}(n,d)=\operatorname{Har}(n,d)\oplus r^2\operatorname{Pol}(n,d-2)$.
>
> (i) If $c=(c_1,\ldots,c_n)\in k^n$ satisfies $\sum_i c_i^2=0$, put $H_c^d(X)=(c_1X_1+\cdots+c_nX_n)^d$. Show that $H_c^d\in\operatorname{Har}(n,d)$.
>
> (j) For $Q\in\operatorname{Pol}(n,d)$ and a positive integer $m$, prove the printed identity
>
> $$
> Q(D)H_c^m(X)=m(m-1)\cdots(m-d+1)Q(c)H_c^{m-d}(X).
> $$

> [!warning] Source issue: degree and dimension boundaries
> In (d), (f), and (h), the printed spaces of negative degree need the convention $\operatorname{Pol}(n,j)=0$ for $j<0$. The factorial expression in (e) is defined as written for $n\ge3$ and $d\ge0$ (also $n=2,d\ge1$), but not at $n=2,d=0$ or $n=1$. In (j), $H_c^{m-d}$ is undefined when $m<d$. We retain the printed formula and state the meaningful cases below.

## Hints

> [!hint]- Hint 1
> For (b), differentiate one monomial against another. The pairing matrix is diagonal with factorial entries.

> [!hint]- Hint 2
> Differentiation is adjoint to multiplication by the same variable. Hence $\Delta$ is adjoint to multiplication by $r^2$; use finite-dimensional duality for (d) and the commutator for (g).

> [!hint]- Hint 3
> For (h), prove $\Delta S$ is invertible on $\operatorname{Pol}(n,d-2)$. Its matrix has rational entries and is positive definite over $\mathbb R$ for the Fischer pairing, so its determinant remains nonzero over every characteristic-$0$ field.

## Solution

> [!success]- Independently derived solution
> Throughout, take $n\ge1$, $d\ge0$, and set $\operatorname{Pol}(n,j)=0$ for $j<0$. Write $\nu!=\prod_i\nu_i!$ and $|\nu|=\sum_i\nu_i$.
>
> **(a)** A degree-$d$ monomial corresponds to a nonnegative integer solution of $\nu_1+\cdots+\nu_n=d$. Placing $n-1$ separators among $n+d-1$ positions gives $\binom{n+d-1}{n-1}$ solutions. These monomials form the usual coefficient basis, so this is the dimension.
>
> **(b)** Direct differentiation gives
>
> $$
> \langle M_\nu,M_\mu\rangle
> =M_\nu(D)M_\mu(0)
> =\begin{cases}\nu!,&\nu=\mu,\\0,&\nu\ne\mu,\end{cases}
> \qquad |\nu|=|\mu|=d.
> $$
>
> The diagonal entries are nonzero in characteristic $0$, proving symmetry and non-degeneracy. If $k$ is an ordered real field, then for $P=\sum_\nu a_\nu M_\nu$ one has $\langle P,P\rangle=\sum_\nu\nu!a_\nu^2>0$ when $P\ne0$. Positivity does not apply to a non-ordered field; for example, over $\mathbb C$, $X_1+iX_2$ is isotropic when $n\ge2$.
>
> **(c)** The map sends $P$ to the functional $Q\mapsto P(D)Q(0)$. Its matrix in the monomial basis and dual basis is diagonal with nonzero entries $\nu!$, so it is an isomorphism.
>
> **(f), used for (d).** For any homogeneous $P,Q$ of adjacent degrees, checking monomials yields
>
> $$
> \langle D_iP,Q\rangle=\langle P,X_iQ\rangle.
> $$
>
> Repeating this identity and using linearity gives $\langle R(D)P,Q\rangle=\langle P,RQ\rangle$ whenever the degrees match. Taking $R=r^2$ gives $\langle\Delta P,Q\rangle=\langle P,SQ\rangle$; this is the asserted transpose identity.
>
> **(d)** The map $S:Q\mapsto r^2Q$ is injective because $k[X_1,\ldots,X_n]$ is a domain and $r^2\ne0$. By (b) and (f), its transpose is $\Delta$ under non-degenerate pairings. Thus $\operatorname{rank}\Delta=\operatorname{rank}S=\dim\operatorname{Pol}(n,d-2)$, proving surjectivity, including the zero target when $d<2$.
>
> **(e)** Rank-nullity and (a) give, for all $n\ge1,d\ge0$ with the zero-degree convention,
>
> $$
> \dim\operatorname{Har}(n,d)
> =\binom{n+d-1}{n-1}-\binom{n+d-3}{n-1},
> $$
>
> where a binomial coefficient with upper entry smaller than lower entry is $0$. For $n\ge3$, elementary factorial simplification gives the printed fraction $\frac{(n+d-3)!(n+2d-2)}{(n-2)!d!}$, and at $n=3$ this is $2d+1$. For $n=2$, the dimensions are $1$ at $d=0$ and $2$ at $d\ge1$; for $n=1$ they are $1$ at $d=0,1$ and $0$ at $d\ge2$. These also follow directly from $\Delta$.
>
> **(g)** Applying the product rule twice to a polynomial $P$ gives
>
> $$
> \Delta(r^2P)=r^2\Delta P+4\sum_iX_iD_iP+2nP.
> $$
>
> Therefore $[\Delta,S]=4E+2n$. Euler's identity $EP=dP$ for homogeneous degree $d$ gives the printed scalar $4d+2n$.
>
> **(h)** The adjoint identity shows $(\operatorname{im}S)^\perp=\ker\Delta$, so the proposed summands are orthogonal. To prove they intersect trivially over an arbitrary characteristic-$0$ field, work first over $\mathbb Q$ with monomial bases. The endomorphism $\Delta S$ on $\operatorname{Pol}_{\mathbb Q}(n,d-2)$ has a rational matrix. After extension to $\mathbb R$, for nonzero real $Q$ the positivity in (b) gives
>
> $$
> \langle\Delta SQ,Q\rangle=\langle SQ,SQ\rangle>0.
> $$
>
> Thus $\Delta S$ is injective over $\mathbb R$ and its rational determinant is nonzero. The same determinant stays nonzero after embedding $\mathbb Q$ into any characteristic-$0$ field $k$, so $\Delta S$ is invertible over $k$. Given $P\in\operatorname{Pol}(n,d)$, take $Q=(\Delta S)^{-1}\Delta P$ and $H=P-SQ$. Then $\Delta H=0$ and $P=H+SQ$. If $SQ$ is also harmonic, then $\Delta SQ=0$ forces $Q=0$. This proves the direct sum. For $d<2$, it reads $\operatorname{Pol}(n,d)=\operatorname{Har}(n,d)$.
>
> **(i)** Put $L_c(X)=\sum_i c_iX_i$. For $d\ge2$, $D_i^2L_c^d=d(d-1)c_i^2L_c^{d-2}$. Summing gives $\Delta H_c^d=d(d-1)(\sum_i c_i^2)L_c^{d-2}=0$. At $d=0,1$ all second derivatives vanish directly.
>
> **(j)** For $m\ge d$, repeated differentiation of $L_c^m$ gives $D^\nu L_c^m=(m)_d c^\nu L_c^{m-d}$ for $|\nu|=d$, where $(m)_d=m(m-1)\cdots(m-d+1)$. Multiplying by the coefficients of $Q=\sum_{|\nu|=d}q_\nu X^\nu$ and summing yields $(m)_dQ(c)L_c^{m-d}$, the printed expression. If $m<d$, every derivative of total order $d$ is zero. The printed right side is then undefined because of its negative exponent; under the extra convention that the whole product is $0$ in this case, the identity extends to all positive $m$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA281 - Fischer Inner Product and Harmonic Polynomials|Exercise LA281]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]

## Notes

- **Source and proof status:** All ten subparts were checked directly against [S2, Ch. XIII, Ex. 33, printed pp. 550-551, PDF pp. 565-566]. The arguments here are independent. The page's Whittaker and Whittaker–Watson references are background attribution, not proof inputs used here.
- **Source boundaries:** The printed low-degree and low-$n$ expressions are retained in the question callout and interpreted explicitly in (d), (e), and (j). The complex-field direct sum in (h) is proved by rational base change; positivity alone over $k$ would be invalid.

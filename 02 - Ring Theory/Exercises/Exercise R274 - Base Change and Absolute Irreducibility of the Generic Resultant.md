---
title: "Exercise R274: Base Change and Absolute Irreducibility of the Generic Resultant"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - elimination-theory
  - generic-resultant
  - absolute-irreducibility
  - base-change
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 13, printed p. 411, PDF p. 426"
created: 2026-09-15
---

# Exercise R274: Base Change and Absolute Irreducibility of the Generic Resultant

## Problem Statement

> [!question]
> Let $k$ be a field and let $\mathbf{Z} \to k$ be the canonical homomorphism. If $F \in \mathbf{Z}[W, X]$, we denote by $\bar{F}$ the image of $F$ in $k[W, X]$ under this homomorphism. Thus we get $\bar{R}$, the image of the resultant $R$.
> 
> **(a)** Show that $\bar{R}$ is a generator of the prime ideal $\mathfrak{p}_{k, 1}$ of Theorem 3.5 over the field $k$. Thus we may denote $\bar{R}$ by $R_k$.
> 
> **(b)** Show that $R$ is absolutely irreducible, and so is $R_k$. In other words, $R_k$ is irreducible over the algebraic closure of $k$.

## Hints

> [!hint]- Hint 1
> Let $P$ generate $\mathfrak p_{k,1}$. Use the saturation identity from Theorem 3.4 to show $P\mid\bar R$, and use $R(X_1^{d_1},\ldots,X_n^{d_n})=1$ to show $\bar R\ne0$.

> [!hint]- Hint 2
> Fix $i$ and specialize each $F_j$, $j\ne i$, to a product $\prod_{\ell=1}^{d_j}(X_j-t_{j\ell}X_i)$ with distinct $t_{j\ell}$ in an algebraic closure. Count their common projective zeros. Each gives a distinct linear condition on the coefficients of $F_i$; use these conditions to bound $\deg_{W_i}P$ from below. After (a), apply it again over the algebraic closure to prove (b).

## Solution

> [!success]- Solution
> Let $d_1,\ldots,d_n\ge1$ be the prescribed degrees and let
> $$
> F_i(W,X)=\sum_{|\alpha|=d_i}W_{i,\alpha}X^\alpha,
> \qquad D_i=\prod_{j\ne i}d_j.
> $$
> For $n=1$, the generic form is $WX_1^{d_1}$ and the normalized resultant and prime elimination generator are both $W$ over every field; all assertions follow immediately. Assume henceforth $n\ge2$.
>
> **Source inputs.** Theorem 3.4, including its field version, identifies the prime incidence ideal as the saturation of the generic-form ideal by any one variable. Theorem 3.5 makes its coefficient-ring intersection principal; write
> $$
> \mathfrak p_{k,1}=(P)\subset k[W].
> $$
> The projective projection theorem says that, for coefficients in an algebraically closed extension of $k$, $P$ vanishes exactly when the forms have a nontrivial common zero. Finally Theorem 3.8 and its normalization give, over $\mathbf Z$,
> $$
> \deg_{W_i}R=D_i,
> \qquad R(X_1^{d_1},\ldots,X_n^{d_n})=1.
> $$
> [S2, Ch. IX, Theorems 3.1 and 3.4–3.5, printed pp. 389–392, PDF pp. 404–407; Theorem 3.8 and normalization, printed pp. 396–397, PDF pp. 411–412]
>
> **(a), Step 1: Divisibility and an upper bound.** Since $R$ belongs to the saturated incidence ideal over $\mathbf Z$, for some $s$ we have
> $$
> X_n^s R\in(F_1,\ldots,F_n)\mathbf Z[W,X].
> $$
> Reducing the coefficients to $k$ gives the same membership for $\bar R$. The field version of Theorem 3.4 therefore gives $\bar R\in\mathfrak p_{k,1}=(P)$, so
> $$
> \bar R=PH,\qquad H\in k[W].
> $$
> Its value at $(X_1^{d_1},\ldots,X_n^{d_n})$ is $1_k$, so $\bar R\ne0$. Reduction cannot increase block degrees, hence
> $$
> \deg_{W_i}\bar R\le D_i.
> $$
>
> **Step 2: A lower bound for $P$ in every characteristic.** Fix $i$ and put $K=\bar k$. For each $j\ne i$ choose $d_j$ distinct elements $t_{j1},\ldots,t_{jd_j}\in K$, and specialize
> $$
> F_j\longmapsto G_j=\prod_{\ell=1}^{d_j}(X_j-t_{j\ell}X_i)
> \qquad(j\ne i).
> $$
> These $n-1$ forms have exactly $D_i$ distinct common projective zeros. Indeed, $X_i=0$ would force every $X_j=0$, so each zero has the unique representative $x_i=1$; for each $j\ne i$, its coordinate $x_j$ is independently one of the $t_{j\ell}$.
>
> Leave $F_i$ generic and denote the specialization of $P$ by $P_i(W_i)\in K[W_i]$. This polynomial is nonzero: if we further take $F_i=X_i^{d_i}$, the full system has no common projective zero, so the projection criterion gives a nonzero value of $P_i$.
>
> For each grid point $x$ define the nonzero linear polynomial in the coefficients of $F_i$ by
> $$
> \ell_x(W_i)=F_i(W_i,x).
> $$
> On the hyperplane $\ell_x=0$, the full system has the common zero $[x]$, so $P_i$ vanishes there. Since $K$ is infinite, a linear change of coefficient coordinates sending $\ell_x$ to one coordinate shows $\ell_x\mid P_i$: the constant term in that coordinate is a polynomial vanishing at every point of an affine space, hence is zero.
>
> The $D_i$ forms $\ell_x$ are pairwise nonassociate. Their coefficient at the variable corresponding to $X_i^{d_i}$ is always $1$, so proportionality would mean equality. If $x\ne y$, some $x_j\ne y_j$; the coefficient corresponding to $X_jX_i^{d_i-1}$ then distinguishes $\ell_x$ from $\ell_y$.
>
> Unique factorization in $K[W_i]$ now yields
> $$
> \prod_x\ell_x\mid P_i,
> \qquad D_i\le\deg P_i\le\deg_{W_i}P.
> $$
> This proves the required lower bound without assuming any base-change property of $R$.
>
> **Step 3: The quotient is a unit.** Block degrees add for nonzero polynomials over the field $k$. For every $i$,
> $$
> D_i\le\deg_{W_i}P
> \le\deg_{W_i}\bar R
> =\deg_{W_i}P+\deg_{W_i}H
> \le D_i.
> $$
> Thus $\deg_{W_i}H=0$ for every coefficient block. Since all variables belong to these blocks, $H\in k^\times$. Therefore $\bar R$ generates $\mathfrak p_{k,1}$, as required, and we may write $R_k=\bar R$.
>
> **(b) Absolute irreducibility.** Part (a) applies to every field, so apply it to $K=\bar k$. The image of $R$ in $K[W]$ generates the proper nonzero prime ideal $\mathfrak p_{K,1}$, and therefore is irreducible in $K[W]$. This image is also the scalar extension of $R_k$, because both arise from the canonical map $\mathbf Z\to k\to K$. Thus $R_k$ is absolutely irreducible. Taking $k=\mathbf Q$ shows that $R$ is irreducible over $\overline{\mathbf Q}$ as well.

## Related Concepts

- [[02 - Ring Theory/Concepts/Multivariate Resultants and Resultant Systems|Multivariate Resultants and Resultant Systems]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[02 - Ring Theory/Exercises/Exercise R271 - Consistency of Multivariable and Sylvester Resultants|Exercise R271 (Consistency of Resultants)]]

## Notes

- **Independent derivation:** The grid specialization supplies the characteristic-independent degree lower bound needed in (a). Theorem 3.5 alone gives principality and codimension, not that bound.
- **Proof inputs:** The source supplies projective elimination, the saturated prime ideal, principality, and the integer resultant's degree and normalization. The remaining inputs are unique factorization in polynomial rings over fields and the fact that a polynomial vanishing everywhere over an infinite field is zero. No Bezout theorem, intersection theory, or unproved inference from fiber shapes is used.
- **Scope of base change:** This exercise proves that the image of the normalized integer resultant generates the prime elimination ideal over every field. Evaluation of the integer polynomial over an arbitrary commutative ring is also defined, but no assertion here identifies all saturated elimination ideals over arbitrary rings with its principal ideal.

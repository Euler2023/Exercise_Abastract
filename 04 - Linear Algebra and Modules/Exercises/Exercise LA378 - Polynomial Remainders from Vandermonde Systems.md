---
title: "Exercise LA378: Polynomial Remainders from Vandermonde Systems"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 33, printed pp. 257-258, PDF pp. 272-273"
created: 2026-09-06
---

# Exercise LA378: Polynomial Remainders from Vandermonde Systems

## Problem Statement

> [!question] Lang, Chapter V, Exercise 33
> Let $R$ be a ring which we assume entire for simplicity. Let
> $$
> g(T)=T^d-a_{d-1}T^{d-1}-\cdots-a_0
> $$
> be a polynomial in $R[T]$, and consider the equation
> $$
> T^d=a_0+a_1T+\cdots+a_{d-1}T^{d-1}.
> $$
> Let $x$ be a root of $g(T)$.
>
> (a) For any integer $n\ge d$ there is a relation
> $$
> x^n=a_{0,n}+a_{1,n}x+\cdots+a_{d-1,n}x^{d-1}
> $$
> with coefficients $a_{i,j}\in\mathbb Z[a_0,\ldots,a_{d-1}]\subseteq R$.
>
> (b) Let $F(T)\in R[T]$ be a polynomial. Then
> $$
> F(x)=a_0(F)+a_1(F)x+\cdots+a_{d-1}(F)x^{d-1}
> $$
> where the coefficients $a_i(F)$ lie in $R$ and depend linearly on $F$.
>
> (c) Let the Vandermonde determinant be
> $$
> V(x_1,\ldots,x_d)=
> \det\begin{pmatrix}
> 1&x_1&\cdots&x_1^{d-1}\\
> 1&x_2&\cdots&x_2^{d-1}\\
> \vdots&\vdots&&\vdots\\
> 1&x_d&\cdots&x_d^{d-1}
> \end{pmatrix}
> =\prod_{i<j}(x_j-x_i).
> $$
> Suppose that $g(T)=\prod_{i=1}^d(T-x_i)$. Substituting $x_i$ for $x$ and using Cramer's rule yields
> $$
> \Delta a_j(F)=\Delta_j(F),
> $$
> where $\Delta$ is the Vandermonde determinant, and $\Delta_j(F)$ is obtained by replacing the $j$-th column by $(F(x_1),\ldots,F(x_d))^{\mathsf T}$. If $\Delta\ne0$ then
> $$
> a_j(F)=\Delta_j(F)/\Delta.
> $$

> [!warning] Source issue
> The coefficients are indexed $j=0,\ldots,d-1$, so the column for $a_j(F)$ is column $j+1$ when columns are counted from one. The source says “$j$-th column”; throughout the solution the column is specified by its power $T^j$.

## Hints

> [!hint]- Hint 1
> Take the canonical remainder under division by the monic polynomial $g$.

> [!hint]- Hint 2
> Evaluate that single remainder at all the roots to obtain a linear system.

## Solution

> [!success]- Solution and proof status
> Here “entire” means an integral domain, and $d\ge1$.
>
> **(a)** Begin with $x^d=\sum_{i=0}^{d-1}a_ix^i$. If $x^n=\sum_{i=0}^{d-1}b_ix^i$ with $b_i\in\mathbb Z[a_0,\ldots,a_{d-1}]$, multiplication by $x$ and substitution for $x^d$ give coefficients
> $$
> b'_0=b_{d-1}a_0,\qquad
> b'_i=b_{i-1}+b_{d-1}a_i\quad(1\le i<d).
> $$
> They belong to the same subring. Induction proves the assertion.
>
> **(b)** Division by the monic $g$ gives a unique remainder
> $$
> r_F(T)=\sum_{j=0}^{d-1}a_j(F)T^j,\qquad F-r_F\in(g).
> $$
> Uniqueness implies $r_{F+H}=r_F+r_H$ and $r_{cF}=cr_F$ for $c\in R$, so the coefficients depend $R$-linearly on $F$. Evaluating at any root $x$ gives the required identity. These are canonical remainder coefficients; they need not be the only coefficients expressing one particular value $F(x)$.
>
> **(c)** Work in an integral domain containing $R$ and all the roots, for example in a splitting field over $\operatorname{Frac}(R)$. Since every $x_i$ is a root of $g$,
> $$
> \begin{pmatrix}
> 1&x_1&\cdots&x_1^{d-1}\\
> \vdots&\vdots&&\vdots\\
> 1&x_d&\cdots&x_d^{d-1}
> \end{pmatrix}
> \begin{pmatrix}a_0(F)\\ \vdots\\ a_{d-1}(F)\end{pmatrix}
> =
> \begin{pmatrix}F(x_1)\\ \vdots\\ F(x_d)\end{pmatrix}.
> $$
> Multiplication by the adjugate yields $\Delta a_j(F)=\Delta_j(F)$, where the replaced column is the one corresponding to $T^j$. This identity is valid even if $\Delta=0$. If $\Delta\ne0$, division in the fraction field gives the displayed quotient, and it equals the remainder coefficient already known to lie in $R$.
>
> **Source remark: extension to power series.** Suppose additionally that $R$ is a complete local domain with maximal ideal $\mathfrak m$, and all $x_i\in\mathfrak m$. Then the nonleading coefficients of $g$ lie in $\mathfrak m$. In the finite free algebra $B=R[T]/(g)$ we have $T^d\in\mathfrak m B$, hence
> $$
> T^n\in\mathfrak m^{\lfloor n/d\rfloor}B.
> $$
> As a finite free module over the complete ring $R$, $B$ is complete. For $F(T)=\sum_{n\ge0}c_nT^n$, the sum therefore converges in $B$ and defines a unique degree-less-than-$d$ representative with coefficients in $R$. Evaluation at each $x_i$ is continuous, so the same linear system and determinant identities hold by taking limits. The quotient formula still requires $\Delta\ne0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source status of the remark:** The complete-local-ring extension is stated in the source on printed p. 258 / PDF p. 273. The convergence argument above supplies its details.
- **Denominators:** A nonzero Vandermonde determinant need not be a unit of $R$. Fractions are computed in a fraction field; their membership in $R$ follows from monic division.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 33, printed pp. 257-258, PDF pp. 272-273]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.

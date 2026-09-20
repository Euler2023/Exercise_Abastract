---
title: "Exercise R271: Consistency of Multivariable and Sylvester Resultants"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - elimination-theory
  - multivariable-resultant
  - sylvester-matrix
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 10, printed p. 411, PDF p. 426"
created: 2026-09-15
---

# Exercise R271: Consistency of Multivariable and Sylvester Resultants

## Problem Statement

> [!question]
> Prove that the resultant defined for $n$ forms in $n$ variables in §3 actually coincides with the resultant of Chapter IV, or §4 when $n = 2$.

## Hints

> [!hint]- Hint 1
> Regard the Sylvester matrix as the matrix of the map $(A,B)\mapsto Af+Bg$ between spaces of homogeneous polynomials. What does the adjugate identity say about its determinant times $Y^{d+e-1}$?

> [!hint]- Hint 2
> The multivariable resultant generates the **saturated prime elimination ideal**, and its degrees in the two coefficient blocks are $e$ and $d$. First prove that it divides the Sylvester determinant, then compare these degrees and evaluate at $(X^d,Y^e)$.

## Solution

> [!success]- Solution
> Fix positive degrees $d,e$ and work over the universal coefficient ring
> $$
> A=\mathbf Z[a_0,\ldots,a_d,b_0,\ldots,b_e].
> $$
> Let
> $$
> f=\sum_{i=0}^d a_iX^{d-i}Y^i,
> \qquad g=\sum_{j=0}^e b_jX^{e-j}Y^j.
> $$
> Write $I=(f,g)\subset A[X,Y]$. By Lang's Theorems 3.4–3.5, the ideal
> $$
> \mathfrak p=I:Y^\infty
> =\{H:\text{some }Y^sH\in I\}
> $$
> is the prime ideal of the universal projective incidence variety, and
> $$
> \mathfrak p\cap A=(R),
> $$
> where $R$ is the multivariable resultant. Theorem 3.8 and the normalization following its proof give
> $$
> \deg_a R=e,\qquad \deg_b R=d,
> \qquad R(X^d,Y^e)=1.
> $$
> These are source inputs, not consequences of the desired comparison. [S2, Ch. IX, Theorems 3.4–3.5, printed pp. 390–392, PDF pp. 405–407; Theorem 3.8 and normalization, printed pp. 396–397, PDF pp. 411–412]
>
> **1. The Sylvester determinant belongs to $(R)$.** Put $N=d+e-1$, and let $A[X,Y]_m$ denote the free $A$-module of homogeneous polynomials of degree $m$. Consider
> $$
> \Phi:A[X,Y]_{e-1}\oplus A[X,Y]_{d-1}
> \longrightarrow A[X,Y]_N,
> \qquad (U,V)\longmapsto Uf+Vg.
> $$
> In each module use monomials in descending powers of $X$, with the $f$ summand before the $g$ summand. The matrix $M$ of $\Phi$ is the transpose of Lang's Sylvester matrix: its columns are the coefficients of
> $$
> X^{e-1}f,\ldots,Y^{e-1}f,
> X^{d-1}g,\ldots,Y^{d-1}g.
> $$
> Thus $S=\det M$ is the classical resultant of Chapter IV, §8. The identity $M\operatorname{adj}(M)=S\operatorname{id}$ shows that $S$ times each target basis vector lies in the image of $\Phi$. In particular,
> $$
> Y^N S\in(f,g).
> $$
> Consequently $S\in\mathfrak p\cap A=(R)$, so $S=HR$ for some $H\in A$.
>
> **2. The quotient is an integer.** Each determinant term uses $e$ coefficients of $f$ and $d$ coefficients of $g$. Hence the nonzero polynomial $S$ has block degrees $(e,d)$, the same as $R$. Degrees in each coefficient block add under multiplication in the domain $A$, so $\deg_a H=\deg_b H=0$. Therefore $H=c\in\mathbf Z$.
>
> **3. Normalization determines the integer.** For $f=X^d$ and $g=Y^e$, the displayed columns of $M$ are precisely the ordered basis of $A[X,Y]_N$, so $M$ specializes to the identity. Therefore
> $$
> 1=S(X^d,Y^e)=cR(X^d,Y^e)=c,
> $$
> and $S=R$ as polynomials over $\mathbf Z$. Specialization proves equality for binary forms over every commutative coefficient ring, using their prescribed degrees.
>
> Finally, Chapter IX, §4 uses the root product
> $$
> \operatorname{Res}(f,g)=a_0^e b_0^d
> \prod_{i=1}^d\prod_{j=1}^e(\alpha_i-\beta_j)
> $$
> when $f=a_0\prod_i(X-\alpha_iY)$ and $g=b_0\prod_j(X-\beta_jY)$. This is exactly the formula proved for the Sylvester determinant in Chapter IV, Proposition 8.3; hence the §4 convention also agrees. [S2, Ch. IV, §8, printed pp. 200–203, PDF pp. 215–218; Ch. IX, §4, printed p. 403, PDF p. 418]

## Related Concepts

- [[02 - Ring Theory/Concepts/Multivariate Resultants and Resultant Systems|Multivariate Resultants and Resultant Systems]]
- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Independent derivation:** The adjugate identity gives divisibility by the multivariable resultant; the source's block-degree theorem and normalization then give equality. No irreducibility theorem for the Sylvester determinant is assumed.
- **Elimination ideal:** Saturation is essential. The ordinary ideal $(f,g)\cap A$ is zero because $f,g$ have positive $X,Y$-degree; the relevant ideal is $((f,g):Y^\infty)\cap A$.
- **Source cross-reference:** This edition defines the Sylvester determinant in Chapter IV, §8, printed p. 200 / PDF p. 215. The references to “Chapter IV, §10” on IX §4, printed pp. 402–403 / PDF pp. 417–418, are outdated internal cross-references.

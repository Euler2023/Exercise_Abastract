---
title: Polynomial Resultants
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, \u00a78, printed pp. 200-204, PDF pp. 215-219; Exercise 16, printed p. 215, PDF p. 230"
source_status: partially-verified
status: not-started
---

# Polynomial Resultants

## Definition

> [!info] Definition
> For nonzero polynomials $F=a_0X^d+\cdots+a_d$ and $G=b_0X^e+\cdots+b_e$ over a commutative ring, their resultant $\operatorname{Res}(F,G)$ is the determinant of the Sylvester matrix: its first $e$ rows are the shifted descending coefficient vectors of $F$, and its last $d$ rows are the shifted vectors of $G$. It has size $d+e$.

## Intuition

The Sylvester matrix records the coefficients of combinations of polynomial multiples. Its determinant detects whether those combinations have a nontrivial linear dependence. Over a field, this is equivalent to the two polynomials sharing a factor.

## Key Properties

- Over a splitting field, if $F=a_0\prod_{i=1}^d(X-\alpha_i)$ and $G=b_0\prod_{j=1}^e(X-\beta_j)$, then
  $$
  \operatorname{Res}(F,G)=a_0^e b_0^d\prod_{i,j}(\alpha_i-\beta_j)=a_0^e\prod_iG(\alpha_i).
  $$
- Hence over a field the resultant is zero exactly when the polynomials have a common root in an algebraic closure, equivalently a common nonconstant factor.
- Interchanging the polynomials gives $\operatorname{Res}(G,F)=(-1)^{de}\operatorname{Res}(F,G)$.
- When $F$ is monic of positive degree $d$, $\operatorname{disc}(F)=(-1)^{d(d-1)/2}\operatorname{Res}(F,F')$. If $F'=0$, use $\operatorname{Res}(F,0)=0$; over a field this case has repeated roots and zero discriminant. The identity follows by multiplying the derivatives at all roots; the discriminant exercise proves the product identity directly.
- For complex coefficients, determinant expansion gives explicit bounds in terms of the coefficient maxima. The linked resultant-estimate exercise proves Lang's particular bound using one column replacement and cofactors.

## Examples

> [!example] Examples
> For linear factors, $\operatorname{Res}(X-a,X-b)=a-b$.
>
> If $F$ is the nonzero constant $c$ and $G$ has degree $e$, then $\operatorname{Res}(c,G)=c^e$. If both are nonzero constants, the empty determinant convention gives $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The Sylvester definition and root-product identity are source-contained [S2, Ch. IV, §8, definition and Proposition 8.3, printed pp. 200-203, PDF pp. 215-218]. The common-root criterion is Corollary 8.4, printed pp. 203-204 / PDF pp. 218-219. The estimate in Ex. 16 is only posed in the source; its cofactor proof is independent. This note belongs to Linear Algebra and Modules because its defining and computational tool is a determinant.

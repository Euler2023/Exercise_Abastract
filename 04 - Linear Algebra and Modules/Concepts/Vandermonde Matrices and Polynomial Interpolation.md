---
title: Vandermonde Matrices and Polynomial Interpolation
aliases:
  - Vandermonde Determinant
  - Lagrange Interpolation
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Exercises 31 and 33-34, printed pp. 256-259, PDF pp. 271-274"
source_status: verified
status: not-started
created: 2026-09-06
---

# Vandermonde Matrices and Polynomial Interpolation

## Definition

> [!info] Evaluation matrix
> For $d\ge1$ elements $x_1,\ldots,x_d$ of a commutative ring, the Vandermonde matrix has entries
> $$
> V_{ij}=x_i^{j-1}\quad(1\le i,j\le d),\qquad
> \det V=\prod_{i<j}(x_j-x_i).
> $$
> It sends the coefficient vector of a polynomial of degree less than $d$ to its values at the $d$ nodes.

## Intuition

A polynomial of degree less than $d$ has $d$ coefficients. Evaluation at $d$ distinct field elements determines those coefficients through an invertible linear system. Over a general ring, differences between nodes must be units for the same unrestricted interpolation conclusion.

## Key Properties and Proofs

**Vandermonde determinant.** Work first over $\mathbb Z[X_1,\ldots,X_d]$. The determinant vanishes when $X_i=X_j$, so each $X_j-X_i$ divides it. These nonassociate irreducibles are prime in this UFD, hence their product divides the determinant. Both have total degree $d(d-1)/2$. The coefficient of $X_1^0X_2^1\cdots X_d^{d-1}$ is one in both (successively the factors involving $X_1$, then $X_2$, force the relevant choices), so the quotient is one. Specialization proves the identity in every commutative ring.

**Lagrange interpolation over a field.** For distinct nodes, put
$$
\ell_i(T)=\prod_{j\ne i}\frac{T-x_j}{x_i-x_j}.
$$
Then $\ell_i(x_j)=\delta_{ij}$. For a polynomial $r$ of degree less than $d$,
$$
r(T)=\sum_{i=1}^dr(x_i)\ell_i(T),
$$
because the difference has degree less than $d$ and vanishes at $d$ distinct points. Comparing the coefficient of $T^{d-1}$ gives
$$
[T^{d-1}]r(T)=
\sum_{i=1}^d\frac{r(x_i)}{\prod_{j\ne i}(x_i-x_j)}.
$$
In particular, for $0\le m\le d-1$, the sum with numerator $x_i^m$ is zero when $m<d-1$ and one when $m=d-1$.

**Monic remainders over a domain.** Let $g(T)=\prod_i(T-x_i)$ with nodes in a domain $R$. For $F\in R[T]$, monic division supplies a unique remainder $r_F\in R[T]$ of degree less than $d$. If the nodes are distinct, interpolation in $\operatorname{Frac}(R)$ computes its coefficients. Those fractions belong to $R$ because the remainder already exists there. Distinctness alone does not make interpolation of arbitrary values possible over $R$.

## Examples

> [!example] Two nodes
> For $x_1\ne x_2$ in a field, the polynomial with values $u_1,u_2$ is
> $$
> r(T)=u_1\frac{T-x_2}{x_1-x_2}
> +u_2\frac{T-x_1}{x_2-x_1}.
> $$
> Its leading coefficient is $(u_2-u_1)/(x_2-x_1)$.

> [!example] Ring boundary
> Over $\mathbb Z$, the distinct nodes $0,2$ have nonzero determinant $2$, but no polynomial with integer coefficients has values $0,1$ at these two nodes: their values must agree modulo $2$. Thus nonzero determinant differs from invertibility over a ring.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The recurrence application is [S2, Ch. V, Ex. 31, printed pp. 256–257, PDF pp. 271–272].
- The determinant and remainder system are printed in [S2, Ch. V, Ex. 33(c), printed p. 258, PDF p. 273]. The source's off-by-one column convention is clarified in that exercise note.
- The top-coefficient identity underlies the source-contained proof of Ex. 34(b) [S2, printed p. 259, PDF p. 274]. The elementary determinant and interpolation proofs above are independently supplied.

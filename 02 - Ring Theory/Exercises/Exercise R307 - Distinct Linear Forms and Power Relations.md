---
title: "Exercise R307: Distinct Linear Forms and Power Relations"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - tensor-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 18, printed pp. 725-726, PDF pp. 740-741"
created: 2026-09-29
---

# Exercise R307: Distinct Linear Forms and Power Relations

## Problem Statement

> [!question] Lang XVIII.18
> Let $P$ be the non-commutative polynomial algebra over a field $k$, in $n$ variables. Let $x_1,\ldots,x_r$ be distinct elements of $P_1$ (i.e. linear expressions in the variables $t_1,\ldots,t_n$), and let $a_1,\ldots,a_r\in k$. If
>
> $$
> a_1x_1^\nu+\cdots+a_rx_r^\nu=0
> $$
>
> for all integers $\nu=1,\ldots,r$ show that $a_i=0$ for $i=1,\ldots,r$. [Hint: Take the homomorphism on the commutative polynomial algebra and argue there.]

> [!warning] Source issue: the zero linear form
> Distinctness alone permits $x_i=0$. For $r=1$, $x_1=0$ and $a_1=1$, every printed equation holds and the conclusion fails. The assertion is valid if all $x_i$ are nonzero. Alternatively, allow zero and use the equations for $\nu=0,\ldots,r-1$, where $x^0=1$ even for the zero linear form. Both corrected versions are proved below.

## Hints

> [!hint]- Hint 1: Preserve degree one when commuting variables
> The abelianization map $k\langle t_1,\ldots,t_n\rangle\to k[t_1,\ldots,t_n]$ is injective on the space of degree-one forms.

> [!hint]- Hint 2: Work over the fraction field
> The matrix with entries $y_i^\nu$ for $\nu=1,\ldots,r$ is a Vandermonde matrix with its $i$th column multiplied by $y_i$. Its determinant is a product of the $y_i$ and their pairwise differences.

## Solution

> [!success]- Independent derivation of the corrected assertions
> Let $A=k[t_1,\ldots,t_n]$ and let $\pi:P\to A$ be the homomorphism sending each free variable to its commuting counterpart. In degree one the variables form a basis on both sides, so $\pi|_{P_1}$ is an isomorphism of vector spaces. Put $y_i=\pi(x_i)$. Distinct $x_i$ give distinct $y_i$, and nonzero $x_i$ give nonzero $y_i$.
>
> Applying $\pi$ to the relations gives
>
> $$
> \sum_{i=1}^r a_i y_i^\nu=0,\qquad 1\le\nu\le r.
> $$
>
> Over the fraction field $K=\operatorname{Frac}(A)$, the coefficient matrix has determinant
>
> $$
> \det(y_i^\nu)_{\substack{1\le\nu\le r\\1\le i\le r}}
> =\left(\prod_{i=1}^r y_i\right)
> \prod_{1\le i<j\le r}(y_j-y_i).
> $$
>
> For completeness, the ordinary Vandermonde determinant $\det(y_i^{\nu-1})$ is alternating in its columns and vanishes when two $y_i$ coincide. It is therefore divisible in the universal integral polynomial ring by every $y_j-y_i$. The product of these differences has the same total degree as the determinant, and comparison of the coefficient of $y_2y_3^2\cdots y_r^{r-1}$ gives coefficient $1$. This proves the formula over every field by specialization. Factoring $y_i$ out of column $i$ gives the displayed shifted formula.
>
> If the $x_i$ are nonzero, all factors on its right are nonzero in the integral domain $A$. Thus the matrix is invertible over $K$, and the only solution is $a_1=\cdots=a_r=0$.
>
> If zero is permitted, use instead the relations for $\nu=0,\ldots,r-1$. Their determinant is the unshifted product $\prod_{i<j}(y_j-y_i)$, still nonzero. The same conclusion follows with no nonzero-form hypothesis.
>
> Finally, under the original positive-degree equations alone, the coefficients at every nonzero $x_i$ still vanish: apply the first argument to the $s\le r$ nonzero forms using $\nu=1,\ldots,s$. The coefficient of the zero form remains arbitrary. This describes the exact defect of the printed statement.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]

## Notes

- **Source:** The complete problem and hint were checked on [S2, Ch. XVIII, Exercise 18, printed pp. 725-726, PDF pp. 740-741]. Its missing nonzero condition is retained and corrected visibly.
- **Proof status:** The abelianization and determinant argument are independent. No evaluation at elements of $k$ is used, so the argument works over finite fields too. Distinct formal linear forms need not be separated by a single scalar evaluation.
- **Routing:** The proof passes from the free associative algebra to the commutative polynomial domain and its fraction field; the matrix determinant is a cross-linked tool.

---
title: "Exercise Rep172: The Cross Product Model of su2"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-algebras
  - cross-product
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 10, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-10"
created: 2026-11-25
---

# Exercise Rep172: The Cross Product Model of su2

## Problem Statement

> [!question] Original Chapter 3, Exercise 10
> Show that there is an invertible linear map $\phi:\operatorname{su}(2)\to\mathbb R^3$ such that $\phi([X,Y])=\phi(X)\times\phi(Y)$ for all $X,Y\in\operatorname{su}(2)$, where $\times$ denotes the cross product (vector product) on $\mathbb R^3$.

## Hints

> [!hint]- Hint 1
> Choose a real basis of trace-zero skew-Hermitian $2\times2$ matrices. Compare its three cyclic brackets with $e_1\times e_2=e_3$ and the two cyclic permutations.

> [!hint]- Hint 2
> Start from $\begin{pmatrix}i&0\\0&-i\end{pmatrix}$, $\begin{pmatrix}0&i\\i&0\end{pmatrix}$, $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Scaling each basis vector by $1/2$ gives the desired bracket constants.

## Solution

> [!success]- Solution
> By Proposition 3.24 [S10, printed p. 58, PDF p. 70], $\operatorname{su}(2)$ consists of the trace-zero skew-Hermitian matrices. Thus its general element has the form
> $$
> X=\begin{pmatrix}ia&-c+ib\\c+ib&-ia\end{pmatrix},\qquad a,b,c\in\mathbb R.
> $$
> Denote the three matrices obtained by setting one of $a,b,c$ equal to $1$ and the others equal to $0$ by $P_1,P_2,P_3$, respectively. Their diagonal and off-diagonal entries show that they are linearly independent over $\mathbb R$, and the displayed form shows they span.
>
> Multiplying them gives
> $$
> \begin{aligned}
> P_1P_2&=P_3,&P_2P_1&=-P_3,\\
> P_2P_3&=P_1,&P_3P_2&=-P_1,\\
> P_3P_1&=P_2,&P_1P_3&=-P_2.
> \end{aligned}
> $$
> For example, $(P_1P_2)_{12}=i^2=-1$ and $(P_1P_2)_{21}=(-i)i=1$. Put $E_j=P_j/2$. Then $[E_1,E_2]=E_3$, $[E_2,E_3]=E_1$, and $[E_3,E_1]=E_2$. These equalities have the same orientation as the standard real cross product.
>
> Define $\phi(\sum_j x_jE_j)=\sum_j x_je_j$, where $e_j$ are the standard coordinate vectors. The map is invertible because it takes one real basis to another. Both operations are bilinear and alternating. They agree on the cyclic basis pairs under $\phi$, and consequently also on reversed pairs and repeated pairs. Therefore $\phi([X,Y])=\phi(X)\times\phi(Y)$ for all $X,Y$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU(2), Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status.** The original exercise was checked at 200 dpi on printed p. 74 / PDF p. 86. The basis $E_j$ and its cyclic bracket table appear in Example 3.27 [S10, printed pp. 59–60, PDF pp. 71–72]. The calculation and the passage to the cross product are exhibited in the solution.
- **Normalization.** In the unscaled basis $P_j$ the cyclic coefficients are $2$. The factors $1/2$ give exactly the cross product on the standard coordinate basis.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].


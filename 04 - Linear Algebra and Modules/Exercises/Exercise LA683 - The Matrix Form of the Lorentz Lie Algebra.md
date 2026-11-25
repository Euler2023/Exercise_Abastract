---
title: "Exercise LA683: The Matrix Form of the Lorentz Lie Algebra"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-lie-groups
  - bilinear-forms
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 9, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-9"
created: 2026-11-25
---

# Exercise LA683: The Matrix Form of the Lorentz Lie Algebra

## Problem Statement

> [!question] Original Chapter 3, Exercise 9
> Write out explicitly the general form of a $4\times4$ real matrix in $\operatorname{so}(3;1)$ (see Proposition 3.25).

## Hints

> [!hint]- Hint 1
> The matrix of Hall's form is $J=\operatorname{diag}(1,1,1,-1)$. Rewrite $JX^{\mathsf T}J=-X$ as $X^{\mathsf T}J+JX=0$.

> [!hint]- Hint 2
> Compare the $3\times3$ block, the two off-diagonal blocks, and the bottom-right entry separately.

## Solution

> [!success]- Solution
> Hall uses the real form with matrix $J=\operatorname{diag}(1,1,1,-1)$ [S10, Ch. 1, §1.6, Ex. 1, printed p. 26, PDF p. 38]. Since $J^2=I$, the criterion in Proposition 3.25 is equivalent to $X^{\mathsf T}J+JX=0$ [S10, printed p. 59, PDF p. 71]. This criterion follows by differentiating $(e^{tX})^{\mathsf T}Je^{tX}=J$ at $t=0$. Conversely, if $X^{\mathsf T}J+JX=0$, the derivative of $(e^{tX})^{\mathsf T}Je^{tX}$ is
> $$
> (e^{tX})^{\mathsf T}(X^{\mathsf T}J+JX)e^{tX}=0.
> $$
> Its value therefore stays equal to $J$ for every real $t$. Preservation of $J$ gives $(\det e^{tX})^2=1$, and continuity from $\det e^{0X}=1$ gives $\det e^{tX}=1$ for all real $t$. Thus $e^{tX}$ lies in $\operatorname{SO}(3;1)$ for every $t$.
>
> Write $X=\begin{pmatrix}B&v\\w^{\mathsf T}&d\end{pmatrix}$ with $B\in M_3(\mathbb R)$, $v,w\in\mathbb R^3$, and $d\in\mathbb R$. The condition becomes
> $$
> X^{\mathsf T}J+JX
> =\begin{pmatrix}
> B^{\mathsf T}+B & v-w\\
> (v-w)^{\mathsf T} & -2d
> \end{pmatrix}=0.
> $$
> Therefore $B$ is skew-symmetric, $v=w$, and $d=0$. The general matrix is
> $$
> X=\begin{pmatrix}
> 0 & a & b & u\\
> -a & 0 & c & v\\
> -b & -c & 0 & w\\
> u & v & w & 0
> \end{pmatrix},\qquad a,b,c,u,v,w\in\mathbb R.
> $$
> Every displayed parameter choice gives a zero block sum above, so the six parameters are unrestricted.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]

## Notes

- **Source status.** The original exercise and Proposition 3.25 were checked at 200 dpi on printed pp. 74 and 59 / PDF pp. 86 and 71. Hall states the proposition and omits its verification. The solution supplies that verification in this case and derives the explicit entries independently.
- **Concrete check.** The parameter $u=1$ with all others zero gives $X=E_{14}+E_{41}$. Multiplication by $J$ changes the sign of row four, so $JX=E_{14}-E_{41}$ is skew-symmetric, as required.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].


---
title: "Exercise R318: Real Clifford Algebras in Dimensions One and Two"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 19, printed p. 758, PDF p. 773"
created: 2026-09-29
---

# Exercise R318: Real Clifford Algebras in Dimensions One and Two

## Problem Statement

> [!question] Lang XIX.19
> Consider the Clifford algebra over $\mathbb R$. The standard notation is $C_n$ if $E=\mathbb R^n$ with the negative definite form, and $C'_n$ if $E=\mathbb R^n$ with the positive definite form. Thus $\dim C_n=\dim C'_n=2^n$.
>
> (a) Show that
>
> $$
> \begin{array}{ll}
> C_1\cong\mathbb C,&C_2\cong\mathbb H\quad\text{(the division ring of quaternions)},\\
> C'_1\cong\mathbb R\times\mathbb R,&C'_2\cong M_2(\mathbb R)\quad\text{($2$ by $2$ matrices over $\mathbb R$)}.
> \end{array}
> $$

## Hints

> [!hint]- Hint 1
> For one generator, use $\mathbb R[t]/(t^2+1)$ and $\mathbb R[t]/(t^2-1)$.

> [!hint]- Hint 2
> For $C'_2$, find two anticommuting real matrices squaring to $I$ and check that $I,A,B,AB$ are linearly independent.

## Solution

> [!success]- Independent derivation
> In dimension one the only relation is $e^2=\pm1$. Thus $C_1\cong\mathbb R[t]/(t^2+1)\cong\mathbb C$, sending $e$ to $i$.
>
> For the positive form, evaluation at $1,-1$ defines
>
> $$
> \mathbb R[t]/(t^2-1)\longrightarrow\mathbb R\times\mathbb R,\qquad
> a+bt\longmapsto(a+b,a-b).
> $$
>
> It is an algebra map and is bijective, with inverse $(u,v)\mapsto (u+v)/2+(u-v)t/2$. Therefore $C'_1\cong\mathbb R\times\mathbb R$.
>
> The two negative generators satisfy $e_1^2=e_2^2=-1$ and $e_1e_2=-e_2e_1$. The quaternions $i,j$ satisfy these relations, so there is an algebra map $C_2\to\mathbb H$. It sends the ordered basis $1,e_1,e_2,e_1e_2$ to the real basis $1,i,j,k$, hence is an isomorphism.
>
> For the positive case take
>
> $$
> A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
> \qquad
> B=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
> $$
>
> Then $A^2=B^2=I$ and $AB=-BA$, giving a homomorphism $C'_2\to M_2(\mathbb R)$. The matrices $I,A$ form a basis of the diagonal matrices. The matrices $B,AB$ form a basis of the off-diagonal matrices, since their two off-diagonal coordinate vectors are $(1,1)$ and $(1,-1)$. Thus the four images form a real basis, and the homomorphism is an isomorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Clifford Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[02 - Ring Theory/Concepts/Quotient Rings]]

## Notes

The entire printed exercise, including its single subpart label (a), was checked at [S2, Ch. XIX, Exercise 19, printed p. 758, PDF p. 773]. All four maps are explicitly proved isomorphisms. The prime distinguishes the positive quadratic relation, not a derivative or an even subalgebra.

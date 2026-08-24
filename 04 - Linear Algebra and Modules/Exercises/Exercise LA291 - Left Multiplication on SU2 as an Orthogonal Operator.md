---
title: "Exercise LA291: Left Multiplication on SU2 as an Orthogonal Operator"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - orthogonal-matrices
  - quaternions
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.7, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise LA291: Left Multiplication on SU2 as an Orthogonal Operator

## Problem Statement

> [!question] Exercise 4.7
> (a) Calculate left multiplication by a fixed matrix $P$ in $SU_2$ explicitly, in terms of the coordinate vector $(x_0,x_1,x_2,x_3)$. Prove that it is given as multiplication by a $4\times4$ orthogonal matrix $Q$.
>
> (b) Prove that $Q$ is orthogonal by a method similar to that used in describing the orthogonal representation: Express the dot product of the vectors $(x_0,x_1,x_2,x_3)$ and $(x'_0,x'_1,x'_2,x'_3)$ that correspond to matrices $X$ and $X'$ in $SU_2$, in matrix terms.

## Hints

> [!hint]- Hint 1
> Expand $(p_0+p_1i+p_2j+p_3k)(x_0+x_1i+x_2j+x_3k)$.

> [!hint]- Hint 2
> Use $\langle X,X'\rangle=\frac12\operatorname{tr}(X{X'}^*)$.

## Solution

> [!success]- Solution
> **(a)** For $P=(p_0,p_1,p_2,p_3)$, quaternion multiplication shows that left multiplication has matrix
>
> $$
> Q_P=
> \begin{pmatrix}
> p_0&-p_1&-p_2&-p_3\\
> p_1&p_0&-p_3&p_2\\
> p_2&p_3&p_0&-p_1\\
> p_3&-p_2&p_1&p_0
> \end{pmatrix}.
> $$
>
> The quaternion norm is multiplicative, so for $P\in SU_2$ and every $X\in\mathbb R^4$,
>
> $$
> \|Q_PX\|=\|PX\|=\|P\|\|X\|=\|X\|.
> $$
>
> Hence $Q_P$ is orthogonal.
>
> **(b)** Under the matrix model of quaternions,
>
> $$
> \langle X,X'\rangle
> =\frac12\operatorname{tr}(X{X'}^*).
> $$
>
> Therefore, since $P^*P=I$,
>
> $$
> \langle PX,PX'\rangle
> =\frac12\operatorname{tr}\bigl(PX(PX')^*\bigr)
> =\frac12\operatorname{tr}(PX{X'}^*P^*)
> =\frac12\operatorname{tr}(X{X'}^*)
> =\langle X,X'\rangle.
> $$
>
> This gives a second direct proof that $Q_P\in O_4$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- In fact $P\mapsto Q_P$ embeds $SU_2$ in $SO_4$, since the determinant varies continuously and equals $1$ at $P=I$.
- **Source status:** The coordinate model of $SU_2$ and Ex. 4.7 were checked at [S1, Ch. 9, §9.3–§9.4, printed pp. 266–271 and 285, PDF pp. 278–283 and 297]. Both orthogonality proofs are independent.

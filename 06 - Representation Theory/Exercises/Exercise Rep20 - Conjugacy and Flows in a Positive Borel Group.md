---
title: "Exercise Rep20: Conjugacy and Flows in a Positive Borel Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - conjugacy-classes
  - one-parameter-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.6, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep20: Conjugacy and Flows in a Positive Borel Group

## Problem Statement

> [!question] Exercise 5.6
> Let $G$ be the subgroup of $GL_2$ of matrices
>
> $$
> \begin{pmatrix}x&y\\0&x^{-1}\end{pmatrix}
> $$
>
> with $x>0$ and $y$ arbitrary. Determine the conjugacy classes in $G$, and the matrices $A$ such that $e^{tA}$ is a one-parameter group in $G$.

## Hints

> [!hint]- Hint 1
> Conjugate $(x,y)$ by $(a,b)$ and track the first diagonal entry.

> [!hint]- Hint 2
> Differentiate the condition that the two diagonal entries are reciprocal.

## Solution

> [!success]- Solution
> Write a matrix as $(x,y)$. A direct multiplication gives
>
> $$
> (a,b)(x,y)(a,b)^{-1}
> =\bigl(x,\ a^2y+ab(x^{-1}-x)\bigr).
> $$
>
> Thus $x$ is a conjugacy invariant. If $x\ne1$, then $x^{-1}-x\ne0$, and varying $b$ makes the second coordinate arbitrary. Hence for each fixed $x\ne1$, all matrices $(x,y)$ form one conjugacy class.
>
> If $x=1$, conjugation sends $y$ to $a^2y$. Since $a^2>0$, there are three classes:
>
> $$
> \{(1,0)\},
> \qquad
> \{(1,y):y>0\},
> \qquad
> \{(1,y):y<0\}.
> $$
>
> The tangent condition at the identity gives exactly
>
> $$
> A=
> \begin{pmatrix}a&b\\0&-a\end{pmatrix},
> \qquad a,b\in\mathbb R.
> $$
>
> Indeed,
>
> $$
> e^{tA}=
> \begin{cases}
> \begin{pmatrix}
> e^{at}&\dfrac{b}{a}\sinh(at)\\
> 0&e^{-at}
> \end{pmatrix},&a\ne0,\\
> \begin{pmatrix}1&bt\\0&1\end{pmatrix},&a=0,
> \end{cases}
> $$
>
> which always belongs to $G$.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- The sign of $y$ becomes invariant only on the unipotent slice $x=1$.
- **Source status:** The matrix form and Ex. 5.6 were visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The conjugation formula and exponential classification are independent.

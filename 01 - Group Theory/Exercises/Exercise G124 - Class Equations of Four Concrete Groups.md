---
title: "Exercise G124: Class Equations of Four Concrete Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - class-equation
  - dihedral-groups
  - matrix-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.9, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G124: Class Equations of Four Concrete Groups

## Problem Statement

> [!question] Exercise 2.9
> Determine the class equation for the following groups: **(a)** the quaternion group, **(b)** $D_4$, **(c)** $D_5$, **(d)** the subgroup of $GL_2(\mathbb F_3)$ of invertible upper triangular matrices.

## Hints

> [!hint]- Hint 1
> In the quaternion group and $D_4$, begin with the two central elements.

> [!hint]- Hint 2
> For the upper triangular group, conjugation preserves the ordered diagonal pair. Separate equal and unequal diagonal entries.

## Solution

> [!success]- Solution
> ### (a) Quaternion group
> Its center is $\{1,-1\}$, and the remaining classes are $\{\pm i\}$, $\{\pm j\}$, $\{\pm k\}$. Thus
>
> $$
> 8=1+1+2+2+2.
> $$
>
> ### (b) $D_4$
> If $x$ is the quarter-turn and $y$ a reflection, the classes are $\{1\}$, $\{x^2\}$, $\{x,x^3\}$, $\{y,x^2y\}$, $\{xy,x^3y\}$. Hence
>
> $$
> 8=1+1+2+2+2.
> $$
>
> ### (c) $D_5$
> The nonidentity rotations form the two inverse pairs $\{x,x^4\}$ and $\{x^2,x^3\}$, while all five reflections are conjugate. Therefore
>
> $$
> 10=1+2+2+5.
> $$
>
> ### (d) Invertible upper triangular matrices over $\mathbb F_3$
> Let
>
> $$
> B=\left\{\begin{pmatrix}a&b\\0&d\end{pmatrix}:a,d\in\mathbb F_3^\times,\ b\in\mathbb F_3\right\}.
> $$
>
> It has order $12$. The scalar matrices $I,-I$ are singleton classes. For each scalar diagonal $a=d=\pm1$, the two matrices with $b\ne0$ form a class of size $2$. When $a\ne d$, varying $b$ gives one class for the ordered diagonal pair $(1,-1)$ and one for $(-1,1)$, each of size $3$. Thus
>
> $$
> 12=1+1+2+2+3+3.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- Equal class equations do not imply isomorphic groups: $D_4$ and the quaternion group are the smallest example here.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.9, printed p. 221, PDF p. 233]; independent computations.


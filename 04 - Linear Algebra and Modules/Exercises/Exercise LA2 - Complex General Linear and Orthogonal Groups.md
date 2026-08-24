---
title: "Exercise LA2: Complex General Linear and Orthogonal Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - general-linear-groups
  - orthogonal-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.1, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA2: Complex General Linear and Orthogonal Groups

## Problem Statement

> [!question] Exercise 1.1
> **(a)** Is $GL_n(\mathbb C)$ isomorphic to a subgroup of $GL_{2n}(\mathbb R)$?
>
> **(b)** Is $SO_2(\mathbb C)$ a bounded subset of $\mathbb C^{2\times2}$?

## Hints

> [!hint]- Hint 1
> Write a complex matrix as $A=B+iC$ and represent multiplication by $A$ on the underlying real vector space of $\mathbb C^n$.

> [!hint]- Hint 2
> In the usual rotation matrix, substitute a purely imaginary angle $z=it$ and use $\cos(it)=\cosh t$ and $\sin(it)=i\sinh t$.

## Solution

> [!success]- Solution
> ### (a) Realification
> Write $A=B+iC$, where $B,C\in M_n(\mathbb R)$, and define
> $$
> \rho(A)=
> \begin{pmatrix}
> B&-C\\
> C&B
> \end{pmatrix}.
> $$
> Direct block multiplication gives
> $$
> \rho(A_1A_2)=\rho(A_1)\rho(A_2),
> \qquad \rho(I_n)=I_{2n}.
> $$
> Moreover, $\rho(A)=I_{2n}$ implies $B=I_n$ and $C=0$, so $\rho$ is injective. If $A$ is invertible, then
> $$
> \rho(A)\rho(A^{-1})=I_{2n},
> $$
> hence $\rho(A)\in GL_{2n}(\mathbb R)$. Thus
> $$
> GL_n(\mathbb C)\cong \rho\bigl(GL_n(\mathbb C)\bigr)\le GL_{2n}(\mathbb R).
> $$
> Therefore the answer is **yes**.
>
> ### (b) The complex orthogonal group is unbounded
> For $t\in\mathbb R$, set
> $$
> P_t=
> \begin{pmatrix}
> \cosh t&-i\sinh t\\
> i\sinh t&\cosh t
> \end{pmatrix}.
> $$
> This is the complex rotation matrix with angle $it$. Since
> $$
> \cosh^2t-\sinh^2t=1,
> $$
> a direct calculation gives
> $$
> P_t^{\mathsf T}P_t=I,
> \qquad
> \det P_t=1.
> $$
> Thus $P_t\in SO_2(\mathbb C)$ for every $t$. But $|\cosh t|\to\infty$ as $|t|\to\infty$, so this family is unbounded. Hence $SO_2(\mathbb C)$ is **not bounded**. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

Part (a) is the matrix expression of the restriction of scalars $\mathbb C^n\rightsquigarrow\mathbb R^{2n}$. Part (b) illustrates why $P^{\mathsf T}P=I$ over $\mathbb C$ does not impose the norm bounds supplied by the unitary equation $P^*P=I$.

**Source status:** The exercise is stated in [S1, Ch. 9, Exercises §1, Ex. 1.1, printed p. 283, PDF p. 295]. Both arguments are complete independent derivations.

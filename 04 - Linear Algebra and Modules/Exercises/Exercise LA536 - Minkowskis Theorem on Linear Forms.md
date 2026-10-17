---
title: "Exercise LA536: Minkowski's Theorem on Linear Forms"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
  - lattices
  - geometry-of-numbers
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §4, Exercise 3, printed p. 28, PDF p. 47"
created: 2026-10-17
---

# Exercise LA536: Minkowski's Theorem on Linear Forms

## Problem Statement

> [!question] Neukirch I.4.3 — Minkowski's Theorem on Linear Forms
> Let
> $$
> L_i(x_1,\ldots,x_n)=\sum_{j=1}^n a_{ij}x_j,
> \qquad i=1,\ldots,n,
> $$
> be real linear forms such that $\det(a_{ij})\ne0$, and let $c_1,\ldots,c_n$ be positive real numbers such that $c_1\cdots c_n>|\det(a_{ij})|$. Show that there exist integers $m_1,\ldots,m_n\in\mathbb Z$ such that
> $$
> |L_i(m_1,\ldots,m_n)|<c_i,
> \qquad i=1,\ldots,n.
> $$
>
> **Printed hint:** Use Minkowski's lattice point theorem.

> [!warning] Source wording: the zero vector is not excluded
> The printed exercise does **not** require the integers $m_1,\ldots,m_n$ to be not all zero. As written, its conclusion is already satisfied by $m_1=\cdots=m_n=0$, since every $c_i$ is positive. The statement is therefore true as printed. The proof below establishes the usual intended stronger conclusion: for finite positive $n$, one can choose a vector $m\in\mathbb Z^n\setminus\{0\}$ satisfying all the displayed strict inequalities.

## Hints

> [!hint]- Hint 1: Package the forms into a lattice
> Write $A=(a_{ij})$ and $L(x)=Ax$. Since $A$ is invertible, its column vectors $Ae_1,\ldots,Ae_n$ are a real basis. Consider the complete lattice $\Gamma=A\mathbb Z^n$.

> [!hint]- Hint 2: Compare the box volume with the lattice covolume
> A fundamental mesh of $\Gamma$ is $A[0,1)^n$ and has volume $|\det A|$. The open box $X=\prod_{i=1}^n(-c_i,c_i)$ has volume $2^n\prod_i c_i$. Check that it is convex and centrally symmetric.

> [!hint]- Hint 3: Recover an integer vector from a nonzero lattice point
> Apply Minkowski's theorem to $X$ and $\Gamma$. A resulting nonzero point $y\in X\cap\Gamma$ has the form $y=Am$ with $m\in\mathbb Z^n$. Its coordinates are $y_i=L_i(m)$, and openness of the box gives strict bounds.

## Solution

> [!success]- Independent derivation of the stronger nonzero conclusion
> Let $n\ge1$ be finite, let $A=(a_{ij})\in M_n(\mathbb R)$ be the coefficient matrix, and assume the source hypotheses
> $$
> \det A\ne0,\qquad c_i>0\ (1\le i\le n),
> \qquad \prod_{i=1}^n c_i>|\det A|.
> $$
> We prove the existence of $m\in\mathbb Z^n\setminus\{0\}$ with $|L_i(m)|<c_i$ for every $i$.
>
> **Source input: Minkowski's lattice point theorem (4.4).** If $\Gamma$ is a complete lattice in an $n$-dimensional Euclidean space and $X$ is a measurable, centrally symmetric, convex subset with
> $$
> \operatorname{vol}(X)>2^n\operatorname{vol}(\Gamma),
> $$
> then $X$ contains a nonzero point of $\Gamma$. Here $\operatorname{vol}(\Gamma)$ denotes the volume of a fundamental mesh, also called the lattice's covolume. We apply the source theorem in the standard Euclidean space $\mathbb R^n$.
>
> ### 1. Construct the complete lattice and compute its covolume
> Let $e_1,\ldots,e_n$ be the standard basis and set
> $$
> v_j=Ae_j,\qquad
> \Gamma=A\mathbb Z^n
> =\mathbb Zv_1+\cdots+\mathbb Zv_n.
> $$
> Since $A$ is invertible, $v_1,\ldots,v_n$ are real-linearly independent and span $\mathbb R^n$. Thus $\Gamma$ is a complete lattice in the source's sense. A fundamental mesh is
> $$
> \Phi=\left\{\sum_{j=1}^n t_jv_j:0\le t_j<1\right\}
> =A[0,1)^n.
> $$
> The determinant formula for parallelepiped volume gives
> $$
> \operatorname{vol}(\Gamma)
> =\operatorname{vol}(\Phi)=|\det A|.
> $$
>
> ### 2. Choose a convex symmetric set with the required volume
> Define the open box
> $$
> X=\prod_{i=1}^n(-c_i,c_i)
> =\{y\in\mathbb R^n:|y_i|<c_i\text{ for all }i\}.
> $$
> It is open and hence measurable. If $y\in X$, then $-y\in X$, so it is centrally symmetric about zero. If $y,z\in X$ and $0\le t\le1$, then for every $i$,
> $$
> |(1-t)y_i+tz_i|
> \le(1-t)|y_i|+t|z_i|<c_i.
> $$
> Thus the whole segment joining $y$ and $z$ lies in $X$, proving convexity. The side lengths are $2c_i$, so
> $$
> \operatorname{vol}(X)
> =\prod_{i=1}^n(2c_i)
> =2^n\prod_{i=1}^n c_i
> >2^n|\det A|
> =2^n\operatorname{vol}(\Gamma).
> $$
> All hypotheses of Minkowski's theorem are now satisfied. In particular, that theorem does not require $X$ to be closed, so this open box is admissible.
>
> ### 3. Translate the lattice point into the desired integers
> Minkowski's theorem supplies
> $$
> 0\ne y\in X\cap\Gamma.
> $$
> By the definition of $\Gamma$, there is $m=(m_1,\ldots,m_n)^{\mathsf T}\in\mathbb Z^n$ with $y=Am$. This vector is nonzero: if $m=0$, then $y=A0=0$, a contradiction. Invertibility of $A$ also makes this integer preimage unique.
>
> For each $i$, matrix multiplication and $y\in X$ give
> $$
> L_i(m_1,\ldots,m_n)
> =\sum_{j=1}^n a_{ij}m_j
> =y_i,
> \qquad |L_i(m_1,\ldots,m_n)|=|y_i|<c_i.
> $$
> Hence the inequalities hold simultaneously for integers that are not all zero. This proves the stronger conclusion and, consequently, the printed assertion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source verification:** The complete original problem, both strict inequalities, and the printed hint were visually checked in [S4, Ch. I, §4, Exercise 3, printed p. 28, PDF p. 47]. The exercise appears above the §5 heading and belongs to §4. No source figure is required.
- **Source wording:** The source omits a nonzero requirement on the integer vector. This omission is preserved in the question and explained in the visible callout. The independent proof supplies the useful stronger statement; it does not treat the printed true statement as false or insert an extra condition into the transcription.
- **Source inputs and proof status:** The proof is an independent application of [S4, Ch. I, §4, Minkowski's Lattice Point Theorem (4.4), printed p. 27, PDF p. 46]. Its hypotheses and conclusion are stated above; its proof is supplied in the source and is not reproved here. The definitions of a lattice, fundamental mesh, and complete lattice were checked in Definition (4.1), printed p. 24 / PDF p. 43; the determinant-volume formula and the meaning of $\operatorname{vol}(\Gamma)$ were checked at printed p. 26 / PDF p. 45. The box-volume calculation and all theorem-hypothesis checks are included in the solution.
- **Strict bounds and threshold:** The open box gives $|L_i(m)|<c_i$ rather than a weak inequality. For the stronger nonzero conclusion with these strict bounds, replacing $\prod_i c_i>|\det A|$ by equality would fail: with $A=I_n$ and all $c_i=1$, the only integer point in $(-1,1)^n$ is zero.
- **Routing:** Linear Algebra and Modules is primary because the construction uses the coefficient matrix, its image lattice, and determinant covolume. The integer-vector conclusion comes from the supplied geometry-of-numbers theorem rather than a field-extension argument.


---
title: "Exercise Rep41: Conjugation Representation and PSL2 as an Algebraic Group"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-representation
  - algebraic-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 8, Ex. 8.10, printed p. 287, PDF p. 299"
created: 2026-08-24
---

# Exercise Rep41: Conjugation Representation and PSL2 as an Algebraic Group

## Problem Statement

> [!question] Exercise 8.10
> (a) Let $V$ be the space $V$ of complex $2\times2$ matrices, with the basis $(e_{11},e_{12},e_{21},e_{22})$. Write the matrix of conjugation by $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ on $V$ in block form.
>
> (b) Prove that conjugation defines a homomorphism $\varphi:SL_2(\mathbb C)\to GL_4(\mathbb C)$, and that the image of $\varphi$ is isomorphic to $PSL_2(\mathbb C)$.
>
> (c) Prove that $PSL_2(\mathbb C)$ is a complex algebraic group by finding polynomial equations in the entries $y_{ij}$ of a $4\times4$ matrix whose solutions are the matrices in the image of $\varphi$.
>
> [!warning] Source issue
> Part (a) prints “Let $V$ be the space $V$”; the repeated symbol is a harmless typographical duplication and is preserved above.

## Hints

> [!hint]- Hint 1
> With the basis grouped by matrix rows, conjugation has Kronecker form $A\otimes(A^{-1})^{\mathsf T}$.

> [!hint]- Hint 2
> Conjugation fixes $I$ and preserves the trace pairing $B(X,Y)=\operatorname{tr}(XY)$.

## Solution

> [!success]- Solution
> **(a)** Put $C=(A^{-1})^{\mathsf T}$. In the ordered basis $(e_{11},e_{12},e_{21},e_{22})$, the matrix of $X\mapsto AXA^{-1}$ is
>
> $$
> \begin{pmatrix}aC&bC\\cC&dC\end{pmatrix}
> =A\otimes(A^{-1})^{\mathsf T}.
> $$
>
> If $A\in SL_2(\mathbb C)$, then $C=\begin{pmatrix}d&-c\\-b&a\end{pmatrix}$, so this is polynomial in $a,b,c,d$.
>
> **(b)** Composition of conjugations shows $\varphi(AB)=\varphi(A)\varphi(B)$. Its kernel consists of matrices commuting with every element of $M_2(\mathbb C)$, hence of scalar matrices. Intersecting with $SL_2(\mathbb C)$ gives $\ker\varphi=\{\pm I\}$. Therefore
>
> $$
> \operatorname{im}\varphi\cong SL_2(\mathbb C)/\{\pm I\}=PSL_2(\mathbb C).
> $$
>
> **(c)** Let
>
> $$
> u=\begin{pmatrix}1\\0\\0\\1\end{pmatrix},
> \qquad
> G=
> \begin{pmatrix}
> 1&0&0&0\\
> 0&0&1&0\\
> 0&1&0&0\\
> 0&0&0&1
> \end{pmatrix}.
> $$
>
> Here $u$ represents $I$, and $G$ is the Gram matrix of $B(X,Y)=\operatorname{tr}(XY)$. Every conjugation matrix $Y=(y_{ij})$ satisfies
>
> $$
> Yu=u,
> \qquad Y^{\mathsf T}GY=G,
> \qquad \det Y=1.
> $$
>
> These are finitely many complex polynomial equations in the $y_{ij}$. Conversely, a solution fixes $I$, preserves the trace-zero complement $\mathfrak{sl}_2(\mathbb C)=I^{\perp}$, and restricts there to an element of $SO_3(\mathbb C)$ for the nondegenerate trace form. The adjoint map
>
> $$
> SL_2(\mathbb C)\longrightarrow SO(\mathfrak{sl}_2,B)
> $$
>
> has kernel $\{\pm I\}$ and is onto: its differential is the injective map $\operatorname{ad}:\mathfrak{sl}_2\to\mathfrak{so}(\mathfrak{sl}_2,B)$ between three-dimensional Lie algebras, so its image contains a neighborhood of the identity; $SO_3(\mathbb C)$ is path connected, hence the image is all of it. Thus the polynomial solution set is exactly $\operatorname{im}\varphi$.
>
> Therefore $PSL_2(\mathbb C)$ is realized as a complex algebraic subgroup of $GL_4(\mathbb C)$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- The determinant equation selects the special orthogonal component on the trace-zero subspace.
- **Proof boundary:** Surjectivity uses Artin's path-connectedness statement for $SO_3(\mathbb C)$ together with the local exponential/differential argument; it is not inferred from dimension alone.
- **Source status:** Artin's definition and path-connectedness theorem for complex algebraic groups were checked at [S1, Ch. 9, §9.8, printed pp. 282–283, PDF pp. 294–295], and Ex. 8.10 at [S1, printed p. 287, PDF p. 299]. The block matrix and defining equations are independent.

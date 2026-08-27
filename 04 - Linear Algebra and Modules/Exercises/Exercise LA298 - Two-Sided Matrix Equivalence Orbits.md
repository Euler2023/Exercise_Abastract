---
title: "Exercise LA298: Two-Sided Matrix Equivalence Orbits"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-equivalence
  - rank
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.9, printed p. 191, PDF p. 203"
created: 2026-08-27
---

# Exercise LA298: Two-Sided Matrix Equivalence Orbits

## Problem Statement

> [!question] Exercise 7.9
> (a) Let $S=\mathbb R^{m\times n}$ and let $G=GL_m(\mathbb R)\times GL_n(\mathbb R)$. Prove that $(P,Q)*A=PAQ^{-1}$ defines an operation of $G$ on $S$.
>
> (b) Describe the decomposition of $S$ into $G$-orbits.
>
> (c) Assume that $m\le n$. What is the stabilizer of the matrix $[I\mid0]$?

## Hints

> [!hint]- Hint 1
> Check the product law using componentwise multiplication in $G$.

> [!hint]- Hint 2
> Row and column operations reduce a matrix to $\operatorname{diag}(I_r,0)$. For part (c), write $Q$ in blocks of sizes $m$ and $n-m$.

## Solution

> [!success]- Solution
> **(a)** The identity pair fixes every $A$, and
>
> $$
> (P_1,Q_1)*((P_2,Q_2)*A)
> =P_1P_2A Q_2^{-1}Q_1^{-1}
> =(P_1P_2,Q_1Q_2)*A.
> $$
>
> Hence this is a left action.
>
> **(b)** Multiplication on the left and right performs invertible row and column operations, so rank is invariant. Conversely, every rank-$r$ matrix is equivalent to
>
> $$
> A_r=\begin{pmatrix}I_r&0\\0&0\end{pmatrix}.
> $$
>
> Therefore the orbits are exactly the rank strata $r=0,\ldots,\min(m,n)$.
>
> **(c)** Put $A_0=[I_m\mid0]$ and write
>
> $$
> Q=\begin{pmatrix}Q_{11}&Q_{12}\\Q_{21}&Q_{22}\end{pmatrix}.
> $$
>
> The stabilizer equation $PA_0Q^{-1}=A_0$ is equivalent to $PA_0=A_0Q$, hence
>
> $$
> [P\mid0]=[Q_{11}\mid Q_{12}].
> $$
>
> Thus $Q_{11}=P$ and $Q_{12}=0$. Invertibility then requires $P\in GL_m(\mathbb R)$ and $Q_{22}\in GL_{n-m}(\mathbb R)$, while $Q_{21}$ is arbitrary. Consequently
>
> $$
> \operatorname{Stab}(A_0)=
> \left\{\left(P,\begin{pmatrix}P&0\\C&D\end{pmatrix}\right):
> P\in GL_m(\mathbb R),D\in GL_{n-m}(\mathbb R),C\in\mathbb R^{(n-m)\times m}\right\}.
> $$
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The inverse on $Q$ is precisely what makes componentwise multiplication give a left action.
- **Source status:** All three parts, including the hypothesis $m\le n$, were visually checked at [S1, Ch. 6, §7, Ex. 7.9, printed p. 191, PDF p. 203]. The solution is independent.

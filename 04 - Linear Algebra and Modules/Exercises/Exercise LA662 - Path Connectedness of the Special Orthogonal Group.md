---
title: "Exercise LA662: Path Connectedness of the Special Orthogonal Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 13, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-13"
created: 2026-11-12
---

# Exercise LA662: Path Connectedness of the Special Orthogonal Group

## Problem Statement

> [!question] Original Exercise 13
> Show that $\mathrm{SO}(n)$ is connected, using the following outline.
>
> For the case $n=1$, there is nothing to show, since a $1\times1$ matrix with determinant one must be $[1]$. Assume, then, that $n\ge2$. Let $e_1$ denote the unit vector with entries $1,0,\ldots,0$ in $\mathbb R^n$. For every unit vector $v\in\mathbb R^n$, show that there exists a continuous path $R(t)$ in $\mathrm{SO}(n)$ with $R(0)=I$ and $R(1)v=e_1$. (Thus, any unit vector can be “continuously rotated” to $e_1$.)
>
> Now, show that any element $R$ of $\mathrm{SO}(n)$ can be connected to a block-diagonal matrix of the form
> $$
> \begin{pmatrix}1&0\\0&R_1\end{pmatrix}
> $$
> with $R_1\in\mathrm{SO}(n-1)$ and proceed by induction.

## Hints

> [!hint]- Hint 1
> Rotate in the plane spanned by $v$ and $e_1$, fixing its orthogonal complement. Treat $v=e_1$ and $v=-e_1$ separately.

> [!hint]- Hint 2
> For a given $R$, apply this rotation path to $v=Re_1$ and multiply $R$ on the left. At the endpoint, orthogonality forces the remaining block to lie in $\mathrm{SO}(n-1)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation following the printed induction.
>
> **1. Rotate a unit vector to $e_1$.** Suppose $n\ge2$. If $v=e_1$, take the constant path $Q_t=I$.
>
> If $v\ne\pm e_1$, put
> $$
> c=\langle v,e_1\rangle,\qquad
> \theta=\arccos c\in(0,\pi),\qquad
> u=\frac{e_1-cv}{\sqrt{1-c^2}}.
> $$
> Then $\langle v,u\rangle=0$, $\|u\|=1$, and $e_1=\cos\theta\,v+\sin\theta\,u$. Define a linear map $Q_t$ by
> $$
> Q_tv=\cos(t\theta)v+\sin(t\theta)u,\qquad
> Q_tu=-\sin(t\theta)v+\cos(t\theta)u,
> $$
> and let $Q_t$ be the identity on $\operatorname{span}(v,u)^\perp$. In an orthonormal basis starting with $v,u$, its matrix is a two-dimensional rotation block and an identity block. Hence $Q_t^TQ_t=I$, $\det Q_t=1$, and its entries vary continuously with $t$. Moreover $Q_0=I$ and $Q_1v=e_1$.
>
> If $v=-e_1$, choose $u=e_2$ and $\theta=\pi$ in the same rotation formula. It still gives $Q_0=I$ and $Q_1v=-v=e_1$. Thus the construction covers every unit vector.
>
> **2. Reduce one dimension.** Let $R\in\mathrm{SO}(n)$ and apply Step 1 to $v=Re_1$. The path $P_t=Q_tR$ remains in $\mathrm{SO}(n)$, starts at $R$, and ends at a matrix $P_1$ fixing $e_1$. An orthogonal matrix fixing $e_1$ preserves $e_1^\perp$: for $x\perp e_1$,
> $$
> \langle P_1x,e_1\rangle
> =\langle x,P_1^{-1}e_1\rangle
> =\langle x,e_1\rangle=0.
> $$
> Relative to $\mathbb Re_1\oplus e_1^\perp$, we therefore have
> $$
> P_1=\begin{pmatrix}1&0\\0&R_1\end{pmatrix},
> \qquad R_1^TR_1=I,\qquad
> \det R_1=\det P_1=1.
> $$
> Thus $R_1\in\mathrm{SO}(n-1)$.
>
> **3. Complete the induction.** The group $\mathrm{SO}(1)=\{[1]\}$ is path connected. Assuming $\mathrm{SO}(n-1)$ is path connected, choose a path $S_t$ in it from $R_1$ to $I_{n-1}$. The path $\operatorname{diag}(1,S_t)$ joins $P_1$ to $I_n$. Concatenate this path with $P_t$ to obtain a path from $R$ to $I_n$. Reversing and concatenating such paths joins any two elements of $\mathrm{SO}(n)$. Hence $\mathrm{SO}(n)$ is path connected for every integer $n\ge1$, and therefore connected.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Path Connectedness and Path Components|Path Connectedness and Path Components]]

## Notes

- **Source status:** The complete exercise and its outline were checked on the 200 dpi original page, printed p. 28 / PDF p. 40. The source's block notation is written with explicit zero off-diagonal blocks. No source figure is needed.
- **Method boundary:** The proof constructs the needed paths separately for each vector and matrix. It does not assert that the choice of rotating plane varies continuously with $v$ over the entire sphere.
- **Verification:** At $n=2$, the path $Q_t$ is the usual rotation through angle $t\theta$, with determinant $\cos^2(t\theta)+\sin^2(t\theta)=1$. At $v=-e_1$, the endpoint is a half-turn in the $(e_1,e_2)$-plane, so it still has determinant one.
- **Routing:** The principal tools are orthonormal bases, plane rotations, invariant orthogonal complements, and finite-dimensional matrix topology.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

---
title: "Exercise LA675: Spiral and Saddle Matrix Flows"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 8, printed p. 47, PDF p. 59"
source_refs:
  - "S10/ch-2/sec-6/ex-8"
created: 2026-11-17
---

# Exercise LA675: Spiral and Saddle Matrix Flows

## Problem Statement

> [!question] Original Chapter 2, Exercise 8
> Consider the two matrices $X_4$ and $X_5$ in (2.6). Compute $e^{tX_4}$ and $e^{tX_5}$ either by diagonalization or by the method in Exercises 6 and 7. Show that curves of the form $t\mapsto e^{tX_4}\mathbf v_0$, with $\mathbf v_0\ne0$, spiral out to infinity. Show that for $\mathbf v_0$ outside of a certain one-dimensional subspace of $\mathbb R^2$, curves of the form $t\mapsto e^{tX_5}\mathbf v_0$ tend to infinity in the direction of $(1,1)$ or in the direction of $(-1,-1)$.

**Source notation.** Equation (2.6) gives
$$
X_4=\begin{pmatrix}1&2\\-2&1\end{pmatrix},
\qquad
X_5=\begin{pmatrix}1&2\\2&1\end{pmatrix}.
$$
The preceding differential equation has real $t$ and $\mathbf v_0\in\mathbb R^2$. [S10, §2.2, equation (2.6) and the preceding flow equation, printed p. 35, PDF p. 47]

> [!note] Time direction
> The printed exercise does not specify the limiting direction of time. The assertions about going to infinity are proved below for $t\to+\infty$. For the first matrix, every trajectory instead approaches the origin as $t\to-\infty$.

## Hints

> [!hint]- Hint 1
> Subtract $I$ from each matrix and square the result. One squared traceless matrix is $-4I$ and the other is $4I$.

> [!hint]- Hint 2
> For $X_4$, separate radial growth from rotation. For $X_5$, decompose $\mathbf v_0$ in the eigenbasis $(1,1),(1,-1)$ and compare the two exponential rates.

## Solution

> [!success]- Solution
> **Proof scope:** Independent exponential calculations and forward-time asymptotics. The power-series method is the one proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA673 - A Trace Zero Formula for Two by Two Exponentials|Exercise LA673]], with the commuting scalar part separated as in [[04 - Linear Algebra and Modules/Exercises/Exercise LA674 - An Explicit Two by Two Matrix Exponential|Exercise LA674]].
>
> **The spiral matrix.** Write
> $$
> X_4=I+2J,\qquad
> J=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad J^2=-I.
> $$
> Grouping the even and odd powers in the exponential series gives
> $$
> e^{tX_4}
> =e^t\left(\cos(2t)I+\sin(2t)J\right)
> =e^t\begin{pmatrix}
> \cos(2t)&\sin(2t)\\
> -\sin(2t)&\cos(2t)
> \end{pmatrix}.
> $$
> The second factor is an orthogonal rotation through angle $-2t$. If
> $\mathbf v_0=r_0(\cos\theta_0,\sin\theta_0)^{\mathsf T}$ with $r_0>0$, then
> $$
> e^{tX_4}\mathbf v_0
> =r_0e^t
> \begin{pmatrix}
> \cos(\theta_0-2t)\\
> \sin(\theta_0-2t)
> \end{pmatrix}.
> $$
> Thus its radius is exactly $r_0e^t$, which tends to infinity as $t\to+\infty$, while its angle decreases at constant rate 2. Every nonzero trajectory is therefore a clockwise outward spiral. The initial vector zero gives the stationary trajectory and is excluded in the question.
>
> **The saddle matrix.** Write
> $$
> X_5=I+2K,\qquad
> K=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad K^2=I.
> $$
> The same even-odd grouping, now with positive squared powers, gives
> $$
> \begin{aligned}
> e^{tX_5}
> &=e^t\left(\cosh(2t)I+\sinh(2t)K\right)\\
> &=\frac12\begin{pmatrix}
> e^{3t}+e^{-t}&e^{3t}-e^{-t}\\
> e^{3t}-e^{-t}&e^{3t}+e^{-t}
> \end{pmatrix}.
> \end{aligned}
> $$
> For the asymptotic behavior, let $\mathbf v_0=(x_0,y_0)^{\mathsf T}$ and put
> $$
> a=\frac{x_0+y_0}{2},\qquad
> b=\frac{x_0-y_0}{2}.
> $$
> The eigenvectors $\mathbf u_+=(1,1)^{\mathsf T}$ and $\mathbf u_-=(1,-1)^{\mathsf T}$ satisfy
> $$
> X_5\mathbf u_+=3\mathbf u_+,\qquad
> X_5\mathbf u_-=-\mathbf u_-.
> $$
> Since $\mathbf v_0=a\mathbf u_++b\mathbf u_-$, the exact trajectory is
> $$
> e^{tX_5}\mathbf v_0
> =a e^{3t}\mathbf u_++b e^{-t}\mathbf u_-.
> $$
> If $a=0$, then $\mathbf v_0$ lies on the exceptional line
> $$
> L=\operatorname{span}_{\mathbb R}\{(1,-1)\}
> =\{(x,y)\in\mathbb R^2:x+y=0\},
> $$
> and the trajectory $b e^{-t}\mathbf u_-$ tends to zero as $t\to+\infty$.
>
> If $a\ne0$, factor out $e^{3t}$:
> $$
> e^{tX_5}\mathbf v_0
> =e^{3t}\left(a\mathbf u_++b e^{-4t}\mathbf u_-\right).
> $$
> The parenthesized vector tends to the nonzero vector $a\mathbf u_+$. Hence the norm tends to infinity and
> $$
> \frac{e^{tX_5}\mathbf v_0}
> {\|e^{tX_5}\mathbf v_0\|}
> \longrightarrow
> \begin{cases}
> (1,1)^{\mathsf T}/\sqrt2,&x_0+y_0>0,\\
> (-1,-1)^{\mathsf T}/\sqrt2,&x_0+y_0<0.
> \end{cases}
> $$
> This gives both claimed directions and identifies the excluded subspace.
>
> For concrete checks, the initial vectors $(1,0)$ and $(-1,0)$ have respectively positive and negative $a$, so they escape in opposite claimed directions. The exceptional initial vector $(1,-1)$ gives $e^{-t}(1,-1)$ and approaches the origin.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete exercise and both matrices in equation (2.6) were checked on the original 200 dpi page images. No hint is printed for this exercise. The proof and the precise time and direction statements are independently supplied.
- **Figure boundary:** Figure 2.1, printed p. 36 / PDF p. 48, was inspected with the separate exercise page. It illustrates these flows; the exercise requires no figure-specific labels or geometric data, so no image is retained.
- **Verification:** Exact symbolic checks verified that each displayed exponential is $I$ at $t=0$ and satisfies $E_j'(t)=X_jE_j(t)$, and verified the two eigenvalue equations for $X_5$. The limiting assertions follow from the explicit formulas, rather than from a numerical plot.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

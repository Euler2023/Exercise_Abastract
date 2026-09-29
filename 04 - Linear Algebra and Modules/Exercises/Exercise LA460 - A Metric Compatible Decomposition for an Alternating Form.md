---
title: "Exercise LA460: A Metric Compatible Decomposition for an Alternating Form"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - symplectic-forms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 18, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA460: A Metric Compatible Decomposition for an Alternating Form

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 18
> Let $E$ be a finite-dimensional vector space over the reals, and let $\langle\ ,\ \rangle$ be a symmetric positive definite form. Let $\Omega$ be a non-degenerate alternating form on $E$. Show that there exists a direct sum decomposition
>
> $$
> E=E_1\oplus E_2
> $$
>
> having the following property. If $x,y\in E$ are written
>
> $$
> \begin{aligned}
> x&=(x_1,x_2)&&\text{with }x_1\in E_1\text{ and }x_2\in E_2,\\
> y&=(y_1,y_2)&&\text{with }y_1\in E_1\text{ and }y_2\in E_2,
> \end{aligned}
> $$
>
> then $\Omega(x,y)=\langle x_1,y_2\rangle-\langle x_2,y_1\rangle$. [Hint: Use Corollary 8.3, show that $A$ is positive definite, and take its square root to transform the direct sum decomposition obtained in that corollary.]

> [!warning] Source proof issue and the meaning of the direct sum
> The requested decomposition need not be orthogonal for $\langle\ ,\ \rangle$; imposing orthogonality would make the displayed right-hand side zero. The exercise itself is valid. However, the printed proof of the cited Corollary 8.3 chooses the coordinate dot product in a symplectic basis and then uses its cross terms between the first and last coordinate subspaces. Those cross terms are zero, so that proof does not justify its displayed identity as written. The independent construction below proves the exercise without relying on that step. [S2, Ch. XV, Corollary 8.3 and proof, printed pp. 587–588, PDF pp. 602–603.]

## Hints

> [!hint]- Hint 1: Represent the alternating form by a skew-adjoint map
> Define $T$ by $\Omega(x,y)=\langle Tx,y\rangle$. Then $T^*=-T$, $T$ is invertible, and $-T^2$ is positive definite and self-adjoint.

> [!hint]- Hint 2: Use nonorthogonal lines in each invariant plane
> Find orthonormal pairs $e_i,f_i$ with $\Omega(e_i,f_i)=\lambda_i>0$ and all cross-plane pairings zero. Compare $\Omega(e_i,e_i+\lambda_i^{-1}f_i)$ with $\langle e_i,e_i+\lambda_i^{-1}f_i\rangle$.

## Solution

> [!success]- Independent construction of the required decomposition
> The inner product identifies $E$ with its dual, so there is a unique linear map $T$ such that $\Omega(x,y)=\langle Tx,y\rangle$. Alternation implies $T^*=-T$, and nondegeneracy of $\Omega$ implies that $T$ is invertible. Thus $S=-T^2=T^*T$ is self-adjoint and
>
> $$
> \langle Sx,x\rangle=\lVert Tx\rVert^2>0\qquad(x\ne0).
> $$
>
> We construct mutually orthogonal $T$-invariant planes. If $E\ne0$, the real spectral theorem applied to $S$ gives a unit vector $e$ with $Se=\lambda^2e$, where $\lambda>0$. Put $f=Te/\lambda$. Then
>
> $$
> \lVert f\rVert=1,\qquad \langle e,f\rangle=0,
> \qquad Te=\lambda f,\qquad Tf=-\lambda e.
> $$
>
> Here $\langle Te,e\rangle=0$ follows from skew-adjointness. The plane $P=\operatorname{span}(e,f)$ is $T$-invariant, and so is its inner-product orthogonal complement: for $x\perp P$ and $v\in P$, $\langle Tx,v\rangle=-\langle x,Tv\rangle=0$. The restriction of $T$ to this complement is injective and hence invertible. Repeating gives an orthonormal basis $e_1,f_1,\ldots,e_m,f_m$ with
>
> $$
> \Omega(e_i,f_j)=\lambda_i\delta_{ij},\qquad
> \Omega(e_i,e_j)=\Omega(f_i,f_j)=0,
> \qquad \lambda_i>0.
> $$
>
> Now put $v_i=e_i+\lambda_i^{-1}f_i$, and define
>
> $$
> E_1=\operatorname{span}(e_1,\ldots,e_m),\qquad
> E_2=\operatorname{span}(v_1,\ldots,v_m).
> $$
>
> The combined list $e_1,\ldots,e_m,v_1,\ldots,v_m$ is a basis, since $f_i=\lambda_i(v_i-e_i)$. Both subspaces are totally isotropic for $\Omega$, and
>
> $$
> \Omega(e_i,v_j)=\delta_{ij}=\langle e_i,v_j\rangle.
> $$
>
> Write $x_1=\sum_i a_i e_i$, $x_2=\sum_i b_i v_i$, $y_1=\sum_i c_i e_i$, and $y_2=\sum_i d_i v_i$. Expanding with the preceding pairings gives
>
> $$
> \Omega(x_1+x_2,y_1+y_2)
> =\sum_i(a_id_i-b_ic_i)
> =\langle x_1,y_2\rangle-\langle x_2,y_1\rangle.
> $$
>
> This is exactly the required identity. For $E=0$, take $E_1=E_2=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 18, printed p. 599, PDF p. 614], including its hint, was checked on the original page image. The skew-adjoint construction is independent. The real spectral theorem for a self-adjoint map is the named external input; the required invariant-plane construction is proved here.
- **Boundary check:** In the Euclidean plane with $\Omega=c\,dx\wedge dy$, $c>0$, take $E_1=\mathbb Re$ and $E_2=\mathbb R(e+c^{-1}f)$ for the standard orthonormal basis. Both cross pairings are $1$, so small values $0<c<1$ cause no obstruction. No orthogonality of the final two summands is claimed.

---
title: "Exercise LA652: The Inverse Criterion for Symplectic Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 2, printed p. 27, PDF p. 39"
source_refs:
  - "S10/ch-1/sec-6/ex-2"
created: 2026-11-12
---

# Exercise LA652: The Inverse Criterion for Symplectic Matrices

## Problem Statement

> [!question] Original Chapter 1, Exercise 2
> Let $\omega$ be the skew-symmetric bilinear form on $\mathbb R^{2n}$ given by (1.7). Let $\Omega$ be the $2n\times2n$ matrix
> $$
> \Omega=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.
> $$
> Show that for all $x,y\in\mathbb R^{2n}$, we have
> $$
> \omega(x,y)=\langle x,\Omega y\rangle.
> $$
> Show that a $2n\times2n$ matrix $A$ belongs to $Sp(n;\mathbb R)$ if and only if $-\Omega A^{\mathrm{tr}}\Omega=A^{-1}$.
>
> Note: A similar analysis applies to $Sp(n;\mathbb C)$.

## Hints

> [!hint]- Hint 1
> For $y=(y_1,\ldots,y_n,y_{n+1},\ldots,y_{2n})$, compute $\Omega y$.

> [!hint]- Hint 2
> Use $\Omega^2=-I$ to solve $A^{\mathrm{tr}}\Omega A=\Omega$ for $A^{-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Multiplication by $\Omega$ sends $(y_1,\ldots,y_n,y_{n+1},\ldots,y_{2n})$ to $(y_{n+1},\ldots,y_{2n},-y_1,\ldots,-y_n)$. Consequently,
> $$
> \langle x,\Omega y\rangle=\sum_{j=1}^{n}(x_jy_{n+j}-x_{n+j}y_j)=\omega(x,y).
> $$
> It follows that $\omega(Ax,Ay)=\omega(x,y)$ for every $x,y$ exactly when
> $$
> A^{\mathrm{tr}}\Omega A=\Omega.
> $$
> This identity forces $A$ to be invertible: if $Av=0$, then $\Omega v=A^{\mathrm{tr}}\Omega Av=0$, and the invertibility of $\Omega$ gives $v=0$. Since $\Omega^{-1}=-\Omega$, multiplying on the left by $-\Omega$ yields
> $$
> (-\Omega A^{\mathrm{tr}}\Omega)A=I.
> $$
> This proves the inverse formula. Multiplying that formula back by $\Omega$ and $A$ proves the converse.
>
> Over $\mathbb C$, define the same form by $\omega(z,w)=z^{\mathrm{tr}}\Omega w$, a complex bilinear form. The entire matrix argument remains valid. Its transpose is $A^{\mathrm{tr}}$, not the conjugate transpose $A^*$. For example, $\operatorname{diag}(2I_n,\tfrac12 I_n)$ is symplectic and has inverse $\operatorname{diag}(\tfrac12 I_n,2I_n)$, as the formula predicts.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The complete numbered exercise and printed hints were checked on the original 200 dpi page image. The solution is independently supplied; the exercise statement is not a source-written proof.
- **Notation:** Hall's $Sp(n;\mathbb R)$ equals Artin's $SP_{2n}(\mathbb R)$. It is distinct from compact $Sp(n)=Sp(n;\mathbb C)\cap U(2n)$.
- **Method boundary:** The determinant equation alone gives $(\det A)^2=1$; this exercise does not by itself establish $\det A=1$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

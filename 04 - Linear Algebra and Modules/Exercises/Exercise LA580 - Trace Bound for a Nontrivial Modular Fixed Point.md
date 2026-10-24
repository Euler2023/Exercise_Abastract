---
title: "Exercise LA580: Trace Bound for a Nontrivial Modular Fixed Point"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.2, printed p. 56, PDF p. 71"
source_refs:
  - "S7/ch-2/sec-3/ex-2"
created: 2026-10-23
---

# Exercise LA580: Trace Bound for a Nontrivial Modular Fixed Point

## Problem Statement

> [!question] Original Exercise 2.3.2
> **Original Exercise 2.3.2.** If the nontrivial transformation $\begin{bmatrix}a&b\\c&d\end{bmatrix}\in SL_2(\mathbb Z)$ fixes $\tau\in\mathcal H$, show that $|a+d|<2$.

## Hints

> [!hint]- Hint 1
> Distinguish a nontrivial transformation from a matrix different from the identity: $I$ and $-I$ induce the same identity transformation on the upper half-plane. Cross-multiply the fixed-point equation.

> [!hint]- Hint 2
> Write $\tau=x+iy$, with $y>0$. First rule out $c=0$, then take real and imaginary parts of the fixed-point equation to eliminate $a-d$ and $b$.

> [!hint]- Hint 3
> Use $ad-bc=1$ to rewrite $(a+d)^2-4$ as $(a-d)^2+4bc$; the resulting expression is $-4c^2y^2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> The following is an independent derivation. Let
> $$
> \gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z),\qquad \tau=x+iy,\quad y>0.
> $$
> Here “nontrivial” means that the fractional linear transformation induced by $\gamma$ is not the identity, or equivalently, $\gamma\notin\{I,-I\}$.
>
> The condition $\gamma\tau=\tau$ gives
> $$
> a\tau+b=c\tau^2+d\tau,
> \qquad c\tau^2+(d-a)\tau-b=0. \tag{1}
> $$
> If $c=0$, the imaginary part of (1) gives $(d-a)y=0$, hence $d=a$; its real part then gives $b=0$. Thus $1=ad-bc=a^2$, so $\gamma=\pm I$, contrary to the hypothesis. Therefore $c\ne0$.
>
> Taking the imaginary part of (1) and dividing by $y$ gives
> $$
> 2cx+d-a=0,\qquad a-d=2cx. \tag{2}
> $$
> Taking the real part and substituting $d-a=-2cx$ gives
> $$
> c(x^2-y^2)-2cx^2-b=0,
> \qquad b=-c(x^2+y^2). \tag{3}
> $$
> Since $\det\gamma=ad-bc=1$, equations (2) and (3) yield
> $$
> \begin{aligned}
> (a+d)^2-4
> &=(a+d)^2-4(ad-bc)\\
> &=(a-d)^2+4bc\\
> &=4c^2x^2-4c^2(x^2+y^2)\\
> &=-4c^2y^2<0.
> \end{aligned}
> $$
> Therefore $(a+d)^2<4$, which is equivalent to $|a+d|<2$. Since $a+d$ is an integer, we also obtain $\operatorname{tr}\gamma\in\{-1,0,1\}$.
>
> Alternatively, regard (1) as a quadratic equation with real coefficients. Its nonreal root $\tau$ forces the discriminant $(d-a)^2+4bc=(a+d)^2-4$ to be negative. The real and imaginary part calculation above gives its exact value.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The statement was transcribed from the rendered original of Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, corrected fourth printing 2016, Exercise 2.3.2, printed p. 56 / PDF p. 71. The text uses this result on printed p. 54 / PDF p. 69. The Chapter 2 hints in Appendix A, printed p. 415 / PDF p. 426, contain no separate hint for 2.3.2.
- **Proof status:** This is an independent derivation using the fixed-point equation, real and imaginary parts, and the determinant identity. It does not treat the assigned exercise as an already proved result.
- **Hypothesis boundary:** “Nontrivial transformation” excludes $\pm I$. Excluding only $I$ would leave the matrix $-I$, which fixes the entire upper half-plane and has trace $-2$; the strict inequality would then fail.
- **Routing:** The main tools are the trace and determinant of a two-by-two matrix and its fixed-point quadratic equation, so this note belongs to Linear Algebra and Modules. Related Concepts supplies links to the upper half-plane action.
- **Learning status:** The status remains `not-started`; adding a solution does not mark the exercise as started or completed.

- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]]. This note records the single source exercise identified above.

---
title: "Exercise MF39: Holomorphic Maps Induced by Rational Matrices"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.7, printed p. 63, PDF p. 78; local coordinate summary, printed p. 62, PDF p. 77"
source_refs:
  - "S7/ch-2/sec-4/ex-7"
created: 2026-10-28
---

# Exercise MF39: Holomorphic Maps Induced by Rational Matrices

## Problem Statement

> [!question] Original Exercise 2.4.7
> Suppose that $\Gamma_1$ and $\Gamma_2$ are congruence subgroups of $SL_2(\mathbb Z)$ and that $\gamma$ is an element of $GL_2^+(\mathbb Q)$ such that $\gamma\Gamma_1\gamma^{-1}\subset\Gamma_2$. Show that the formula $\Gamma_1\tau\mapsto\Gamma_2\gamma(\tau)$ defines a holomorphic map $X(\Gamma_1)\longrightarrow X(\Gamma_2)$.
>
> Here $X(\Gamma_j)=\Gamma_j\backslash\mathcal H^*$, where $\mathcal H^*=\mathcal H\cup\mathbb Q\cup\{\infty\}$, and $GL_2^+(\mathbb Q)$ consists of rational two-by-two matrices with positive determinant. The formula includes cusp representatives.

## Hints

> [!hint]- Hint 1
> Well-definedness follows by conjugating an element of $\Gamma_1$. Holomorphy must also be verified in the quotient coordinates at elliptic points and cusps.

> [!hint]- Hint 2
> At an interior point $\tau_1$, straighten $\tau_1$ and $\tau_2=\gamma\tau_1$ to zero. The conjugated fractional linear map is multiplication by a number of absolute value $1$. The order of the first effective stabilizer divides the order of the second.

> [!hint]- Hint 3
> At a cusp, straighten both cusp representatives to $\infty$. The conjugated rational matrix is upper triangular, so it acts as $z\mapsto\lambda z+\mu$ with $\lambda>0$. The subgroup inclusion forces $\lambda h_1/h_2$ to be a positive integer.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution using the local charts constructed in Chapter 2. We import the finite cyclic stabilizer result of Corollary 2.3.5 [S7, printed p. 56 / PDF p. 71] and the quotient-coordinate construction summarized on printed p. 62 / PDF p. 77.
>
> **The map on classes.** A real matrix of positive determinant maps $\mathcal H$ to itself: for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,
> $$
> \operatorname{Im}(\gamma z)=\frac{\det(\gamma)\operatorname{Im}z}{|cz+d|^2}>0.
> $$
> Rational entries also make $\gamma$ permute $\mathbb Q\cup\{\infty\}$. If $\tau'=\eta\tau$ with $\eta\in\Gamma_1$, then
> $$
> \gamma\tau'=(\gamma\eta\gamma^{-1})(\gamma\tau),
> \qquad\gamma\eta\gamma^{-1}\in\Gamma_2.
> $$
> Thus $F(\Gamma_1\tau)=\Gamma_2\gamma\tau$ is well defined on all of $X(\Gamma_1)$.
>
> To handle signs uniformly, put $K_j=\{\pm I\}\Gamma_j$. It has exactly the same orbits as $\Gamma_j$, and $\gamma K_1\gamma^{-1}\subseteq K_2$. The effective stabilizers and cusp widths below are calculated with these groups; this does not require $-I\in\Gamma_j$.
>
> **Interior points, including elliptic points.** Fix $\tau_1\in\mathcal H$ and put $\tau_2=\gamma\tau_1$. For $j=1,2$ let
> $$
> \delta_j(z)=\frac{z-\tau_j}{z-\overline{\tau_j}},\qquad
> e_j=|(K_j)_{\tau_j}/\{\pm I\}|.
> $$
> The integer $e_j$ is $1$ at an ordinary point, and is the effective elliptic period otherwise. The source's local quotient coordinate is
> $$
> q_j=(\delta_j(z))^{e_j}.
> $$
> Conjugation by $\gamma$ embeds the first effective stabilizer into the second: its kernel modulo scalars is trivial because $\gamma\eta\gamma^{-1}=\pm I$ implies $\eta=\pm I$. These are finite groups, so Lagrange's theorem gives $e_1\mid e_2$.
>
> Real entries imply $\gamma\overline{\tau_1}=\overline{\tau_2}$. Subtracting the two fractional linear expressions gives, for $z$ near $\tau_1$,
> $$
> \delta_2(\gamma z)
> =\frac{c\overline{\tau_1}+d}{c\tau_1+d}\,
> \frac{z-\tau_1}{z-\overline{\tau_1}}
> =\eta\,\delta_1(z),\qquad |\eta|=1.
> $$
> Here $c\tau_1+d\ne0$ because $\tau_1\in\mathcal H$. Shrink the source neighborhood so that its image lies in the target chart. In quotient coordinates the map is exactly
> $$
> q_2=\eta^{e_2}q_1^{e_2/e_1}.
> $$
> The exponent is a positive integer, so this is holomorphic also at $q_1=0$. This covers every interior point, including a source point with trivial stabilizer whose image is elliptic.
>
> **Cusps.** Let $s_1\in\mathbb Q\cup\{\infty\}$ and $s_2=\gamma(s_1)$. Choose $\delta_j\in SL_2(\mathbb Z)$ with $\delta_j(s_j)=\infty$, and let $h_j=h_{s_j,\Gamma_j}>0$ be the cusp widths. The rational matrix
> $$
> A=\delta_2\gamma\delta_1^{-1}
> =\begin{pmatrix}a'&b'\\0&d'\end{pmatrix}
> $$
> fixes $\infty$. Its positive determinant gives $a'd'>0$, hence
> $$
> A(z)=\lambda z+\mu,\qquad
> \lambda=\frac{a'}{d'}>0,\quad\mu=\frac{b'}{d'}\in\mathbb Q.
> $$
> It sends sufficiently high source horoballs into any prescribed target horoball, since $\operatorname{Im}A(z)=\lambda\operatorname{Im}z$.
>
> Put $T^u=\begin{pmatrix}1&u\\0&1\end{pmatrix}$ for a real number $u$. The effective cusp stabilizers are
> $$
> (\delta_jK_j\delta_j^{-1})_\infty
> =\{\pm T^{nh_j}:n\in\mathbb Z\}.
> $$
> Conjugating $T^{h_1}$ and using the group inclusion gives
> $$
> AT^{h_1}A^{-1}=T^{\lambda h_1}
> \in(\delta_2K_2\delta_2^{-1})_\infty.
> $$
> Therefore $\lambda h_1=mh_2$ for an integer $m$. Positivity of $\lambda,h_1,h_2$ gives $m\geq1$.
>
> Write $z=\delta_1(\tau)$. In the cusp coordinates, with zero assigned to each cusp,
> $$
> \begin{aligned}
> q_1&=\exp(2\pi iz/h_1),\\
> q_2&=\exp(2\pi i(\lambda z+\mu)/h_2)\\
> &=\exp(2\pi i\mu/h_2)\,q_1^m.
> \end{aligned}
> $$
> This power expression is holomorphic at $q_1=0$ and agrees there with $F(\Gamma_1s_1)=\Gamma_2s_2$. Thus $F$ is holomorphic at every cusp as well as every interior point, as required.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** The original exercise and chart summary were checked on rendered source pages [S7, Exercise 2.4.7, printed p. 63 / PDF p. 78; Figure 2.7 coordinate formulas, printed p. 62 / PDF p. 77]. The detailed proof is an independent derivation; the source exercise itself does not contain this solution.
- **Proof inputs:** The finite cyclic stabilizers and the existence of the displayed quotient charts are imported from Chapter 2. The argument proves the assigned descent and its holomorphy rather than assuming that a fractional linear map automatically descends holomorphically across branch points.
- **Ramification:** The local exponents are $e_2/e_1$ at an interior point and $\lambda h_1/h_2$ at a cusp. The latter need not equal $h_1/h_2$, because the rational matrix can rescale height and translation length.
- **Check:** For $\Gamma_1=\Gamma(3)$, $\Gamma_2=SL_2(\mathbb Z)$, and $\gamma=I$, the cusp $\infty$ has widths $h_1=3$, $h_2=1$, so the map is $q_2=q_1^3$. This also checks the direction of the width ratio.
- **Routing:** The central task is holomorphic descent in modular-curve coordinates, so the note belongs to Modular Forms.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

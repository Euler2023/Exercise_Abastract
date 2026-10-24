---
title: "Exercise MF20: Surjectivity of the Modular Invariant by a Contour Integral"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.9, printed p. 10, PDF p. 25"
source_refs:
  - "S7/ch-1/sec-1/ex-9"
created: 2026-10-24
---

# Exercise MF20: Surjectivity of the Modular Invariant by a Contour Integral

## Problem Statement

> [!question] Exercise 1.1.9
> This exercise shows that the modular invariant $j:\mathcal H\to\mathbb C$ is a surjection. Suppose that $c\in\mathbb C$ and $j(\tau)\ne c$ for all $\tau\in\mathcal H$. Consider the integral
> $$
> \frac1{2\pi i}\int_\gamma\frac{j'(\tau)\,d\tau}{j(\tau)-c}
> $$
> where $\gamma$ is the contour shown in Figure 1.1 containing an arc of the unit circle from $(-1+i\sqrt3)/2$ to $(1+i\sqrt3)/2$, two vertical segments up to any height greater than $1$, and a horizontal segment. By the Argument Principle the integral is $0$. Use the fact that $j$ is invariant under $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ to show that the integrals over the two vertical segments cancel. Use the fact that $j$ is invariant under $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ to show that the integrals over the two halves of the circular arc cancel. For the integral over the remaining piece of $\gamma$ make the change of coordinates $q=e^{2\pi i\tau}$, remembering that $j'(\tau)$ denotes derivative with respect to $\tau$ and that $j'(\tau)=1/q+\cdots$, and compute that it equals $1$. This contradiction shows that $j(\tau)=c$ for some $\tau\in\mathcal H$ and $j$ surjects.

> [!warning] Source issue — derivative and contour orientation
> The printed statement says $j'(\tau)=1/q+\cdots$ while explicitly differentiating with respect to $\tau$. Since $dq/d\tau=2\pi iq$ and $j=q^{-1}+O(1)$, the correct expansion is $j'(\tau)=-2\pi i/q+O(q)$. The printed formula is preserved above; the solution uses the corrected derivative through $dj$ and states the contour orientation explicitly. Figure 1.1 has no orientation arrows.

### Source Figure

![[Attachments/diamond-shurman-ch01-fig-1.1.png]]

Figure 1.1, printed p. 11 / PDF p. 26; direct crop.

## Hints

> [!hint]- Hint 1
> Use the differential $\omega=dj/(j-c)$. Invariance of $j$ means that its pullback under $T$ and $S$ equals itself.

> [!hint]- Hint 2
> Orient the contour counterclockwise around the region above the circular arc. The upper edge runs right to left, hence its $q$-circle runs clockwise. Write $j-c=q^{-1}H(q)$ with $H(0)=1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Use the source facts that $j$ is holomorphic on $\mathcal H$, invariant under $T:\tau\mapsto\tau+1$ and $S:\tau\mapsto-1/\tau$, and has a convergent cusp expansion $j(\tau)=q^{-1}+O(1)$ [S7, printed p. 7, PDF p. 22]. Holomorphy uses Corollary 1.4.2: $\Delta(\tau)\ne0$ for every $\tau\in\mathcal H$ [S7, statement and proof, printed p. 34, PDF p. 49]. Here $\Delta=g_2^3-27g_3^2=(2\pi)^{12}\Delta_{\mathrm{norm}}$ and $j=1728g_2^3/\Delta$, in the source normalization. Let $\rho=(-1+i\sqrt3)/2$.
>
> Assume $j-c$ has no zero on $\mathcal H$. Its logarithmic differential $\omega=j'(\tau)d\tau/(j(\tau)-c)$ is holomorphic on and inside the displayed contour. Orient the contour with the circular arc from $\rho$ to $\rho+1$, the right edge upward, the upper edge right to left, and the left edge downward. The argument principle (equivalently Cauchy's theorem here) gives $\int_\gamma\omega=0$.
>
> **Vertical edges.** Differentiating $j(T\tau)=j(\tau)$ shows $T^*\omega=\omega$. Translation maps the upward-oriented left edge onto the upward-oriented right edge, while their actual contour directions are opposite, so their integrals cancel.
>
> **Circular arc.** Differentiating $j(S\tau)=j(\tau)$ similarly gives $S^*\omega=\omega$. On the unit circle, write $\tau=e^{i\theta}$; then $S\tau=e^{i(\pi-\theta)}$. Thus $S$ maps the left half, traversed from angle $2\pi/3$ to $\pi/2$, onto the right half traversed from angle $\pi/3$ to $\pi/2$, opposite to its contour direction. Their integrals cancel as well.
>
> **Upper edge.** Choose its height $Y$ sufficiently large and set $q=e^{2\pi i\tau}$. The meromorphic cusp expansion defines
> $$
> H(q)=q(j(\tau)-c),\qquad H(0)=1.
> $$
> For sufficiently small $|q|$, $H$ is holomorphic and nonzero. The differential becomes
> $$
> \omega=d\log(q^{-1}H(q))=-\frac{dq}{q}+\frac{H'(q)}{H(q)}\,dq.
> $$
> Along the upper edge, $\operatorname{Re}\tau$ decreases from $1/2$ to $-1/2$, so $q$ makes one clockwise circuit of $|q|=e^{-2\pi Y}$. The second summand has integral zero by Cauchy's theorem, since $H'/H$ is holomorphic on its disk. Therefore
> $$
> \frac1{2\pi i}\int_{\text{upper edge}}\omega
> =-\frac1{2\pi i}\int_{\text{clockwise circle}}\frac{dq}{q}=1.
> $$
> Combining the three pieces gives $0=1$, a contradiction. Every $c\in\mathbb C$ is therefore attained by $j$.

## Related Concepts

- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]

## Notes

- **Source Figures:** Figure 1.1, “A contour,” printed p. 11 / PDF p. 26; asset type: direct crop from the original PDF. The dashed extension of the semicircle and the real axis are reference geometry, not extra pieces of the integration contour. The exercise itself is on printed p. 10 / PDF p. 25.
- **Inputs and scope:** The argument principle, Cauchy's theorem and the source's holomorphy/invariance/cusp expansion are imported results. No assertion of injectivity on a fundamental domain is needed or proved.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.9, printed p. 10, PDF p. 25]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.

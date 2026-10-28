---
title: "Exercise LA598: Imaginary Part Bounds and Cusp Separation"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.2, printed p. 62, PDF p. 77; Proposition 2.4.2 proof, printed p. 59, PDF p. 74"
source_refs:
  - "S7/ch-2/sec-4/ex-2"
created: 2026-10-28
---

# Exercise LA598: Imaginary Part Bounds and Cusp Separation

## Problem Statement

> [!question] Original Exercise 2.4.2
> (a) Justify the formula $\operatorname{Im}(\gamma(\tau))\leq\max\{\operatorname{Im}(\tau),1/\operatorname{Im}(\tau)\}$ for $\tau\in\mathcal H$ and $\gamma\in SL_2(\mathbb Z)$ used in the proof of Proposition 2.4.2.
>
> (b) In the same proof, verify that $\pi(U_1)$ and $\pi(U_2)$ are disjoint.
>
> **Referenced construction.** The map $\pi:\mathcal H^*\to X(\Gamma)$ is the quotient projection. A cusp representative $s_1$ and an interior point $\tau_2$ are given. Choose $\alpha\in SL_2(\mathbb Z)$ with $\alpha(\infty)=s_1$, and an open neighborhood $U_2$ of $\tau_2$ with compact closure $K\subset\mathcal H$. For $M$ sufficiently large that $SL_2(\mathbb Z)K\cap\mathcal N_M=\varnothing$, put
> $$
> \mathcal N_M=\{z\in\mathcal H:\operatorname{Im}z>M\},
> \qquad U_1=\alpha(\mathcal N_M\cup\{\infty\}).
> $$

## Hints

> [!hint]- Hint 1
> For $\tau=x+iy$ and $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, compute the imaginary part by subtracting the complex conjugate of $\gamma\tau$.

> [!hint]- Hint 2
> Separate $c=0$ from $c\ne0$. In the latter case the integer $c$ has absolute value at least $1$.

> [!hint]- Hint 3
> If a $\Gamma$-translate of $U_2$ meets $U_1$, apply $\alpha^{-1}$ to obtain an $SL_2(\mathbb Z)$-translate of a point of $K$ lying in $\mathcal N_M$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution using the determinant-one identity and compactness of $K$.
>
> **(a).** Let $\tau=x+iy$, $y>0$, and $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$. Since $ad-bc=1$,
> $$
> \begin{aligned}
> \gamma\tau-\overline{\gamma\tau}
> &=\frac{(a\tau+b)(c\overline\tau+d)-(a\overline\tau+b)(c\tau+d)}{|c\tau+d|^2}\\
> &=\frac{\tau-\overline\tau}{|c\tau+d|^2}.
> \end{aligned}
> $$
> Thus
> $$
> \operatorname{Im}(\gamma\tau)
> =\frac{y}{|c\tau+d|^2}
> =\frac{y}{(cx+d)^2+c^2y^2}.
> $$
> If $c=0$, then $ad=1$, so the integers $a,d$ are both $1$ or both $-1$. The denominator is $d^2=1$, and $\operatorname{Im}(\gamma\tau)=y$.
>
> If $c\ne0$, then $c^2\geq1$, and the denominator is at least $c^2y^2\geq y^2$. Consequently $\operatorname{Im}(\gamma\tau)\leq1/y$. Combining the two cases proves the requested maximum bound.
>
> **(b).** The continuous positive function $z\mapsto\operatorname{Im}z$ attains a positive minimum $m$ and a finite maximum $B$ on $K$. Choose
> $$
> M>\max\{B,1/m\}.
> $$
> Part (a) shows that for all $z\in K$ and $\beta\in SL_2(\mathbb Z)$,
> $$
> \operatorname{Im}(\beta z)\leq\max\{\operatorname{Im}z,1/\operatorname{Im}z\}
> \leq\max\{B,1/m\}<M.
> $$
> Hence $SL_2(\mathbb Z)K\cap\mathcal N_M=\varnothing$.
>
> Suppose, contrary to the assertion, that $\pi(U_1)\cap\pi(U_2)\ne\varnothing$. There are $u_1\in U_1$, $u_2\in U_2$ and $\eta\in\Gamma$ with $u_1=\eta u_2$. Since $u_2\in\mathcal H$ and $\eta$ preserves $\mathcal H$, the point $u_1$ is not the cusp $\alpha(\infty)$. Thus $u_1=\alpha z$ for some $z\in\mathcal N_M$. It follows that
> $$
> z=\alpha^{-1}\eta u_2\in SL_2(\mathbb Z)K\cap\mathcal N_M,
> $$
> a contradiction. Therefore the two projected neighborhoods are disjoint.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Source status:** The original problem and the neighborhood construction were checked on rendered source pages [S7, Exercise 2.4.2, printed p. 62 / PDF p. 77; Proposition 2.4.2 proof, printed p. 59 / PDF p. 74]. The proof above is independently supplied.
- **Hypothesis boundary:** The bound uses the integrality of $c$: it is false for arbitrary elements of $SL_2(\mathbb R)$. For example, $\operatorname{diag}(2,1/2)$ takes $i$ to $4i$.
- **Imported input:** A continuous real-valued function on a compact space attains its extrema. No classification of elliptic points is needed.
- **Routing:** The controlling step is the explicit two-by-two matrix formula and its uniform estimate, so this note belongs to Linear Algebra and Modules.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

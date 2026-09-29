---
title: "Exercise LA455: Stability of Approximately Additive and Biadditive Maps"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - additive-maps
  - stability
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 13, printed p. 598, PDF p. 613"
created: 2026-09-29
---

# Exercise LA455: Stability of Approximately Additive and Biadditive Maps

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 13 (Tate)
> Let $E,F$ be complete normed vector spaces over the real numbers. Let $f:E\to F$ be a map having the following property. There exists a number $C>0$ such that for all $x,y\in E$ we have
>
> $$
> |f(x+y)-f(x)-f(y)|\le C.
> $$
>
> Show that there exists a unique additive map $g:E\to F$ such that $|g-f|$ is bounded (i.e. $|g(x)-f(x)|$ is bounded as a function of $x$). Generalize to the bilinear case.
>
> **Printed hint:** Let
>
> $$
> g(x)=\lim_{n\to\infty}\frac{f(2^nx)}{2^n}.
> $$

## Hints

> [!hint]- Hint 1
> The defect estimate at $(x,x)$ controls consecutive terms of the sequence in the printed hint by a geometric series.

> [!hint]- Hint 2
> Scaling the additive defect by $2^{-n}$ makes it vanish. For two variables with uniformly bounded defects in both variables, use $4^{-n}f(2^nx,2^ny)$; explain separately what additional regularity gives real bilinearity.

## Solution

> [!success]- Independent derivation and precise two-variable extension
> **Additive limit.** For $n\ge0$ put $g_n(x)=2^{-n}f(2^nx)$. The defect bound applied twice to the same argument gives
>
> $$
> \|g_{n+1}(x)-g_n(x)\|
> =2^{-n-1}\|f(2^{n+1}x)-2f(2^nx)\|
> \le\frac{C}{2^{n+1}}.
> $$
>
> Thus, for $m>n$, $\|g_m(x)-g_n(x)\|\le C2^{-n}$. Completeness of $F$ gives a limit $g(x)$, and summing from $n=0$ gives the uniform estimate $\|g(x)-f(x)\|\le C$.
>
> For $x,y\in E$,
>
> $$
> \|g_n(x+y)-g_n(x)-g_n(y)\|\le C2^{-n}.
> $$
>
> Passing to the limit gives $g(x+y)=g(x)+g(y)$. If $g'$ is another additive map at bounded distance from $f$, their difference $u=g-g'$ is additive and globally bounded, say $\|u(z)\|\le M$. Then
>
> $$
> \|u(x)\|=2^{-n}\|u(2^nx)\|\le M2^{-n}\longrightarrow0.
> $$
>
> Hence $g'=g$.
>
> **A precise two-variable version.** Let $E_1,E_2$ be real normed vector spaces and $F$ a real Banach space. Suppose $f:E_1\times E_2\to F$ satisfies uniform bounds
>
> $$
> \begin{aligned}
> \|f(x+x',y)-f(x,y)-f(x',y)\|&\le C_1,\\
> \|f(x,y+y')-f(x,y)-f(x,y')\|&\le C_2
> \end{aligned}
> $$
>
> for all arguments. There is a unique biadditive map $b:E_1\times E_2\to F$ at globally bounded distance from $f$. To construct it, set
>
> $$
> b_n(x,y)=4^{-n}f(2^nx,2^ny).
> $$
>
> First expand in the first variable and then the second:
>
> $$
> \|f(2x,2y)-4f(x,y)\|\le C_1+2C_2=:D.
> $$
>
> Consequently $\|b_{n+1}-b_n\|\le D4^{-n-1}$ pointwise and uniformly, so $b_n$ converges and
>
> $$
> \|b(x,y)-f(x,y)\|\le\frac D3.
> $$
>
> The first and second additive defects of $b_n$ are bounded by $C_1 4^{-n}$ and $C_2 4^{-n}$ respectively. Their limits are zero, proving biadditivity. If two such maps differ by a globally bounded biadditive map $u$, then $u(2^nx,2^ny)=4^nu(x,y)$; division by $4^n$ proves $u=0$.
>
> **When this is real linear or bilinear.** Additivity alone only implies $\mathbb Q$-linearity on real vector spaces. If the original $f:E\to F$ is locally bounded near $0$, then so is $g$, because $g-f$ is uniformly bounded. An additive map bounded by $M$ on a ball of radius $\rho$ is continuous at zero: for an integer $N$ with $M/N<\varepsilon$, $\|x\|<\rho/N$ implies $\|g(x)\|=\|g(Nx)\|/N<\varepsilon$. Continuity and rational approximation then give $g(tx)=tg(x)$ for every real $t$.
>
> Similarly, if each section $x\mapsto f(x,y)$ and each section $y\mapsto f(x,y)$ is locally bounded near zero, the corresponding sections of $b$ are locally bounded additive maps and hence real linear. Under these additional hypotheses $b$ is $\mathbb R$-bilinear. Continuity of $f$ is one sufficient regularity assumption. Without such hypotheses the unconditional conclusion is biadditivity, not real bilinearity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Maps and Polarization|Quadratic Maps and Polarization]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source and proof status:** The complete statement and limit hint were checked at [S2, Ch. XV, Ex. 13, printed p. 598, PDF p. 613]. The geometric estimates and uniqueness proof are independent expansions. The two-variable hypotheses and regularity discussion are an explicit interpretation of the source's open-ended instruction to generalize.
- **Boundary:** Completeness of $F$ is used for the limits; completeness of the domain is not needed. No continuity of the original map is assumed in the printed additive assertion, so real linearity must not be inserted into its conclusion.
- **Why regularity is necessary:** A discontinuous additive map $a:\mathbb R\to\mathbb R$ has zero additive defect and is its own unique additive approximation. The map $(x,y)\mapsto a(x)a(y)$ is biadditive with zero defects but need not be real bilinear. Such additive maps can be constructed by assigning non-scalar values on a Hamel basis; that existence uses the usual choice of a basis over $\mathbb Q$.

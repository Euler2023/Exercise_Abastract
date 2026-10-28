---
title: "Exercise AG86: The Remaining Odd Weight Dimension Formulas"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.6, Exercise 3.6.4, printed p. 92, PDF p. 106"
source_refs:
  - "S7/ch-3/sec-6/ex-4"
created: 2026-10-28
---

# Exercise AG86: The Remaining Odd Weight Dimension Formulas

## Problem Statement

> [!question] Original Exercise 3.6.4
> Prove the remaining statements in Theorem3.6.1.
>
> For odd $k$ and a congruence subgroup $\Gamma$, the theorem states that $M_k=S_k=0$ if $-I\in\Gamma$. If $-I\notin\Gamma$, for odd $k\ge3$ the dimensions are
> $$
> \dim M_k=(k-1)(g-1)+\lfloor k/3\rfloor\varepsilon_3+\tfrac k2r+\tfrac{k-1}{2}t,
> $$
> $$
> \dim S_k=(k-1)(g-1)+\lfloor k/3\rfloor\varepsilon_3+\tfrac{k-2}{2}r+\tfrac{k-1}{2}t;
> $$
> both vanish for $k<0$. For $k=1$, if $r>2g-2$ then $\dim M_1=r/2$ and $\dim S_1=0$. If $r\le2g-2$ then $\dim M_1\ge r/2$ and $\dim S_1=\dim M_1-r/2$. Here $r,t$ count regular and irregular cusps.

## Hints

> [!hint]- Hint 1
> At weight one, if $D=\lfloor\operatorname{div}(f)\rfloor$, then $K-D=D-R$, where $K=\operatorname{div}(\omega(f^2))$.

> [!hint]- Hint 2
> Riemann–Roch then relates the dimensions of modular and cusp forms directly.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $-I\in\Gamma$, invariance requires $f=f[-I]_k=-f$ for odd $k$, hence $f=0$. Suppose henceforth $-I\notin\Gamma$.
>
> The existence of nonzero meromorphic odd-weight forms is an input established at the end of the section: it uses the divisibility of the Jacobian, the existence of a square root on the simply connected upper half-plane for a meromorphic function with even divisor, and the degree-two function-field argument described there. For $k\ge3$, multiplication by any such $f$ identifies $M_k$ and $S_k$ with the two Riemann–Roch spaces of3.6.3. Their degree computations prove the stated formulas.
>
> If $k<0$ and $f\in M_k$ were nonzero, then $f^{12}\Delta^{-k}$ would be a nonzero weight-zero cusp form. Weight-zero forms are constant functions on the compact curve, and a constant vanishing at a cusp is zero. This contradiction proves both negative-weight vanishings.
>
> It remains to establish the weight-one claims. Choose $0\ne f\in A_1(\Gamma)$, let $\omega=\omega(f^2)$, $K=\operatorname{div}(\omega)$ and $R$ the sum of regular cusps. The integral-part formula at $k=1$ gives
> $$
> D=\lfloor\operatorname{div}(f)\rfloor=\tfrac12(K+R),\qquad K-D=D-R.
> $$
> This equality concerns integral divisors even though it is written using halves. Multiplication by $f$ gives $\dim M_1=\ell(D)$, $\dim S_1=\ell(D-R)$. Since $\deg K=2g-2$, $\deg D=g-1+r/2$, and Riemann–Roch yields
> $$
> \ell(D)-\ell(D-R)=\deg D-g+1=r/2.
> $$
> Thus $\dim M_1\ge r/2$ and the stated difference formula always holds. If $r>2g-2$, then $\deg(D-R)=g-1-r/2<0$; a negative-degree divisor has no nonzero Riemann–Roch section, so $\dim S_1=0$ and $\dim M_1=r/2$. This proves the stronger first case and completes all assertions. It also shows that $r$ is even.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 92 / PDF 106. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

---
title: "Exercise AG75: Exponential Pullback and Compatibility of Differentials"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.2, printed p. 82, PDF p. 96"
source_refs:
  - "S7/ch-3/sec-3/ex-2"
created: 2026-10-28
---

# Exercise AG75: Exponential Pullback and Compatibility of Differentials

## Problem Statement

> [!question] Original Exercise 3.3.2
> (a) Let $\psi=\rho\circ\delta$ where $\delta\in SL_2(\mathbb Z)$ and $\rho(z)=e^{2\pi iz/h}$. Let $\omega=g(q)(dq)^n$. Show that $\psi^*(\omega)=f(\tau)(d\tau)^n$ with $f=\widetilde f[\delta]_{2n}$ and $\widetilde f(z)=(2\pi i/h)^nq^ng(q)$ where $q=e^{2\pi iz/h}$.
>
> (b) Consider the situation $\pi:\mathcal H\longrightarrow X(\Gamma)$ as described in the small in diagram (3.5). Show that if the local meromorphic differentials $\omega_j$ pull back under $\psi_j^*$ to restrictions of some common global meromorphic differential $f(\tau)d\tau$ on $\mathcal H$ then they are compatible. Exercise 3.3.1(d) is relevant.
>
> **Diagram relation.** For a common lift of an overlap, the transition map $\varphi_{k,j}$ satisfies $\varphi_{k,j}\circ\psi_j=\psi_k$.

> [!warning] Source issue
> Part (b) prints $f(\tau)d\tau$ although (a) treats degree $n$; this is literal degree one, and the general version uses $f(\tau)(d\tau)^n$. Also, the small diagram proves compatibility on a common lift. For the global quotient assertion one needs the common differential to be $\Gamma$-invariant, as in the surrounding automorphic construction and the final “$f\in\mathcal A_{2n}(\Gamma)$” condition on printed p. 80 / PDF p. 94. The solution proves this intended version and exhibits the boundary of the unqualified formulation.

## Hints

> [!hint]- Hint 1
> Differentiate the exponential and then compose with $\delta$.

> [!hint]- Hint 2
> Pull back the difference of the two proposed overlap forms. Injectivity of pullback forces that difference to vanish. For different lifts, use invariance under $\Gamma$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Since $dq=(2\pi i/h)q\,dz$,
> $$
> \rho^*(g(q)(dq)^n)
> =g(e^{2\pi iz/h})\left(\frac{2\pi i}{h}q\right)^n(dz)^n
> =\widetilde f(z)(dz)^n.
> $$
> Write $\delta=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. Its determinant is $1$, so $d(\delta\tau)=(c\tau+d)^{-2}d\tau$. Pulling back once more gives
> $$
> \psi^*\omega=\widetilde f(\delta\tau)(c\tau+d)^{-2n}(d\tau)^n
> =(\widetilde f[\delta]_{2n})(\tau)(d\tau)^n.
> $$
> This is the required formula.
>
> **(b), on a common lift.** Let $W\subseteq U_j\cap U_k\cap\mathcal H$ be an open lift of an overlap. Write $F=f(\tau)(d\tau)^n$ and suppose $\psi_j^*\omega_j=F|_{U_j}$ and $\psi_k^*\omega_k=F|_{U_k}$. By contravariance and the diagram relation,
> $$
> \psi_j^*(\varphi_{k,j}^*\omega_k-\omega_j)
> =\psi_k^*\omega_k-\psi_j^*\omega_j=0\quad\text{on }W.
> $$
> The map $\psi_j:W\to\psi_j(W)$ is a nonconstant holomorphic surjection. Its pullback is injective by Exercise 3.3.1(d), so $\varphi_{k,j}^*\omega_k=\omega_j$ on this overlap image.
>
> **Full quotient overlaps.** In the intended automorphic situation, $F$ is $\Gamma$-invariant, equivalently $f[\gamma]_{2n}=f$ for every $\gamma\in\Gamma$. If a point in $\pi(U_j)\cap\pi(U_k)$ has lifts $\tau\in U_j$ and $\gamma\tau\in U_k$, shrink to $W\subseteq U_j\cap\gamma^{-1}U_k$. The diagram relation is now $\varphi_{k,j}\psi_j=\psi_k\gamma$. Pulling back the difference gives
> $$
> \psi_j^*(\varphi_{k,j}^*\omega_k-\omega_j)
> =\gamma^*F-F=0.
> $$
> Injectivity gives compatibility near every noncusp point of the overlap. Any cusp in an overlap is an isolated missing point of that computation. The coefficients of both local forms are meromorphic there, so equality on a punctured neighborhood extends across the point by equality of Laurent series. This proves compatibility on the whole quotient.
>
> The invariance condition cannot be dropped for arbitrary choices of lifts. For example, take $\Gamma(3)$ and $\gamma=\begin{pmatrix}1&0\\3&1\end{pmatrix}$. Choose ordinary small neighborhoods of $i$ and $\gamma i$ on which the projection is bijective, and use the inverse lifts themselves as coordinates. The local forms $dq_j$ pull back to the same global $d\tau$ on their respective lift neighborhoods. Yet the transition is $q_k=\gamma q_j$, whose pullback sends $dq_k$ to $(3q_j+1)^{-2}dq_j\ne dq_j$. Thus arbitrary common $F$ alone does not imply global quotient compatibility.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 82 / PDF 96. The solution above is independently derived.
- **Source context:** The local diagram is (3.5), printed p. 79 / PDF p. 93; the full construction is on printed pp. 79–81 / PDF pp. 93–95. The common-lift and translated-lift arguments are explicitly distinguished.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

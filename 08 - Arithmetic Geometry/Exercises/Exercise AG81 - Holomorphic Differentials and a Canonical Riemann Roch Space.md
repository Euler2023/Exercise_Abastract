---
title: "Exercise AG81: Holomorphic Differentials and a Canonical Riemann Roch Space"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.4, Exercise 3.4.3, printed p. 85, PDF p. 99"
source_refs:
  - "S7/ch-3/sec-4/ex-3"
created: 2026-10-28
---

# Exercise AG81: Holomorphic Differentials and a Canonical Riemann Roch Space

## Problem Statement

> [!question] Original Exercise 3.4.3
> Recalling from the discussion immediately after Theorem 3.3.1 that $\Omega^1(X(\Gamma))=\mathbb C(X(\Gamma))\lambda$ for any nonzero $\lambda\in\Omega^1(X(\Gamma))$, show that the map $\Omega^1(X(\Gamma))\longrightarrow\mathbb C(X(\Gamma))$ taking each $f_0\lambda$ to $f_0$ is a vector space isomorphism mapping the holomorphic subspace $\Omega^1_{\mathrm{hol}}(X(\Gamma))$ to the linear space $L(\lambda)$.

> [!warning] Source issue
> The definition of $L(D)$ takes a divisor $D$ as input, whereas the exercise denotes a differential by $\lambda$. Thus its $L(\lambda)$ means $L(\operatorname{div}(\lambda))$, not a new operation on differentials.

## Hints

> [!hint]- Hint 1
> Divide two local differential coefficients; the coordinate-change factors cancel.

> [!hint]- Hint 2
> A differential is holomorphic exactly when every coefficient of its divisor is nonnegative.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $X=X(\Gamma)$ and $K=\operatorname{div}(\lambda)$. The quotient of two meromorphic one-differentials is a globally defined meromorphic function: in a coordinate $z$, the quotient $(a(z)\,dz)/(b(z)\,dz)=a(z)/b(z)$ is unchanged on overlaps. Thus every differential has a unique representation $f_0\lambda$, including the zero differential with $f_0=0$. The quotient map is complex-linear with inverse $f_0\mapsto f_0\lambda$.
>
> For nonzero $f_0$, each point satisfies
> $$
> \nu_x(f_0\lambda)=\nu_x(f_0)+\nu_x(\lambda).
> $$
> Consequently $f_0\lambda$ is holomorphic if and only if $\operatorname{div}(f_0)+K\ge0$, exactly the defining condition for $f_0\in L(K)$. Zero is included in both spaces. The restricted isomorphism is therefore $\Omega^1_{\mathrm{hol}}(X)\simeq L(K)$. Riemann–Roch, in the form $\ell(K)=g(X)$, additionally gives its dimension.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 85 / PDF 99. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

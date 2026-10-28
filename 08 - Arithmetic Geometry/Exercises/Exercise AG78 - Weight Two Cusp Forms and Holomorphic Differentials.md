---
title: "Exercise AG78: Weight Two Cusp Forms and Holomorphic Differentials"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.6, printed p. 83, PDF p. 97"
source_refs:
  - "S7/ch-3/sec-3/ex-6"
created: 2026-10-28
---

# Exercise AG78: Weight Two Cusp Forms and Holomorphic Differentials

## Problem Statement

> [!question] Original Exercise 3.3.6
> Prove that $S_2(\Gamma)$ and $\Omega^1_{\mathrm{hol}}(X(\Gamma))$ are isomorphic as complex vector spaces. Your proof will incidentally show that the elements of $S_2(\Gamma)$ vanish at the elliptic points of $X(\Gamma)$. Argue this directly as well by examining the text leading up to (3.6).

## Hints

> [!hint]- Hint 1
> Restrict the meromorphic correspondence in Theorem 3.3.1. At a cusp, holomorphy of the differential requires normalized order of the form at least one.

> [!hint]- Hint 2
> At an elliptic point, the local coefficient $u(z)$ satisfies $\zeta u(\zeta z)=u(z)$ in weight two. Its possible exponents are congruent to $-1$ modulo the period.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Theorem 3.3.1, printed p. 81 / PDF p. 95, gives a complex linear isomorphism
> $$
> \mathcal A_2(\Gamma)\longrightarrow\Omega^1(X(\Gamma)),\qquad
> f\longmapsto\omega(f),
> $$
> characterized by $\pi^*\omega(f)=f(\tau)d\tau$. We show that its restriction identifies exactly the two subspaces in the question.
>
> Let $f\in S_2(\Gamma)$. At a nonelliptic interior point the differential has the same nonnegative order as $f$. At an elliptic point of period $h\in\{2,3\}$, let $m=\nu_\tau(f)\ge0$. Rotational invariance gives $h\mid(m+1)$, so $m\ge h-1$. Formula (3.8) then gives
> $$
> \nu_{\pi(\tau)}(\omega(f))=\frac{m+1}{h}-1\ge0.
> $$
> At a cusp, the form vanishes in the cusp coordinate, so $\nu_{\pi(s)}(f)\ge1$ and (3.9) gives $\nu_{\pi(s)}(\omega(f))=\nu_{\pi(s)}(f)-1\ge0$. Hence $\omega(f)$ is holomorphic everywhere.
>
> Conversely, take a holomorphic differential $\omega$ and let $f\in\mathcal A_2(\Gamma)$ be its unique meromorphic preimage. At an interior point of period $h$, rearrange (3.8):
> $$
> \nu_\tau(f)=h\nu_{\pi(\tau)}(\omega)+(h-1)\ge0.
> $$
> At each cusp, (3.9) gives $\nu_{\pi(s)}(f)=\nu_{\pi(s)}(\omega)+1\ge1$. Thus $f$ is holomorphic in $\mathcal H$ and vanishes at every cusp, making $f\in S_2(\Gamma)$. The original linear isomorphism therefore restricts to the asserted isomorphism.
>
> For the direct vanishing argument, straighten an elliptic point to zero and write the pulled-forward differential as $u(z)dz$. Invariance under the nonidentity rotation $z\mapsto\zeta z$ gives $\zeta u(\zeta z)=u(z)$. Since $f$ and therefore $u$ are holomorphic at zero, evaluation there yields $(\zeta-1)u(0)=0$. As $\zeta\ne1$, we obtain $u(0)=0$, and the nonzero coordinate-change factor gives $f(\tau)=0$. Comparing all Laurent coefficients strengthens this to $m\equiv-1\pmod h$, hence vanishing order at least $h-1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 83 / PDF 97. The solution above is independently derived.
- **Proof boundary:** The ambient meromorphic isomorphism is a named source theorem. The exercise-specific identification of the holomorphic subspaces, both directions, and the separate elliptic-point vanishing argument are proved above.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

---
title: "Exercise AG76: Descending Differentials through Local Power and Cusp Maps"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.4, printed p. 83, PDF p. 97"
source_refs:
  - "S7/ch-3/sec-3/ex-4"
created: 2026-10-28
---

# Exercise AG76: Descending Differentials through Local Power and Cusp Maps

## Problem Statement

> [!question] Original Exercise 3.3.4
> (a) For a neighborhood $U_j\subset\mathcal H$, show that the local differential $\omega_j$ in (3.6) pulls back under $\rho_j$ to $\lambda_j$. How was $\omega_j$ found in the first place?
>
> (b) Same question for $\omega_j$ in (3.7) when $U_j$ contains a cusp.
>
> **Referenced construction, printed pp. 80–81 / PDF pp. 94–95.** Put $k=2n$, let $\alpha=\delta_j^{-1}$ and $\lambda_j=u(z)(dz)^n$ with $u=f[\alpha]_{2n}$. At an interior point of period $h$, $z^nu(z)=g_j(z^h)$, $\rho_j(z)=z^h$ and
> $$
> \omega_j=\frac{g_j(q)}{(hq)^n}(dq)^n.\tag{3.6}
> $$
> At a cusp of width $h$, $u(z)=g_j(e^{2\pi iz/h})$, $\rho_j(z)=e^{2\pi iz/h}$ and
> $$
> \omega_j=\frac{g_j(q)}{(2\pi iq/h)^n}(dq)^n.\tag{3.7}
> $$

## Hints

> [!hint]- Hint 1
> To find a differential $a(q)(dq)^n$, solve $a(\rho(z))(\rho^\prime(z))^n=u(z)$.

> [!hint]- Hint 2
> At the interior point multiply by $z^n$ before using rotational invariance. At a cusp use $dq/dz=(2\pi i/h)q$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** For $q=z^h$, direct pullback gives
> $$
> \rho_j^*\omega_j
> =\frac{g_j(z^h)}{(hz^h)^n}(hz^{h-1})^n(dz)^n
> =z^{-n}g_j(z^h)(dz)^n
> =u(z)(dz)^n=\lambda_j.
> $$
> The identity first holds away from $z=0$ and then holds as a meromorphic identity at zero.
>
> To discover the formula, begin with $a(q)(dq)^n$ and impose $a(z^h)(hz^{h-1})^n=u(z)$. Solving formally gives
> $$
> a(z^h)=\frac{z^nu(z)}{(hz^h)^n}.
> $$
> This is a function of $q=z^h$ because invariance of $\lambda_j$ under $z\mapsto\zeta z$, $\zeta^h=1$, says $u(\zeta z)\zeta^n=u(z)$. Hence $z^nu(z)$ is invariant. Its Laurent expansion has only exponents divisible by $h$, so it is $g_j(z^h)$ for a meromorphic $g_j$. This both constructs the stated coefficient and proves its meromorphy.
>
> **(b).** At the cusp, put $q=e^{2\pi iz/h}$. Then $dq=(2\pi i/h)q\,dz$, and
> $$
> \rho_j^*\omega_j
> =\frac{g_j(q)}{(2\pi iq/h)^n}
> \left(\frac{2\pi i}{h}q\right)^n(dz)^n
> =g_j(q)(dz)^n=\lambda_j.
> $$
> The formula is again obtained by dividing $u(z)$ by $(dq/dz)^n$.
>
> Here the weight is the even integer $2n$. Even at an irregular cusp, a generator $-T^h$ has automorphy factor whose $2n$th power is $1$. Thus $u(z+h)=u(z)$, so its cusp expansion actually has integral powers of the width variable $q$. Meromorphy at the cusp gives a finite Laurent principal part for $g_j$, and dividing by $q^n$ preserves meromorphy at zero. Consequently (3.7) is a genuine meromorphic differential on the filled cusp chart.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 83 / PDF 97. The solution above is independently derived.
- **Proof boundary:** Half-integral cusp exponents can occur in odd weight. This exercise descends even-weight forms to integral tensor powers of differentials, so the even-weight invariance removes that potential ambiguity.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

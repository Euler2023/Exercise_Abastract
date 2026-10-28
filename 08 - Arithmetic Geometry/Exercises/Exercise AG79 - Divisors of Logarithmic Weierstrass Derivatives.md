---
title: "Exercise AG79: Divisors of Logarithmic Weierstrass Derivatives"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.4, Exercise 3.4.1, printed p. 85, PDF p. 99"
source_refs:
  - "S7/ch-3/sec-4/ex-1"
created: 2026-10-28
---

# Exercise AG79: Divisors of Logarithmic Weierstrass Derivatives

## Problem Statement

> [!question] Original Exercise 3.4.1
> Confirm the section's formula for $\operatorname{div}(\wp_i'/\wp_i)$. What is $\operatorname{div}(\wp_{\mu_3}'/\wp_{\mu_3})$?
>
> Here $\Lambda_\tau=\tau\mathbb Z+\mathbb Z$, $\mu_3=e^{2\pi i/3}$, and the section's formula on $\mathbb C/\Lambda_i$ is
> $$
> \operatorname{div}(\wp_i'/\wp_i)=-[0]+[1/2]+[i/2]-[(1+i)/2].
> $$

## Hints

> [!hint]- Hint 1
> Compute the zero and pole divisors of the numerator and denominator separately.

> [!hint]- Hint 2
> On the triangular lattice $g_2=0$. The two zeros of $\wp$ are the nonzero points fixed by multiplication by $\mu_3$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $[z]$ for the class of $z$ on the relevant torus. We use the established Weierstrass identities: $\wp$ has a unique pole, of order two at $[0]$; $\wp'$ has a pole of order three there and simple zeros at the three nonzero two-torsion points; and
> $$
> (\wp')^2=4\wp^3-g_2\wp-g_3.
> $$
> For the square lattice $g_3=0$, and the rotational identity $\wp(iz)=-\wp(z)$ forces $\wp((1+i)/2)=0$. Its derivative also vanishes there. The cubic has three distinct roots, so $\wp''$ is nonzero at that half-period; hence the zero of $\wp$ is double. Degree zero of a principal divisor then gives
> $$
> \operatorname{div}(\wp_i)=2[(1+i)/2]-2[0],\qquad
> \operatorname{div}(\wp_i')=[1/2]+[i/2]+[(1+i)/2]-3[0].
> $$
> Their difference is the requested formula.
>
> Put $\rho=\mu_3$ and $a=(1-\rho)/3$. The identity $(\rho-1)a=\rho$ shows that $[a]$ and $[-a]$ are the two nonzero fixed points of multiplication by $\rho$. Since $\wp(\rho z)=\rho^{-2}\wp(z)=\rho\wp(z)$, both are zeros of $\wp_\rho$. They are distinct and nonzero; the pole degree is two, so both zeros are simple. Equivalently, $g_2=0$, $g_3\ne0$ implies $\wp'\ne0$ wherever $\wp=0$. Therefore
> $$
> \operatorname{div}(\wp_\rho'/\wp_\rho)=
> -[0]+[1/2]+[\rho/2]+[(1+\rho)/2]-[a]-[-a].
> $$
> The coefficient sum is zero in each answer, as required for a meromorphic function on a compact curve.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 85 / PDF 99. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

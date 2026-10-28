---
title: "Exercise AG112: The Divisor of y over x on a Cubic"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.3, Exercise 7.3.3, printed p. 279, PDF p. 292"
source_refs:
  - "S7/ch-7/sec-3/ex-3"
created: 2026-10-28
---

# Exercise AG112: The Divisor of y over x on a Cubic

## Problem Statement

> [!question] Original Exercise 7.3.3
> Compute the divisor of $F(x,y)=y/x$ on the elliptic curve $y^2=4x^3-4$. Use the results of Exercise 1.4.3 to verify that it corresponds to the divisor of the meromorphic function $F(z)=\wp'_{\mu_3}(z)/\wp_{\mu_3}(z)$ on $\mathbb C/\Lambda_{\mu_3}$.

## Hints

> [!hint]- Hint 1
> Find zeros of the numerator and denominator separately and use local uniformizers.

> [!hint]- Hint 2
> At infinity the orders of $x,y$ are $-2,-3$. Compare the three half-periods and two hexagonal zeros.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $\rho=e^{2\pi i/3}$. The zeros of $y$ are the points $(1,0),(\rho,0),(\rho^2,0)$. At each, the derivative of $4x^3-4$ is $12x^2\ne0$, so $y$ is a uniformizer and has order $1$. The denominator $x$ is a unit there.
>
> The zeros of $x$ are $(0,2i)$ and $(0,-2i)$. Since the partial derivative in $y$ is nonzero, $x$ is a uniformizer at either point. Here $y$ is a unit, so $F$ has a simple pole at each. There are no other finite zeros or poles.
>
> At infinity, the $y=1$ projective chart gives local coordinates $u=x/y,v=1/y$ with relation $v=4u^3-4v^3$. Thus $u$ is a uniformizer, $\nu(v)=3$, and the original functions have
> $$
> \nu_{0_E}(x)=\nu(u/v)=-2,\qquad
> \nu_{0_E}(y)=\nu(1/v)=-3.
> $$
> Consequently
> $$
> \operatorname{div}(y/x)
> =(1,0)+(\rho,0)+(\rho^2,0)
> -(0,2i)-(0,-2i)-(0_E).
> $$
> Its degree is $3-3=0$, checking the multiplicities.
>
> On the hexagonal torus, Exercise 1.4.3 gives simple zeros of $\wp$ at
> $$
> u_0=(1+2\rho)/3,\qquad v_0=(2+\rho)/3
> $$
> modulo $\Lambda_\rho$, while $\wp'$ has simple zeros at the three nonzero half-periods $1/2,\rho/2,(1+\rho)/2$. The double and triple poles of $\wp,\wp'$ at zero leave a simple pole of their quotient. Thus its divisor is
> $$
> (1/2)+(\rho/2)+((1+\rho)/2)-(u_0)-(v_0)-(0).
> $$
> The lattice scaling in Exercise 1.4.3 identifies the torus with the cubic having half-period roots $1,\rho,\rho^2$. Scaling multiplies the quotient $\wp'/\wp$ by a nonzero constant and therefore leaves its divisor unchanged. Under that isomorphism the three half-periods are the three two-torsion zeros above, and the two zeros of $\wp$ map to $(0,\pm2i)$. The analytic and algebraic divisors therefore agree.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 279 / PDF p. 292. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Normalization:** The identification with the particular equation uses a homothety of the hexagonal lattice, as in the complete Exercise 1.4.3. Unscaled lattice invariants need not have $g_3=4$; the quotient's divisor is unchanged by the resulting nonzero scalar.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

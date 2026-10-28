---
title: "Exercise AG133: Legendre Forms and Integral Parameters"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.4, Exercise 8.4.2, printed p. 340, PDF p. 353"
source_refs:
  - "S7/ch-8/sec-4/ex-2"
created: 2026-10-28
---

# Exercise AG133: Legendre Forms and Integral Parameters

## Problem Statement

> [!question] Original Exercise 8.4.2
> (a) Show that the general Weierstrass equation over $\overline{\mathbb Q}$ is taken by an admissible change over $\overline{\mathbb Q}$ to Legendre form $y^2=x(x-1)(x-\lambda)$, where $\lambda\in\overline{\mathbb Q}\setminus\{0,1\}$.
>
> (b) Change this to $y^2=x(x-1)(x-1/\lambda)$ by another admissible change over $\overline{\mathbb Q}$. Why may we assume $\lambda\in\overline{\mathbb Z}_{(\mathfrak p)}$?
>
> (c) Confirm the formulas for $\Delta,c_4$ arising from Legendre form.

> **Context and notation.** $\mathfrak p$ is a maximal ideal of the algebraic integers above a rational prime; $\overline{\mathbb Z}_{(\mathfrak p)}$ is its local valuation ring in $\overline{\mathbb Q}$. The general equation is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. “General” here retains the nonsingularity hypothesis of an elliptic curve; a singular cubic cannot have $\lambda\ne0,1$.

## Hints

> [!hint]- Hint 1
> Complete the square and use the three distinct roots of the resulting cubic.

> [!hint]- Hint 2
> Scale $x$ by $\lambda$ to exchange $\lambda$ with its inverse; one of these is in the valuation ring.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) The equation is nonsingular in the elliptic-curve setting of the section. Complete the square in $y$; its cubic right side factors over $\overline{\mathbb Q}$ as $(x-\alpha)(x-\beta)(x-\gamma)$ with distinct roots. Choose $u$ with $u^2=\beta-\alpha$ and put $x=u^2X+\alpha$, $y=u^3Y$ after the square completion. The equation becomes
> $$
> Y^2=X(X-1)(X-\lambda),\qquad\lambda=\frac{\gamma-\alpha}{\beta-\alpha}.
> $$
> Distinct roots give $\lambda\ne0,1$. Completing the square and this affine scaling are admissible transformations with algebraic parameters.
>
> (b) Choose a square root $v$ of $\lambda$, and substitute $x=v^2X=\lambda X$, $y=v^3Y$. Dividing by $\lambda^3$ gives $Y^2=X(X-1)(X-1/\lambda)$. The localization $\overline{\mathbb Z}_{(\mathfrak p)}$ is a valuation ring: for a nonzero algebraic number $a$, either $\nu_{\mathfrak p}(a)\ge0$ or $\nu_{\mathfrak p}(a^{-1})\ge0$. Thus at least one of $\lambda,1/\lambda$ is integral at $\mathfrak p$, and exchanging them achieves the claim. The change may enlarge the number field, which is allowed over $\overline{\mathbb Q}$.
>
> (c) The Legendre coefficients are $a_1=a_3=a_6=0$, $a_2=-(1+\lambda)$, $a_4=\lambda$. Hence
> $$
> b_2=-4(1+\lambda),\quad b_4=2\lambda,\quad b_6=0,\quad b_8=-\lambda^2.
> $$
> Substitution gives $c_4=16(1-\lambda+\lambda^2)$ and
> $$
> \Delta=16(1+\lambda)^2\lambda^2-64\lambda^3=16\lambda^2(1-\lambda)^2.
> $$
> In particular $j=256(1-\lambda+\lambda^2)^3/(\lambda^2(1-\lambda)^2)$, consistent with the invariant of the transformed curve.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 340 / PDF p. 353. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

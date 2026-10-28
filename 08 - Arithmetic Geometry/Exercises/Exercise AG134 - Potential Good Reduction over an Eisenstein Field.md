---
title: "Exercise AG134: Potential Good Reduction over an Eisenstein Field"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.4, Exercise 8.4.4, printed p. 340, PDF p. 353"
source_refs:
  - "S7/ch-8/sec-4/ex-4"
created: 2026-10-28
---

# Exercise AG134: Potential Good Reduction over an Eisenstein Field

## Problem Statement

> [!question] Original Exercise 8.4.4
> (a) Show $E:y^2=x^3-9x$ is in reduced form over $\mathbb Q$ and defines an elliptic curve over $\mathbb Q$ with additive reduction at $3$.
>
> (b) Let $K=\mathbb Q(\mu_6)$ with $\mu_6=e^{2\pi i/6}$, satisfying $x^2-x+1=0$, and $\mathcal O_K=\mathbb Z[\mu_6]$. Section 3.7 gives $3\mathcal O_K=\mathfrak p_K^2$ with $\mathfrak p_K=\langle1+\mu_6\rangle$. Put $\pi=1+\mu_6$ and show $3=\mu_6^5\pi^2$.
>
> (c) Apply over $K$ the admissible change $(x,y)=(\mu_6^2\pi^2x',\mu_6^3\pi^3y')$. What is the reduction type at $\mathfrak p_K$? What is the reduction type of $E/\overline{\mathbb Q}$ at any maximal ideal $\mathfrak p$ over $3$? (A hint is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Compute $c_4$ and the discriminant before and after the change.

> [!hint]- Hint 2
> Use $\pi^2=3\mu_6$ to show that the scaling parameter has fourth power $9$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) The coefficients are $(0,0,0,-9,0)$ and the invariants are $c_4=432=2^4\cdot3^3$ and $\Delta=64\cdot9^3=2^6\cdot3^6\ne0$. At either possible bad prime its discriminant valuation is less than twelve, so the integral equation is minimal there and hence globally minimal (the reduced integral model relevant here). At $3$ its discriminant and $c_4$ both vanish. The reduced cubic $y^2=x^3$ is cuspidal, so its reduction is additive.
>
> (b) Put $\zeta=\mu_6$. Since $\zeta^2=\zeta-1$, $(1+\zeta)^2=1+2\zeta+\zeta^2=3\zeta$. Multiplication by $\zeta^{-1}=\zeta^5$ proves the identity.
>
> (c) The change has $u=\zeta\pi$, $r=s=t=0$. Its fourth power is $u^4=\zeta^4\pi^4=\zeta^4\cdot9\zeta^2=9$. Dividing the equation by $u^6$ therefore gives
> $$
> (y')^2=(x')^3-x'.
> $$
> This new equation has discriminant $64$, which is a unit at $\mathfrak p_K$. Thus over $K$ the curve has good reduction there. The residue characteristic is three; the reduction $y^2=x^3-x$ has four points over $\mathbb F_3$, giving trace zero, so it is supersingular by Proposition 8.3.3. Every maximal ideal of $\overline{\mathbb Z}$ above $3$ restricts to $\mathfrak p_K$ because $3$ is ramified with that unique prime in $K$. The same equation is integral with unit discriminant at each such ideal, and its geometric special fiber is supersingular. Hence over $\overline{\mathbb Q}$ the curve has good supersingular reduction at every prime above $3$. This displays why additive reduction over $\mathbb Q$ can become good after extending the ground field.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 340 / PDF p. 353. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

---
title: "Exercise AG118: An Explicit Degree Two Isogeny and Its Dual"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.8, Exercise 7.8.3, printed p. 304, PDF p. 317"
source_refs:
  - "S7/ch-7/sec-8/ex-3"
created: 2026-10-28
---

# Exercise AG118: An Explicit Degree Two Isogeny and Its Dual

## Problem Statement

> [!question] Original Exercise 7.8.3
> Consider $E:y^2=4x^3-4x$ and $E':\widetilde y^2=4\widetilde x^3+\widetilde x$. Let
> $$
> \varphi(x,y)=\left(\frac{y^2}{16x^2},\frac{y(x^2+1)}{8x^2}\right)=(\widetilde x,\widetilde y).
> $$
> Show that $\varphi$ takes $E$ to $E'$ and $\varphi(0_E)=0_{E'}$. Compute $\ker\varphi$. Let
> $$
> \psi(\widetilde x,\widetilde y)=\left(\frac{\widetilde y^2}{4\widetilde x^2},\frac{\widetilde y(4\widetilde x^2-1)}{4\widetilde x^2}\right).
> $$
> Confirm that $\psi$ takes $E'$ to $E$ and that $\psi\circ\varphi=[\deg\varphi]$ on $E$.

## Hints

> [!hint]- Hint 1
> Replace $y^2$ by $4x(x^2-1)$ before substituting into the target equation.

> [!hint]- Hint 2
> The poles of the target $x$-coordinate locate the inverse images of infinity. Compare the composition with the tangent doubling formula.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> On $E$ put $u=(x^2-1)/(4x)$ and $v=y(x^2+1)/(8x^2)$. The equation of $E$ gives
> $$
> v^2=\frac{(x^2-1)(x^2+1)^2}{16x^3}=4u^3+u.
> $$
> Thus the displayed rational map has image on $E'$. A rational map from a nonsingular projective curve to a projective curve extends uniquely at the finitely many omitted points. At $0_E$, $x$ and $y$ have pole orders two and three; $u\sim x/4$ and $v\sim y/8$ have poles, so the extension maps $0_E$ to infinity. At $(0,0)$, $y$ is a uniformizer and $x\sim-y^2/4$, so $u,v$ again have poles of orders two and three. These are the only poles of $u$. Therefore the inverse image of $0_{E'}$ is exactly $\{0_E,(0,0)\}$. An origin-preserving nonconstant morphism of elliptic curves is a group homomorphism; hence this is its kernel. Alternatively the pole divisor of $u$ has degree four, while the $u$ map on $E'$ has degree two, proving $\deg\varphi=2$.
>
> For $\psi$ use the equation of $E'$ to write its coordinates as
> $$
> X=\frac{4u^2+1}{4u},\qquad Y=\frac{v(4u^2-1)}{4u^2}.
> $$
> Then
> $$
> Y^2=\frac{(4u^2+1)(4u^2-1)^2}{16u^3}=4X^3-4X.
> $$
> It extends by the same nonsingular-projective-curve argument and preserves infinity. Substitution in the composition gives
> $$
> X=\frac{(x^2+1)^2}{4x(x^2-1)},\qquad
> Y=\frac{y(x^2+1)(x^4-6x^2+1)}{8x^2(x^2-1)^2}.
> $$
> The tangent to $E$ at $(x,y)$ has slope $m=(6x^2-2)/y$. The chord–tangent formulas give $x([2]P)=m^2/4-2x=(x^2+1)^2/(4x(x^2-1))$ and $y([2]P)=-y+m(x-x([2]P))$, which simplifies to the displayed $Y$. Thus the morphisms agree on a dense open subset, hence everywhere. This proves $\psi\varphi=[2]=[\deg\varphi]$, including all omitted affine points.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 304 / PDF p. 317. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Computational check:** Symbolic polynomial reduction of both target equations and factorization of the composition were independently run; the derivation above also displays the identities needed for the proof.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

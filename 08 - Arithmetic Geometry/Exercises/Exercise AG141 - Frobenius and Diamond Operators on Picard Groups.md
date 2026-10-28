---
title: "Exercise AG141: Frobenius and Diamond Operators on Picard Groups"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.7, Exercise 8.7.2, printed pp. 359\u2013360, PDF pp. 372\u2013373"
source_refs:
  - "S7/ch-8/sec-7/ex-2"
created: 2026-10-28
---

# Exercise AG141: Frobenius and Diamond Operators on Picard Groups

## Problem Statement

> [!question] Original Exercise 8.7.2
> Show that diagram (8.34), the bottom square of the cube in the section, commutes.
>
> (a) Show that the following diagrams commute, with downward maps as in Theorem 8.6.1:
> $$
> \begin{array}{ccc}
> \operatorname{Div}^0(\widetilde S_1(N)')&\xrightarrow{\sigma_p}&\operatorname{Div}^0(\widetilde S_1(N)')\\
> \downarrow&&\downarrow\\
> \operatorname{Div}^0(\widetilde X_1(N)^{\mathrm{planar}})&\xrightarrow{\sigma_{p,*}}&\operatorname{Div}^0(\widetilde X_1(N)^{\mathrm{planar}})
> \end{array}
> \qquad
> \begin{array}{ccc}
> \operatorname{Div}^0(\widetilde S_1(N)')&\xrightarrow{p\sigma_p^{-1}}&\operatorname{Div}^0(\widetilde S_1(N)')\\
> \downarrow&&\downarrow\\
> \operatorname{Div}^0(\widetilde X_1(N)^{\mathrm{planar}})&\xrightarrow{\sigma_p^*}&\operatorname{Div}^0(\widetilde X_1(N)^{\mathrm{planar}}).
> \end{array}
> $$
> (Hints are at the end of the book.)
>
> (b) Use Theorem 8.6.1 to show that the analogous diagrams with $\operatorname{Pic}^0(\widetilde X_1(N))$ in the bottom row commute.
>
> (c) Recall $\langle d\rangle[E,Q]=[E,[d]Q]$ in characteristic zero, and define $\widetilde{\langle d\rangle}$ by the same formula in characteristic $p$. They commute with reduction, also on degree-zero divisors. Show that
> $$
> \begin{array}{ccc}
> \operatorname{Div}^0(\widetilde S_1(N)')&\xrightarrow{\widetilde{\langle d\rangle}}&\operatorname{Div}^0(\widetilde S_1(N)')\\
> \downarrow&&\downarrow\\
> \operatorname{Pic}^0(\widetilde X_1(N))&\xrightarrow{\widetilde{\langle d\rangle}_*}&\operatorname{Pic}^0(\widetilde X_1(N))
> \end{array}\tag{8.39}
> $$
> commutes. Here the characteristic-zero diamond formula comes from Exercise 1.5.3 and Section 5.2.
>
> (d) Use (b) and (8.39) to complete the proof of commutation of (8.34).

> **Context and notation.** The level satisfies $p\nmid N$, and $(d,N)=1$ in (c). Igusa's Theorem provides the moduli map and the smooth model over $\mathbb F_p$. The map to Picard groups sends a degree-zero sum of moduli points to the divisor class of their curve images. The notation $p\sigma_p^{-1}$ acts on the free divisor group with multiplicity $p$; it is not asserted to be a degree-one algebraic inverse morphism of Frobenius.

## Hints

> [!hint]- Hint 1
> On geometric points Frobenius is bijective, but its morphism degree is $p$; pullback counts that multiplicity.

> [!hint]- Hint 2
> Prove compatibility for Frobenius, inverse Frobenius with multiplicity, and the diamond operator separately, then add the two resulting homomorphisms.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Write $D=\operatorname{Div}^0(\widetilde S_1(N)')$, $X=\widetilde X_1(N)$ and let $u:D\to\operatorname{Pic}^0(X)$ be the moduli-to-curve map followed by divisor class. All formulas are on the common open set obtained by the priming convention; the finitely many exceptional points are omitted consistently. The planar map is $[E_j,Q]\mapsto(j,x(Q))$, and its nonsingular-model identification is over $\mathbb F_p$ by Igusa's Theorem.
>
> (a) Applying $\sigma_p$ to the moduli data sends the planar coordinates $(j,x)$ to $(j^p,x^p)$. This is exactly Frobenius on the plane curve, proving the pushforward square on points and hence by linearity on divisors. For pullback, Frobenius is a purely inseparable morphism of degree $p$ on a smooth curve over $\mathbb F_p$. Every geometric point $R$ has the unique inverse point $R^{\sigma_p^{-1}}$, with ramification multiplicity $p$. Consequently
> $$
> \sigma_p^*(R)=p(R^{\sigma_p^{-1}}),\qquad\sigma_{p,*}(R)=(R^{\sigma_p}).
> $$
> On the smooth planar open this proves the second square. For a divisor of degree zero both operations retain degree zero, so the stated diagrams follow.
>
> (b) The birational identification of the planar model with its nonsingular projective model is defined over $\mathbb F_p$, hence commutes with Frobenius and inverse Frobenius on geometric points wherever defined. The preceding point formulas therefore hold after transporting to $X$. Pushforward and pullback by a finite morphism preserve principal divisors (respectively via the function-field norm and function pullback), so they pass to Picard classes. Thus
> $$
> u\sigma_p=\sigma_{p,*}u,\qquad u(p\sigma_p^{-1})=\sigma_p^*u.
> $$
> The use of Igusa here is the identification of the correct smooth model and of its moduli map, not merely the coordinate reduction computation.
>
> (c) In characteristic zero the moduli map is compatible with $[E,Q]\mapsto[E,[d]Q]$ and the diamond automorphism of the modular curve. The automorphism is defined over $\mathbb Q$ and its reduction is the automorphism denoted $\widetilde{\langle d\rangle}$. Reduction of multiplication by $d$ on an elliptic curve gives $\widetilde{[d]Q}=[d]\widetilde Q$, so the moduli reduction square commutes pointwise. The reduction map on the primed moduli sets is surjective by the lifting assertion in Theorem 8.6.1. Take any reduced divisor and choose lifts of its finitely many points. The characteristic-zero compatibility, the two reduction squares, and compatibility of curve-map pushforward with reduction (Theorem 8.5.9) now give
> $$
> u\widetilde{\langle d\rangle}=\widetilde{\langle d\rangle}_*u.
> $$
> This is independent of the chosen lifts because both resulting sides are defined on the reduced divisor. If $X$ has genus zero the target Picard group is zero and the assertion is automatic; otherwise the positive-genus reduction compatibility of the diamond automorphism applies. This accounts for all levels.
>
> (d) Put $d=p$, which is a unit modulo $N$. The required square (8.34), printed p. 357 / PDF p. 370, is
> $$
> \begin{array}{ccc}
> D&\xrightarrow{\sigma_p+p\widetilde{\langle p\rangle}\sigma_p^{-1}}&D\\
> u\downarrow&&\downarrow u\\
> \operatorname{Pic}^0(X)&\xrightarrow{\sigma_{p,*}+\widetilde{\langle p\rangle}_*\sigma_p^*}&\operatorname{Pic}^0(X).
> \end{array}
> $$
> Using the two identities of (b) and the identity of (c), compute
> $$
> u(\sigma_p+p\widetilde{\langle p\rangle}\sigma_p^{-1})
> =\sigma_{p,*}u+\widetilde{\langle p\rangle}_*u(p\sigma_p^{-1})
> =(\sigma_{p,*}+\widetilde{\langle p\rangle}_*\sigma_p^*)u.
> $$
> This proves precisely its commutation. The factor $p$ occurs in pullback multiplicity, while the Frobenius pushforward has one image point with coefficient one.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 359–360 / PDF pp. 372–373. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

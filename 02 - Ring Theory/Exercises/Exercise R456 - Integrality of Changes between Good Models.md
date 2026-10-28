---
title: "Exercise R456: Integrality of Changes between Good Models"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.4, Exercise 8.4.3, printed p. 340, PDF p. 353"
source_refs:
  - "S7/ch-8/sec-4/ex-3"
created: 2026-10-28
---

# Exercise R456: Integrality of Changes between Good Models

## Problem Statement

> [!question] Original Exercise 8.4.3
> Show that any admissible change of variables over $\overline{\mathbb Q}$ between two $\mathfrak p$-integral Weierstrass equations of good reduction entails $r,s,t\in\overline{\mathbb Z}_{(\mathfrak p)}$. (A hint for this exercise is at the end of the book.)

> **Context and notation.** An admissible change is $x=u^2x'+r$, $y=u^3y'+su^2x'+t$, $u\ne0$. Integral means integral in the local ring of the specified prime, not necessarily an algebraic integer at every prime.

## Hints

> [!hint]- Hint 1
> Good reduction makes the discriminants units, so the scaling parameter is a unit.

> [!hint]- Hint 2
> Use the weighted $b_6,b_8$ formulas at residue characteristics $3,2$, then the $a_2,a_6$ formulas at $2$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Put the coefficients and the four change parameters in a finite number field $K$, and choose the prime below $\mathfrak p$. Let $v$ be its valuation, with $v(0)=+\infty$. Good reduction makes both discriminants units. The relation $\Delta=u^{12}\Delta'$ gives $v(u)=0$. Thus every weighted primed coefficient in the transformation formulas is integral.
>
> From $12r=u^2b_2'-b_2$, $r$ is integral unless the residue characteristic is $2$ or $3$. In characteristic $3$, if $v(r)<0$, the term $4r^3$ in
> $$
> u^6b_6'-b_6=2rb_4+r^2b_2+4r^3
> $$
> has strictly smaller valuation than the others, while the left side is integral. This is impossible. In characteristic $2$, use $u^8b_8'-b_8=3rb_6+3r^2b_4+r^3b_2+3r^4$; the last term is uniquely of least valuation if $v(r)<0$. Hence $r$ is integral in every case.
>
> Next $2s=ua_1'-a_1$ proves $s$ integral away from residue characteristic two. At two, $u^2a_2'=a_2-sa_1+3r-s^2$ rules out $v(s)<0$, since the square term would be uniquely of least valuation. Finally $2t=u^3a_3'-a_3-ra_1$ proves $t$ integral away from two. At two, use
> $$
> u^6a_6'=a_6+ra_4-ta_3+r^2a_2-rta_1+r^3-t^2;
> $$
> if $v(t)<0$, its square term would have strictly smaller valuation than the linear terms and all integral terms. This contradiction proves $v(t)\ge0$. All three parameters therefore belong to the local ring, as required. The argument allows fractional normalized valuations and hence ramification in $K$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 340 / PDF p. 353. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

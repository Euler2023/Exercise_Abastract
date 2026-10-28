---
title: "Exercise R454: Integral Changes between Global Minimal Equations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.3, printed p. 332, PDF p. 345"
source_refs:
  - "S7/ch-8/sec-3/ex-3"
created: 2026-10-28
---

# Exercise R454: Integral Changes between Global Minimal Equations

## Problem Statement

> [!question] Original Exercise 8.3.3
> Let $E,E'$ be global minimal Weierstrass equations, related by $x=u^2x'+r$, $y=u^3y'+su^2x'+t$.
>
> (a) Explain why $u=\pm1$.
>
> (b) Use the formulas relating $b_i',b_i$ in Exercise 8.1.1(b) to show $r\in\mathbb Z$. (Hints are at the end of the book.)
>
> (c) Use its formulas for $a_i',a_i$ to show $s,t\in\mathbb Z$. Thus the change reduces modulo every prime.

## Hints

> [!hint]- Hint 1
> Compare discriminants at each prime. A rational unit at every prime is $\pm1$.

> [!hint]- Hint 2
> To handle denominators at $3$ use the $b_6$ formula, and at $2$ use the $b_8$, $a_2$ and $a_6$ formulas.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) Equivalent global minimal equations have the same minimal discriminant valuation at every prime. Since $\Delta=u^{12}\Delta'$, $12\nu_p(u)=0$ for every prime $p$. A nonzero rational number with zero valuations everywhere is $\pm1$.
>
> (b) With $u=\pm1$, all weighted primed invariants are integers. From $12r=u^2b_2'-b_2$, $r$ is $p$-integral outside $2,3$. If $\nu_3(r)<0$, the term $4r^3$ in $u^6b_6'-b_6=2rb_4+r^2b_2+4r^3$ is uniquely of least, negative valuation, impossible. If $\nu_2(r)<0$, the term $3r^4$ in $u^8b_8'-b_8=3rb_6+3r^2b_4+r^3b_2+3r^4$ gives the same contradiction. Thus $r$ is integral at all primes and is an integer.
>
> (c) From $2s=ua_1'-a_1$, only a denominator at $2$ is possible. If $\nu_2(s)<0$, in $u^2a_2'=a_2-sa_1+3r-s^2$ the square term is uniquely of negative least valuation. This contradicts the integral left side, proving $s\in\mathbb Z$. The formula $2t=u^3a_3'-a_3-ra_1$ likewise leaves only $2$ as a possible denominator prime for $t$. In
> $$
> u^6a_6'=a_6+ra_4-ta_3+r^2a_2-rta_1+r^3-t^2,
> $$
> all terms not involving $t$ are integral. If $t$ had negative $2$-adic valuation, $t^2$ would have strictly smaller valuation than the linear terms, again impossible. Hence $t\in\mathbb Z$.
>
> The change and its inverse now have integral coefficients and unit scaling $u=\pm1$. Reducing either modulo any prime gives inverse admissible changes, so the reduced equations are isomorphic as pointed projective cubics at every prime, including bad primes.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 332 / PDF p. 345. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

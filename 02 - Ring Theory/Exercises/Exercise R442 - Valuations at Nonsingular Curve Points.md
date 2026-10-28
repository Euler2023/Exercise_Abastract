---
title: "Exercise R442: Valuations at Nonsingular Curve Points"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.6, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-6"
created: 2026-10-28
---

# Exercise R442: Valuations at Nonsingular Curve Points

## Problem Statement

> [!question] Original Exercise 7.2.6
> Show that the valuation at $P$ on $\bar k(C)$ is well defined and prove Proposition 7.2.4.

> **Context and notation.** Proposition 7.2.4, printed p. 265 / PDF p. 278, says that for a nonsingular curve the map $\nu_P:\bar k(C)\to\mathbb Z\cup\{+\infty\}$ is surjective, $\nu_P(FG)=\nu_P(F)+\nu_P(G)$, and $\nu_P(F+G)\ge\min(\nu_P(F),\nu_P(G))$, with equality when the two input valuations differ. A uniformizer generates the local maximal ideal.

## Hints

> [!hint]- Hint 1
> Use a uniformizer and the unique expression as its power times a local unit.

> [!hint]- Hint 2
> For the sum, factor out the smaller power and reduce the remaining factor modulo the maximal ideal.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $A=\bar k[C]_P$ and $M=tA$ be its maximal ideal. We use the source-proved local structure: $A$ is a Noetherian domain and every nonzero element has a unique form $t^e u$ with $e\ge0$ and $u$ a unit. To recall existence, repeated division by $t$ without reaching a unit would produce an infinite strictly increasing chain of principal ideals. Uniqueness of the exponent follows because a positive power of the nonunit $t$ cannot be a unit.
>
> Every nonzero fraction therefore has a form $F=t^m u$ with $m\in\mathbb Z$ and $u\in A^*$. If also $F=t^{m'}u'$, assuming $m>m'$ gives $u'=t^{m-m'}u\in M$, contrary to $u'$ being a unit. Thus $m=m'$. This defines $\nu_P(F)=m$ independently of the fraction representation. Equivalently, if $f/g=f'/g'$, the equality $fg'=f'g$ and additivity of the exponents of products gives $\nu_P(f)-\nu_P(g)=\nu_P(f')-\nu_P(g')$.
>
> For $F=t^m u$ and $G=t^n v$, their product is $t^{m+n}uv$ with unit $uv$, so $\nu_P(FG)=m+n$. If $m\le n$, then
> $$
> F+G=t^m(u+t^{n-m}v).
> $$
> The parenthesis belongs to $A$, giving $\nu_P(F+G)\ge m$, with $\nu_P(0)=+\infty$ if cancellation is total. If $m<n$, its residue modulo $M$ is the nonzero residue of $u$, so the parenthesis is a unit and equality holds. Symmetry proves the other unequal case. Finally $\nu_P(t^m)=m$ for every integer $m$, and $\nu_P(0)=+\infty$, proving surjectivity.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

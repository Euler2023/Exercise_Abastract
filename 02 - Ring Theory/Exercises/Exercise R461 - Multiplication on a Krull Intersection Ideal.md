---
title: "Exercise R461: Multiplication on a Krull Intersection Ideal"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.8, printed p. 351, PDF p. 364"
source_refs:
  - "S7/ch-8/sec-5/ex-8"
created: 2026-10-28
---

# Exercise R461: Multiplication on a Krull Intersection Ideal

## Problem Statement

> [!question] Original Exercise 8.5.8
> In the proof of Lemma 8.5.6, show that $\alpha J=J$.

> **Context and notation.** Lemma 8.5.6, printed p. 347 / PDF p. 360, assumes $R$ is a Noetherian domain, $\alpha$ is a nonunit, and $J=\bigcap_{e=0}^{\infty}\alpha^eR$.

## Hints

> [!hint]- Hint 1
> Use membership in $\alpha^{e+1}R$ to divide once by $\alpha$.

> [!hint]- Hint 2
> Cancel $\alpha$ only after treating $\alpha=0$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> If $\alpha=0$, then $J=\bigcap_{e\ge0}\alpha^eR=0$, and the conclusion holds. Assume $\alpha\ne0$.
>
> For $x\in J$ and every $e\ge1$, membership in $\alpha^{e-1}R$ gives $\alpha x\in\alpha^eR$. It is also in $R$, so $\alpha J\subset J$.
>
> Conversely if $y\in J$, then $y=\alpha x$ for some $x\in R$, because $y\in\alpha R$. For every $e\ge0$, the stronger membership $y\in\alpha^{e+1}R$ gives $y=\alpha^{e+1}r_e$. Canceling the nonzero $\alpha$ in the domain yields $x=\alpha^e r_e$. Thus $x\in J$ and $y\in\alpha J$. This proves $J\subset\alpha J$.
>
> Noetherianity and the nonunit hypothesis are used later in the Krull-intersection argument, but this equality itself requires only the domain property and the separate zero case.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 351 / PDF p. 364. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

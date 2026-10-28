---
title: "Exercise R439: Maximal Ideals from Point Evaluation"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.2, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-2"
created: 2026-10-28
---

# Exercise R439: Maximal Ideals from Point Evaluation

## Problem Statement

> [!question] Original Exercise 7.2.2
> Show that $m_P$ is a maximal ideal of $\bar k[C]$.

> **Context and notation.** For a geometric point $P$, $m_P=\{f\in\bar k[C]:f(P)=0\}$; this is the ideal introduced on printed p. 263 / PDF p. 276.

## Hints

> [!hint]- Hint 1
> Use evaluation at $P$.

> [!hint]- Hint 2
> A quotient ring is a field exactly when the kernel of the quotient map is maximal.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Write $A=\bar k[C]=\bar k[x_1,\ldots,x_n]/I$ and let $P=(p_1,\ldots,p_n)\in C$. Evaluation defines a ring homomorphism
> $$
> \operatorname{ev}_P:A\longrightarrow\bar k,\qquad f+I\longmapsto f(P).
> $$
> It is well defined because every element of $I$ vanishes at $P$. It is surjective because every constant occurs as a value. Its kernel is exactly $m_P$, by the definition of that ideal. The first isomorphism theorem gives $A/m_P\simeq\bar k$, a field, so $m_P$ is maximal.
>
> For completeness, its coordinate generators follow by writing a polynomial as its constant Taylor term at $P$ plus a sum of multiples of $x_i-p_i$. Thus $m_P=(x_1-p_1,\ldots,x_n-p_n)$ in $A$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

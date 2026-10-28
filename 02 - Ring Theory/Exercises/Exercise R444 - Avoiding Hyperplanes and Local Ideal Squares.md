---
title: "Exercise R444: Avoiding Hyperplanes and Local Ideal Squares"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.3, Exercise 7.3.2, printed p. 279, PDF p. 292"
source_refs:
  - "S7/ch-7/sec-3/ex-2"
created: 2026-10-28
---

# Exercise R444: Avoiding Hyperplanes and Local Ideal Squares

## Problem Statement

> [!question] Original Exercise 7.3.2
> (a) Let $\{v_P:P\in S\}$ be a finite set of nonzero vectors in $\bar k^{n+1}$. Show that some vector $a\in\bar k^{n+1}$ is not orthogonal to any $v_P$. (A hint for this exercise is at the end of the book.)
>
> (b) Show that $M_{S,P}\cap M_P^2=M_{S,P}^2$.

> **Context and notation.** Printed p. 275 / PDF p. 288 defines
> $$
> \bar k[C]_S=\{f/g:g(Q)\ne0\text{ for every }Q\in S\},\qquad
> M_{S,P}=\{F\in\bar k[C]_S:F(P)=0\}.
> $$
> Also $M_P$ is the maximal ideal in the local ring at $P$. The finite set $S$ contains $P$.

## Hints

> [!hint]- Hint 1
> A finite union of proper hyperplanes cannot fill a vector space over an infinite field.

> [!hint]- Hint 2
> Repeat the localization-square proof with the semilocal coordinate ring in place of the global one.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** Write the vectors as $v_1,\ldots,v_m$, and for $a=(a_0,\ldots,a_n)$ consider the polynomial
> $$
> H(a)=\prod_{i=1}^m(a\cdot v_i).
> $$
> Each linear factor is nonzero because $v_i\ne0$, so $H$ is a nonzero polynomial in the polynomial domain. Over the infinite field $\bar k$, a nonzero polynomial cannot vanish at every point: this follows by induction on the number of variables from the fact that a nonzero one-variable polynomial has at most its degree many roots. Choose a point where $H(a)\ne0$. Every required dot product is then nonzero. If $S$ is empty the assertion is vacuous.
>
> **(b)** Put $A=\bar k[C]$, $B=\bar k[C]_S$, and $m=M_{S,P}$. Localizing $B$ at $m$ gives $A_P$ and sends $m$ to $M_P$. The forward inclusion $m^2\subset m\cap M_P^2$ holds immediately. Suppose $s\in m\cap M_P^2$. Clear denominators in the localized ideal square to write $s=r/t$ with $r\in m^2$ and $t\in B\setminus m$. Evaluation at $P$ makes $B/m\simeq\bar k$, so choose $v\in B$ with $1-tv\in m$. Since $st=r$ in the function field,
> $$
> s=s(1-tv)+rv\in m^2.
> $$
> Thus the two ideals are equal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 279 / PDF p. 292. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Field boundary:** The infinite-field hypothesis holds because the chapter is in characteristic zero. A finite field can be covered by finitely many proper hyperplanes; the assertion is not stated for arbitrary finite fields.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

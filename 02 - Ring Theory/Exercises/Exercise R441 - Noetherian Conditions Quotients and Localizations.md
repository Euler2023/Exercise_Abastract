---
title: "Exercise R441: Noetherian Conditions Quotients and Localizations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.5, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-5"
created: 2026-10-28
---

# Exercise R441: Noetherian Conditions Quotients and Localizations

## Problem Statement

> [!question] Original Exercise 7.2.5
> A special case of the Hilbert Basis Theorem says that $\bar k[x_1,\ldots,x_n]$ is Noetherian, meaning that all ideals are finitely generated, or equivalently that there is no infinite chain of proper increasing ideal containments $I_1\subset I_2\subset I_3\subset\cdots$.
>
> (a) Show that the two conditions are equivalent.
>
> (b) Let $I$ be an ideal of this polynomial ring. Show that ideals of the quotient are in bijection with ideals of the polynomial ring containing $I$. Conclude that the quotient is Noetherian, in particular $\bar k[C]$.
>
> (c) For any ideal $J$ of $\bar k[C]_P$, the contracted ideal $J\cap\bar k[C]$ is finitely generated. Show that its generators also generate $J$, so that the local ring is Noetherian.

## Hints

> [!hint]- Hint 1
> Use the union of a chain for one direction and successively chosen generators for the other.

> [!hint]- Hint 2
> In a localization every denominator is a unit, so an element of an ideal brings its numerator into that ideal.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> **(a)** In any ring $A$, the union $U=\bigcup_i I_i$ of an increasing chain is an ideal. If every ideal is finitely generated, finitely many generators of $U$ lie together in some $I_N$. Then $U=I_N$, so the chain is stationary from $N$ on. Conversely, if an ideal $J$ is not finitely generated, choose $a_1\in J$ and recursively choose $a_{n+1}\in J\setminus(a_1,\ldots,a_n)$. This constructs a strictly increasing chain, contrary to the ascending-chain condition.
>
> **(b)** Let $\pi:A\to A/I$. An ideal $J$ in the quotient has ideal preimage $\pi^{-1}J$ containing $I$. An ideal $L\supset I$ maps to $L/I$. The identities $\pi^{-1}(L/I)=L$ and $\pi(\pi^{-1}J)=J$ show these operations are inverse and preserve inclusion. An increasing chain in the quotient lifts to one in $A$, hence stabilizes. Alternatively, images of finitely many generators of $L$ generate $L/I$.
>
> **(c)** Put $A=\bar k[C]$, $S=A\setminus m_P$, and $B=S^{-1}A$. Let $L=J\cap A$ and choose generators $a_1,\ldots,a_r$ of $L$. If $a/s\in J$, then $a/1=(s/1)(a/s)\in J$, so $a\in L$. Hence $a=\sum_i b_i a_i$ with $b_i\in A$, giving
> $$
> \frac as=\sum_i\frac{b_i}{s}a_i.
> $$
> Thus $J\subset(a_1,\ldots,a_r)B$, and the reverse containment follows from $a_i\in J$. Every ideal of $B$ is finitely generated, proving the local Noetherian property.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Imported input:** Hilbert's Basis Theorem for a polynomial ring over a field is given in the exercise; the quotient and localization consequences are proved here.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

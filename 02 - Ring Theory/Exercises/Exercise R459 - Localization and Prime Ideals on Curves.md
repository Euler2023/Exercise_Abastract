---
title: "Exercise R459: Localization and Prime Ideals on Curves"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.3, printed p. 350, PDF p. 363"
source_refs:
  - "S7/ch-8/sec-5/ex-3"
created: 2026-10-28
---

# Exercise R459: Localization and Prime Ideals on Curves

## Problem Statement

> [!question] Original Exercise 8.5.3
> Let $C/k$ be an algebraic curve, $k[C]$ its coordinate ring, $P$ a point, $\mathfrak m=\mathfrak m_P$ its maximal ideal, and $M$ the corresponding maximal ideal of $k[C]_P$. Show there is a bijection from the prime ideals of $\mathfrak m$ to those of $M$, given by $I\mapsto Ik[C]_P$, with inverse $J\mapsto J\cap\mathfrak m$. Since the local ring is a discrete valuation ring, its only primes are $\{0\},M$. Consequently every nonzero prime ideal of $k[C]$ is maximal: it lies in some maximal ideal, and Hilbert's Nullstellensatz identifies such ideals as $\mathfrak m_P$.

> [!warning] Source issue
> “Prime ideals of $\mathfrak m$” means ambient prime ideals contained in $\mathfrak m$; the ideal itself is not being treated as a unital ring. The DVR sentence requires $P$ nonsingular, as in the surrounding discussion of nonsingular curves. For arbitrary $k$, maximal ideals correspond to closed points, not necessarily $k$-rational points. These hypotheses are explicit in the proof.

## Hints

> [!hint]- Hint 1
> This is the extension–contraction correspondence for localization at $A\setminus\mathfrak m$.

> [!hint]- Hint 2
> An element outside $\mathfrak m$ becomes a unit. Use this to prove that contraction and extension are inverse.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Write $A=k[C]$ and $S=A\setminus\mathfrak m$. The intended prime ideals are prime ideals of $A$ contained in $\mathfrak m$, and prime ideals of $S^{-1}A$ contained in $M=S^{-1}\mathfrak m$.
>
> For a prime $I\subset\mathfrak m$, $I\cap S=\varnothing$. The quotient $S^{-1}A/S^{-1}I\simeq S^{-1}(A/I)$ is a nonzero domain, hence $S^{-1}I$ is prime. If $a/1\in S^{-1}I$, some $s\in S$ satisfies $sa\in I$. Since $s\notin I$ and $I$ is prime, $a\in I$. Thus contraction returns $I$.
>
> Conversely let $J$ be a prime of $S^{-1}A$. Every $s/1$ for $s\in S$ is a unit, so its contraction $I=\{a:a/1\in J\}$ is disjoint from $S$ and contained in $\mathfrak m$. It is prime by contraction of prime ideals. Since $a/s\in J$ if and only if $a/1\in J$, extending $I$ returns $J$. The contraction is also $J\cap\mathfrak m$ under the inclusion $A\hookrightarrow S^{-1}A$ for this domain. This proves the bijection, including its inverse.
>
> At a nonsingular closed point of an integral curve, $A_P$ is a discrete valuation ring. Every nonzero ideal of a DVR is a power of its maximal ideal, and a prime power is prime only when its exponent is one; thus its primes are $(0),M$. If $I\ne0$ is prime in $A$, choose a maximal $\mathfrak m\supset I$. Under localization a nonzero $a\in I$ stays nonzero because $A$ is a domain. Its extension is therefore the nonzero prime $M$, and contraction gives $I=\mathfrak m$. Over an algebraically closed field the weak Nullstellensatz identifies maximal ideals with geometric points. Over a general field use closed points with their finite residue extensions instead; the localization correspondence itself needs no algebraic closedness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 350 / PDF p. 363. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

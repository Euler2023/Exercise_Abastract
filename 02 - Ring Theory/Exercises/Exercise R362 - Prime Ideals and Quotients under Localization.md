---
title: "Exercise R362: Prime Ideals and Quotients under Localization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 2, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise R362: Prime Ideals and Quotients under Localization

## Problem Statement

> [!question] Neukirch I.11.2
> Show that, in the above situation, the prime ideals of $A_S$ correspond $1$-$1$ to the prime ideals of $A$ which are disjoint from $S$. If $\mathfrak p\subseteq A$ and $\mathfrak p_S\subseteq A_S$ correspond in this way, then $A_S/\mathfrak p_S$ is the localization of $A/\mathfrak p$ with respect to the image of $S$.

## Hints

> [!hint]- Hint 1: Write extended ideals as fractions
> For an ideal $I\subseteq A$, its extension is $I A_S=\{a/s:a\in I,s\in S\}$. A finite sum of these fractions again has a numerator in $I$.

> [!hint]- Hint 2: Reduce modulo a prime disjoint from the denominators
> Define $A_S\to(A/\mathfrak p)_{\bar S}$ by $a/s\mapsto\bar a/\bar s$. The target is a nonzero domain. Its kernel consists exactly of the fractions with numerator in $\mathfrak p$.

> [!hint]- Hint 3: Contract a prime in the localized ring
> If $Q\subsetneq A_S$ is prime, its contraction $\mathfrak p$ is disjoint from $S$, because the images of denominators are units. Show $a/s\in Q$ exactly when $a/1\in Q$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $A$ be commutative with identity and let $1\in S$, $0\notin S$. Write $\iota:A\to A_S$ for $a\mapsto a/1$; this map need not be injective.
>
> **1. Extend a prime and compute the quotient.** Fix a prime $\mathfrak p$ with $\mathfrak p\cap S=\varnothing$, and let $\bar S$ be the image of $S$ in the domain $A/\mathfrak p$. Define
> $$
> \theta:A_S\longrightarrow(A/\mathfrak p)_{\bar S},
> \qquad a/s\longmapsto\bar a/\bar s.
> $$
> An equality witnessed by $t(s'a-sa')=0$ descends to the same relation modulo $\mathfrak p$, so this is well-defined. The fraction formulas show that it is a ring homomorphism, and it is onto by lifting a numerator and denominator.
>
> Its value at $a/s$ is zero exactly when $\bar t\bar a=0$ for some $t\in S$. Since $A/\mathfrak p$ is a domain and $\bar t\ne0$, this is equivalent to $a\in\mathfrak p$. Consequently
> $$
> \ker\theta=\mathfrak p A_S
> =\{a/s:a\in\mathfrak p,\ s\in S\}.
> $$
> The last set equals the extended ideal because denominators can be multiplied to combine finite sums. The quotient theorem gives
> $$
> A_S/\mathfrak p A_S\cong(A/\mathfrak p)_{\bar S}.
> $$
> The right side is a nonzero domain, so $\mathfrak p A_S$ is a proper prime ideal. Its contraction is $\mathfrak p$: the class of $a/1$ in this quotient is zero exactly when $a\in\mathfrak p$.
>
> **2. Recover every localized prime.** Let $Q$ be a prime ideal of $A_S$ and put $\mathfrak p=\iota^{-1}(Q)$. Inverse images of prime ideals under a unital ring map are prime: products in the inverse image are decided by primality of $Q$, and $1$ is excluded. For $s\in S$, $s/1$ is a unit, so it is not in $Q$. Thus $\mathfrak p\cap S=\varnothing$.
>
> For any fraction, multiplying by the unit $s/1$ gives
> $$
> a/s\in Q\quad\Longleftrightarrow\quad a/1\in Q
> \quad\Longleftrightarrow\quad a\in\mathfrak p.
> $$
> Hence $Q=\mathfrak p A_S$. Extension and contraction are therefore mutually inverse, proving both the bijection and the asserted quotient description.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 2, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Source context:** “The above situation” refers to Exercise I.11.1: arbitrary commutative $A$, an $A$-module construction, and a multiplicative set with $1\in S$, $0\notin S$. The source proves the domain case in Proposition (11.1), printed p. 65 / PDF p. 84; the proof here includes zero divisors.
- **Proof scope:** The fraction vanishing test from Exercise I.11.1 and the first ring-isomorphism theorem are the inputs. No injectivity of $A\to A_S$, finite generation, or maximality of $\mathfrak p$ is assumed.
- **Routing:** Prime ideals, ideal extension/contraction, and quotient rings are primary, so Ring Theory is the destination.

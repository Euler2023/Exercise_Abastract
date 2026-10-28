---
title: "Exercise LA623: Classifying Perfect Alternating Pairings"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.4, Exercise 7.4.3, printed p. 282, PDF p. 295"
source_refs:
  - "S7/ch-7/sec-4/ex-3"
created: 2026-10-28
---

# Exercise LA623: Classifying Perfect Alternating Pairings

## Problem Statement

> [!question] Original Exercise 7.4.3
> Show that any function satisfying properties (a), (b), and (c) of the Weil pairing takes the form $e_N^n$ for some $n\in(\mathbb Z/N\mathbb Z)^*$.

> **Context and notation.** The functions are $E[N]\times E[N]\to\mu_N$. Property (a) is bilinearity; (b) is alternation; (c) is nondegeneracy and surjectivity, as in the source's Weil-pairing theorem.

## Hints

> [!hint]- Hint 1
> An alternating pairing on a rank-two free module is determined by its value on one ordered basis.

> [!hint]- Hint 2
> Nondegeneracy forces that value to generate $\mu_N$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> The three properties are bilinearity, alternation, and nondegeneracy with surjectivity onto $\mu_N$. Choose an ordered basis $(P,Q)$ of $E[N]\simeq(\mathbb Z/N\mathbb Z)^2$. Let $e'$ be the other pairing. By the determinant expansion,
> $$
> e'(aP+bQ,cP+dQ)=e'(P,Q)^{ad-bc}.
> $$
> Nondegeneracy shows that $\xi=e'(P,Q)$ has exact order $N$: if its order were $m<N$, the nonzero point $[m]P$ would pair trivially with every point. The same holds for $\zeta=e_N(P,Q)$ by Corollary 7.4.2.
>
> The cyclic group $\mu_N$ has generators exactly $\zeta^n$ with $\gcd(n,N)=1$, so $\xi=\zeta^n$ for a unit class $n$ modulo $N$. For every two basis combinations,
> $$
> e'(aP+bQ,cP+dQ)
> =\zeta^{n(ad-bc)}
> =e_N(aP+bQ,cP+dQ)^n.
> $$
> These are all pairs of points, proving $e'=e_N^n$. Conversely a unit power preserves bilinearity and alternation, and its automorphism of $\mu_N$ preserves nondegeneracy and surjectivity. Thus the unit condition is both necessary and sufficient. For $N=1$ both pairings are the unique trivial pairing and the assertion has its usual trivial-group interpretation.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 282 / PDF p. 295. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

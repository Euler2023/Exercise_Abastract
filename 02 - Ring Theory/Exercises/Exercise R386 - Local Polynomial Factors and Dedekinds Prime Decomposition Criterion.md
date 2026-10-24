---
title: 'Exercise R386: Local Polynomial Factors and Dedekinds Prime Decomposition Criterion'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 5, printed p. 166, PDF p. 185
source_refs:
- S4/ch-II/sec-8/ex-5
created: '2026-10-23'
---

# Exercise R386: Local Polynomial Factors and Dedekinds Prime Decomposition Criterion

## Problem Statement

> [!question] Neukirch II.8.5
> How does proposition (8.2) relate to Dedekind’s proposition, Chapter I, (8.3)?

## Hints

> [!hint]- Hint 1
> (8.2) uses irreducible factors over the completed field; Dedekind uses factors modulo a prime, under an index condition.

> [!hint]- Hint 2
> Under that index condition the completed integral algebra is monogenic, so its residue local factors identify the same places.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Let $L=K(\alpha)$, with $\alpha$ integral and monic minimal polynomial $F$. Proposition II (8.2), printed p. 162 / PDF p. 181, identifies the extensions of a valuation $v$ with the irreducible factors $F_j$ in $K_v[X]$, and identifies the corresponding completion with $K_v[X]/(F_j)$. It therefore gives the local degrees $[L_w:K_v]=\deg F_j$.
>
> Dedekind's criterion I (8.3) applies when $\mathfrak p$ does not divide the index of the power order in the integral closure. This says precisely that after localization at $\mathfrak p$ the two integer rings agree: $\mathcal O_{L,(\mathfrak p)}=\mathfrak o_{K,\mathfrak p}[\alpha]$. If
> $$
> \bar F=\prod_i\varphi_i^{e_i}
> $$
> is the factorization over the residue field with distinct monic irreducible $\varphi_i$, its prime ideals are $P_i=(\mathfrak p,\varphi_i(\alpha))$, with ramification index $e_i$ and residue degree $f_i=\deg\varphi_i$. Complete the localized integer ring. Its CRT product is the product of the complete DVRs belonging to these same $P_i$, by II.8.4. Hensel lifts the pairwise coprime factors $\varphi_i^{e_i}$ to the integral local factors; each is the minimal polynomial over $K_v$ for that completed field. Thus the corresponding irreducible $F_i$ has degree $e_if_i$, and (8.2) and Dedekind's theorem describe the same primes, by local-field and by residue-polynomial methods respectively.
>
> The index condition is essential for extracting $e_i,f_i$ directly from $\bar F$. Without it, different local factors can merge in a nonnormal power order modulo $\mathfrak p$, and the reduction of this chosen generator need not encode the integral closure's primes correctly. Proposition (8.2), which factors over the completion itself, remains applicable. This explains both the connection and the additional arithmetic hypothesis in Dedekind's method.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 5, printed p. 166, PDF p. 185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

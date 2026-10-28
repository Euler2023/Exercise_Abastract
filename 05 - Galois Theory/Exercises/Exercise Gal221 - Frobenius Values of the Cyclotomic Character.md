---
title: "Exercise Gal221: Frobenius Values of the Cyclotomic Character"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.6, printed p. 390, PDF p. 402"
source_refs:
  - "S7/ch-9/sec-3/ex-6"
created: 2026-10-28
---

# Exercise Gal221: Frobenius Values of the Cyclotomic Character

## Problem Statement

> [!question] Original Exercise 9.3.6
> Establish formula (9.13).

## Hints

> [!hint]- Hint 1
> Compute Frobenius on every finite group of $\ell^n$th roots of unity.

> [!hint]- Hint 2
> Compare the resulting compatible residues with the element $p\in\mathbb Z_\ell^*$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $p\ne\ell$. For every $n$, the field $\mathbb Q(\mu_{\ell^n})$ is unramified at $p$. Reduction of its $\ell^n$th roots of unity is injective at a prime above $p$: roots remain distinct because $X^{\ell^n}-1$ has derivative prime to $p$ at every root. Arithmetic Frobenius raises the residue of $\mu_{\ell^n}$ to its $p$th power. By injectivity it therefore sends the actual root to $\mu_{\ell^n}^p$. By definition the $n$th component of $\chi_\ell(\operatorname{Frob}_p)$ is $p\pmod{\ell^n}$. These compatible components are exactly the embedded $\ell$-adic integer $p$. Hence $\chi_\ell(\operatorname{Frob}_p)=p$. The computation is independent of the prime above $p$ and of the inertia lift, since all the finite cyclotomic quotients are unramified there.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formula:** (9.13), printed p. 386, PDF p. 398, directly inspected: $\chi_\ell(\operatorname{Frob}_p)=p$ for $p\ne\ell$. The source uses arithmetic Frobenius; geometric Frobenius would give the inverse.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

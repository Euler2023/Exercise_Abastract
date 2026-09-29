---
title: "Exercise LA516: Localization Preserves Injectivity over a Noetherian Ring"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 20, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA516: Localization Preserves Injectivity over a Noetherian Ring

## Problem Statement

> [!question] Lang XX.20
> Let $S$ be a multiplicative subset of the commutative Noetherian ring $A$. If $I$ is an injective $A$-module, show that $S^{-1}I$ is an injective $S^{-1}A$-module.

## Hints

> [!hint]- Hint 1
> Every ideal of $S^{-1}A$ is the localization of its contraction to $A$.

> [!hint]- Hint 2
> A finitely presented module $J$ satisfies $S^{-1}\operatorname{Hom}_A(J,I)\cong\operatorname{Hom}_{S^{-1}A}(S^{-1}J,S^{-1}I)$.

## Solution

> [!success]- Independent derivation
> Set $B=S^{-1}A$. By Baer's criterion it suffices to extend a $B$-linear map $f:\mathfrak b\to S^{-1}I$, where $\mathfrak b$ is an ideal of $B$. Let $J$ be its inverse image in $A$; then $\mathfrak b=S^{-1}J$.
>
> Since $A$ is Noetherian, $J$ has a finite presentation $A^m\to A^n\to J\to0$: take finitely many generators, then finitely many generators of the kernel. Applying Hom identifies $\operatorname{Hom}_A(J,I)$ with a kernel in $I^n\to I^m$. Localization is exact and commutes with finite direct sums, so localizing this kernel proves the Hom isomorphism in the hint.
>
> Thus $f$ is represented by some $g/s$, with $g:J\to I$ $A$-linear and $s\in S$. Injectivity extends $g$ to $\widetilde g:A\to I$. Then $s^{-1}(S^{-1}\widetilde g):B\to S^{-1}I$ extends $f$. Baer's criterion over $B$ finishes the proof. If the localization is the zero ring, the sole unital module is zero and the conclusion is immediate.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 20, printed p. 830, PDF p. 845]. The original page image was checked; the solution above is an independent derivation.
- Noetherianity is used for finite presentation of ideals, not to assume that localization commutes with arbitrary Hom.

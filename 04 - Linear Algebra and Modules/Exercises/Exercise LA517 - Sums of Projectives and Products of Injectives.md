---
title: "Exercise LA517: Sums of Projectives and Products of Injectives"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 21, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA517: Sums of Projectives and Products of Injectives

## Problem Statement

> [!question] Lang XX.21
> **(a)** Show that a direct sum of projective modules is projective.
>
> **(b)** Show that a direct product of injective modules is injective.

## Hints

> [!hint]- Hint 1
> Give a lift separately on each summand.

> [!hint]- Hint 2
> Extend each component of a map into a product.

## Solution

> [!success]- Independent derivation
> **(a)** Let $P=\bigoplus_iP_i$, with every $P_i$ projective. Given a surjection $v:M\to N$ and $f:P\to N$, projectivity supplies $g_i:P_i\to M$ with $vg_i=f|_{P_i}$. The map $g:P\to M$ obtained by summing $g_i$ on the finitely supported components satisfies $vg=f$. Thus $P$ is projective.
>
> **(b)** Let $Q=\prod_iQ_i$, with every $Q_i$ injective. For a submodule $M'\subseteq M$ and map $f:M'\to Q$, each component $f_i:M'\to Q_i$ extends to $g_i:M\to Q_i$. The map $g(x)=(g_i(x))_i$ is linear and extends $f$. Hence $Q$ is injective. Arbitrary choices of component lifts or extensions use the axiom of choice, as in the usual module category.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 21, printed p. 830, PDF p. 845]. The original page image was checked; the solution above is an independent derivation.
- The statement concerns direct products for injectives. Direct sums of injectives need additional ring hypotheses.

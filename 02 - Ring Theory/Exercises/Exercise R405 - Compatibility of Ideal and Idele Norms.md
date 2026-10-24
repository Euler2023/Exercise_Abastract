---
title: 'Exercise R405: Compatibility of Ideal and Idele Norms'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 3, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-3
created: '2026-10-23'
---

# Exercise R405: Compatibility of Ideal and Idele Norms

## Problem Statement

> [!question] Neukirch VI.2.3
> The correspondence between idèles and ideals, $\alpha\mapsto(\alpha)$, satisfies the following rule, in the case of a Galois extension $L|K$,
> $$
> (N_{L|K}(\alpha))=N_{L|K}((\alpha)).
> $$
> (For the norm on ideals, see chap. III, §1.)

## Hints

> [!hint]- Hint
> Compare the exponent of each prime of $K$ on both sides.

> [!hint]- Stronger hint
> Both exponents at p are the sum over P above p of f(P/p) times v_P(alpha_P).

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For every finite prime $\mathfrak p$, the valuation formula for the local norm is
> $$
> v_\mathfrak p(N_{L_\mathfrak P/K_\mathfrak p}x)
> =f_{\mathfrak P/\mathfrak p}\,v_\mathfrak P(x).
> $$
> Consequently the exponent at $\mathfrak p$ on the left is $\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P/\mathfrak p}v_\mathfrak P(\alpha_\mathfrak P)$. On the other hand, the ideal norm satisfies $N(\mathfrak P)=\mathfrak p^{f_{\mathfrak P/\mathfrak p}}$, so
> $$
> N((\alpha))
> =N\left(\prod_\mathfrak P\mathfrak P^{v_\mathfrak P(\alpha_\mathfrak P)}\right)
> =\prod_\mathfrak p\mathfrak p^{\sum_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P/\mathfrak p}v_\mathfrak P(\alpha_\mathfrak P)}.
> $$
> The exponents agree at every prime ideal, proving the claim. In fact, the calculation does not require the Galois hypothesis.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the source image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 3, printed p.373, PDF p.392]. The solution is independently derived.

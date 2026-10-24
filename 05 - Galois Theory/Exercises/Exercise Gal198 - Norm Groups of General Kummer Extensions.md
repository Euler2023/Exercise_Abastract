---
title: 'Exercise Gal198: Norm Groups of General Kummer Extensions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 1, printed p. 385, PDF p. 404
source_refs:
- S4/ch-VI/sec-4/ex-1
created: '2026-10-23'
---

# Exercise Gal198: Norm Groups of General Kummer Extensions

## Problem Statement

> [!question] Neukirch VI.4.1
> Determine the norm group $N_{L|K}C_L$ for an arbitrary Kummer extension in a way analogous to the case treated in (4.2) where $G(L|K)\simeq(\mathbb Z/p^\nu\mathbb Z)^r$.

## Hints

> [!hint]- Hint
> Choose a common exponent $m$ and Kummer generators $d_j$. Test the global Artin image against every Kummer character.

> [!hint]- Stronger hint
> An idele class is a norm exactly when every Kummer generator is fixed by its global Artin automorphism, equivalently when each product of local Hilbert symbols is 1.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $\mu_m\subseteq K$, let $D$ be a finite subgroup of $K^\times/K^{\times m}$, and put $L=K(\sqrt[m]{D})$. This describes every finite Kummer extension without requiring the cyclic factors of $D$ to have equal orders. Choose a finite generating set $d_1,\ldots,d_r$ for $D$. The explicit local conditions defining the norm group are
> $$
> N_{L/K}C_L=
> \left\{[\alpha]\in C_K:
> \prod_v(\alpha_v,d_j)_{v,m}=1\quad(1\le j\le r)\right\}.
> $$
> The Hilbert symbol is normalized by $(a,b)_{v,m}=\operatorname{rec}_v(a)(\sqrt[m]b)/\sqrt[m]b$. At almost every finite place, the extension is unramified and $\alpha_v,d_j$ is a unit, so only finitely many factors in the product differ from the identity.
> **Cited inputs: global reciprocity and its compatibility with local reciprocity** (Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VI.§5). They express the global Artin element as the product of the local Artin elements, with kernel exactly $N C_L$. The perfect Kummer pairing gives
> $$
> \frac{\operatorname{rec}_{L/K}([\alpha])(\sqrt[m]d_j)}{\sqrt[m]d_j}
> =\prod_v(\alpha_v,d_j)_{v,m}.
> $$
> An automorphism fixes all Kummer generators if and only if it is the identity. These finitely many conditions therefore characterize the norm group exactly. They hold automatically for principal idèles, so the formula is independent of the representative.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §4, Exercise 1, printed p.385, PDF p.404]. The solution is independently derived. It uses the uniform Hilbert-symbol formula from reciprocity later in the same book, without silently imposing the equal-invariant-factor hypothesis of the preceding special case on a general Kummer extension.

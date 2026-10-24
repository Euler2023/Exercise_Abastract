---
title: 'Exercise Gal150: Unramified Extensions and Separable Residue Field Extensions'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §7, Exercise 2, printed p. 159, PDF p. 178
source_refs:
- S4/ch-II/sec-7/ex-2
created: '2026-10-23'
---

# Exercise Gal150: Unramified Extensions and Separable Residue Field Extensions

## Problem Statement

> [!question] Neukirch II.7.2
> Let $K$ be henselian and $K_{\rm nr}/K$ its maximal unramified extension. Show that the subextensions of $K_{\rm nr}/K$ correspond one-to-one to the subextensions of the separable closure $\kappa_s/\kappa$ of its residue field.

## Hints

> [!hint]- Hint 1
> Lift a monic separable irreducible residue polynomial to the valuation ring.

> [!hint]- Hint 2
> Use Hensel to lift residue-field embeddings uniquely. Handle infinite subfields by their finite subextensions.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Fix an algebraic closure with its unique extended valuation. For a finite separable residue extension $\lambda=\kappa(\bar a)$, lift the monic minimal polynomial $\bar f$ to a monic $f\in\mathfrak o_K[X]$ and take a root $a$. Its reduction is a root of $\bar f$; after choosing the specified residue embedding it is $\bar a$. The inequalities
> $$
> [K(a):K]\le\deg f=\deg\bar f=[\lambda:\kappa]\le[K(a):K]
> $$
> show equality throughout, so $K(a)/K$ is unramified with residue field $\lambda$.
>
> Uniqueness takes place in the fixed closure. Suppose $E_1,E_2$ are finite unramified with the same embedded residue field $\lambda$. In the unramified composite $E_1E_2$, Hensel lifts each simple root of $\bar f$ uniquely with its specified residue. The lift $a$ chosen in $E_1$ and the corresponding lift in $E_2$ must therefore be equal. Since each has the full residue degree, both generate their fields and $E_1=E_2$. The same argument with a residue embedding shows that every embedding of finite separable residue extensions lifts uniquely to the unramified extensions. In particular inclusions lift to inclusions, and every finite unramified field is recovered from its residue field: lift a residue primitive element inside it and compare the degrees.
>
> An arbitrary intermediate field of $K_{\rm nr}/K$ is the union of its finite subextensions, all unramified by (7.2). Its residue field is the union of their finite separable residue extensions. Conversely take the union of the uniquely lifted fields for every finite subfield of a given $\lambda\subseteq\kappa_s$. Compatibility and uniqueness on finite parts make these operations inverse and inclusion-preserving. The construction does not require the residue field to be finite or perfect. It is equivalently induced by the canonical Galois isomorphism $\operatorname{Gal}(K_{\rm nr}/K)\cong\operatorname{Gal}(\kappa_s/\kappa)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §7, Exercise 2, printed p. 159, PDF p. 178].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- Source inputs: composita/subextensions remain unramified, (7.2)–(7.5), printed pp. 153–154 / PDF pp. 172–173. No infinite Galois subgroup is counted unless closed.

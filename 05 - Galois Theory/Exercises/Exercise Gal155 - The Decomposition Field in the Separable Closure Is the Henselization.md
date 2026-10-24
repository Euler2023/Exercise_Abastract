---
title: 'Exercise Gal155: The Decomposition Field in the Separable Closure Is the Henselization'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 4, printed p. 176, PDF p. 195
source_refs:
- S4/ch-II/sec-9/ex-4
created: '2026-10-23'
---

# Exercise Gal155: The Decomposition Field in the Separable Closure Is the Henselization

## Problem Statement

> [!question] Neukirch II.9.4
> Let $v$ be a nonarchimedean valuation of $K$, and $\bar v$ an extension to its separable closure $K_s$. Then the decomposition field $Z_{\bar v}$ is isomorphic to the henselization of $K$ with respect to $v$ in the sense of §6, p. 143.

## Hints

> [!hint]- Hint 1
> The valuation of the decomposition field extends uniquely to the separable closure.

> [!hint]- Hint 2
> Apply (9.8)(iii) inside the chosen localization, and compare the intersection with the definition of henselization on printed p. 143.

## Solution

> [!success]- Solution
> **Proof scope:** Independent identification from the source's decomposition-field intersection
>
> Embed the chosen separable closure $K_s$ into a separable closure of the completion $K_v$, compatibly with the selected extension $\bar v$. Let $D$ be its decomposition group and $Z=K_s^D$.
>
> The source's localization identification (9.6), printed p. 170 / PDF p. 189, identifies $D$ with the Galois group of the localization of $K_s$ over $K_v$. In particular its fixed elements that lie in $K_s$ are precisely the elements of the embedded $K_v$. This is exactly the source's intersection statement (9.8)(iii), printed pp. 171–172 / PDF pp. 190–191:
> $$
> Z=K_s\cap K_v
> $$
> inside the chosen localization. Its argument applies to this infinite Galois extension because localization means the union of the finite completed subextensions, as specified in §8, printed p. 160 / PDF p. 179. It does not replace that algebraic union by a completion of $K_s$.
>
> The right hand side is the separable algebraic closure of $K$ inside its completion: every one of its elements is separable algebraic over $K$, since it lies in $K_s$; conversely every separable algebraic element of $K_v$ belongs to the embedded separable closure. This is exactly the field defined as the henselization at the beginning of §6, printed p. 143 / PDF p. 162. Hence the two constructions coincide in the chosen embedding, and in general are isomorphic as valued K-fields.
>
> The henselian property can also be checked from the decomposition construction rather than assumed. By (9.8)(i), the restricted valuation on $Z$ has a unique extension to $K_s$. The remaining purely inseparable part of an algebraic closure has a unique valuation by II.6.4. Thus it has a unique extension to every algebraic extension, and (6.6), printed p. 147 / PDF p. 166, makes $Z$ henselian. Statement (9.8)(ii) also shows that its value group and residue field equal those of $K$. These facts verify that the identification has the expected local invariants without claiming completeness. Different choices of $\bar v$ give conjugate decomposition fields and isomorphic henselizations.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 4, printed p. 176, PDF p. 195].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

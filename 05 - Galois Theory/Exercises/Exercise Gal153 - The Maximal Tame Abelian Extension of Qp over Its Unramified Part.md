---
title: 'Exercise Gal153: The Maximal Tame Abelian Extension of Qp over Its Unramified Part'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 2, printed p. 176, PDF p. 195
source_refs:
- S4/ch-II/sec-9/ex-2
created: '2026-10-23'
---

# Exercise Gal153: The Maximal Tame Abelian Extension of Qp over Its Unramified Part

## Problem Statement

> [!question] Neukirch II.9.2
> The maximal tamely ramified abelian extension $V$ of $\mathbb Q_p$ is finite over its maximal unramified abelian extension $T$.

## Hints

> [!hint]- Hint 1
> Frobenius acts on tame inertia by raising to the p-th power.

> [!hint]- Hint 2
> In the abelian quotient this forces inertia to have exponent dividing $p-1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> The maximal unramified extension $T/\mathbb Q_p$ is abelian, with Galois group $\widehat{\mathbb Z}$ generated topologically by residue Frobenius. In the maximal tame Galois group, tame inertia is the pro-prime-to-$p$ cyclic group $\prod_{\ell\ne p}\mathbb Z_\ell(1)$: its character description is $\operatorname{Hom}(\mathbb Z_{(p)}/\mathbb Z,\overline{\mathbb F}_p^*)$, where $\mathbb Z_{(p)}$ here denotes rational numbers with denominator prime to $p$. A lift of Frobenius acts on this inertia by multiplication by $p$, by the residue action in II.9.1.
>
> Pass to the maximal abelian quotient. Conjugation becomes trivial, so every inertia element $\tau$ satisfies $\tau^{p-1}=1$. The quotient of this procyclic inertia by its $(p-1)$-st powers is cyclic of order $p-1$. Therefore $[V:T]\le p-1$, proving finiteness.
>
> The bound is attained. The field $E=\mathbb Q_p(p^{1/(p-1)})$ is totally ramified of degree $p-1$ by Eisenstein; it is Galois and cyclic because all $(p-1)$-st roots of unity lie in $\mathbb Q_p$, as verified in (7.12). Thus $ET/\mathbb Q_p$ is tame abelian, and $[ET:T]=p-1$ by total/unramified disjointness. It follows that $V=ET$ and $[V:T]=p-1$. At $p=2$ this degree is one: every tame abelian extension is unramified. The finite conclusion concerns the ramified part, not $V/\mathbb Q_p$ itself.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 2, printed p. 176, PDF p. 195].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

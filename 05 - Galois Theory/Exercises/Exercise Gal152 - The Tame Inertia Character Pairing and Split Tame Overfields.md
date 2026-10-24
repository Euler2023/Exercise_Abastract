---
title: 'Exercise Gal152: The Tame Inertia Character Pairing and Split Tame Overfields'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 1, printed p. 176, PDF p. 195
source_refs:
- S4/ch-II/sec-9/ex-1
created: '2026-10-23'
---

# Exercise Gal152: The Tame Inertia Character Pairing and Split Tame Overfields

## Problem Statement

> [!question] Neukirch II.9.1
> Let $K$ be a henselian field, $L/K$ a tamely ramified Galois extension, $G=G(L/K)$, $I=I(L/K)$ and $\Gamma=G/I=G(\lambda/\kappa)$. Then $I$ is abelian and becomes a $\Gamma$-module by letting $\bar\sigma=\sigma I\in\Gamma$ operate on $I$ via $\tau\mapsto\sigma\tau\sigma^{-1}$.
>
> Show that there is a canonical isomorphism $I\cong\chi(L/K)$ of $\Gamma$-modules. Show furthermore that every tamely ramified extension can be embedded into a tamely ramified extension $L/K$, such that $G$ is the semi-direct product of $\chi(L/K)$ with $G(\lambda/\kappa)$: $G\cong\chi(L/K)\rtimes G(\lambda/\kappa)$.
>
> Hint: Use (7.7).

## Hints

> [!hint]- Hint 1
> Use the tame character $\tau\mapsto(v(x)\mapsto\overline{\tau x/x})$ and the exact sequence (9.15).

> [!hint]- Hint 2
> For splitting, choose a maximal totally tame intermediate field in a maximal tame extension. Its value group becomes prime-to-p divisible.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Write $A=v(L^*)$, $B=v(K^*)$, and $\chi(L/K)=\operatorname{Hom}(A/B,\lambda^*)$, with the character topology in an infinite extension. The canonical map sends $\tau\in I$ to $\chi_\tau(v(x)\bmod B)=\overline{\tau(x)/x}$. Independence of the representative follows because replacing $x$ by $axu$, $a\in K^*$ and $u$ a unit, multiplies the ratio by $\tau(u)/u$, whose residue is one. The source proves its kernel is wild inertia $R$ and surjectivity in (9.15), printed p. 175 / PDF p. 194. Tameness makes $R=1$, by (9.12)–(9.14). Thus this is an isomorphism and $I$ is abelian.
>
> Every element of $G$ preserves the unique extended valuation, so acts trivially on $A/B$. Give the character group the action $(\bar\sigma\chi)(d)=\bar\sigma(\chi(d))$ through its action on residues. Direct calculation gives
> $$
> \chi_{\sigma\tau\sigma^{-1}}(v(x))
> =\bar\sigma\bigl(\chi_\tau(v(\sigma^{-1}x))\bigr)
> =\bar\sigma\bigl(\chi_\tau(v(x))\bigr).
> $$
> The action factors through $G/I$ since $I$ is abelian, proving the asserted equivariance.
>
> For a split overfield, take a maximal tame extension $K^t$ containing the given tame extension, and its maximal unramified part $T$. By Zorn choose a maximal subextension $E/K$ inside $K^t$ that is totally tame. Directed unions preserve this property. Its value group is divisible by every prime $\ell\ne p$: otherwise choose $a\in E$ whose value is not in $\ell v(E^*)$, and adjoining an $\ell$-th root has degree and ramification index $\ell$ (the distinct value classes give a basis), with no residue extension. This would enlarge $E$ totally tamely. Hence $ET$ already has the full prime-to-$p$ divisible value group of $K^t$ and separably closed residue field. By the no-defect degree identity for tame extensions, (7.7), it has no nontrivial finite tame extension inside $K^t$; therefore $ET=K^t$.
>
> Total and unramified extensions are linearly disjoint: every finite unramified polynomial remains irreducible after a totally ramified base extension because its irreducible residue polynomial is unchanged. Thus $E\cap T=K$ and restriction identifies $\operatorname{Gal}(K^t/E)$ with $\operatorname{Gal}(T/K)$. This subgroup is a complement to tame inertia, giving a noncanonical semidirect product for $K^t/K$.
>
> If the initial extension is finite, a finite split overfield can also be chosen. In $I\rtimes\Gamma$, take an open normal subgroup $N$ fixing its normal closure. Put $I_0=N\cap I$ and choose an open normal $\Gamma_0\subseteq N\cap\Gamma$ acting trivially on the finite group $I/I_0$. Then $I_0\rtimes\Gamma_0$ is open normal in the full semidirect product, contained in $N$, and the resulting finite quotient is $(I/I_0)\rtimes(\Gamma/\Gamma_0)$. Its fixed field is the required finite split tame overfield.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §9, Exercise 1, printed p. 176, PDF p. 195].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

---
title: 'Exercise AG42: A Cyclotomic Henselian Valuation'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 8, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-8
created: '2026-10-23'
---

# Exercise AG42: A Cyclotomic Henselian Valuation

## Problem Statement

> [!question] Neukirch V.1.8
> Let $\widehat{\mathbb Q}_p/\mathbb Q_p$ be the cyclotomic $\mathbb Z_p$-extension, let $G(\widehat{\mathbb Q}_p/\mathbb Q_p)\cong\mathbb Z_p$ be a chosen isomorphism, and let $\widehat d:G_{\mathbb Q_p}\to\mathbb Z_p$ be the induced homomorphism. Show:
>
> For a suitable topological generator $u$ of the group of principal units of $\mathbb Q_p$,
> $$
> \widehat v(a)=\frac{\log a}{\log u}
> $$
> defines a henselian valuation with respect to $\widehat d$, in the sense of abstract $p$-class field theory (see chap. IV, §5, exercise 2).

> [!warning] Source issue or convention
> At $p=2$, the printed “group of principal units” $1+2\mathbb Z_2$ has torsion $-1$ and is not topologically cyclic. Use its torsion-free factor $1+4\mathbb Z_2$, or equivalently principal units modulo torsion. The logarithm on all $\mathbb Q_p^*$ is understood to kill $p$ and roots of unity.

## Hints

> [!hint]- Hint 1
> Extend the logarithm to $\mathbb Q_p^*$ by making it zero on $p$ and on roots of unity.

> [!hint]- Hint 2
> Choose $u$ so that $\widehat d(\operatorname{rec}(u))=1$, then use the norm compatibility of reciprocity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $P=1+p\mathbb Z_p$ for odd $p$ and $P=1+4\mathbb Z_2$ for $p=2$. Extend $\log$ from $P$ to $\mathbb Q_p^*$ by $\log p=0$ and by killing its finite root-of-unity factor. The cyclotomic reciprocity formula V (2.4), proved independently in the source, says that the cyclotomic character of $\operatorname{rec}(a)$ on units is $a^{-1}$; it is trivial on $p$. Thus
> $$
> \widehat d\circ\operatorname{rec}:P\longrightarrow\mathbb Z_p
> $$
> is an isomorphism. Choose its inverse image $u$ of $1$. This is a topological generator of $P$, and logarithms show $\widehat d(\operatorname{rec}(a))=\log a/\log u$ for every $a\in\mathbb Q_p^*$.
>
> Write $v=\widehat d\circ\operatorname{rec}$. It has image $\mathbb Z_p$, so condition (i) of a henselian $p$-valuation holds. For any finite extension $E/\mathbb Q_p$, local reciprocity identifies $N_{E/\mathbb Q_p}E^*$ with the subgroup corresponding to the image of $G_E$ in $G_{\mathbb Q_p}^{\rm ab}$. Therefore $v(N E^*)$ is $\widehat d(G_E)$: equality rather than just density follows because $v$ kills $p$ and its unit image comes from a compact group. If $f_E=(\mathbb Z_p:\widehat d(G_E))$, this image is $f_E\mathbb Z_p$. This is condition (ii), proving henselianity.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic logarithm]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 8, printed p. 326, PDF p. 345]. Independent derivation using the independently proved explicit reciprocity formula V (2.4), printed pp. 330–332, PDF pp. 349–351. The exact abstract definition was checked at IV §5 Exercise 2, printed p. 298, PDF p. 317. This proof does not establish (2.4) anew.

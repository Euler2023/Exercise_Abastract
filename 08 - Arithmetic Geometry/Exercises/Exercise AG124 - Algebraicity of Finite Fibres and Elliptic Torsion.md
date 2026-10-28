---
title: "Exercise AG124: Algebraicity of Finite Fibres and Elliptic Torsion"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.9, Exercise 7.9.4, printed p. 312, PDF p. 325"
source_refs:
  - "S7/ch-7/sec-9/ex-4"
created: 2026-10-28
---

# Exercise AG124: Algebraicity of Finite Fibres and Elliptic Torsion

## Problem Statement

> [!question] Original Exercise 7.9.4
> (a) Let $h:X\to Y$ be a surjective morphism over $\overline{\mathbb Q}$ of algebraic curves over $\overline{\mathbb Q}$. It extends to a surjective morphism $h:X_{\mathbb C}\to Y_{\mathbb C}$. Show that if $y\in Y\subset Y_{\mathbb C}$ then all inverse image points $x\in X_{\mathbb C}$ lie in $X$: for every automorphism $\sigma$ of $\mathbb C$ fixing $\overline{\mathbb Q}$, compute that $x^\sigma$ is again over $y$. Thus $x$ has only finitely many conjugates over $\overline{\mathbb Q}$, so its coordinates are algebraic over $\overline{\mathbb Q}$ and belong to $\overline{\mathbb Q}$. How does this show that the point $P$ from the section lies in $X_1(N)_{\mathrm{alg}}$?
>
> (b) Let $E$ be an algebraic curve over $\overline{\mathbb Q}$. Apply (a) to show $E[N]\simeq(\mathbb Z/N\mathbb Z)^2$ without quoting the structure result in Theorem 7.1.3. (A hint is at the end of the book.)

> [!warning] Source issue
> Part (b) says “algebraic curve”; the notation $E[N]$ and the claimed group structure require an elliptic curve with an origin. A general curve has no multiplication map. This is the elliptic-curve setting intended by the section.

## Hints

> [!hint]- Hint 1
> A morphism over the fixed field commutes with every automorphism fixing that field.

> [!hint]- Hint 2
> The complex multiplication kernel is known from lattices. Apply (a) to its fiber over the origin.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) A surjective morphism of integral curves is nonconstant and has finite fibers: a proper closed subset of a curve consists of finitely many points, and a fiber cannot be the entire curve. If $h(x)=y$, coefficientwise conjugation gives $h(x^\sigma)=h(x)^\sigma=y$. Thus the orbit of $x$ under $\operatorname{Aut}(\mathbb C/\overline{\mathbb Q})$ is finite.
>
> To justify the implication about coordinates, use an affine chart defined over $\overline{\mathbb Q}$ containing $x$; it is stable under these automorphisms. If a coordinate $a$ were transcendental, extend $\{a\}$ to a transcendence basis of $\mathbb C/\overline{\mathbb Q}$. The maps $a\mapsto a+n$ for integers $n$, fixing the other basis elements and the algebraic constants, are automorphisms of the rational function field on that basis. Each extends to an automorphism of its algebraic closure $\mathbb C$ (extension theorem for embeddings of algebraic closures). They give infinitely many distinct conjugates of $a$, contradicting the finite orbit. Therefore all coordinates are algebraic over the algebraically closed field $\overline{\mathbb Q}$ and already in it.
>
> In the section, the point $P$ lies over the algebraic point of $X(1)$ with the invariant of the given algebraic elliptic curve, under the forgetful map $X_1(N)_{\mathrm{alg},\mathbb C}\to X(1)_{\mathrm{alg},\mathbb C}$. Part (a) places $P$ on $X_1(N)_{\mathrm{alg}}$.
>
> (b) Here $E$ must be elliptic with its algebraic origin. The multiplication morphism $[N]:E\to E$ is defined over $\overline{\mathbb Q}$. Complex uniformization identifies $E(\mathbb C)$ with $\mathbb C/\Lambda$, under which its kernel is $(N^{-1}\Lambda)/\Lambda\simeq(\mathbb Z/N\mathbb Z)^2$. It is finite, and (a), applied to the algebraic origin, shows that every point of this complex kernel is algebraic. Conversely algebraic torsion is complex torsion. The two kernels coincide as groups, proving the claimed structure without using the algebraic torsion assertion of Theorem 7.1.3.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 312 / PDF p. 325. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

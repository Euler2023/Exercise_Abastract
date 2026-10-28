---
title: "Exercise AG116: Counting All Universal Torsion Points"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.5, printed p. 290, PDF p. 303"
source_refs:
  - "S7/ch-7/sec-5/ex-5"
created: 2026-10-28
---

# Exercise AG116: Counting All Universal Torsion Points

## Problem Statement

> [!question] Original Exercise 7.5.5
> (a) Show that for each $\bar v\in(\mathbb Z/N\mathbb Z)^2$, the function $f_0^{\pm\bar v}$ determines two $N$-torsion points of $E_j$ unless $2\bar v=0$, in which case it determines one.
>
> (b) Show that consequently, whether $N$ is odd or even, we have found all $N^2$ points of $E_j[N]$.

> **Context and notation.** Here $N>1$ and $f_0^{\bar v}=(g_2/g_3)\wp_\tau((c_v\tau+d_v)/N)$ for a nonzero index $\bar v$. Equality of the functions for $\bar v$ and $-\bar v$ is encoded in the notation $\pm\bar v$.

> [!warning] Source issue
> The printed words “for each” include the zero index. At $\bar v=0$ the Weierstrass function is evaluated at a lattice point and has a pole, so there is no finite $x$-function determining a point. The intended finite-coordinate assertion excludes zero; the zero index contributes the single projective point $0_{E_j}$ separately.

## Hints

> [!hint]- Hint 1
> Above a finite $x$-coordinate the two points are $R$ and $-R$.

> [!hint]- Hint 2
> Count the fixed points of negation on $(\mathbb Z/N\mathbb Z)^2$ and then add the identity.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> For a nonzero index $\bar v$, the preceding source argument using division polynomials proves that $x=f_0^{\pm\bar v}$ is the coordinate of an $N$-torsion point. The equation is $y^2=4x^3-gx-g$. The two possible points above a given $x$ are $R$ and $-R$. They coincide exactly when $y=0$, equivalently when $2R=0$.
>
> The specialization to the complex torus identifies $R$ with the class $(c_v\tau+d_v)/N$. On the open set of nonsingular specializations, $2R=0$ exactly when $2\bar v=0$. A function identity holding on this infinite open set holds in the function field, so the same criterion holds on $E_j$. Thus a nonzero index pair $\{\bar v,-\bar v\}$ supplies two distinct points unless it is a nonzero two-torsion index, in which case it supplies one.
>
> Different index pairs give different $x$-functions by the source's degree-two property of $\wp$: $\wp(z)=\wp(w)$ exactly when $z\equiv\pm w$ modulo the lattice.
>
> If $N$ is odd, there are no nonzero fixed vectors under negation. The $(N^2-1)/2$ nonzero pairs supply $N^2-1$ points; adjoining $0_{E_j}$ gives $N^2$.
>
> If $N$ is even, the kernel of multiplication by $2$ on the index module has four vectors, three nonzero. The remaining $N^2-4$ vectors form $(N^2-4)/2$ pairs, giving $N^2-4$ points; the three nonzero two-torsion points and $0_{E_j}$ again bring the total to $N^2$.
>
> The source's characteristic-zero torsion theorem, Theorem 7.1.3, says that $|E_j[N]|=N^2$. The points found are distinct, so they exhaust the group. The identity point is counted separately in both cases.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 290 / PDF p. 303. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

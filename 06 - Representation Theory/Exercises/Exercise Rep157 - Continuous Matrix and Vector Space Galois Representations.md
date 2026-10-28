---
title: "Exercise Rep157: Continuous Matrix and Vector Space Galois Representations"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.3, Exercise 9.3.7, printed p. 390, PDF p. 402"
source_refs:
  - "S7/ch-9/sec-3/ex-7"
created: 2026-10-28
---

# Exercise Rep157: Continuous Matrix and Vector Space Galois Representations

## Problem Statement

> [!question] Original Exercise 9.3.7
> (a) Let $\rho:G_{\mathbb Q}\longrightarrow\mathrm{GL}_d(L)$ be as in Definition 9.3.2. Show this makes $L^d$ a Galois representation as in Definition 9.3.4. Conversely, show any ordered basis of a $d$-dimensional representation $V$ in Definition 9.3.4 gives a representation as in Definition 9.3.2. Remember continuity. (Hints for this exercise are at the end of the book.)
>
> (b) Show the two notions of equivalence are compatible.

## Hints

> [!hint]- Hint 1
> For row vectors use $v^\sigma=v\rho(\sigma)$.

> [!hint]- Hint 2
> The matrix entries are coordinates of the images of the finitely many basis vectors.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Give $L^d$ the product topology and define $v^\sigma=v\rho(\sigma)$, with right actions and composition as in the source. The homomorphism identity gives the module law. The map $(v,\sigma)\mapsto(v,\rho(\sigma))$ is continuous, and vector-by-matrix multiplication is a polynomial map in entries, hence continuous over the topological field $L$. Their composite is the required joint action.
>
> Conversely let $B=(b_1,\ldots,b_d)$ be an ordered basis. The coordinate map $c_B:V\to L^d$ is a homeomorphism for the finite-dimensional vector-space topology. Define the $i$th row of $\rho_B(\sigma)$ to be $c_B(b_i^\sigma)$. Linearity gives $c_B(v^\sigma)=c_B(v)\rho_B(\sigma)$ and the action law gives $\rho_B(\sigma\tau)=\rho_B(\sigma)\rho_B(\tau)$. The inverse action makes each matrix invertible. For each $i$ the map $\sigma\mapsto b_i^\sigma$ is continuous, obtained by restricting the joint action to a fixed vector. Taking finitely many coordinates proves continuity into $\mathrm M_d(L)$ and thus into its subspace $\mathrm{GL}_d(L)$.
>
> **(b).** Every linear isomorphism between finite-dimensional $L$-spaces is a homeomorphism: its matrix and inverse are continuous linear coordinate maps. If $F:V\to V'$ has coordinate formula $c_{B'}(Fv)=c_B(v)m$, equivariance is the identity $\rho_B(\sigma)m=m\rho_{B'}(\sigma)$, that is $\rho_{B'}(\sigma)=m^{-1}\rho_B(\sigma)m$. Conversely such a conjugating matrix defines a continuous equivariant linear isomorphism. This proves compatibility in both directions.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced definitions:** 9.3.2 at printed p. 386/PDF p. 398 and 9.3.4 at printed pp. 387–388/PDF pp. 399–400; the finite-dimensional vector-space topology is the basis-independent topology established in Section 9.2.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

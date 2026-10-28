---
title: "Exercise Rep158: Continuity of the Elliptic Curve Tate Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.4, Exercise 9.4.1, printed p. 393, PDF p. 405"
source_refs:
  - "S7/ch-9/sec-4/ex-1"
created: 2026-10-28
---

# Exercise Rep158: Continuity of the Elliptic Curve Tate Representation

## Problem Statement

> [!question] Original Exercise 9.4.1
> Show that $\rho_{E,\ell}$ is continuous.

## Hints

> [!hint]- Hint 1
> Reduction modulo $\ell^n$ records the action on the finite group $E[\ell^n]$.

> [!hint]- Hint 2
> All coordinates of the finitely many torsion points lie in one finite Galois extension.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The image of $\rho_{E,\ell}$ lies in $\mathrm{GL}_2(\mathbb Z_\ell)$. A basis of identity neighborhoods there consists of $U(n)=\ker(\mathrm{GL}_2(\mathbb Z_\ell)\to\mathrm{GL}_2(\mathbb Z/\ell^n\mathbb Z))$. The inverse image of $U(n)$ is exactly the automorphisms fixing every point of $E[\ell^n]$. Put $F_n=\mathbb Q(E[\ell^n])$. The torsion set is finite and its coordinates algebraic, so this field is finite. It is Galois because every absolute automorphism permutes the torsion points, hence preserves their coordinate field; characteristic zero gives separability. Thus $\rho_{E,\ell}^{-1}(U(n))=U(F_n)$ is open. The identity-neighborhood criterion proves continuity into $\mathrm{GL}_2(\mathbb Z_\ell)$, and the continuous inclusion into $\mathrm{GL}_2(\mathbb Q_\ell)$ finishes the assertion.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

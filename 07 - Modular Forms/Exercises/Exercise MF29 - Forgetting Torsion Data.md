---
title: "Exercise MF29: Forgetting Torsion Data"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.2, printed p. 43, PDF p. 58; Theorem 1.5.1, printed pp. 38–40, PDF pp. 53–55"
source_refs:
  - "S7/ch-1/sec-5/ex-2"
created: 2026-10-24
---

# Exercise MF29: Forgetting Torsion Data

## Problem Statement

> [!question] Original Exercise 1.5.2
> The containments $\Gamma(N)\subset\Gamma_1(N)\subset\Gamma_0(N)$ give rise to surjections $Y(N)\longrightarrow Y_1(N)$ and $Y_1(N)\longrightarrow Y_0(N)$ given by $\Gamma(N)\tau\mapsto\Gamma_1(N)\tau$ and $\Gamma_1(N)\tau\mapsto\Gamma_0(N)\tau$. Describe the corresponding maps between moduli spaces. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Compare the canonical representatives in Theorem 1.5.1. Which parts of their markings survive?

> [!hint]- Hint 2
> The first map keeps $Q$; the second keeps its generated cyclic subgroup. Check that these prescriptions commute with isomorphisms.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> The maps are
> $$
> S(N)\longrightarrow S_1(N),\quad[E,(P,Q)]\longmapsto[E,Q],
> $$
> $$
> S_1(N)\longrightarrow S_0(N),\quad[E,Q]\longmapsto[E,\langle Q\rangle].
> $$
> An isomorphism preserving $(P,Q)$ preserves $Q$, and one preserving $Q$ preserves $\langle Q\rangle$, so both maps are independent of representatives. Since $(P,Q)$ is a basis of $E[N]$, $Q$ has order $N$ and both targets satisfy their defining conditions.
>
> For the standard structure $(E_\tau,(\tau/N,1/N))$, the first map gives $(E_\tau,1/N)$ and the second gives $(E_\tau,\langle1/N\rangle)$. Theorem 1.5.1 therefore identifies them with the specified orbit maps. Every target orbit has the same parameter $\tau$ in the source, which proves surjectivity. Equivalently, for $S_1(N)$ one may extend $Q$ to a basis with pairing $e^{2\pi i/N}$ using the normalized representative; for $S_0(N)$ choose a generator. Their composite forgets the first basis vector and the choice of generator of the second.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

Independent derivation of the exercise. Theorem 1.5.1 is on printed pp. 38–40 / PDF pp. 53–55; the original appendix hint for this exercise is on printed p. 415 / PDF p. 426. Forgetting data is a map of isomorphism classes, not a change to the underlying elliptic curve.

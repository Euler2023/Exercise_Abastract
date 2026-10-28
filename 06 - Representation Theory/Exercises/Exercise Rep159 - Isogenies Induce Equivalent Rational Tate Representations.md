---
title: "Exercise Rep159: Isogenies Induce Equivalent Rational Tate Representations"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.4, Exercise 9.4.3, printed p. 394, PDF p. 406"
source_refs:
  - "S7/ch-9/sec-4/ex-3"
created: 2026-10-28
---

# Exercise Rep159: Isogenies Induce Equivalent Rational Tate Representations

## Problem Statement

> [!question] Original Exercise 9.4.3
> Let $E$ and $E'$ be isogenous elliptic curves over $\mathbb Q$. Show that their Galois representations $V_\ell(E)$ and $V_\ell(E')$ are equivalent. Faltings's Isogeny Theorem, mentioned in Section 8.8, states the converse. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> An isogeny defined over $\mathbb Q$ commutes with Galois on every torsion group.

> [!hint]- Hint 2
> Use its dual isogeny and then invert the degree in $\mathbb Q_\ell$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\varphi:E\to E'$ be a $\mathbb Q$-isogeny of degree $m$. On every $\ell^n$-torsion group it induces a Galois-equivariant homomorphism compatible with multiplication by $\ell$, hence an equivariant map of Tate modules and a continuous $\mathbb Q_\ell$-linear map $V_\ell(\varphi):V_\ell(E)\to V_\ell(E')$. The dual isogeny $\widehat\varphi$ is also defined over $\mathbb Q$ and satisfies $\widehat\varphi\varphi=[m]$ and $\varphi\widehat\varphi=[m]$. Therefore $m^{-1}V_\ell(\widehat\varphi)$ is the inverse of $V_\ell(\varphi)$. This is valid even when $\ell\mid m$, since every nonzero integer is invertible in the field $\mathbb Q_\ell$. Finite-dimensional linear maps are continuous, so this is an equivalence in both representation definitions.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings Theorem]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Hypothesis clarification:** Isogeny here means an isogeny over $\mathbb Q$, not merely over $\overline{\mathbb Q}$.
- **Imported input:** The dual-isogeny identities. Faltings is needed only for the converse mentioned by the exercise, not for the proved direction.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

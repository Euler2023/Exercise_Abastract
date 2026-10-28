---
title: "Exercise AG119: The Second Composition Identity for Dual Isogenies"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.8, Exercise 7.8.4, printed p. 304, PDF p. 317"
source_refs:
  - "S7/ch-7/sec-8/ex-4"
created: 2026-10-28
---

# Exercise AG119: The Second Composition Identity for Dual Isogenies

## Problem Statement

> [!question] Original Exercise 7.8.4
> Let $\varphi:E\to E'$ be an isogeny and let $\psi$ be its dual isogeny. Show that also $\varphi\circ\psi=[\deg\varphi]$. (A hint for this exercise is at the end of the book.)

> **Context and notation.** The dual isogeny is characterized by $\psi\varphi=[\deg\varphi]_E$. The source hint uses the surjectivity of $\varphi$.

## Hints

> [!hint]- Hint 1
> Compose the defining identity $\psi\varphi=[n]$ with $\varphi$.

> [!hint]- Hint 2
> Cancel the surjective morphism $\varphi$ on the right.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Let $n=\deg\varphi$. The defining dual identity is $\psi\varphi=[n]_E$. Since isogenies are homomorphisms, $\varphi[n]_E=[n]_{E'}\varphi$. Therefore
> $$
> (\varphi\psi)\varphi=\varphi(\psi\varphi)=\varphi[n]_E=[n]_{E'}\varphi.
> $$
> The nonconstant morphism $\varphi$ of projective curves is surjective. For every geometric point $Q\in E'$ choose $P$ with $\varphi(P)=Q$. Evaluating the equality gives $(\varphi\psi)(Q)=[n]Q$. Equality on all geometric points, or cancellation of the dominant morphism on function fields, proves $\varphi\psi=[n]_{E'}$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 304 / PDF p. 317. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

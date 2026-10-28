---
title: "Exercise AG120: Dual Isogenies and Pullback on Picard Groups"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.8, Exercise 7.8.5, printed p. 304, PDF p. 317"
source_refs:
  - "S7/ch-7/sec-8/ex-5"
created: 2026-10-28
---

# Exercise AG120: Dual Isogenies and Pullback on Picard Groups

## Problem Statement

> [!question] Original Exercise 7.8.5
> Let $\varphi:E\to E'$ be an isogeny and let $\psi$ be its dual isogeny. Show that $\psi_*=\varphi^*$ as maps $\operatorname{Pic}^0(E')\to\operatorname{Pic}^0(E)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Identify each elliptic curve with its degree-zero Picard group using its origin.

> [!hint]- Hint 2
> Pull back $(\varphi(P))-(0)$ as a difference of two sums indexed by the kernel, then add their points in the elliptic group.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> We work in the characteristic-zero setting of this chapter. The identification $E\simeq\operatorname{Pic}^0(E)$ sends $P$ to $[(P)-(0_E)]$; on a degree-zero divisor its inverse is the group sum of the points with their multiplicities. The analogous statement holds for $E'$. These are the elliptic Abel–Jacobi identifications.
>
> Put $n=\deg\varphi$ and $C=\ker\varphi$. Isogenies in characteristic zero are separable and unramified, so $|C|=n$ and, for $Q=\varphi(P)$,
> $$
> \varphi^*((Q)-(0_{E'}))=\sum_{R\in C}\bigl((P+R)-(R)\bigr).
> $$
> The group sum of this divisor is $\sum_{R\in C}(P+R)-\sum_{R\in C}R=[n]P=\psi(Q)$. Thus its Picard class corresponds to $\psi(Q)$. On the other hand, $\psi_*((Q)-(0_{E'}))=(\psi(Q))-(0_E)$, which corresponds to the same point. Every degree-zero divisor class on $E'$ is represented by $(Q)-(0_{E'})$, and both operations are homomorphisms, proving equality on all of $\operatorname{Pic}^0(E')$. The statement descends from an algebraic closure because pullback and pushforward are defined over the original field. In positive characteristic an inseparable isogeny requires scheme-theoretic multiplicities in the pullback; the unramified fiber computation here is explicitly restricted to characteristic zero.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 304 / PDF p. 317. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

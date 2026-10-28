---
title: "Exercise AG113: Pointed Elliptic Morphisms Are Homomorphisms"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.3, Exercise 7.3.5, printed p. 279, PDF p. 292"
source_refs:
  - "S7/ch-7/sec-3/ex-5"
created: 2026-10-28
---

# Exercise AG113: Pointed Elliptic Morphisms Are Homomorphisms

## Problem Statement

> [!question] Original Exercise 7.3.5
> Let $h:E\to E'$ be a morphism of elliptic curves over $k$ such that $h(0_E)=0_{E'}$. Consider the diagram
> $$
> \begin{array}{ccc}
> \operatorname{Pic}^0(E)&\longrightarrow&E\\
> \scriptstyle h_*\downarrow&&\downarrow\scriptstyle h\\
> \operatorname{Pic}^0(E')&\longrightarrow&E',
> \end{array}
> $$
> where the top row is $[(P)-(0_E)]\mapsto P$ and similarly for the bottom. Show that the diagram commutes and therefore $h$ is a homomorphism.

## Hints

> [!hint]- Hint 1
> Compute both routes on the class $[(P)-(0_E)]$.

> [!hint]- Hint 2
> Every degree-zero divisor class on an elliptic curve is of that form by Theorem 7.3.3.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Use the source-proved **Theorem 7.3.3**: the Abel identification $\iota_E:\operatorname{Pic}^0(E)\to E$ sends $[\sum n_P(P)]$ to $\sum[n_P]P$ and is a group isomorphism. In particular its inverse sends $P$ to $[(P)-(0_E)]$.
>
> For such a class, pushforward gives
> $$
> h_*[(P)-(0_E)]
> =[(h(P))-(h(0_E))]
> =[(h(P))-(0_{E'})].
> $$
> Applying $\iota_{E'}$ gives $h(P)$, exactly the value obtained by first applying $\iota_E$ and then $h$. Every class has this form, so the whole diagram commutes.
>
> The induced $h_*$ is an additive map on the divisor-class groups: it is additive on divisors and preserves principal classes (through the norm of a rational function for a nonconstant morphism). For the constant zero morphism it is the zero map. Consequently
> $$
> h=\iota_{E'}\circ h_*\circ\iota_E^{-1}
> $$
> is a group homomorphism. More explicitly, the class for $P+Q$ is the sum of the classes for $P$ and $Q$, so applying this equality gives $h(P+Q)=h(P)+h(Q)$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 279 / PDF p. 292. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Source input:** The elliptic Picard isomorphism is proved in Theorem 7.3.3, printed p. 278 / PDF p. 291. Its hypotheses and map are stated above; this note independently proves the assigned functorial consequence.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

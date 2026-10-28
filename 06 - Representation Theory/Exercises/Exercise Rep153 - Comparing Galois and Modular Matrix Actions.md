---
title: "Exercise Rep153: Comparing Galois and Modular Matrix Actions"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.7, printed p. 290, PDF p. 303"
source_refs:
  - "S7/ch-7/sec-5/ex-7"
created: 2026-10-28
---

# Exercise Rep153: Comparing Galois and Modular Matrix Actions

## Problem Statement

> [!question] Original Exercise 7.5.7
> Supply details as necessary to the following proof that the representation $\rho$ is the map $\theta^{-1}$ from earlier in the section modulo signs. For every nonzero row vector $\bar v\in(\mathbb Z/N\mathbb Z)^2$ and $\sigma\in\operatorname{Gal}(\mathbb C(j,E_j[N])/\mathbb C(j))\simeq SL_2(\mathbb Z/N\mathbb Z)$, the definition of $\rho$ gives
> $$
> \left(\bar v\binom{P_\tau}{Q_\tau}\right)^\sigma
> =\bar v\rho(\sigma)\binom{P_\tau}{Q_\tau}.
> $$
> Ignoring negation gives the corresponding relation on $x$-coordinates, specifically the index action $\pm\bar v\mapsto\pm\bar v\rho(\pm\sigma)$. A pair $\pm\sigma$ corresponds to one element of $\operatorname{Gal}(\mathbb C(X(N))/\mathbb C(X(1)))\simeq SL_2(\mathbb Z/N\mathbb Z)/\{\pm I\}$, so this is the earlier action via $\theta^{-1}$ in (7.8). Justify these identifications.

> **Context and notation.** The source defines $f^{\theta(\gamma)}=f\circ\gamma$ and $(f_0^{\pm\bar v})^\sigma=f_0^{\pm\bar v\theta^{-1}(\sigma)}$. The full torsion field is obtained by adjoining $y$-coordinates to the $x$-coordinate field; simultaneous negation lies in the kernel of restriction.

## Hints

> [!hint]- Hint 1
> First apply $\sigma$ to the torsion point $\bar v(P_\tau,Q_\tau)^{\mathsf T}$.

> [!hint]- Hint 2
> Compare the induced permutations of the sign-indexed $x$-coordinate generators.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $R=(P_\tau,Q_\tau)^{\mathsf T}$ and $R_{\bar v}=\bar vR$. Since the integer coefficients of $\bar v$ are fixed by $\sigma$ and the group law is defined over the base,
> $$
> R_{\bar v}^{\,\sigma}=\bar vR^\sigma=\bar v\rho(\sigma)R.
> $$
> Taking $x$-coordinates gives
> $$
> (f_0^{\pm\bar v})^\sigma=f_0^{\pm\bar v\rho(\sigma)}.
> $$
> The sign pair is well defined because $x(T)=x(-T)$. Replacing $\sigma$ by the central torsion-negation automorphism times $\sigma$ replaces $\rho(\sigma)$ by $-\rho(\sigma)$ and leaves every such $x$-coordinate unchanged.
>
> Restriction from the full torsion field to its $x$-coordinate subfield therefore induces the projective matrix action
> $$
> \bar\rho:\operatorname{Gal}(\mathbb C(X(N))/\mathbb C(j))
> \longrightarrow SL_2(\mathbb Z/N\mathbb Z)/\{\pm I\}.
> $$
> The source definition of $\theta^{-1}$ gives
> $$
> (f_0^{\pm\bar v})^\sigma
> =f_0^{\pm\bar v\theta^{-1}(\sigma)}.
> $$
> Thus these two matrix classes induce the same permutation of every nonzero sign pair. That action is faithful: a matrix fixing all sign pairs sends $e_1$ to $\varepsilon_1e_1$ and $e_2$ to $\varepsilon_2e_2$, with $\varepsilon_i=\pm1$. Applying it to $e_1+e_2$ forces the two signs to agree modulo $N$. Hence the matrix is $\pm I$; at $N=2$ these signs already coincide.
>
> Consequently $\bar\rho=\theta^{-1}$. Equivalently, the two induced automorphisms agree on $j$ and all the torsion $x$-coordinates, which generate $\mathbb C(X(N))$. Choosing the opposite simultaneous square-root sign for the basis does not affect the result because $-I$ is central.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 290 / PDF p. 303. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

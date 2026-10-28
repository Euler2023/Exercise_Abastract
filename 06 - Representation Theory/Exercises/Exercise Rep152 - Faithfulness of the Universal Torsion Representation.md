---
title: "Exercise Rep152: Faithfulness of the Universal Torsion Representation"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.6, printed p. 290, PDF p. 303"
source_refs:
  - "S7/ch-7/sec-5/ex-6"
created: 2026-10-28
---

# Exercise Rep152: Faithfulness of the Universal Torsion Representation

## Problem Statement

> [!question] Original Exercise 7.5.6
> Show that the map $\rho$ is an injective representation.

> **Context and notation.** Printed p. 288 / PDF p. 301 defines $H=\operatorname{Gal}(\mathbb C(j,E_j[N])/\mathbb C(j))$ and
> $$
> \rho:H\longrightarrow GL_2(\mathbb Z/N\mathbb Z),\qquad
> \binom{P_\tau^\sigma}{Q_\tau^\sigma}
> =\rho(\sigma)\binom{P_\tau}{Q_\tau}.
> $$

## Hints

> [!hint]- Hint 1
> A Galois automorphism preserves addition and sends a torsion basis to another basis.

> [!hint]- Hint 2
> An automorphism fixing all generating coordinates fixes their generated field.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $R$ denote the column $(P_\tau,Q_\tau)^{\mathsf T}$. An automorphism $\sigma$ fixing $\mathbb C(j)$ preserves the universal curve, its rational group law, and its $N$-torsion. Hence it sends an ordered basis to an ordered basis, giving a unique invertible matrix $\rho(\sigma)$ over $\mathbb Z/N\mathbb Z$ such that $R^\sigma=\rho(\sigma)R$.
>
> Use the book's right-exponent composition convention $(A^\sigma)^{\sigma'}=A^{\sigma\sigma'}$. The matrix coefficients belong to $\mathbb Z/N\mathbb Z$ and are fixed by Galois automorphisms. Therefore
> $$
> R^{\sigma\sigma'}
> =(R^\sigma)^{\sigma'}
> =\rho(\sigma)R^{\sigma'}
> =\rho(\sigma)\rho(\sigma')R.
> $$
> Uniqueness of the matrix gives $\rho(\sigma\sigma')=\rho(\sigma)\rho(\sigma')$, proving the representation identity in precisely that convention. In particular $\rho(1)=I$ and $\rho(\sigma^{-1})=\rho(\sigma)^{-1}$.
>
> If $\rho(\sigma)=I$, the automorphism fixes $P_\tau,Q_\tau$ and therefore every linear combination, hence every point of $E_j[N]$. It fixes their affine coordinates. Those coordinates generate $\mathbb C(j,E_j[N])$ over the base, so $\sigma$ fixes the whole extension and is the identity. This proves injectivity. The argument proves faithfulness, not the later surjectivity onto $SL_2$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 290 / PDF p. 303. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Composition convention:** Right Galois exponents are composed in the explicitly stated order. Switching to conventional left actions requires the corresponding inverse or transpose convention; it must not silently reverse the matrix product.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

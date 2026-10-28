---
title: "Exercise Gal210: Determinant Character of the Universal Torsion Representation"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.6, Exercise 7.6.1, printed p. 294, PDF p. 307"
source_refs:
  - "S7/ch-7/sec-6/ex-1"
created: 2026-10-28
---

# Exercise Gal210: Determinant Character of the Universal Torsion Representation

## Problem Statement

> [!question] Original Exercise 7.6.1
> Prove Lemma 7.6.1.

> **Context and notation.** Lemma 7.6.1, printed p. 291 / PDF p. 304, states that for
> $H_{\mathbb Q}=\operatorname{Gal}(\mathbb Q(\mu_N,j,E_j[N])/\mathbb Q(j))$ and its torsion representation $\rho$,
> $$
> \mu^\sigma=\mu^{\det\rho(\sigma)}
> \quad(\mu\in\mu_N,\ \sigma\in H_{\mathbb Q}).
> $$
> On the left is Galois action; on the right is an ordinary power. This lemma is distinct from the Restriction Lemma, numbered 7.6.2.

## Hints

> [!hint]- Hint 1
> Pair the two basis points before and after applying $\sigma$.

> [!hint]- Hint 2
> A primitive pairing value generates every $N$th root of unity.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Choose an ordered basis $(P,Q)$ of $E_j[N]$ and set $\zeta=e_N(P,Q)$. By the determinant rule for the nondegenerate Weil pairing, $\zeta$ is a primitive $N$th root of unity. For $\sigma\in H_{\mathbb Q}$, Galois covariance and the determinant rule give respectively
> $$
> \zeta^\sigma=e_N(P^\sigma,Q^\sigma)
> =e_N(P,Q)^{\det\rho(\sigma)}
> =\zeta^{\det\rho(\sigma)}.
> $$
> Every $\mu\in\mu_N$ is $\zeta^r$ for an integer $r$. Applying $\sigma$ commutes with integer powers, so
> $$
> \mu^\sigma=(\zeta^\sigma)^r
> =\zeta^{r\det\rho(\sigma)}
> =\mu^{\det\rho(\sigma)}.
> $$
> This proves the lemma for every root, not only for the chosen primitive one. The exponent is independent of its integer lift because $\mu^N=1$. Also $\det\rho(\sigma)$ is a unit modulo $N$, so it does define an automorphism of $\mu_N$.
>
> Thus the determinant character of the torsion representation is the cyclotomic action on roots of unity. In particular any automorphism fixing the torsion basis also fixes $\mu_N$; this is the fixed-field consequence used immediately after the lemma.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 294 / PDF p. 307. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

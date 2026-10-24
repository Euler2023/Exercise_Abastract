---
title: 'Exercise Gal157: Upper Ramification Numbering under an Intermediate Base Field'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, Exercise 2, printed p. 181, PDF p. 200
source_refs:
- S4/ch-II/sec-10/ex-2
created: '2026-10-23'
---

# Exercise Gal157: Upper Ramification Numbering under an Intermediate Base Field

## Problem Statement

> [!question] Neukirch II.10.2
> Let $K'$ be an intermediate field of $L/K$. Describe the relation between the ramification groups of $L/K$ and $L/K'$ in the upper numbering.

## Hints

> [!hint]- Hint 1
> Lower numbering is compatible with subgroups: $H_s=H\cap G_s$.

> [!hint]- Hint 2
> Convert the same lower parameter to upper parameters separately for G and H; their Herbrand functions need not agree.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Retain §10's hypotheses: $L/K$ finite Galois with a uniquely extended discrete valuation, and residue characteristic $p>0$. Put $G=\operatorname{Gal}(L/K)$, $H=\operatorname{Gal}(L/K')$. This H need not be normal. Both lower filtrations use the same normalized valuation of L, so their defining inequalities immediately give $H_s=H\cap G_s$ for all $s\ge-1$.
>
> Let $\varphi_G,\varphi_H$ be their increasing Herbrand functions, with inverses $\psi_G,\psi_H$; for $s\ge0$, $\varphi_G(s)=\int_0^s[G_0:G_t]^{-1}dt$, and similarly for H, extending by the identity on $[-1,0]$. The definition of upper numbering is $G^u=G_{\psi_G(u)}$ and $H^u=H_{\psi_H(u)}$. Substitution into the lower subgroup equality gives the exact answer
> $$
> H^u=H\cap G^{\varphi_G(\psi_H(u))},
> \qquad
> H\cap G^t=H^{\varphi_H(\psi_G(t))}.
> $$
> The first converts an upper parameter measured for $L/K'$ to the upper parameter measured for $L/K$. In general one must not replace $\varphi_G\psi_H(u)$ by $u$. Quotient compatibility, the content of (10.9), printed p. 181 / PDF p. 200, is a different operation and requires a normal subgroup.
>
> For a concrete check, take $p=3$, $L=\mathbb Q_3(\zeta_{27})$, $K'=\mathbb Q_3(\zeta_9)$, so $H$ has order three. II.10.1 gives its sole lower break at $8$, hence $H^3=H$. For the full G, its lower positive groups have indices $2$ on $(0,2]$ and $6$ on $(2,8]$. Thus $\varphi_G(2)=1$ and $\varphi_G(8)=2$, and $G^3=1$. This explicitly shows $H^3\ne H\cap G^3$, while the reparameterized formula gives $H^3=H\cap G^{\varphi_G(3)}$ as required.

## Related Concepts

- [[05 - Galois Theory/Concepts/Higher Ramification Groups and Herbrand Functions|Higher Ramification Groups and Herbrand Functions]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, Exercise 2, printed p. 181, PDF p. 200].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

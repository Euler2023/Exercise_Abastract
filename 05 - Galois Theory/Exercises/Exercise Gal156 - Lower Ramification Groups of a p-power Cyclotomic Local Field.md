---
title: 'Exercise Gal156: Lower Ramification Groups of a p-power Cyclotomic Local Field'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, Exercise 1, printed p. 181, PDF p. 200
source_refs:
- S4/ch-II/sec-10/ex-1
created: '2026-10-23'
---

# Exercise Gal156: Lower Ramification Groups of a p-power Cyclotomic Local Field

## Problem Statement

> [!question] Neukirch II.10.1
> Let $K=\mathbb Q_p$ and $K_n=K(\zeta)$, where $\zeta$ is a primitive $p^n$-th root of unity. Show that its ramification groups are
> $$
> G_s=G(K_n/K)\ (s=0),\quad
> G_s=G(K_n/K_1)\ (1\le s\le p-1),\quad
> G_s=G(K_n/K_2)\ (p\le s\le p^2-1),\quad\ldots,\quad
> G_s=1\ (p^{n-1}\le s).
> $$

## Hints

> [!hint]- Hint 1
> $\pi=\zeta-1$ is a uniformizer and the integer ring is $\mathbb Z_p[\pi]$.

> [!hint]- Hint 2
> For $\sigma_a(\zeta)=\zeta^a$, compute $v_{K_n}(\sigma_a\pi-\pi)$ from $k=v_p(a-1)$.

## Solution

> [!success]- Independent derivation and stated source corrections
> By (7.13), printed p. 159 / PDF p. 178, $K_n/K$ is totally ramified of degree $e=(p-1)p^{n-1}$, its integer ring is $\mathbb Z_p[\zeta]$, and $\pi=\zeta-1$ is a uniformizer. For a nonidentity $\sigma_a$, write $k=v_p(a-1)$, so $0\le k<n$. The root $\zeta^{a-1}$ has order $p^{n-k}$, and applying the same uniformizer valuation at that level gives
> $$
> v_{K_n}(\sigma_a\pi-\pi)
> =v_{K_n}(\zeta^{a-1}-1)
> =\frac{(p-1)p^{n-1}}{(p-1)p^{n-k-1}}=p^k.
> $$
> Every integer-ring element is a polynomial in $\pi$ with coefficients in $\mathbb Z_p$. Its difference under $\sigma_a$ is divisible by $\sigma_a\pi-\pi$, by the polynomial difference identity, and equality of the minimum is attained at $\pi$. Thus for every integer $j\ge0$,
> $$
> \sigma_a\in G_j\quad\Longleftrightarrow\quad p^{v_p(a-1)}\ge j+1.
> $$
> For $j=0$ this holds for every automorphism, giving full inertia. If $p^{r-1}\le j\le p^r-1$ with $1\le r\le n-1$, it is equivalent to $a\equiv1\pmod{p^r}$, exactly the subgroup fixing $K_r$. If $j\ge p^{n-1}$, no nonidentity automorphism satisfies it. This proves the full printed table, including $p=2$ and trivial low-degree levels.
>
> The source defines the filtration for real indices, but its printed table lists integer intervals. For real $s\ge0$ the exact convention is $G_s=G_{\lceil s\rceil}$, since its condition is the integer-valued inequality $v_{K_n}(\sigma x-x)\ge s+1$. This supplies the otherwise omitted ranges such as $0<s<1$ and fixes the endpoint convention explicitly.

## Related Concepts

- [[05 - Galois Theory/Concepts/Higher Ramification Groups and Herbrand Functions|Higher Ramification Groups and Herbrand Functions]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, Exercise 1, printed p. 181, PDF p. 200].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- For n=1 the nonidentity elements have i_G=1 and G_1=1. No group K_r beyond the chosen cyclotomic level is required; the last term is already trivial.

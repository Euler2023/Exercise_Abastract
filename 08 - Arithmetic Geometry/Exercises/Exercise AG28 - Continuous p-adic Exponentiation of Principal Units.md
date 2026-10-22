---
title: 'Exercise AG28: Continuous p-adic Exponentiation of Principal Units'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 4, printed p. 115, PDF p. 134
source_refs:
- S4/ch-II/sec-2/ex-4
created: '2026-10-23'
---

# Exercise AG28: Continuous p-adic Exponentiation of Principal Units

## Problem Statement

> [!question] Neukirch II.2.4
> Let $\epsilon\in1+p\mathbb Z_p$, let $\alpha=a_0+a_1p+a_2p^2+\cdots$ be a $p$-adic integer, and write $s_n=a_0+a_1p+\cdots+a_{n-1}p^{n-1}$. Show that the sequence $\epsilon^{s_n}$ converges to a number $\epsilon^\alpha$ in $1+p\mathbb Z_p$. Show furthermore that $1+p\mathbb Z_p$ is thus turned into a multiplicative $\mathbb Z_p$-module.

## Hints

> [!hint]- Hint 1
> Prove $(1+p^ku)^p\in1+p^{k+1}\mathbb Z_p$ for $k\ge1$, including $p=2$.

> [!hint]- Hint 2
> Use this to show that integer exponents congruent modulo $p^n$ give powers congruent modulo $p^{n+1}$. Extend the integer exponent identities by continuity.

## Solution

> [!success]- Independent derivation and stated source corrections
> Put $U_k=1+p^k\mathbb Z_p$. The binomial expansion shows $U_k^p\subset U_{k+1}$: the linear term has valuation at least $k+1$, the intermediate terms at least $2k+1$, and the final term at least $kp\ge k+1$. This last inequality includes $k=1,p=2$. By induction $\epsilon^{p^n}\in U_{n+1}$. Integer powers, including negative ones, preserve $U_{n+1}$, since $(1+u)^{-1}=1-u/(1+u)$ has the same divisibility. Therefore
> $$
> a-b\in p^n\mathbb Z\quad\Longrightarrow\quad \epsilon^a/\epsilon^b\in U_{n+1}.
> $$
> The digit truncations satisfy $s_m-s_n\in p^n\mathbb Z$ for $m\ge n$, so $\epsilon^{s_n}$ is Cauchy. Completeness of $\mathbb Q_p$ and closedness of $U_1$ give its limit in $U_1$; these facts are supplied by (2.2) and (2.3), printed p. 111 / PDF p. 130. The estimate also proves independence of any integer approximating sequence, and continuity in $\alpha$.
>
> The module identities are $u^{\alpha+\beta}=u^\alpha u^\beta$, $(uv)^\alpha=u^\alpha v^\alpha$, $(u^\alpha)^\beta=u^{\alpha\beta}$ and $u^1=u$. The first two follow by taking integer approximants and using continuity of multiplication. For the third, fix an integer $b$; continuity first gives $(u^\alpha)^b=u^{\alpha b}$. Approximate $\beta$ by integers $b_n$ and pass to the limit, using the exponent estimate uniformly for a fixed base in $U_1$. Finally $u^0=1$, so the additive zero of this multiplicatively written module is $1$. At $p=2$ the module can have torsion: $-1\in U_1$ and $(-1)^2=1$. A module need not be free or torsion-free.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 4, printed p. 115, PDF p. 134].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
- The proof uses integer powers and completeness; no logarithm or exponential series is imported.

---
title: 'Exercise G336: Continuous Profinite Exponentiation'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 1, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-1
created: '2026-10-23'
---

# Exercise G336: Continuous Profinite Exponentiation

## Problem Statement

> [!question] Neukirch IV.2.1
> Show that, for a profinite group $G$, the power map $G\times\mathbb Z\to G$, $(\sigma,n)\mapsto\sigma^n$, extends to a continuous map
> $$
> G\times\widehat{\mathbb Z}\longrightarrow G,\qquad(\sigma,a)\longmapsto\sigma^a,
> $$
> and that one has $(\sigma^a)^b=\sigma^{ab}$ and $\sigma^{a+b}=\sigma^a\sigma^b$ if $G$ is abelian.

## Hints

> [!hint]- Hint 1
> In the finite quotient $G/N$, powers depend only on the exponent modulo $\exp(G/N)$. These powers are compatible with quotient maps.

> [!hint]- Hint 2
> Define powers using $G\simeq\varprojlim_NG/N$, then check continuity and the identities in each finite quotient.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For each open normal subgroup $N$, put $m_N=\exp(G/N)$. For $a\in\widehat{\mathbb Z}$, define in the finite group
> $$
> (\sigma^a)_N=(\sigma N)^{a\bmod m_N}.
> $$
> If $M\subseteq N$, the quotient map preserves integer powers and reduction of exponents is compatible. These coordinates therefore form an element of the inverse limit. The text's inverse-limit description of a profinite group gives a unique $\sigma^a\in G$.
>
> Each coordinate depends only on the finite discrete data $\sigma N$ and $a\bmod m_N$, so the map from $G\times\widehat{\mathbb Z}$ to each finite quotient is continuous. The inverse-limit topology makes the full map continuous. For integer $a$, this definition agrees with integer exponentiation. Since $\mathbb Z$ is dense in $\widehat{\mathbb Z}$, the continuous extension is unique.
>
> In each finite quotient, all powers of a fixed element lie in the same cyclic subgroup. The integer exponent laws therefore hold coordinatewise, giving
> $$
> (\sigma^a)^b=\sigma^{ab},\qquad\sigma^{a+b}=\sigma^a\sigma^b.
> $$
> In fact, these two laws for a single fixed $\sigma$ do not require the whole group $G$ to be abelian; the source's abelian hypothesis is sufficient. If $G$ is abelian, one also proves $(\sigma\tau)^a=\sigma^a\tau^a$ in each quotient, making $G$ a topological $\widehat{\mathbb Z}$-module when written additively.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 1, printed p. 274, PDF p. 293]. An independent construction through finite quotients, using the text's inverse-limit description of profinite groups without assuming that profinite powers already exist.
- **Boundary:** For nonabelian $G$, one cannot generally add the identity $(\sigma\tau)^a=\sigma^a\tau^a$; it can fail even for the integer exponent $2$.

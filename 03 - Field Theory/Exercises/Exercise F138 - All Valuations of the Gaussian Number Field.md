---
title: 'Exercise F138: All Valuations of the Gaussian Number Field'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 2, printed p. 166, PDF p. 185
source_refs:
- S4/ch-II/sec-8/ex-2
created: '2026-10-23'
---

# Exercise F138: All Valuations of the Gaussian Number Field

## Problem Statement

> [!question] Neukirch II.8.2
> Determine the valuations of the field $\mathbb Q(i)$ of Gaussian numbers.

## Hints

> [!hint]- Hint 1
> Complex conjugate embeddings give the same archimedean absolute value.

> [!hint]- Hint 2
> For odd p, $X^2+1$ splits over $\mathbb Q_p$ exactly when $p\equiv1\pmod4$. Treat 2 with the uniformizer $i-1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> There is one archimedean class, represented by $|a+bi|_\infty=\sqrt{a^2+b^2}$: the two embeddings into $\mathbb C$ differ by conjugation and hence have equal absolute values.
>
> For each odd prime $p\equiv1\pmod4$, the polynomial $X^2+1$ has two simple roots modulo $p$, which lift to $\pm\gamma\in\mathbb Q_p$. There are exactly two extensions, $|a+bi|_{p,+}=|a+b\gamma|_p$ and $|a+bi|_{p,-}=|a-b\gamma|_p$. They are distinct because the two local factors give different prime ideals, equivalently different valuation rings.
>
> For $p\equiv3\pmod4$ the reduction is irreducible and there is one extension, represented by $|a+bi|_p=|a^2+b^2|_p^{1/2}$. This is unramified of residue degree two. At $p=2$, $(i-1)$ satisfies $Y^2+2Y+2=0$, which is Eisenstein, so the local extension is quadratic and ramified; there is again just one valuation, with the same norm formula. Nontrivial valuations restrict nontrivially to $\mathbb Q$, and Ostrowski plus the local factor classification shows there are no other classes. The ring-of-integers interpretation is the familiar split/inert/ramified classification of rational primes in $\mathbb Z[i]$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 2, printed p. 166, PDF p. 185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

---
title: 'Exercise AG41: Push-Pull and Degrees of Replete Divisors'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 6, printed p. 194, PDF p. 213
source_refs:
- S4/ch-III/sec-1/ex-6
created: '2026-10-23'
---

# Exercise AG41: Push-Pull and Degrees of Replete Divisors

## Problem Statement

> [!question] Neukirch III.1.6
> Show that $\tau_*\circ\tau^*=[L:K]$ and that
> $$
> \deg(\tau_*D)=\deg(D),\qquad \deg(\tau^*D)=[L:K]\deg(D).
> $$

## Hints

> [!hint]- Hint 1
> First compute push-pull on a single prime divisor $\mathfrak p$. The coefficient needed is $\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}$.

> [!hint]- Hint 2
> Degree is defined as $\sum\nu_{\mathfrak p}\log\mathfrak N(\mathfrak p)$, and $\mathfrak N(\mathfrak P)=\mathfrak N(\mathfrak p)^{f_{\mathfrak P\mid\mathfrak p}}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Retain $\tau:K\hookrightarrow L$ from the preceding two exercises, identify $K$ with $\tau K$, and write $d=[L:K]$. This section's (1.2)(i)–(ii) give, including at infinite places,
> $$
> \sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}=d,\qquad
> \log\mathfrak N(\mathfrak P)=f_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak p).
> $$
> These are proved inputs from the source [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.2), printed p. 184, PDF p. 203].
>
> For a single prime divisor of the base field,
> $$
> \tau_*\tau^*(\mathfrak p)=\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}\mathfrak p=d\mathfrak p.
> $$
> Extending additively and linearly in real coefficients gives $\tau_*\tau^*D=dD$. The identity therefore already holds on divisor groups, and hence on divisor class groups.
>
> For $D_L=\sum_{\mathfrak P}\nu_{\mathfrak P}\mathfrak P$, one has
> $$
> \begin{aligned}
> \deg(\tau_*D_L)
> &=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak P}f_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak p)\\
> &=\sum_{\mathfrak P}\nu_{\mathfrak P}\log\mathfrak N(\mathfrak P)=\deg(D_L).
> \end{aligned}
> $$
> For $D_K=\sum_{\mathfrak p}\nu_{\mathfrak p}\mathfrak p$, one has
> $$
> \begin{aligned}
> \deg(\tau^*D_K)
> &=\sum_{\mathfrak p}\nu_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}\log\mathfrak N(\mathfrak P)\\
> &=\sum_{\mathfrak p}\nu_{\mathfrak p}\log\mathfrak N(\mathfrak p)\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}f_{\mathfrak P\mid\mathfrak p}\\
> &=d\deg(D_K).
> \end{aligned}
> $$
> For example, take $L=\mathbb Q(i)$ and $K=\mathbb Q$. The pullback of the real infinite place $\infty$ is the unique complex infinite place $\mathfrak P$, with $e=1,f=2$. One has $\deg\mathfrak P=2$ and $\deg\infty=1$, while the pushforward is $2\infty$. These values verify each of the three identities.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 6, printed p. 194, PDF p. 213]. An independent summation proof. In the first printed degree identity, $D$ is a divisor of $L$; in the second, it is a divisor of $K$. The solution therefore writes $D_L,D_K$ to distinguish the two domains.
- **Boundary:** The identity proved here is $\tau_*\tau^*=d$. The reverse composition is generally not multiplication by $d$; in the Galois case it corresponds to the sum over all conjugates under automorphisms.

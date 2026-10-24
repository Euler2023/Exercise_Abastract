---
title: "Exercise R348: Principalizing an Ideal by Adjoining a Root"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 6, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise R348: Principalizing an Ideal by Adjoining a Root

## Problem Statement

> [!question] Neukirch I.6.6
> Let $\mathfrak a$ be an integral ideal of $K$ and $\mathfrak a^m=(a)$. Show that $\mathfrak a$ becomes a principal ideal in the field $L=K(\sqrt[m]{a})$, in the sense that $\mathfrak a\mathcal O_L=(\alpha)$.

## Hints

> [!hint]- Hint 1: Name the adjoined element
> Choose $\alpha$ with $\alpha^m=a$, where $m\ge1$. If the ideal is nonzero, its generator $a$ is integral and nonzero.

> [!hint]- Hint 2: Compare the same powers
> Extension of ideals respects products. Compare $(\mathfrak a\mathcal O_L)^m$ and $((\alpha))^m$.

> [!hint]- Hint 3: Cancel exponents of prime ideals
> The nonzero fractional ideal group of $\mathcal O_L$ is free abelian on its prime ideals, so equality of $m$th powers implies equality.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> Take $m\ge1$ and choose $\alpha$ with $\alpha^m=a$; this defines the symbol $\alpha$ used at the end of the printed question. First assume $\mathfrak a\ne0$. Then $a\ne0$ and $a\in\mathcal O_K$, since $(a)=\mathfrak a^m\subseteq\mathcal O_K$. The equation $T^m-a$ shows that $\alpha$ is integral over $\mathcal O_K$, hence over $\mathbb Z$. Thus $\alpha\in\mathcal O_L$, and $L/K$ is a finite extension of degree at most $m$.
>
> Let $\mathfrak b=\mathfrak a\mathcal O_L$. Extension respects ideal multiplication: both $(IJ)\mathcal O_L$ and $(I\mathcal O_L)(J\mathcal O_L)$ consist of finite sums of products of elements of $I$, $J$, and $\mathcal O_L$. Consequently
> $$
> \mathfrak b^m=(\mathfrak a^m)\mathcal O_L
> =(a)\mathcal O_L=(\alpha^m)=(\alpha)^m.
> $$
> The ring $\mathcal O_L$ is a Dedekind domain, so factor the nonzero ideals $\mathfrak b$ and $(\alpha)$ uniquely into prime ideals. For every nonzero prime $\mathfrak P$, equality of their $m$th powers gives
> $$
> m\,v_{\mathfrak P}(\mathfrak b)=m\,v_{\mathfrak P}((\alpha)).
> $$
> As $m>0$, the exponents agree. All prime factors and exponents therefore agree, and
> $$
> \mathfrak a\mathcal O_L=(\alpha).
> $$
> If the zero ideal is allowed, the hypothesis forces $a=0$; one can take $\alpha=0$ and $L=K$, and the conclusion is immediate. Conversely $\mathfrak a^m=0$ in a domain forces $\mathfrak a=0$. This settles that harmless boundary separately from the nonzero ideal-group argument.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Prime-Ideal Factorization]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Extensions]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Principalization]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 6, printed p. 38, PDF p. 57]. No source figure is required.
- **Notation:** The printed conclusion introduces $\alpha$ without explicitly defining it. It is the chosen root $\alpha^m=a$ used to form $L$. The positive-integer meaning of $m$ is made explicit; the source's symbols $a$ and $\alpha$ are preserved.
- **Inputs and proof status:** The proof independently applies extension of ideals and unique prime-ideal factorization in number-field integer rings, from [S4, Ch. I, §3, printed pp. 16–23, PDF pp. 35–42]. Transitivity of integrality is the §2 input. Equality of ideals is proved through their exponents, not inferred from equality of chosen generators.
- **Routing:** Ideal extension and prime-ideal factorization do the work, so Ring Theory is primary.

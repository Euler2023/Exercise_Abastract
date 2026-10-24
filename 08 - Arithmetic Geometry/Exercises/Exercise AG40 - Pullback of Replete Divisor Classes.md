---
title: 'Exercise AG40: Pullback of Replete Divisor Classes'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 5, printed p. 194, PDF p. 213
source_refs:
- S4/ch-III/sec-1/ex-5
created: '2026-10-23'
---

# Exercise AG40: Pullback of Replete Divisor Classes

## Problem Statement

> [!question] Neukirch III.1.5
> Given any replete divisor $D=\sum_{\mathfrak p}\nu_{\mathfrak p}\mathfrak p$ of $K$, define a replete divisor of $L$ by the rule
> $$
> \tau^*(D)=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}\nu_{\mathfrak p}e_{\mathfrak P\mid\mathfrak p}\mathfrak P,
> $$
> where $e_{\mathfrak P\mid\mathfrak p}$ denotes the ramification index of $\mathfrak P$ over $K$. Show that $\tau^*$ induces a homomorphism
> $$
> \tau^*:CH^1(\overline{\mathcal O}_K)\longrightarrow CH^1(\overline{\mathcal O}_L).
> $$

## Hints

> [!hint]- Hint 1
> Use the field homomorphism $\tau:K\to L$ from the preceding exercise. For $a\in K^\times$, compare coefficients in $\tau^*\operatorname{div}_K(a)$ and $\operatorname{div}_L(\tau a)$.

> [!hint]- Hint 2
> At finite places, $v_{\mathfrak P}(\tau a)=e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a)$. At infinite places the book takes $e=1$, and the usual modulus of the same embedded value is unchanged.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Retain $\tau:K\hookrightarrow L$ from Exercise 4. At every finite place the ramification index is a positive integer, so the finite coefficients of the pullback remain integers. There are finitely many places above each base-field place, so finite support remains finite; real coefficients are allowed at infinite places. Thus the formula first defines an additive homomorphism between the replete divisor groups.
>
> Let $a\in K^\times$. At a finite place $\mathfrak P\mid\mathfrak p$, the extension formula for normalized discrete valuations gives
> $$
> v_{\mathfrak P}(\tau a)=e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a).
> $$
> At an infinite place, $v_{\mathfrak p}(a)=-\log|\sigma(a)|$. If $\widetilde\sigma:L\to\mathbb C$ extends $\sigma\circ\tau^{-1}$, then $|\widetilde\sigma(\tau a)|=|\sigma(a)|$. Since the book takes $e_{\mathfrak P\mid\mathfrak p}=1$ at infinity, the same formula holds there. This applies (1.2)(iii) of this section [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, printed p. 184, PDF p. 203].
>
> Substitution at each place gives
> $$
> \begin{aligned}
> \tau^*(\operatorname{div}_K a)
> &=\sum_{\mathfrak p}\sum_{\mathfrak P\mid\mathfrak p}e_{\mathfrak P\mid\mathfrak p}v_{\mathfrak p}(a)\mathfrak P\\
> &=\sum_{\mathfrak P}v_{\mathfrak P}(\tau a)\mathfrak P
> =\operatorname{div}_L(\tau a).
> \end{aligned}
> $$
> Principal divisors therefore map to principal divisors, so $[D]\mapsto[\tau^*D]$ is well defined on the quotient and preserves addition.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 5, printed p. 194, PDF p. 213]. An independent derivation. The statement inherits $\tau$ from Exercise 4; this hypothesis is made explicit at the start of the solution.
- **Convention:** Under the book's definitions at infinity, the pullback coefficient for $\mathbb C/\mathbb R$ is $e=1$. The degree 2 occurs in the pushforward coefficient $f$.

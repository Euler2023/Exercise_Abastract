---
title: 'Exercise F131: Valuations of a Rational Function Field and the Constant Field Condition'
topic: field-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 3, printed p. 123, PDF p. 142
source_refs:
- S4/ch-II/sec-3/ex-3
created: '2026-10-23'
---

# Exercise F131: Valuations of a Rational Function Field and the Constant Field Condition

## Problem Statement

> [!question] Neukirch II.3.3
> Let $k$ be a field and $K=k(t)$ the function field in one variable. Show that the valuations $v_{\mathfrak p}$ associated to the prime ideals $\mathfrak p=(p(t))$ of $k[t]$, together with the degree valuation $v_\infty$, are the only valuations of $K$, up to equivalence. What are the residue class fields?

> [!warning] Source issue
> The printed statement omits the restriction that the valuations be trivial on the constant field $k$. For general $k$ it is false. The solution gives a counterexample and proves the intended relative classification. The book excludes trivial valuations in Definition (3.1), printed p. 116 / PDF p. 135.

## Hints

> [!hint]- Hint 1
> First check the restriction to $k$: the listed valuations are all trivial there.

> [!hint]- Hint 2
> For a nontrivial valuation trivial on $k$, split into $|t|>1$ and $|t|\le1$. In the latter case look at the ideal of polynomials of absolute value less than one.

## Solution

> [!success]- Independent derivation and stated source corrections
> **The literal unrestricted assertion is false.** Take $k=\mathbb Q$ and the $p$-adic Gauss absolute value on $\mathbb Q(t)$: for a polynomial $f=\sum a_it^i$ put $|f|=\max_i|a_i|_p$, and extend by quotients. Multiplicativity follows by scaling to integral coefficients with nonzero reductions and using that the product of two nonzero polynomials over $\mathbb F_p$ is nonzero. It restricts nontrivially to $\mathbb Q$, so it is not equivalent to any listed valuation. The corrected classification concerns nontrivial valuations **trivial on $k$**.
>
> Let $|\ |$ be such a valuation. Integers have absolute value at most one, since they lie in $k$, so the valuation is nonarchimedean. If $|t|>1$, the terms of a polynomial have distinct absolute values, and the leading term is strictly largest. Hence $|f|=|t|^{\deg f}$. For $f/g$ this gives a positive power of the degree absolute value, and the associated additive valuation is $v_\infty(f/g)=\deg g-\deg f$.
>
> If $|t|\le1$, all polynomials have value at most one. Some nonzero polynomial must have value less than one, because otherwise the valuation on $k(t)$ would be trivial. The set $\mathfrak m=\{f\in k[t]:|f|<1\}$ is therefore a nonzero prime ideal; since $k[t]$ is a PID, $\mathfrak m=(\pi)$ for a monic irreducible $\pi$. For $u\notin(\pi)$, Bézout gives $au+b\pi=1$ with $a,b\in k[t]$. If $|u|<1$, both summands would have value less than one, contradiction. Thus $|u|=1$, and factoring out powers of $\pi$ shows $|f/g|=|\pi|^{\operatorname{ord}_\pi(f)-\operatorname{ord}_\pi(g)}$, proving equivalence to $v_\pi$.
>
> The valuation ring at $\pi$ is $k[t]_{(\pi)}$, with residue field $k[t]/(\pi)$, since every denominator not divisible by $\pi$ reduces to a unit. At infinity use $u=t^{-1}$: the ring is $k[u]_{(u)}$, and its residue field is $k$. Distinct monic irreducibles and infinity have different valuation rings, hence give different equivalence classes.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 3, printed p. 123, PDF p. 142].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.

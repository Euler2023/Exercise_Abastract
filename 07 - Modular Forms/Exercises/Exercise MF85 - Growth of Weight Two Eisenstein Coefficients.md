---
title: "Exercise MF85: Growth of Weight Two Eisenstein Coefficients"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.6, Exercise 4.6.2, printed p. 133, PDF p. 147"
source_refs:
  - "S7/ch-4/sec-6/ex-2"
created: 2026-10-28
---

# Exercise MF85: Growth of Weight Two Eisenstein Coefficients

## Problem Statement

> [!question] Original Exercise 4.6.2
> Show that the $n$th Fourier coefficient of $g_2^{\overline v}(\tau)$ is bounded by $Cn^2$ for some constant $C$.
>
> Here $g_2^{\overline v}(\tau)=G_2^{\overline v}(\tau)-\pi/(N^2\operatorname{Im}\tau)$, with $G_2^{\overline v}$ as in (4.23).

## Hints

> [!hint]- Hint 1
> For positive indices, the nonholomorphic correction has no effect.

> [!hint]- Hint 2
> Bound each signed divisor contribution by $|m|\le n$, and bound the number of positive divisors by $n$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $n\ge1$, equation (4.23) gives
> $$
> a_n=\frac{C_2}{N^2}\sum_{\substack{m\mid n\\n/m\equiv c_v\ (N)}}\operatorname{sgn}(m)m\mu_N^{d_vm}.
> $$
> Each root of unity has modulus one and $|\operatorname{sgn}(m)m|=|m|$. Removing the congruence restriction increases the absolute bound, so
> $$
> |a_n|\le\frac{|C_2|}{N^2}\sum_{m\mid n}|m|=\frac{2|C_2|}{N^2}\sigma_1(n)\le\frac{2|C_2|}{N^2}n\tau(n)\le\frac{2|C_2|}{N^2}n^2.
> $$
> Here $\tau(n)\le n$ because its positive divisors are a subset of $\{1,\ldots,n\}$. Thus $C=2|C_2|/N^2$ works, uniformly in the vector. The extra term $-\pi/(N^2y)$ depends on $y$ but not $x$ and therefore affects only the zeroth Fourier mode in the real coordinate; it changes none of these positive-index coefficients. The assertion is a bound for $n\ge1$, not a bound by $C\cdot0^2$ on that nonconstant zeroth mode.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.6.2, printed p. 133 / PDF p. 147]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Equations (4.23),(4.24) are on printed pp.131–132/PDF pp.145–146. This coarse $O(n^2)$ bound is valid; it does not make the false stronger claim $\sigma_1(n)=O(n)$ discussed in Exercise 5.9.1.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

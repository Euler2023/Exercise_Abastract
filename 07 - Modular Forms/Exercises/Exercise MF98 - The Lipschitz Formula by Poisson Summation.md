---
title: "Exercise MF98: The Lipschitz Formula by Poisson Summation"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.4, printed p. 147, PDF p. 161"
source_refs:
  - "S7/ch-4/sec-9/ex-4"
created: 2026-10-28
---

# Exercise MF98: The Lipschitz Formula by Poisson Summation

## Problem Statement

> [!question] Original Exercise 4.9.4
> Formula(1.2) is a special case of the Lipschitz formula, for $\tau\in\mathcal H$, $q=e^{2\pi i\tau}$,
> $$
> \sum_{d\in\mathbb Z}(\tau+d)^{-s}=\frac{(-2\pi i)^s}{\Gamma(s)}\sum_{m=1}^\infty m^{s-1}q^m,\qquad\operatorname{Re}s>1.
> $$
> Prove it by applying Poisson summation to $f(x)=x^{s-1}e^{2\pi ix\tau}$ for $x>0$ and $f(x)=0$ for $x\le0$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Evaluate the Fourier transform by the gamma integral with parameter $2\pi i(n-\tau)$.

> [!hint]- Hint 2
> Justify Poisson summation by periodization and the absolute convergence of the resulting Fourier coefficients.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\sigma=\operatorname{Re}s>1$, $f$ is continuous at zero, integrable, and exponentially decreasing at positive infinity. Its periodization $P(x)=\sum_{m\in\mathbb Z}f(x+m)$ converges uniformly on a unit interval, hence is continuous. Its Fourier coefficients, by dominated interchange, are $\widehat f(n)$.
>
> The gamma integral with $a=2\pi i(n-\tau)$, whose real part is $2\pi\operatorname{Im}\tau>0$, gives
> $$
> \widehat f(n)=\int_0^\infty x^{s-1}e^{-2\pi i(n-\tau)x}dx
> =\Gamma(s)[2\pi i(n-\tau)]^{-s}.
> $$
> The gamma-Laplace identity here follows first for positive real $a$ by substitution and then for $\operatorname{Re}a>0$ by holomorphic continuation of the absolutely convergent integral. These coefficients are $O((1+|n|)^{-\sigma})$, so their Fourier series is absolutely uniformly convergent. Its sum equals $P$, by uniqueness of Fourier coefficients for continuous periodic functions. Evaluating at zero proves Poisson summation in precisely the required regularity class, without assuming $f$ is Schwartz at zero.
>
> Thus
> $$
> \sum_{m\ge1}m^{s-1}q^m=\Gamma(s)\sum_{n\in\mathbb Z}[2\pi i(n-\tau)]^{-s}.
> $$
> Use the principal logarithm for $\tau-n$ in the upper half-plane, and $\log(-2\pi i)=\log(2\pi)-\pi i/2$. Since $-i(\tau-n)$ lies in the right half-plane, their logarithms add with these branches. Consequently $[2\pi i(n-\tau)]^{-s}=(-2\pi i)^{-s}(\tau-n)^{-s}$. Rearrange and replace $n$ by $-d$ to obtain the formula. Both final sums converge absolutely in the stated half-plane.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 147 / PDF 161. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

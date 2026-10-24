---
title: "Exercise MF26: Logarithms and Differentiation of the Eta Product"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.10, printed p. 24, PDF p. 39; eta definition, printed p. 19, PDF p. 34; Appendix A hint, printed p. 414, PDF p. 425"
source_refs:
  - "S7/ch-1/sec-2/ex-10"
created: 2026-10-24
---

# Exercise MF26: Logarithms and Differentiation of the Eta Product

## Problem Statement

> [!question] Original Exercise 1.2.10
> (a) Show that the series $S(\tau)=\sum_{n=1}^{\infty}\log(1-q^n)$ converges absolutely and uniformly on compact subsets of $\mathcal H$. (A hint for this exercise is at the end of the book.)
>
> (b) Show the logarithmic differentiation formula $(\log(\prod f_n))'=\sum f_n'/f_n$ for finite products. The analogous result for infinite products applies to the Dedekind eta function.
>
> Here $q=e^{2\pi i\tau}$. The source defines $\eta(\tau)=e^{2\pi i\tau/24}\prod_{n\ge1}(1-q^n)$ on printed p. 19 / PDF p. 34. In (a), $\log(1-z)=-\sum_{m\ge1}z^m/m$ is the branch normalized to be zero at $z=0$.

## Hints

> [!hint]- Hint 1
> Expand each logarithm as a power series, then bound the resulting double series using $|q|\le\rho<1$ on a compact set.

> [!hint]- Hint 2
> For the product derivative, first work where every factor is nonzero. For eta, also bound the differentiated series locally uniformly.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a)** On a compact subset $K\subset\mathcal H$, choose $\delta>0$ with $\operatorname{Im}\tau\ge\delta$ and put $\rho=e^{-2\pi\delta}<1$. The branch in the statement is holomorphic because $|q^n|<1$. Its absolute values satisfy
> $$
> \sum_{n\ge1}|\log(1-q^n)|
> \le\sum_{n,m\ge1}\frac{\rho^{nm}}m
> =\sum_{m\ge1}\frac{\rho^m}{m(1-\rho^m)}
> \le\frac1{1-\rho}\sum_{m\ge1}\frac{\rho^m}m<\infty.
> $$
> The bound is independent of $\tau\in K$. The Weierstrass M-test therefore gives absolute and uniform convergence on $K$, and the locally uniform limit theorem makes $S$ holomorphic.
>
> **(b): finite products.** For differentiable functions $f_1,\ldots,f_M$ that do not vanish on the domain under consideration, the product rule gives
> $$
> \frac{(\prod_{n=1}^M f_n)'}{\prod_{n=1}^M f_n}
> =\sum_{n=1}^M\frac{f_n'}{f_n}.
> $$
> This is the logarithmic derivative identity. A single global logarithm need not exist for arbitrary factors; any local logarithmic branches have this derivative, which is branch independent.
>
> **Eta and the infinite product.** Part (a) defines
> $$
> \eta(\tau)=\exp\left(\frac{\pi i\tau}{12}+S(\tau)\right),
> $$
> which is holomorphic and never zero. Moreover, on $K$,
> $$
> \sum_{n\ge1}\left|\frac{d}{d\tau}\log(1-q^n)\right|
> \le2\pi\sum_{n\ge1}\frac{n\rho^n}{1-\rho^n}
> \le\frac{2\pi}{1-\rho}\sum_{n\ge1}n\rho^n<\infty.
> $$
> Thus termwise differentiation is justified, and
> $$
> \frac{\eta'(\tau)}{\eta(\tau)}
> =\frac{\pi i}{12}-2\pi i\sum_{n\ge1}\frac{nq^n}{1-q^n}
> =\frac{\pi i}{12}\left(1-24\sum_{m\ge1}\sigma(m)q^m\right)
> =\frac{\pi i}{12}E_2(\tau).
> $$
> The middle rearrangement is absolutely convergent by the same bound. This establishes the infinite-product application asserted by the exercise; no unrestricted rule for arbitrary infinite products has been assumed. For example, the first coefficient of the logarithmic derivative is $-2\pi i q$, agreeing with the single factor $1-q$ and the coefficient $-24q$ of $E_2$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]

## Notes

The exercise, eta definition and Appendix A hint were visually verified. The independent argument uses the M-test, the locally uniform limit theorem for holomorphic functions, and justified termwise differentiation. The logarithm branch and nonvanishing assumptions are explicit. Uniform convergence is on compact subsets, not on all of the upper half-plane.

---
title: "Exercise MF16: Partial Fractions and Fourier Series for the Cotangent"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.5, printed p. 8, PDF p. 23"
source_refs:
  - "S7/ch-1/sec-1/ex-5"
created: 2026-10-24
---

# Exercise MF16: Partial Fractions and Fourier Series for the Cotangent

## Problem Statement

> [!question] Exercise 1.1.5
> Establish the two formulas for $\pi\cot\pi\tau$ in (1.1). (A hint for this exercise is at the end of the book.)
>
> The referenced equation is [S7, printed p. 5, PDF p. 20]:
> $$
> \frac1\tau+\sum_{d=1}^{\infty}\left(\frac1{\tau-d}+\frac1{\tau+d}\right)
> =\pi\cot\pi\tau
> =\pi i-2\pi i\sum_{m=0}^{\infty}q^m,
> \qquad q=e^{2\pi i\tau},\quad \tau\in\mathcal H.
> \tag{1.1}
> $$


## Hints

> [!hint]- Hint 1
> Use the logarithmic derivative of the Euler product for $\sin\pi\tau$, as suggested in Appendix A.

> [!hint]- Hint 2
> Express sine and cosine using exponentials, then expand $1/(1-q)$ as a geometric series for $|q|<1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Partial fractions.** Use Euler's sine product
> $$
> \sin\pi\tau=\pi\tau\prod_{n=1}^{\infty}(1-\tau^2/n^2).
> $$
> This is the named external analytic input supplied by the source's Appendix A hint [S7, printed p. 413, PDF p. 424]; its general proof is not part of the checked hint. On a compact set avoiding the integers, the logarithmic derivatives of all sufficiently large factors satisfy
> $$
> \left|\frac{-2\tau}{n^2-\tau^2}\right|\leq C_K/n^2.
> $$
> Thus their series converges uniformly there. Local differentiation of the product, or of a locally chosen logarithm, is legitimate and gives
> $$
> \pi\cot\pi\tau
> =\frac1\tau+\sum_{n=1}^{\infty}\frac{-2\tau}{n^2-\tau^2}
> =\frac1\tau+\sum_{n=1}^{\infty}\left(\frac1{\tau-n}+\frac1{\tau+n}\right).
> $$
> The terms must be paired as printed: the paired term is $O_K(n^{-2})$, whereas the absolute sum of the individual simple fractions diverges.
>
> **Fourier series.** Euler's exponential formulas give, for $q=e^{2\pi i\tau}$,
> $$
> \cot\pi\tau=i\frac{e^{i\pi\tau}+e^{-i\pi\tau}}{e^{i\pi\tau}-e^{-i\pi\tau}}
> =i\frac{q+1}{q-1}
> =i-\frac{2i}{1-q}.
> $$
> For $\tau\in\mathcal H$, $|q|<1$, so the convergent geometric series yields
> $$
> \pi\cot\pi\tau=\pi i-2\pi i\sum_{m=0}^{\infty}q^m.
> $$
> This proves both identities with the source's signs and the index starting at $m=0$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

## Notes

- **Domain:** The partial-fraction identity extends to every $\tau\in\mathbb C\setminus\mathbb Z$. The displayed Fourier series uses $\operatorname{Im}\tau>0$.
- **Proof boundary:** Euler's sine product is an imported theorem, explicitly suggested by the source. The logarithmic differentiation and geometric-series steps are derived here.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.5, printed p. 8, PDF p. 23]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.

---
title: "Exercise MF88: Absolute Convergence in the Hurwitz Mellin Integral"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.7, Exercise 4.7.3, printed p. 138, PDF p. 152"
source_refs:
  - "S7/ch-4/sec-7/ex-3"
created: 2026-10-28
---

# Exercise MF88: Absolute Convergence in the Hurwitz Mellin Integral

## Problem Statement

> [!question] Original Exercise 4.7.3
> Let $0<r\le1$ and let $\operatorname{Re}s>1$. Show that the sum $\sum_{n=0}^\infty e^{-(r+n)t}t^{s-1}$ converges absolutely. Show that the sum $\sum_n\int_0^\infty e^{-(r+n)t}t^{s-1}dt$ converges. Show that the integral of the sum is equal to the sum of the integrals. (A hint for this exercise is at the end of the book.)
>
> The real variable satisfies $t>0$, as in the surrounding Mellin-integral definition.

## Hints

> [!hint]- Hint 1
> For fixed $t>0$, this is a geometric series in $e^{-t}$.

> [!hint]- Hint 2
> Integrate the absolute values first. The resulting numerical series is a constant multiple of $\sum(r+n)^{-\operatorname{Re}s}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $\sigma=\operatorname{Re}s>1$. At a fixed positive $t$, using $|t^{s-1}|=t^{\sigma-1}$ gives
> $$
> \sum_{n\ge0}|e^{-(r+n)t}t^{s-1}|=t^{\sigma-1}\frac{e^{-rt}}{1-e^{-t}}<\infty.
> $$
> For the integrated absolute values, substitute $u=(r+n)t$ in each term:
> $$
> \sum_{n\ge0}\int_0^\infty e^{-(r+n)t}t^{\sigma-1}dt=\Gamma(\sigma)\sum_{n\ge0}(r+n)^{-\sigma}<\infty.
> $$
> The $n=0$ term is finite because $r>0$, and the tail is dominated by a convergent $p$-series because $\sigma>1$. Thus each complex integral exists absolutely, and its absolute value is bounded by the corresponding integral of the absolute value. The numerical sum of these complex integrals is therefore absolutely convergent.
>
> Tonelli's theorem first identifies the integral of the nonnegative sum of absolute values with the displayed finite quantity. Fubini's theorem then applies to the complex summands, giving
> $$
> \int_0^\infty\sum_{n\ge0}e^{-(r+n)t}t^{s-1}dt=\sum_{n\ge0}\int_0^\infty e^{-(r+n)t}t^{s-1}dt.
> $$
> This verifies the exchange, rather than relying on pointwise convergence alone. The requirement $t>0$ is essential to the initial geometric-series statement.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.7.3, printed p. 138 / PDF p. 152]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The variable domain $t>0$ and definition $f_r(t)=e^{-rt}/(1-e^{-t})$ are on printed p.135/PDF p.149; the Mellin integral is on printed p.136/PDF p.150. The proof explicitly verifies the hypotheses of Tonelli and Fubini.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

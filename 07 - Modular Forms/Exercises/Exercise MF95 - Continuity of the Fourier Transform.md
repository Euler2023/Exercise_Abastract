---
title: "Exercise MF95: Continuity of the Fourier Transform"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.1, printed p. 146, PDF p. 160"
source_refs:
  - "S7/ch-4/sec-9/ex-1"
created: 2026-10-28
---

# Exercise MF95: Continuity of the Fourier Transform

## Problem Statement

> [!question] Original Exercise 4.9.1
> Show that the Fourier transform is continuous. (A hint for this exercise is at the end of the book.)
>
> For $f\in L^1(\mathbb R^l)$ the convention is $\widehat f(x)=\int_{\mathbb R^l}f(y)e^{-2\pi i\langle y,x\rangle}\,dy$.

## Hints

> [!hint]- Hint 1
> Let $x_n\to x$ and use dominated convergence.

> [!hint]- Hint 2
> The difference integrand is bounded by $2|f(y)|$, an integrable function.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> If $x_n\to x$, continuity of the exponential gives pointwise convergence $f(y)e^{-2\pi i\langle y,x_n\rangle}\to f(y)e^{-2\pi i\langle y,x\rangle}$. Every integrand has absolute value at most $|f(y)|$, which is integrable. The dominated convergence theorem therefore gives $\widehat f(x_n)\to\widehat f(x)$. Sequential continuity equals continuity in Euclidean space, proving the assertion.
>
> In fact the same domination applied to
> $$
> |\widehat f(x+h)-\widehat f(x)|\le\int |f(y)|\,|e^{-2\pi i\langle y,h\rangle}-1|\,dy
> $$
> shows a bound tending to zero independently of $x$, so the transform is uniformly continuous. Also $|\widehat f(x)|\le\|f\|_1$. No differentiability of $f$ is needed.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 146 / PDF 160. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

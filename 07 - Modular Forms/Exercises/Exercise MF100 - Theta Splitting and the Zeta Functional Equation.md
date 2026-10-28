---
title: "Exercise MF100: Theta Splitting and the Zeta Functional Equation"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.9, Exercise 4.9.6, printed p. 147, PDF p. 161"
source_refs:
  - "S7/ch-4/sec-9/ex-6"
created: 2026-10-28
---

# Exercise MF100: Theta Splitting and the Zeta Functional Equation

## Problem Statement

> [!question] Original Exercise 4.9.6
> Verify the calculations leading up to formula(4.38).
>
> With $\vartheta(it)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ and $\xi(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$, the target is
> $$
> \xi(s)=\tfrac12\int_1^\infty(\vartheta(it)-1)\bigl(t^{s/2}+t^{(1-s)/2}\bigr)\frac{dt}{t}-\frac1s-\frac1{1-s}\quad(\operatorname{Re}s>1).
> $$

## Hints

> [!hint]- Hint 1
> Split the theta Mellin integral at one and substitute $t=1/u$ in its lower part.

> [!hint]- Hint 2
> Use $\vartheta(i/u)=u^{1/2}\vartheta(iu)$ and integrate the two elementary powers separately.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $\operatorname{Re}s>1$, termwise integration of the absolutely convergent theta series gives
> $$
> \xi(s)=\tfrac12\int_0^\infty(\vartheta(it)-1)t^{s/2}\frac{dt}{t}.
> $$
> Absolute convergence follows either from this nonnegative majorant at $\operatorname{Re}s$, or from exponential decay at infinity and the Poisson transformation at zero. In the portion $0<t<1$, separate $-1$, substitute $u=1/t$, and apply $\vartheta(i/u)=u^{1/2}\vartheta(iu)$:
> $$
> \tfrac12\int_0^1(\vartheta(it)-1)t^{s/2}\frac{dt}{t}
> =\tfrac12\int_1^\infty\vartheta(iu)u^{(1-s)/2}\frac{du}{u}-\frac1s.
> $$
> Separate the constant one in this last theta function. Since $\operatorname{Re}s>1$,
> $$
> \tfrac12\int_1^\infty u^{(1-s)/2}\frac{du}{u}=\frac1{s-1}=-\frac1{1-s}.
> $$
> Adding the remaining $t\ge1$ portion gives exactly(4.38).
>
> Moreover $\vartheta(it)-1=O(e^{-\pi t})$ as $t\to\infty$. On every compact set of $s$ the integrand and every $s$-derivative are dominated by an integrable exponential times fixed powers of $t$ and $\log t$. Thus the integral in(4.38) is entire. The two rational terms give simple poles at zero and one, with residues $-1$ and $1$, respectively. Interchanging $s$ and $1-s$ leaves the right side unchanged, proving the stated continuation and functional equation.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 147 / PDF 161. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

---
title: "Exercise MF56: The Hyperbolic Area of the Modular Fundamental Domain"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.4, Exercise 5.4.2, printed p. 184, PDF p. 198"
source_refs:
  - "S7/ch-5/sec-4/ex-2"
created: 2026-10-28
---

# Exercise MF56: The Hyperbolic Area of the Modular Fundamental Domain

## Problem Statement

> [!question] Original Exercise 5.4.2
> What is $V_{SL_2(\mathbb Z)}$?
>
> **Definition, printed p. 182 / PDF p. 196.** The volume is $V_\Gamma=\int_{X(\Gamma)}d\mu$, with $d\mu=dx\,dy/y^2$. For the full modular group the integration region is $\mathcal D^*$.

## Hints

> [!hint]- Hint 1
> At a fixed horizontal coordinate $x\in[-1/2,1/2]$, the lower height is $\sqrt{1-x^2}$.

> [!hint]- Hint 2
> Integrate first in $y$, then use the derivative of $\arcsin x$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The cusp and the identified boundary arcs have measure zero, so they contribute nothing to the integral. Thus
> $$
> \begin{aligned}
> V_{SL_2(\mathbb Z)}
> &=\int_{-1/2}^{1/2}\int_{\sqrt{1-x^2}}^\infty y^{-2}\,dy\,dx\\
> &=\int_{-1/2}^{1/2}(1-x^2)^{-1/2}\,dx\\
> &=[\arcsin x]_{-1/2}^{1/2}=\frac\pi6-\left(-\frac\pi6\right)=\boxed{\frac\pi3}.
> \end{aligned}
> $$
> The inner improper integral converges because its lower endpoint is at least $\sqrt3/2>0$ and $\int_A^\infty y^{-2}dy=1/A$. No additional factor $2$ is introduced for $\pm I$: those matrices act identically, and the source's quotient volume already uses the effective action.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.4.2, printed p. 184 / PDF p. 198]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Normalization boundary:** This is hyperbolic area, not Euclidean area and not the normalized Petersson integral. The definition and the effective-index volume formula (5.15) were checked on printed pp. 182–183 / PDF pp. 196–197.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

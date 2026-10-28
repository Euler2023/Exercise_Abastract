---
title: "Exercise MF68: The Formal Logarithm of an Elliptic Euler Factor"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.8, Exercise 8.8.2, printed p. 369, PDF p. 382"
source_refs:
  - "S7/ch-8/sec-8/ex-2"
created: 2026-10-28
---

# Exercise MF68: The Formal Logarithm of an Elliptic Euler Factor

## Problem Statement

> [!question] Original Exercise 8.8.2
> This exercise establishes the formal equality
> $$
> \sum_{e=1}^{\infty}\frac{t_{p^e}(E)}eX^e
> =-\log(1-a_p(E)X+1_E(p)pX^2).
> $$
> Since both sides vanish at $X=0$, it suffices to equate derivatives:
> $$
> \sum_{e=1}^{\infty}t_{p^e}(E)X^{e-1}
> =\frac{a_p(E)-1_E(p)2pX}{1-a_p(E)X+1_E(p)pX^2}.
> $$
> Show that this is equivalent to the initial value and recurrence for the $t_{p^e}(E)$ at the end of Section 8.3.

## Hints

> [!hint]- Hint 1
> Multiply the derivative series by its quadratic denominator.

> [!hint]- Hint 2
> Remember the special initial value $t_0=2$, which creates the numerator term $-2bX$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Work in the formal power-series ring $\mathbb Q[\![X]\!]$, with no convergence assumption. Set $a=a_p(E)$, $b=1_E(p)p$, $t_e=t_{p^e}(E)$, and $t_0=2$. The source recurrence is
> $$
> t_1=a,\qquad t_e=at_{e-1}-bt_{e-2}\quad(e\ge2).
> $$
> Let $S(X)=\sum_{e\ge1}t_eX^{e-1}$. The coefficient of $X^0$ in $(1-aX+bX^2)S$ is $t_1=a$. The coefficient of $X^1$ is
> $$
> t_2-at_1=(a^2-2b)-a^2=-2b.
> $$
> For $e\ge3$, the coefficient of $X^{e-1}$ is $t_e-at_{e-1}+bt_{e-2}=0$. Therefore
> $$
> (1-aX+bX^2)S=a-2bX.
> $$
> The quadratic denominator has constant term $1$, so is invertible in the formal series ring, giving the displayed derivative identity. Conversely coefficient comparison recovers $t_1=a$, $t_2=a^2-2b$, and the recurrence, which is exactly the initial value $t_0=2$ formulation.
>
> The formal logarithm satisfies
> $$
> \frac d{dX}\bigl(-\log(1-aX+bX^2)\bigr)
> =\frac{a-2bX}{1-aX+bX^2}.
> $$
> Integrating coefficients and using the common zero constant term gives the required logarithmic equality. Characteristic zero ensures division by each positive integer $e$ is legitimate.

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 369 / PDF p. 382. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

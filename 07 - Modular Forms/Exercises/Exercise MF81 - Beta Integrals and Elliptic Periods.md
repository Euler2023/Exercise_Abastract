---
title: "Exercise MF81: Beta Integrals and Elliptic Periods"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.4, Exercise 4.4.6, printed p. 126, PDF p. 140"
source_refs:
  - "S7/ch-4/sec-4/ex-6"
created: 2026-10-28
---

# Exercise MF81: Beta Integrals and Elliptic Periods

## Problem Statement

> [!question] Original Exercise 4.4.6
> Substitute $u^2=t$ in the definition of $\Gamma$ to get $\Gamma(s)=2\int_0^\infty e^{-u^2}u^{2s}\,du/u$, for $\operatorname{Re}s>0$. Show that therefore for $a,b>0$,
> $$
> \Gamma(a)\Gamma(b)=\Gamma(a+b)\int_0^1x^{a-1}(1-x)^{b-1}dx.
> $$
> This last integral is a Beta integral. Show also that for any positive integer $m$,
> $$
> \int_0^1\frac{dt}{\sqrt{1-t^m}}=\frac1m\int_0^1x^{1/m-1}(1-x)^{-1/2}dx.
> $$
> Use these results to explain the last equalities in the formulas for $\varpi_4$ and $\varpi_3$ at the end of Section 1.1. (A hint for this exercise is at the end of the book.)
>
> Those equalities are $\varpi_4=2\int_0^1dt/\sqrt{1-t^4}=2\sqrt\pi\,\Gamma(5/4)/\Gamma(3/4)$ and $\varpi_3=2\int_0^1dt/\sqrt{1-t^3}=2\sqrt\pi\,\Gamma(4/3)/\Gamma(5/6)$.

## Hints

> [!hint]- Hint 1
> Multiply the two Gaussian-form Gamma integrals and use polar coordinates in the first quadrant.

> [!hint]- Hint 2
> Then put $x=\sin^2\theta$ in the angular integral, and $x=t^m$ in the elliptic integral.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The substitution $t=u^2$, $dt=2u\,du$, immediately gives the stated Gaussian-form integral. For real $a,b>0$ its product has nonnegative integrand, so Tonelli and polar coordinates $u=r\sin\theta$, $v=r\cos\theta$ yield
> $$
> \Gamma(a)\Gamma(b)=4\int_0^\infty e^{-r^2}r^{2(a+b)-1}dr\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\,d\theta.
> $$
> The radial integral is $\Gamma(a+b)/2$. Set $x=\sin^2\theta$ in the angular integral; because $dx=2\sin\theta\cos\theta\,d\theta$, it becomes $\frac12\int_0^1x^{a-1}(1-x)^{b-1}dx$. The two factors $1/2$ cancel the prefactor $4$, proving the Beta identity. All endpoint integrals converge because $a,b>0$.
>
> For the second identity, $x=t^m$ gives $dt=m^{-1}x^{1/m-1}dx$ and $1-t^m=1-x$. Thus
> $$
> \int_0^1\frac{dt}{\sqrt{1-t^m}}=\frac{\Gamma(1/m)\Gamma(1/2)}{m\Gamma(1/m+1/2)}=\sqrt\pi\frac{\Gamma(1+1/m)}{\Gamma(1/2+1/m)},
> $$
> where the last step uses the Gamma recurrence. Multiplying by $2$ and taking $m=4$ gives $2\sqrt\pi\Gamma(5/4)/\Gamma(3/4)$; taking $m=3$ gives $2\sqrt\pi\Gamma(4/3)/\Gamma(5/6)$. These prove exactly the two last equalities for $\varpi_4,\varpi_3$. They do not by themselves prove the separate modular-invariant evaluations $g_2(i)=4\varpi_4^4$ or $g_3(\mu_3)=(27/16)\varpi_3^6$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.4.6, printed p. 126 / PDF p. 140]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked cross-reference:** The two $\varpi$ integral and Gamma formulas were directly checked on printed p.7/PDF p.22. The distinction between their integral evaluation and the preceding elliptic-curve period identities preserves the requested proof scope.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

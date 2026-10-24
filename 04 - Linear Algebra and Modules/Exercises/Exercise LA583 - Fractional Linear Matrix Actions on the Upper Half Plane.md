---
title: "Exercise LA583: Fractional Linear Matrix Actions on the Upper Half Plane"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.2, printed p. 8, PDF p. 23"
source_refs:
  - "S7/ch-1/sec-1/ex-2"
created: 2026-10-24
---

# Exercise LA583: Fractional Linear Matrix Actions on the Upper Half Plane

## Problem Statement

> [!question] Exercise 1.1.2
> **(a)** Show that $\operatorname{Im}(\gamma(\tau))=\operatorname{Im}(\tau)/|c\tau+d|^2$ for all $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$.
>
> **(b)** Show that $(\gamma\gamma')(\tau)=\gamma(\gamma'(\tau))$ for all $\gamma,\gamma'\in\mathrm{SL}_2(\mathbb Z)$ and $\tau\in\mathcal H$.
>
> **(c)** Show that $d\gamma(\tau)/d\tau=1/(c\tau+d)^2$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$.


## Hints

> [!hint]- Hint 1
> Write $\gamma(\tau)=(a\tau+b)/(c\tau+d)$ and multiply numerator and denominator by $c\bar\tau+d$.

> [!hint]- Hint 2
> For composition, collect the coefficients of $\tau$ in the numerator and denominator. For the derivative, the numerator of the quotient rule is $ad-bc$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Throughout, $\mathcal H=\{\tau\in\mathbb C:\operatorname{Im}\tau>0\}$ and $\gamma(\tau)=(a\tau+b)/(c\tau+d)$. The denominator cannot vanish: if $c\ne0$, its only zero is the real number $-d/c$; if $c=0$, the determinant condition gives $d=\pm1$.
>
> **(a)** Real matrix entries give
> $$
> \gamma(\tau)-\overline{\gamma(\tau)}
> =\frac{(a\tau+b)(c\bar\tau+d)-(a\bar\tau+b)(c\tau+d)}{|c\tau+d|^2}
> =\frac{(ad-bc)(\tau-\bar\tau)}{|c\tau+d|^2}.
> $$
> Dividing by $2i$ and using $ad-bc=1$ proves the formula. In particular, the image is again in $\mathcal H$.
>
> **(b)** Write $\gamma'=\begin{pmatrix}a'&b'\\c'&d'\end{pmatrix}$. Direct substitution gives
> $$
> \gamma(\gamma'(\tau))
> =\frac{(aa'+bc')\tau+(ab'+bd')}{(ca'+dc')\tau+(cb'+dd')}
> =(\gamma\gamma')(\tau).
> $$
> The denominators are legitimate by (a), and the identity matrix acts identically. Thus these fractional linear transformations form an action.
>
> **(c)** The complex quotient rule gives
> $$
> \frac{d}{d\tau}\frac{a\tau+b}{c\tau+d}
> =\frac{a(c\tau+d)-c(a\tau+b)}{(c\tau+d)^2}
> =\frac{ad-bc}{(c\tau+d)^2}
> =\frac1{(c\tau+d)^2}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Conventions:** The domain $\tau\in\mathcal H$ is implicit in the printed parts (a) and (c), and is made explicit in the solution.
- **Routing:** All three conclusions follow from two-by-two determinant and matrix-composition calculations.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.2, printed p. 8, PDF p. 23]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.

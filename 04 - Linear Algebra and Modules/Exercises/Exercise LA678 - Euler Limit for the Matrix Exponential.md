---
title: "Exercise LA678: Euler Limit for the Matrix Exponential"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 11, printed p. 48, PDF p. 60"
source_refs:
  - "S10/ch-2/sec-6/ex-11"
created: 2026-11-17
---

# Exercise LA678: Euler Limit for the Matrix Exponential

## Problem Statement

> [!question] Original Chapter 2, Exercise 11
> Show that for all $X\in M_n(\mathbb C)$, we have
> $$
> \lim_{m\to\infty}\left[I+\frac Xm\right]^m=e^X.
> $$
> *Hint:* Use the matrix logarithm.

## Hints

> [!hint]- Hint 1
> For large positive integers $m$, the logarithm of $I+X/m$ is defined by its convergent series.

> [!hint]- Hint 2
> Bound the terms after $X/m$ in that series to show $m\log(I+X/m)\to X$ in the Hilbert–Schmidt norm.

> [!hint]- Hint 3
> The local inverse theorem gives $I+X/m=\exp(\log(I+X/m))$. Take the $m$th power, then use continuity of the exponential.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation following the printed logarithm hint, with an explicit remainder estimate.
>
> Let $\|\cdot\|$ be the Hilbert–Schmidt norm, which is submultiplicative: $\|YZ\|\le\|Y\|\|Z\|$. For a fixed $X\in M_n(\mathbb C)$ and a positive integer $m>\|X\|$, put $q_m=\|X\|/m<1$. Then
> $$
> L_m:=\log\left(I+\frac Xm\right)
> =\sum_{j=1}^{\infty}
> \frac{(-1)^{j+1}}{j}\frac{X^j}{m^j}
> $$
> converges absolutely, because $\|X^j\|\le\|X\|^j$ for every $j\ge1$. Separating its first term gives
> $$
> \begin{aligned}
> \|mL_m-X\|
> &\le m\sum_{j=2}^{\infty}\frac{\|X\|^j}{jm^j}\\
> &\le\frac{\|X\|^2}{2m}\sum_{j=2}^{\infty}q_m^{j-2}\\
> &=\frac{\|X\|^2}{2m(1-q_m)}
> \longrightarrow0.
> \end{aligned}
> $$
> Here $1/j\le1/2$ for $j\ge2$. Hence $Y_m:=mL_m$ converges to $X$.
>
> Hall's local inverse theorem gives $\exp L_m=I+X/m$, since $\|X/m\|<1$ [S10, §2.3, Theorem 2.8, printed pp. 38–39, PDF pp. 50–51]. The identity $e^{sL_m}e^{tL_m}=e^{(s+t)L_m}$, applied repeatedly, yields
> $$
> \left(I+\frac Xm\right)^m
> =(\exp L_m)^m
> =\exp(mL_m)=\exp Y_m.
> $$
> This exponential identity is Proposition 2.3(4), printed p. 32 / PDF p. 44, and requires no commutation between different matrices because only multiples of $L_m$ occur.
>
> For completeness, continuity of the exponential can be justified directly. The convergent sequence $Y_m$ and its limit $X$ lie in some norm ball $\|Z\|\le R$. For every integer $K\ge0$, the tail of the exponential series satisfies
> $$
> \sup_{\|Z\|\le R}
> \left\|\exp Z-\sum_{j=0}^K\frac{Z^j}{j!}\right\|
> \le\sum_{j=K+1}^{\infty}\frac{R^j}{j!}
> \longrightarrow0.
> $$
> Each partial sum is a polynomial in the matrix entries and is continuous. Its uniform limit on this ball is therefore continuous, so $\exp Y_m\to\exp X$. Combining the preceding identities proves
> $$
> \lim_{m\to\infty}\left(I+\frac Xm\right)^m=e^X.
> $$
> The argument concerns the tail of the sequence. Finitely many earlier matrices $I+X/m$ may be singular without affecting the limit.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert–Schmidt Norm]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete exercise and printed hint were checked on a 200 dpi image of printed p. 48 / PDF p. 60. The solution is independently supplied.
- **Source inputs:** Definition 2.2 and the norm inequalities, printed p. 32 / PDF p. 44; the logarithm and local inverse theorem, printed pp. 37–39 / PDF pp. 49–51. Hall also proves exponential continuity in Proposition 2.1, printed pp. 31–32 / PDF pp. 43–44; the uniform-tail proof is included here.
- **Norm convention:** The Hilbert–Schmidt norm satisfies $\|I_n\|=\sqrt n$, not $1$. The remainder estimates involve only positive powers, and the exponential tail starts at $j=K+1\ge1$, so no bound on the zeroth power by $R^0$ is used.
- **Concrete verification:** If $X^2=0$, the binomial theorem gives $(I+X/m)^m=I+X=e^X$ for every positive integer $m$. Thus the formula is exact already at finite $m$ in this case.
- **Routing:** The principal tools are matrix power series, a norm estimate, and finite-dimensional continuity.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

---
title: "Exercise MF92: The Weight One Torsion Zeta Expansion"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.5, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-5"
created: 2026-10-28
---

# Exercise MF92: The Weight One Torsion Zeta Expansion

## Problem Statement

> [!question] Original Exercise 4.8.5
> Verify the calculations leading to formula(4.34).
>
> For $\bar v=(\bar c,\bar d)$ of order $N$, take $0\le c<N$, set $q_N=e^{2\pi i\tau/N}$, $\mu_N=e^{2\pi i/N}$, $C_1=-2\pi i$, and
> $$
> \sigma_0^{\bar v}(n)=\sum_{\substack{m\mid n\\n/m\equiv c\ (N)}}\operatorname{sgn}(m)\mu_N^{dm},\qquad
> G_1^{\bar v}=\delta(c)\zeta^{\bar d}(1)+(C_1/N)\sum_{n\ge1}\sigma_0^{\bar v}(n)q_N^n.
> $$
> The target formula is $g_1^{\bar v}=G_1^{\bar v}-(C_1/N)(c/N-1/2)$. Divisors $m$ in the displayed definition may have either sign; $\delta(c)$ is one if $c=0$ and zero otherwise.

## Hints

> [!hint]- Hint 1
> Put $u=e^{2\pi iz}=\mu_N^dq_N^c$ in the product-derived expansion of $Z$.

> [!hint]- Hint 2
> The positive and negative divisor sums come from $u q^r$ and $u^{-1}q^r$, respectively.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Use the source's normally convergent product expansion of sigma, whose logarithmic derivative gives
> $$
> Z(z)=\eta_2z-\pi i\frac{1+u}{1-u}-2\pi i\sum_{r\ge1}\left(\frac{u q^r}{1-uq^r}-\frac{u^{-1}q^r}{1-u^{-1}q^r}\right),\quad u=e^{2\pi iz}.
> $$
> At $z=(c\tau+d)/N$, the quasiperiod correction in $g_1$ leaves $2\pi ic/N^2$, by $\eta_1=\tau\eta_2-2\pi i$. If $c=0$, the elementary rational term is $(\pi/N)\cot(\pi d/N)$. If $c>0$, it is
> $$
> -\pi i/N+(C_1/N)\sum_{m\ge1}\mu_N^{dm}q_N^{cm}.
> $$
> Expand the two remaining fractions geometrically. The first contributes $(C_1/N)\mu_N^{dm}q_N^{m(Nr+c)}$ for $r,m\ge1$; together with the just displayed $r=0$ terms when $c>0$, these are exactly all positive divisors $m$ with $n/m\equiv c\pmod N$. The second contributes the negative of $(C_1/N)\mu_N^{-dm}q_N^{m(Nr-c)}$ for $r,m\ge1$; setting the signed divisor to $-m$ gives exactly all negative divisors in $\sigma_0$. The expansions converge absolutely on compact subsets of $\mathcal H$, since $0\le c<N$, and therefore can be rearranged.
>
> For $c>0$ the resulting constant is $2\pi ic/N^2-\pi i/N=-(C_1/N)(c/N-1/2)$. For $c=0$ the continued residue-class zeta value from(4.22) is
> $$
> \zeta^{\bar d}(1)=\frac\pi N\cot(\pi d/N)+\frac{\pi i}{N}.
> $$
> Subtracting $(C_1/N)(-1/2)=\pi i/N$ from this value leaves the cotangent constant. Thus in both cases the constant and every nonconstant coefficient give precisely(4.34).

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

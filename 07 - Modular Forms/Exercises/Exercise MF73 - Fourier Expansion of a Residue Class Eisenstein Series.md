---
title: "Exercise MF73: Fourier Expansion of a Residue Class Eisenstein Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.5, printed p. 116, PDF p. 130"
source_refs:
  - "S7/ch-4/sec-2/ex-5"
created: 2026-10-28
---

# Exercise MF73: Fourier Expansion of a Residue Class Eisenstein Series

## Problem Statement

> [!question] Original Exercise 4.2.5
> (a) Confirm that the constant term of (4.7) is given by (4.8).
>
> (b) Show that the terms of (4.7) with $c>0$ sum to (4.9).
>
> (c) Show that the terms of (4.7) with $c<0$ sum to (4.10).
>
> Here $k\ge3$, $\overline v=\overline{(c_v,d_v)}$, $C_k=(-2\pi i)^k/(k-1)!$, $\mu_N=e^{2\pi i/N}$, $q_N=e^{2\pi i\tau/N}$, and
> $$
> G_k^{\overline v}(\tau)=\sum_{c\equiv c_v\ (N)}\sum_{d\in\mathbb Z}'(c\tau+d_v+Nd)^{-k}\tag{4.7}
> $$
> The claimed constant is $\boldsymbol1_{\overline c_v=0}\sum_{d\equiv d_v\ (N)}'d^{-k}$, (4.8). The positive part is
> $$
> \frac{C_k}{N^k}\sum_{n\ge1}\sum_{\substack{m\mid n\\n/m\equiv c_v\ (N)\\m>0}}m^{k-1}\mu_N^{d_vm}q_N^n,\tag{4.9}
> $$
> and the negative part is the same expression with $m<0$ and coefficient $-m^{k-1}$, (4.10).

## Hints

> [!hint]- Hint 1
> For $c>0$, apply $\sum_{d\in\mathbb Z}(z+d)^{-k}=C_k\sum_{m\ge1}m^{k-1}e^{2\pi imz}$ to $z=(c\tau+d_v)/N$.

> [!hint]- Hint 2
> For $c<0$, first replace $z$ by $-z$ and account for $(-1)^k$. Then replace the positive summation variable by its negative.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We use the Lipschitz Fourier identity $\sum_{d\in\mathbb Z}(z+d)^{-k}=C_k\sum_{r\ge1}r^{k-1}e^{2\pi irz}$ for $\operatorname{Im}z>0$, stated as equation (1.2) and recalled on printed p.114/PDF p.128. It follows, for example, by differentiating the cotangent partial-fraction Fourier expansion $k-1$ times; it is an imported Fourier identity here.
>
> **(a).** Terms with $c=0$ occur exactly if $c_v\equiv0\pmod N$, and their sum is $\sum_{d\equiv d_v\ (N)}'d^{-k}$. For $c\ne0$, the following two computations give only positive powers of $q_N$, so no additional constant term occurs. This proves (4.8).
>
> **(b).** For $c>0$, $z=(c\tau+d_v)/N$ has positive imaginary part. Factoring out $N^{-k}$ and applying the identity gives
> $$
> \frac{C_k}{N^k}\sum_{\substack{c>0\\c\equiv c_v\ (N)}}\sum_{m\ge1}m^{k-1}\mu_N^{d_vm}q_N^{cm}.
> $$
> Group terms by the positive integer $n=cm$. The bijection between pairs $(c,m)$ and divisors $m\mid n$ with $m>0$, $n/m\equiv c_v\pmod N$ gives exactly (4.9). All sums converge absolutely on $\operatorname{Im}\tau\ge y_0>0$, since the polynomial powers of $m$ are dominated by $e^{-2\pi cmy_0/N}$, so the regrouping is valid.
>
> **(c).** If $c<0$, use $-z=(-c\tau-d_v)/N$ in the upper half-plane. The integer substitution $d\mapsto-d$ gives
> $$
> \frac{(-1)^kC_k}{N^k}\sum_{\substack{c<0\\c\equiv c_v\ (N)}}\sum_{r\ge1}r^{k-1}\mu_N^{-d_vr}q_N^{-cr}.
> $$
> Put $m=-r<0$ and $n=cm>0$. Its coefficient becomes $(-1)^k(-m)^{k-1}=-m^{k-1}$; its root of unity becomes $\mu_N^{d_vm}$. The congruence is $n/m=c\equiv c_v\pmod N$. This proves (4.10) with the stated sign. The same exponential estimate justifies this regrouping. Adding both parts gives the coefficient $\operatorname{sgn}(m)m^{k-1}\mu_N^{d_vm}$ in Theorem 4.2.3.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.5, printed p. 116 / PDF p. 130]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Equations (4.7)–(4.10) are on printed p.114/PDF p.128; the resulting theorem and divisor convention are on printed p.115/PDF p.129. Both positive and negative divisor indices are retained.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

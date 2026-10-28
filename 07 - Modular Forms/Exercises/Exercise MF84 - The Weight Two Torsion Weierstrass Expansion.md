---
title: "Exercise MF84: The Weight Two Torsion Weierstrass Expansion"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.6, Exercise 4.6.1, printed p. 133, PDF p. 147"
source_refs:
  - "S7/ch-4/sec-6/ex-1"
created: 2026-10-28
---

# Exercise MF84: The Weight Two Torsion Weierstrass Expansion

## Problem Statement

> [!question] Original Exercise 4.6.1
> Confirm the Fourier expansion of $f_2^{\overline v}$.
>
> The context defines $f_2^{\overline v}(\tau)=N^{-2}\wp_\tau((c_v\tau+d_v)/N)$ and states
> $$
> f_2^{\overline v}(\tau)=G_2^{\overline v}(\tau)-\frac{G_2(\tau)}{N^2},
> $$
> where $0\le c_v<N$, $q_N=e^{2\pi i\tau/N}$, $\mu_N=e^{2\pi i/N}$, $C_2=(-2\pi i)^2$, and
> $$
> G_2^{\overline v}=\delta(\overline c_v)\zeta^{\overline d_v}(2)+\frac{C_2}{N^2}\sum_{n\ge1}\left(\sum_{\substack{m\mid n\\n/m\equiv c_v\ (N)}}\operatorname{sgn}(m)m\mu_N^{d_vm}\right)q_N^n,
> $$
> $$
> G_2=2\zeta(2)+2C_2\sum_{n\ge1}\sigma_1(n)q^n.
> $$
> The residue vector $\overline v=\overline{(c_v,d_v)}$ has order $N$.

> [!warning] Source issue and corrected scope
> The torsion Weierstrass evaluation requires a nonzero torsion point, hence $N>1$ here. If one formally allows $N=1$, its sole residue vector gives a lattice point and $\wp$ has a pole there; the defining $f_2^{\overline v}$ is then not a finite function. The expansion is proved for the intended nonzero-torsion setting.

## Hints

> [!hint]- Hint 1
> Use the absolutely convergent difference definition of $\wp$, grouping the lattice by the coefficient of $\tau$.

> [!hint]- Hint 2
> Apply the one-variable squared cotangent identity to the rows above and below the argument $z=(c_v\tau+d_v)/N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We take $N>1$, so the order-$N$ vector gives $z=(a\tau+b)/N$ outside the lattice; here $a=c_v\in[0,N)$ and $b=d_v$. The Weierstrass definition is
> $$
> \wp_\tau(z)=z^{-2}+\sum_{(c,d)\ne(0,0)}\bigl((z-c\tau-d)^{-2}-(c\tau+d)^{-2}\bigr).
> $$
> On compact sets away from the lattice, its difference summand is $O(|c\tau+d|^{-3})$, so the two-dimensional difference sum converges absolutely. We may group it by $c$ without separately asserting absolute convergence of a bare weight-two lattice sum.
>
> The $c=0$ part, including $z^{-2}$, is
> $$
> \sum_{d\in\mathbb Z}(z-d)^{-2}-2\zeta(2).
> $$
> If $a=0$, dividing by $N^2$ makes its first term $\zeta^{\overline b}(2)$, since $b\not\equiv0\pmod N$. If $a>0$, the one-variable identity $\sum_d(w-d)^{-2}=C_2\sum_{m\ge1}m e^{2\pi imw}$ for $\operatorname{Im}w>0$ gives instead $C_2N^{-2}\sum_{m\ge1}m\mu_N^{bm}q_N^{am}$. The subtractive constant is always $-2\zeta(2)/N^2$.
>
> For $c\ge1$, $\operatorname{Im}(z-c\tau)<0$, so applying that identity after negation gives
> $$
> N^{-2}\sum_d(z-c\tau-d)^{-2}=\frac{C_2}{N^2}\sum_{m\ge1}m\mu_N^{-bm}q_N^{(Nc-a)m}.
> $$
> For the row $-c$, $\operatorname{Im}(z+c\tau)>0$, and the analogous expression is $C_2N^{-2}\sum_{m\ge1}m\mu_N^{bm}q_N^{(Nc+a)m}$. Their two subtracted lattice-row sums contribute $-2C_2N^{-2}\sum_{m\ge1}m q^{cm}$, whose sum over $c\ge1$ is $-2C_2N^{-2}\sum_{n\ge1}\sigma_1(n)q^n$.
>
> The positive exponents from $a$ (when nonzero) and $Nc+a$ run over all positive integers $\ell\equiv a\pmod N$. The exponents $a-Nc<0$ give the negative ones after replacing $m$ by $-m$. Thus grouping by $n=\ell m>0$ produces the coefficient
> $$
> \sum_{\substack{m\mid n\\n/m\equiv a\ (N)}}|m|\mu_N^{bm}=\sum_{\substack{m\mid n\\n/m\equiv a\ (N)}}\operatorname{sgn}(m)m\mu_N^{bm}.
> $$
> All of these resulting exponential sums converge absolutely locally in $\mathcal H$, justifying the divisor regrouping. Combining the constant, positive-index terms, and subtracted row sums proves exactly $f_2^{\overline v}=G_2^{\overline v}-G_2/N^2$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.6.1, printed p. 133 / PDF p. 147]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The defining Weierstrass difference sum is on printed p.130/PDF p.144; the rowwise expansions and equation (4.23) are on printed p.131/PDF p.145. This proof preserves their summation order through an absolutely convergent difference sum.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

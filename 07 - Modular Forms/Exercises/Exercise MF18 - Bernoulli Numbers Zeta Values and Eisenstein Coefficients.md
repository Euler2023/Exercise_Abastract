---
title: "Exercise MF18: Bernoulli Numbers Zeta Values and Eisenstein Coefficients"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.1, Exercise 1.1.7, printed pp. 9–10, PDF pp. 24–25"
source_refs:
  - "S7/ch-1/sec-1/ex-7"
created: 2026-10-24
---

# Exercise MF18: Bernoulli Numbers Zeta Values and Eisenstein Coefficients

## Problem Statement

> [!question] Exercise 1.1.7
> The **Bernoulli numbers** $B_k$ are defined by the formal power series expansion
> $$
> \frac{t}{e^t-1}=\sum_{k=0}^{\infty}B_k\frac{t^k}{k!}.
> $$
> Thus they are calculable in succession by matching coefficients in the power series identity
> $$
> t=(e^t-1)\sum_{k=0}^{\infty}B_k\frac{t^k}{k!}
> =\sum_{n=1}^{\infty}\left(\sum_{k=0}^{n-1}\binom nk B_k\right)\frac{t^n}{n!}
> $$
> (i.e., the $n$th parenthesized sum is $1$ if $n=1$ and $0$ otherwise) and they are rational. Since the expression
> $$
> \frac{t}{e^t-1}+\frac t2=\frac t2\frac{e^t+1}{e^t-1}
> $$
> is even, it follows that $B_1=-1/2$ and $B_k=0$ for all other odd $k$. The Bernoulli numbers will be motivated, discussed, and generalized in Chapter 4.
>
> **(a)** Show that $B_2=1/6$, $B_4=-1/30$, and $B_6=1/42$.
>
> **(b)** Use the expressions for $\pi\cot\pi\tau$ from the section to show
> $$
> 1-2\sum_{k=1}^{\infty}\zeta(2k)\tau^{2k}
> =\pi\tau\cot\pi\tau
> =\pi i\tau+\sum_{k=0}^{\infty}B_k\frac{(2\pi i\tau)^k}{k!}.
> $$
> Use these to show that for $k\geq2$ even, the Riemann zeta function satisfies
> $$
> 2\zeta(k)=-\frac{(2\pi i)^k}{k!}B_k,
> $$
> so in particular $\zeta(2)=\pi^2/6$, $\zeta(4)=\pi^4/90$, and $\zeta(6)=\pi^6/945$. Also, this shows the normalized Eisenstein series of weight $k$
> $$
> E_k(\tau)=\frac{G_k(\tau)}{2\zeta(k)}
> =1-\frac{2k}{B_k}\sum_{n=1}^{\infty}\sigma_{k-1}(n)q^n
> $$
> has rational coefficients with a common denominator.
>
> **(c)** Equate coefficients in the relation $E_8(\tau)=E_4(\tau)^2$ to establish formula (1.3).
>
> **(d)** Show that $a_0=0$ and $a_1=(2\pi)^{12}$ in the Fourier expansion of the discriminant function $\Delta$ from the text.
>
> The referenced equation is [S7, printed p. 6, PDF p. 21]:
> $$
> \sigma_7(n)=\sigma_3(n)+120\sum_{i=1}^{n-1}\sigma_3(i)\sigma_3(n-i),\qquad n\geq1.
> \tag{1.3}
> $$

> [!warning] Source issue — the weight-two endpoint
> The printed paragraph places the zeta identity for even $k\geq2$ next to the formula $E_k=G_k/(2\zeta(k))$. The zeta identity does include $k=2$. The absolutely convergent lattice Eisenstein series defined in this section, and its modular-form normalization, require even $k\geq4$. At $k=2$, the displayed Fourier expression defines the quasimodular series $E_2$ after a separate summation convention; it is not an absolutely convergent full-level lattice modular form. The solution applies the normalization claim only for even $k\geq4$.

## Hints

> [!hint]- Hint 1
> Use $\sum_{k=0}^{n-1}\binom nkB_k=0$ successively, with the odd Bernoulli numbers already known.

> [!hint]- Hint 2
> Expand the paired cotangent fractions for $|\tau|<1$. For (d), use $g_2=(4\pi^4/3)E_4$ and $g_3=(8\pi^6/27)E_6$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **(a)** The recurrence first gives $B_0=1$, $B_1=-1/2$. The equations for $n=3,5,7$ are respectively
> $$
> \begin{aligned}
> 0&=1+3(-1/2)+3B_2,\\
> 0&=1+5(-1/2)+10(1/6)+5B_4,\\
> 0&=1+7(-1/2)+21(1/6)+35(-1/30)+7B_6.
> \end{aligned}
> $$
> Solving gives $B_2=1/6$, $B_4=-1/30$, $B_6=1/42$. The same recurrence at $n=9$ gives
> $$
> 0=1-9/2+36/6-126/30+84/42+9B_8=3/10+9B_8,
> $$
> so $B_8=-1/30$, which will be used in (c).
>
> **(b)** For $|\tau|<1$, multiplying the partial-fraction cotangent formula by $\tau$ gives
> $$
> \pi\tau\cot\pi\tau
> =1+\sum_{d\geq1}\frac{2\tau^2}{\tau^2-d^2}
> =1-2\sum_{r\geq1}\tau^{2r}\sum_{d\geq1}d^{-2r}.
> $$
> The geometric expansions and interchange converge absolutely locally for $|\tau|<1$, so the inner sum is $\zeta(2r)$. On the other hand, with $t=2\pi i\tau$, the exponential cotangent formula gives
> $$
> \pi\tau\cot\pi\tau=\pi i\tau+\frac{2\pi i\tau}{e^{2\pi i\tau}-1}
> =\pi i\tau+\sum_{k\geq0}B_k\frac{(2\pi i\tau)^k}{k!}.
> $$
> The $k=1$ term cancels $\pi i\tau$; all remaining odd terms vanish. Equating even coefficients proves $2\zeta(k)=-(2\pi i)^kB_k/k!$ for every even $k\geq2$. Substitution of the three Bernoulli values gives the stated zeta values.
>
> For even $k\geq4$, the Fourier expansion proved in the text is
> $$
> G_k=2\zeta(k)+\frac{2(2\pi i)^k}{(k-1)!}\sum_{n\geq1}\sigma_{k-1}(n)q^n
> $$
> [S7, printed p. 5, PDF p. 20]. Dividing and substituting the zeta value yields the printed expression for $E_k$. The nonzero rational number $-2k/B_k$ has a fixed denominator, and each $\sigma_{k-1}(n)$ is an integer; hence the coefficients have a common denominator. Here $B_k\ne0$ follows from $\zeta(k)>0$ and the coefficient identity.
>
> **(c)** The text supplies $E_8=E_4^2$ on printed p. 6 / PDF p. 21; this relation is an input to the assigned coefficient comparison. By (a)–(b),
> $$
> E_4=1+240\sum_{n\geq1}\sigma_3(n)q^n,
> \qquad E_8=1+480\sum_{n\geq1}\sigma_7(n)q^n.
> $$
> The coefficient of $q^n$ in $E_4^2$ is
> $$
> 480\sigma_3(n)+240^2\sum_{i=1}^{n-1}\sigma_3(i)\sigma_3(n-i).
> $$
> Equating with $480\sigma_7(n)$ and dividing by $480$ gives (1.3). For $n=1$, the empty sum is zero.
>
> **(d)** Use the source normalization $g_2=60G_4$, $g_3=140G_6$, $\Delta=g_2^3-27g_3^2$ [S7, printed p. 6, PDF p. 21]. The zeta values give
> $$
> g_2=\frac{4\pi^4}{3}E_4,\qquad g_3=\frac{8\pi^6}{27}E_6,
> \qquad \Delta=\frac{64\pi^{12}}{27}(E_4^3-E_6^2).
> $$
> Since $E_4=1+240q+O(q^2)$ and $E_6=1-504q+O(q^2)$,
> $$
> E_4^3-E_6^2=(1+720q)-(1-1008q)+O(q^2)=1728q+O(q^2).
> $$
> Consequently $\Delta=4096\pi^{12}q+O(q^2)=(2\pi)^{12}q+O(q^2)$, proving the two coefficients.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Riemann Zeta Function|Riemann Zeta Function]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]

## Notes

- **Normalization:** Diamond–Shurman's $\Delta$ is $(2\pi)^{12}$ times the normalized cusp form $q\prod_{n\geq1}(1-q^n)^{24}$ used elsewhere in the vault. In the source normalization the first coefficient is $(2\pi)^{12}$, not $1$.
- **Proof boundary:** Part (c) uses the explicitly assigned relation $E_8=E_4^2$. The source motivates it by $\dim\mathcal M_8=1$, a dimension statement postponed to Chapter 3; no dimension theorem is claimed proved here.
- **Finite computational check:** Exact rational recurrence calculation verified the Bernoulli coefficients through $B_{12}$, including the four values used above. Direct integer divisor sums verified (1.3) for $1\leq n\leq200$. These checks do not replace the coefficient proofs.

- **Source and proof status:** The complete numbered exercise was checked against the original PDF at [S7, Ch. 1, §1.1, Exercise 1.1.7, printed pp. 9–10, PDF pp. 24–25]. The solution is an independent derivation in this vault; named external inputs are identified above.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive#Chapter 1|Diamond–Shurman Chapter 1]]. Learning status remains `not-started`.

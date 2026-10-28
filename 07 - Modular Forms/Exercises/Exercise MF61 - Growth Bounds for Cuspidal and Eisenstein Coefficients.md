---
title: "Exercise MF61: Growth Bounds for Cuspidal and Eisenstein Coefficients"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.1, printed p. 207, PDF p. 221"
source_refs:
  - "S7/ch-5/sec-9/ex-1"
created: 2026-10-28
---

# Exercise MF61: Growth Bounds for Cuspidal and Eisenstein Coefficients

## Problem Statement

> [!question] Original Exercise 5.9.1
> (a) For any cusp form $f\in S_k(\Gamma_1(N))$ show that the function $\phi(\tau)=\operatorname{Im}(\tau)^{k/2}|f(\tau)|$ is bounded on the upper half plane $\mathcal H$. (A hint for this exercise is at the end of the book.)
>
> (b) Establish the relation $1\le\sigma_{k-1}(n)/n^{k-1}<\zeta(k-1)$ where $\zeta$ is the Riemann zeta function. Show that the Fourier coefficients $a_n$ of any Eisenstein series satisfy $|a_n|\le Cn^{k-1}$.

> [!warning] Source issue and corrected scope
> Part (b) requires $k\ge3$ as written. The general weight-two coefficient claim is false, and $\zeta(k-1)$ is not a convergent positive comparison series for $k=1,2$. The original statement is preserved; the proof gives the valid range, a modular counterexample, and a low-weight replacement.

## Hints

> [!hint]- Hint 1
> For (a), use the weight transformation law and a fundamental domain made of finitely many translates of the full modular-group domain.

> [!hint]- Hint 2
> For (b), replace each divisor $d$ by $n/d$. The zeta estimate converges only when $k-1>1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** For $\gamma=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\Gamma_1(N)$, $\operatorname{Im}(\gamma\tau)=y/|c\tau+d|^2$ and $|f(\gamma\tau)|=|c\tau+d|^k|f(\tau)|$. Thus $\phi(\gamma\tau)=\phi(\tau)$.
>
> Choose finitely many representatives $\gamma_j$ so their translates of the full modular fundamental domain cover a fundamental domain for $\Gamma_1(N)$. On such a translate write $\tau=\gamma_jz$. The same automorphy-factor calculation gives
> $$
> \phi(\gamma_jz)=(\operatorname{Im}z)^{k/2}|(f[\gamma_j]_k)(z)|.
> $$
> Cuspidality at $\gamma_j\infty$ means the function on the right has an expansion with zero constant term in a finite-width cusp parameter. Hence it is $O(e^{-c_j\operatorname{Im}z})$ uniformly in the bounded real interval of the domain, for some $c_j>0$. Multiplication by $(\operatorname{Im}z)^{k/2}$ remains bounded as the height tends to infinity. The portions below a fixed height have compact closure inside $\mathcal H$, where continuity gives a bound. Taking a maximum over the finitely many $j$, and using invariance, proves boundedness on all of $\mathcal H$.
>
> **(b), corrected range $k\ge3$.** Divisor reversal gives
> $$
> \frac{\sigma_{k-1}(n)}{n^{k-1}}=\sum_{d\mid n}d^{-(k-1)}.
> $$
> The term $d=1$ gives the lower bound. This finite sum is strictly less than the infinite sum $\sum_{d\ge1}d^{-(k-1)}=\zeta(k-1)$, since every summand is positive and $k-1>1$.
>
> An Eisenstein basis element attached to characters $\psi,\varphi$ has positive-index coefficients, up to a fixed normalization, $\sum_{d\mid n}\psi(n/d)\varphi(d)d^{k-1}$. Character values have absolute value at most one, so its coefficient is bounded by a fixed multiple of $\sigma_{k-1}(n)\le\zeta(k-1)n^{k-1}$. Replacing $\tau$ by $t\tau$ changes the coefficient to zero unless $t\mid n$, and otherwise to a fixed multiple of the coefficient at $n/t$; it obeys the same bound with a changed constant. A finite linear combination of the Eisenstein basis elements therefore has $|a_n|\le Cn^{k-1}$.
>
> **Failure in low weights and a replacement.** For $k=2$ the comparison series is harmonic, while for $k=1$ it also diverges; the printed zeta bound is unavailable. It cannot be repaired by interpreting the analytically continued zeta value. At weight two, $F(\tau)=E_2(\tau)-2E_2(2\tau)$ is modular, and for odd $n$ its coefficient is a fixed nonzero multiple of $\sigma_1(n)$. Take $n$ equal to the product of all positive odd integers at most $B$. Every such integer divides $n$, so
> $$
> \frac{\sigma_1(n)}n=\sum_{d\mid n}\frac1d\ge\sum_{\substack{d\le B\\d\ \mathrm{odd}}}\frac1d\longrightarrow\infty.
> $$
> Thus no constant $C$ works in the asserted weight-two bound. A uniform elementary replacement for $k\ge1$ is $|a_n|=O_\epsilon(n^{k-1+\epsilon})$: for the divisor sums use $\sigma_{k-1}(n)\le n^{k-1}\tau(n)$ and the divisor bound $\tau(n)=O_\epsilon(n^\epsilon)$. Here is a proof of that bound. In $n=\prod_pp^{a_p}$, choose $P$ so that $p^\epsilon\ge2$ for $p>P$; then $a+1\le2^a\le p^{\epsilon a}$ for those primes. For each of the finitely many $p\le P$, $\sup_{a\ge0}(a+1)p^{-\epsilon a}<\infty$. Multiplication proves the bound. The weight-one divisor sum already has $\sigma_0(2^a)=a+1$, illustrating why a constant bound cannot follow from it.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.1, printed p. 207 / PDF p. 221]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Proposition 5.9.1 and its coefficient argument are on printed p.201/PDF p.215. The cusp-form argument is valid in every positive weight. The low-weight defect is also present in the surrounding printed Eisenstein estimate; no such estimate is silently assumed here.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

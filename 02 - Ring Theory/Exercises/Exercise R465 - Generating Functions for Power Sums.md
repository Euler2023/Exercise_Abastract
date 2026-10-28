---
title: "Exercise R465: Generating Functions for Power Sums"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.7, Exercise 4.7.1, printed p. 137, PDF p. 151"
source_refs:
  - "S7/ch-4/sec-7/ex-1"
created: 2026-10-28
---

# Exercise R465: Generating Functions for Power Sums

## Problem Statement

> [!question] Original Exercise 4.7.1
> (a) Establish formula (4.26).
>
> (b) Establish formula (4.27).
>
> For $S_k(n)=\sum_{m=0}^{n-1}m^k$, $S_0(n)=n$, and $\mathcal S(n,t)=\sum_{k\ge0}S_k(n)t^k/k!$, the formulas are
> $$
> \mathcal S(n,t)=\frac{e^{nt}-1}{t}\frac{t}{e^t-1},\tag{4.26}
> $$
> $$
> \mathcal S(n,t)=\sum_{\ell\ge1}\frac{n^\ell t^{\ell-1}}{\ell!}\sum_{j\ge0}\frac{B_jt^j}{j!}=\sum_{k\ge0}\left(\frac1{k+1}\sum_{j=0}^k\binom{k+1}{j}B_jn^{k+1-j}\right)\frac{t^k}{k!},\tag{4.27}
> $$
> where $t/(e^t-1)=\sum_{j\ge0}B_jt^j/j!$.

## Hints

> [!hint]- Hint 1
> Interchange the finite sum over $m$ with the exponential generating series.

> [!hint]- Hint 2
> For the product coefficient of $t^k$, put $\ell=k+1-j$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** A finite interchange gives
> $$
> \mathcal S(n,t)=\sum_{m=0}^{n-1}\sum_{k\ge0}\frac{(mt)^k}{k!}=\sum_{m=0}^{n-1}e^{mt}=\frac{e^{nt}-1}{e^t-1}.
> $$
> At $m=0$ the exponential has constant term one, matching $S_0(n)=n$. Factoring the quotient into the two displayed factors proves (4.26). This is an identity of formal power series: $(e^{nt}-1)/t$ is a power series, and $(e^t-1)/t$ has constant one, so its inverse exists. Analytically the expression also has a removable singularity at zero with value $n$.
>
> **(b).** Expand $(e^{nt}-1)/t=\sum_{\ell\ge1}n^\ell t^{\ell-1}/\ell!$ and multiply by the Bernoulli series. The coefficient of $t^k$ is the finite sum
> $$
> \sum_{j=0}^k\frac{B_jn^{k+1-j}}{j!(k+1-j)!}=\frac1{k!}\frac1{k+1}\sum_{j=0}^k\binom{k+1}{j}B_jn^{k+1-j}.
> $$
> This proves (4.27) coefficient by coefficient, requiring no convergence of infinite sums in two variables. It also yields $S_k(n)=(B_{k+1}(n)-B_{k+1})/(k+1)$, since the omitted $j=k+1$ term of the Bernoulli polynomial is its constant $B_{k+1}$. At $k=0$ the formula gives $S_0(n)=B_0n=n$, as a check.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.7.1, printed p. 137 / PDF p. 151]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Equations (4.26),(4.27) and all generating-function conventions are on printed p.134/PDF p.148. The computation uses formal power-series multiplication with finite coefficients; no assignment to a divergent numerical power sum is involved.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

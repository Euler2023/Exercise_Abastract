---
title: "Exercise F113: Binomial Roots over Complete Valued Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - non-archimedean-fields
  - binomial-series
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 14, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise F113: Binomial Roots over Complete Valued Fields

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 14
> Let $K$ be as in the preceding exercise, of characteristic $0$, complete with respect to a non-archimedean absolute value. For every integer $n>0$, show that the usual binomial expansion for $(1+x)^{1/n}$ converges in some neighborhood of $0$. Do this first assuming that the characteristic of the residue class field does not divide $n$, in which case the assertion is much simpler to prove.

## Hints

> [!hint]- Hint 1: Write the coefficients explicitly
> Put $c_m=\binom{1/n}{m}$. If the residue characteristic is $p>0$ and $p\nmid n$, approximate $1/n$ by nonnegative integers in the $p$-adic topology to see that $c_m$ is integral.

> [!hint]- Hint 2: Handle $p\mid n$
> Use $c_m=n^{-m}\prod_{j=0}^{m-1}(1-nj)/m!$ and Legendre's estimate for $v_p(m!)$ from Exercise 13.

> [!hint]- Hint 3: Identify the branch
> The formal binomial series has constant term $1$ and its $n$-th power equals $1+T$. On a sufficiently small ball, it also equals $\exp((1/n)\log(1+x))$.

## Solution

> [!success]- Solution
> Fix $n>0$ and write
>
> $$
> B_n(T)=\sum_{m=0}^{\infty}c_mT^m,
> \qquad
> c_m=\binom{1/n}{m}
> =\frac{\prod_{j=0}^{m-1}(1-nj)}{n^m m!},
> \qquad c_0=1.
> $$
>
> Let $\mathfrak o$ be the valuation ring and let $k$ be its residue field. As in Exercise 13, put $\rho=1$ if $\operatorname{char}k=0$, and $\rho=|p|^{1/(p-1)}$ if $\operatorname{char}k=p>0$.
>
> **Residue characteristic $0$ or $p\nmid n$.** If $\operatorname{char}k=0$, every nonzero integer, including $n$ and $m!$, is a unit of $\mathfrak o$. Each factor $1-nj$ belongs to $\mathfrak o$, so $|c_m|\leq1$. Consequently $\sum c_mx^m$ converges for $|x|<1$.
>
> Now let $\operatorname{char}k=p>0$ with $p\nmid n$. For each $r\geq1$, choose a nonnegative integer $N_r$ satisfying $nN_r\equiv1\pmod{p^r}$. Then $N_r\to1/n$ in $K$. For fixed $m$, the polynomial
>
> $$
> P_m(T)=\frac{T(T-1)\cdots(T-m+1)}{m!}\in\mathbb Q[T]
> $$
>
> is continuous, and $P_m(N_r)=\binom{N_r}{m}\in\mathbb Z\subseteq\mathfrak o$. Since $\mathfrak o$ is closed, $c_m=P_m(1/n)\in\mathfrak o$. Thus again $|c_m|\leq1$ for every $m$, and $B_n(x)$ converges whenever $|x|<1$.
>
> **Residue characteristic $p$ with $p\mid n$.** Every factor $1-nj$ is a unit of $\mathfrak o$, so
>
> $$
> |c_m|=|n|^{-m}|m!|^{-1}\qquad(m\geq1).
> $$
>
> Exercise 13 gives $v_p(m!)\leq(m-1)/(p-1)$ and hence $|m!|^{-1}\leq\rho^{-(m-1)}$. Therefore
>
> $$
> |c_mx^m|
> \leq \rho\left(\frac{|x|}{|n|\rho}\right)^m
> \longrightarrow0
> \qquad\text{if }|x|<|n|\rho.
> $$
>
> This supplies a nonzero convergence neighborhood in the remaining case.
>
> To verify what the series represents, its coefficients satisfy
>
> $$
> (m+1)c_{m+1}=(1/n-m)c_m.
> $$
>
> Thus $(1+T)B_n'(T)=(1/n)B_n(T)$ in $\mathbb Q[\![T]\!]$. The series $C(T)=B_n(T)^n$ has $C(0)=1$ and satisfies $(1+T)C'(T)=C(T)$. Comparing coefficients gives the unique solution $C(T)=1+T$. On any of the convergence balls above, products of convergent non-Archimedean series may be evaluated coefficientwise; hence
>
> $$
> B_n(x)^n=1+x.
> $$
>
> Finally, on a sufficiently small ball the inverse functions of Exercise 13 are defined and $|(1/n)\log(1+x)|<\rho$. The formal series $\exp((1/n)\log(1+T))$ obeys the same differential equation and has the same constant term as $B_n(T)$, so there
>
> $$
> B_n(x)=\exp\!\left(\frac1n\log(1+x)\right).
> $$
>
> This identifies the convergent binomial expansion as the $n$-th root branch near $1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[03 - Field Theory/Exercises/Exercise F112 - Local Exponential and Logarithm|Exercise F112]]

## Notes

- **Source and proof status:** [S2, Ch. XII, Ex. 14, printed p. 497, PDF p. 512]. The coefficient-integrality argument, convergence radii, and formal identity are independent. The exponential and logarithm estimates are proved in [[03 - Field Theory/Exercises/Exercise F112 - Local Exponential and Logarithm|Exercise F112]].
- **Boundary:** For $p\nmid n$ the series converges throughout $|x|<1$; when $p\mid n$, the smaller ball $|x|<|n||p|^{1/(p-1)}$ is sufficient. No claim is made that this is the optimal radius.

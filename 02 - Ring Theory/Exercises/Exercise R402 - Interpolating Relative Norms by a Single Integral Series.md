---
title: 'Exercise R402: Interpolating Relative Norms by a Single Integral Series'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 5, printed p. 352, PDF p. 371
source_refs:
- S4/ch-V/sec-5/ex-5
created: '2026-10-23'
---

# Exercise R402: Interpolating Relative Norms by a Single Integral Series

## Problem Statement

> [!question] Neukirch V.5.5
> Let $\lambda\in F(n+1)\setminus F(n)$ and $\lambda_i=[\pi^{n-i}](\lambda)$, $0\le i\le n$. For every $u\in U_{L_{n+1}}$, there exists a power series $h(X)\in\mathfrak o[[X]]$ such that
> $$
> N_{n,i}(u)=h(\lambda_i)\qquad(0\le i\le n),
> $$
> where $N_{n,i}$ is the norm from $L_{n+1}$ to $L_{i+1}$.
>
> **Hint:** Write $u=h_1(\lambda)$, $h_1(X)\in\mathfrak o[X]$, and put $h_2=\mathcal N^n(h_1)\in S^*$. Show that $\beta_i=N_{n,i}(u)-h_2(\lambda_i)\in\pi^{n-i}\mathfrak p_1\mathfrak o_{i+1}$. Then by exercise 4 there is a power series $h_3(X)\in\mathfrak o[[X]]$ such that $\beta_i=h_3(\lambda_i)$, $0\le i\le n$. Show that $h=h_2+h_3$ works.

## Hints

> [!hint]- Hint 1
> By the scalar action in (5.4), conjugates over $L_{i+1}$ translate $\lambda$ by all points of $F(n-i)$. Apply the iterated Coleman identity.

> [!hint]- Hint 2
> Use Exercise 3(vi) to compare $\mathcal N^{n-i}(h_1)$ with $\mathcal N^n(h_1)$; the difference is divisible by $\pi^{n-i+1}$.

> [!hint]- Hint 3
> The preceding interpolation construction absorbs all differences at once and can be chosen to have zero constant coefficient.

## Solution

> [!success]- Independent derivation
> Write $\mathfrak o=\mathfrak o_K$, $S=\mathfrak o[[X]]$, $e=[\pi]_F$, and $F(n)=\ker[\pi^n]_F$. Source Proposition (5.2) gives $\#F(n)=q^n$, and Theorem (5.4) gives the totally ramified Galois division fields and their scalar action. Evaluating a bounded integral series at division points of positive valuation is legitimate; coefficients after translating $X$ by such a point are convergent $p$-adic sums. The notation $X+_F\lambda$ means $F(X,\lambda)$, not ordinary addition.
>
> The integer ring of $L_{n+1}$ is $\mathfrak o[\lambda]$, so choose $h_1\in\mathfrak o[X]$ with $h_1(\lambda)=u$. Because $\lambda$ is a uniformizer and $u$ is a unit, reduction shows $h_1(0)\in\mathfrak o^*$; hence $h_1\in S^*$.
>
> We first identify the relative norm precisely. By Theorem (5.4), the Galois group of $L_{n+1}/L_{i+1}$ acts by scalars $1+\pi^{i+1}a$ modulo $\pi^{n+1}$. Its action on the primitive division point is
> $$
> [1+\pi^{i+1}a](\lambda)=\lambda+_F[a]([\pi^{i+1}](\lambda)).
> $$
> As $a$ varies, the added terms run exactly through $F(n-i)$; this follows from its free rank-one division-module structure. Therefore
> $$
> \begin{aligned}
> N_{n,i}(u)
> &=\prod_{\mu\in F(n-i)}h_1(\lambda+_F\mu)\\
> &=\mathcal N^{n-i}(h_1)([\pi^{n-i}](\lambda))
> =\mathcal N^{n-i}(h_1)(\lambda_i),
> \end{aligned}
> $$
> where the second equality is Exercise 3(v).
>
> Put $h_2=\mathcal N^n(h_1)\in S^*$. By Exercise 3(vi), consecutive iterates at index $k$ differ by a series in $\pi^{k+1}S$. Summing those differences for $k=n-i,\ldots,n-1$ gives
> $$
> \mathcal N^{n-i}(h_1)-\mathcal N^n(h_1)\in\pi^{n-i+1}S.
> $$
> For $i=0$ this is a zero difference. Evaluating at $\lambda_i$ yields
> $$
> \beta_i:=N_{n,i}(u)-h_2(\lambda_i)\in\pi^{n-i+1}\mathfrak o_{i+1}
> \subseteq\pi^{n-i}\mathfrak p_1\mathfrak o_{i+1},
> $$
> since $\pi\mathfrak o_{i+1}\subseteq\lambda_0\mathfrak o_{i+1}=\mathfrak p_1\mathfrak o_{i+1}$.
>
> Exercise 4 constructs $h_3\in S$ with $h_3(\lambda_i)=\beta_i$ for all $i$; its construction has $h_3(0)=0$. Then $h=h_2+h_3$ satisfies every requested evaluation, and actually belongs to $S^*$ because $h(0)=h_2(0)$ is a unit. This proves the claim and the slightly stronger unit-series version. No passage to an infinite tower or uniqueness of the interpolating series is being asserted.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source status:** The full statement and printed hint were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 5, printed p. 352, PDF p. 371]. The scalar Galois action and primitive division-point properties were checked at [Theorem (5.4), printed pp. 348–349, PDF pp. 367–368].
- **Proof scope:** Independent derivation from the previous norm and interpolation exercises, with the conjugates, relative norm identity, exact congruence strength and final unit condition shown explicitly. The source's closing remark refers to solutions in [79, §5.2]; that external text has not been consulted or claimed as a proof input.

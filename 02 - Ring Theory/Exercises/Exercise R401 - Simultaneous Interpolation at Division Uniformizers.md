---
title: 'Exercise R401: Simultaneous Interpolation at Division Uniformizers'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 4, printed p. 352, PDF p. 371
source_refs:
- S4/ch-V/sec-5/ex-4
created: '2026-10-23'
---

# Exercise R401: Simultaneous Interpolation at Division Uniformizers

## Problem Statement

> [!question] Neukirch V.5.4
> Let $\lambda\in F(n+1)\setminus F(n)$, $n\ge0$, and $\lambda_i=[\pi^{n-i}](\lambda)\in F(i+1)$ for $0\le i\le n$. Then $\lambda_i$ is a prime element of the Lubin–Tate extension $L_{i+1}=K(F(i+1))$, and $\mathfrak o_{i+1}=\mathfrak o_K[\lambda_i]$ is its valuation ring, with maximal ideal $\mathfrak p_{i+1}=\lambda_i\mathfrak o_{i+1}$. Show:
>
> Let $\beta_i\in\pi^{n-i}\mathfrak p_1\mathfrak o_{i+1}$, $0\le i\le n$. Then there exists $h(X)\in S$ such that
> $$
> h(\lambda_i)=\beta_i\qquad(0\le i\le n).
> $$
> **Hint:** Write $\beta_i=\pi^{n-i}\lambda_0h_i(\lambda_i)$, with $h_i(X)\in\mathfrak o[X]$, and put, for $0\le i\le n$,
> $$
> g_i(X)=\frac{[\pi^{n+1}](X)[\pi^i](X)}{[\pi^{i+1}](X)}.
> $$
> Then $h=\sum_{i=0}^nh_ig_i$ is a solution.

## Hints

> [!hint]- Hint 1
> The quotient in $g_i$ is an integral series, because $[\pi^{n+1}]=[\pi^{n-i}]\circ[\pi^{i+1}]$ and $[\pi^{n-i}](T)/T$ is integral.

> [!hint]- Hint 2
> Evaluate $g_i$ separately at $\lambda_j$ for $j<i$, $j=i$ and $j>i$. Its values are diagonal: $g_i(\lambda_j)=\delta_{ij}\pi^{n-i}\lambda_0$.

## Solution

> [!success]- Independent derivation
> Write $\mathfrak o=\mathfrak o_K$, $S=\mathfrak o[[X]]$, $e=[\pi]_F$, and $F(n)=\ker[\pi^n]_F$. Source Proposition (5.2) gives $\#F(n)=q^n$, and Theorem (5.4) gives the totally ramified Galois division fields and their scalar action. Evaluating a bounded integral series at division points of positive valuation is legitimate; coefficients after translating $X$ by such a point are convergent $p$-adic sums. The notation $X+_F\lambda$ means $F(X,\lambda)$, not ordinary addition.
>
> The monogenic integer-ring statement in the problem lets us choose polynomials $h_i\in\mathfrak o[X]$ with $\beta_i=\pi^{n-i}\lambda_0h_i(\lambda_i)$. Define the integral series
> $$
> E_i(T)=\frac{[\pi^{n-i}](T)}{T}\in\mathfrak o[[T]],\qquad E_i(0)=\pi^{n-i}.
> $$
> Then the apparent quotient in the hint is exactly
> $$
> g_i(X)=[\pi^i](X)\,E_i([\pi^{i+1}](X))\in S.
> $$
> This formula defines it even at roots of its displayed denominator.
>
> For $j<i$, $[\pi^i](\lambda_j)=0$, so $g_i(\lambda_j)=0$. For $j=i$, $[\pi^{i+1}](\lambda_i)=0$ and $[\pi^i](\lambda_i)=\lambda_0$, giving $g_i(\lambda_i)=\pi^{n-i}\lambda_0$. For $j>i$, the value $[\pi^{i+1}](\lambda_j)$ is nonzero, whereas $[\pi^{n+1}](\lambda_j)=0$. The displayed quotient therefore evaluates to zero. We have proved the full diagonal identity
> $$
> g_i(\lambda_j)=\begin{cases}\pi^{n-i}\lambda_0,&i=j,\\0,&i\ne j.\end{cases}
> $$
> Now set $h=\sum_{i=0}^nh_i g_i\in S$. For each $j$ all terms but $i=j$ vanish, so
> $$
> h(\lambda_j)=h_j(\lambda_j)\pi^{n-j}\lambda_0=\beta_j.
> $$
> This proves the simultaneous interpolation. Each $g_i$ has zero constant coefficient, so the construction also gives $h(0)=0$, a useful extra fact for the following exercise. At $n=0$, $g_0(X)=X$ and the construction is simply $\beta_0=\lambda_0h_0(\lambda_0)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The entire setup, ideal range for $\beta_i$, and printed quotient-series hint were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §5, Exercise 4, printed p. 352, PDF p. 371]. The division-point fields and primitive uniformizer input were checked at [Theorem (5.4), printed pp. 348–349, PDF pp. 367–368].
- **Proof scope:** Independent construction and all three evaluation cases. The quotient is shown to be an integral series before it is evaluated, so no division by zero occurs in the proof.

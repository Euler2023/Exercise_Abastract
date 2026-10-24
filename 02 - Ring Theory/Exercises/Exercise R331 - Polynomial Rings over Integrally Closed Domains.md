---
title: "Exercise R331: Polynomial Rings over Integrally Closed Domains"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - integral-closure
  - polynomial-rings
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 2, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R331: Polynomial Rings over Integrally Closed Domains

## Problem Statement

> [!question] Neukirch I.2.2
> Show that, if the integral domain $A$ is integrally closed, then so is the polynomial ring $A[t]$.

## Hints

> [!hint]- Hint 1: Eliminate a polynomial denominator
> Put $K=\operatorname{Frac}(A)$. An element of $K(t)$ integral over $A[t]$ is integral over $K[t]$. Write it as $P/Q$ with $P,Q\in K[t]$ relatively prime, and clear $Q$ from a monic integral equation.

> [!hint]- Hint 2: Recover coefficients by averaging over roots of unity
> Suppose $f(t)=\sum_{i=0}^d a_it^i\in K[t]$ is integral over $A[t]$. Choose $N>d$ with $N\ne0$ in $K$, and work in a splitting field of $T^N-1$. Every root $\zeta$ is integral over $A$, and substituting $t=\zeta$ in the integral equation shows that $f(\zeta)$ is integral over $A$.
> For $0\le j\le d$, compute the sum of $\zeta^{-j}f(\zeta)$ over all $N$ roots.

> [!hint]- Hint 3: Remove the integer multiplier
> The averaging sum gives $Na_j$, so $Na_j\in A$. Repeat with an integer $M>d$ relatively prime to $N$, again nonzero in $K$. Use an integer identity $rN+sM=1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $K=\operatorname{Frac}(A)$. The fraction field of $A[t]$ is $K(t)$: it contains $K$ and $t$, and every fraction of polynomials over $A$ belongs to $K(t)$. Let $u\in K(t)$ be integral over $A[t]$. We must prove $u\in A[t]$.
>
> ### 1. The element $u$ is a polynomial over $K$
> The monic equation for $u$ also proves integrality over $K[t]$. Write $u=P/Q$, where $P,Q\in K[t]$, $Q\ne0$, and $\gcd(P,Q)=1$. If
> $$
> u^n+b_{n-1}(t)u^{n-1}+\cdots+b_0(t)=0,
> \qquad b_i(t)\in K[t],
> $$
> multiplying by $Q^n$ shows that $Q$ divides $P^n$. The Euclidean algorithm in $K[t]$ implies $\gcd(P^n,Q)=1$, so $Q$ is a nonzero constant. Thus $u\in K[t]$.
>
> The case $u=0$ is immediate. Otherwise write
> $$
> u=f(t)=\sum_{i=0}^d a_it^i,\qquad a_i\in K.
> $$
>
> ### 2. A roots-of-unity sum shows that $Na_j\in A$
> Fix an integer $N>d$ which is nonzero in $K$. Let $E/K$ be a splitting field of $T^N-1$, and let $\mu_N\subset E$ be its set of roots. The derivative $NT^{N-1}$ has no common root with $T^N-1$, so $\mu_N$ consists of exactly $N$ distinct nonzero roots. Every $\zeta\in\mu_N$ is integral over $A$, because it satisfies $T^N-1\in A[T]$.
>
> Substitute $t=\zeta$ in a monic equation for $f$ over $A[t]$. It gives a monic equation for $f(\zeta)$ over $A[\zeta]$. Since $A[\zeta]$ is integral over $A$, transitivity of integrality shows that $f(\zeta)$ is integral over $A$.
>
> We first check the averaging identity. For an integer $k$ with $0<|k|<N$, there is $\eta\in\mu_N$ such that $\eta^k\ne1$: otherwise all $N$ distinct roots would satisfy $T^{|k|}-1=0$, although that polynomial has degree $|k|<N$. Multiplication by $\eta$ permutes $\mu_N$. Hence
> $$
> \sum_{\zeta\in\mu_N}\zeta^k
> =\eta^k\sum_{\zeta\in\mu_N}\zeta^k,
> \qquad
> \sum_{\zeta\in\mu_N}\zeta^k=0.
> $$
> For $k=0$ the sum is $N$. Therefore, for every $0\le j\le d$,
> $$
> \sum_{\zeta\in\mu_N}\zeta^{-j}f(\zeta)
> =\sum_{i=0}^d a_i
>   \sum_{\zeta\in\mu_N}\zeta^{i-j}
> =Na_j.
> $$
> Each $\zeta^{-j}$ is integral over $A$: for $j>0$, it equals $\zeta^{N-j}$, and for $j=0$ it equals $1$. Integral elements in $E$ form a subring. The left-hand side, and thus $Na_j$, is integral over $A$. But $Na_j\in K$, and $A$ is integrally closed in $K$. Consequently
> $$
> Na_j\in A\qquad(0\le j\le d).
> $$
>
> ### 3. Recover each coefficient in $A$
> Choose relatively prime positive integers $N,M>d$ which are both nonzero in $K$. Such a choice is possible by taking two distinct primes greater than $d$ and, when $K$ has positive characteristic $p$, greater than $p$. Apply Step 2 with both integers to obtain $Na_j,Ma_j\in A$.
>
> There exist $r,s\in\mathbb Z$ with $rN+sM=1$. Interpreting these integers in $A$, we get
> $$
> a_j=r(Na_j)+s(Ma_j)\in A.
> $$
> Thus every coefficient of $f$ lies in $A$, so $u=f\in A[t]$. This proves that $A[t]$ is integrally closed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

- **Source verification:** The complete exercise statement was visually checked in [S4, Ch. I, §2, Exercise 2, printed p. 15, PDF p. 34]. No source figure is required, and no error was identified in the statement.
- **Proof status and inputs:** The solution is an independent derivation. The finite-module criterion and closure of integral elements under sums and products were visually checked in [S4, Ch. I, §2, Proposition (2.2) and the following discussion, printed pp. 6–7, PDF pp. 25–26]; transitivity of integrality was checked in [S4, Ch. I, §2, Proposition (2.4), printed p. 7, PDF p. 26]. It also uses existence of a polynomial splitting field and the Euclidean algorithm in $K[t]$, as recorded in the linked concepts. The denominator argument and the averaging identity are proved here. It does not use the polynomial-normality theorem as an input.
- **Method boundary:** No Noetherian, unique-factorization, characteristic-zero, or infinitude assumption on $A$ is needed. Choosing $N$ and $M$ nonzero in $K$ ensures that $T^N-1$ and $T^M-1$ have distinct roots, including in positive characteristic. Two coprime multipliers avoid assuming that either integer is a unit of $A$.
- **Related source exercises:** [[02 - Ring Theory/Exercises/Exercise R255 - Polynomial Rings over Integrally Closed Domains Are Integrally Closed|Lang VII, Exercise 2]] and [[02 - Ring Theory/Exercises/Exercise R265 - Normality of Polynomial Rings over Integrally Closed Domains|Lang IX, Exercise 4]] treat the same normality statement with a valuation-based approach. This note supplies a separate roots-of-unity proof.
- **Routing:** Ring Theory is primary because the conclusion concerns integral closure of a polynomial ring. The splitting field serves only to extract its coefficients.


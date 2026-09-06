---
title: "Exercise R240: abc Implies Infinitely Many Non-Wieferich Primes"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 15, printed p. 215, PDF p. 230"
created: 2026-09-06
---

# Exercise R240: abc Implies Infinitely Many Non-Wieferich Primes

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 15
> Prove that the abc conjecture implies the following conjecture: there are infinitely many primes $p$ such that
> $$
> 2^{p-1}\not\equiv1\pmod{p^2}.
> $$
> [Compare the references [Sil 88] and [La 90] at the end of §7.]

## Hints

> [!hint]- Hint 1
> Write $2^n-1=U_nV_n$, where $U_n$ is the product of primes occurring to exponent exactly one, and every prime exponent in $V_n$ is at least two.

> [!hint]- Hint 2
> Apply abc to $1+(2^n-1)=2^n$ to force $U_n$ to grow. A prime dividing $U_n$ cannot be a base-$2$ Wieferich prime.

## Solution

> [!success]- Solution
> ### Approach
> Write $2^n-1=U_nV_n$, where $U_n$ is the product of primes occurring to exponent exactly one, and every prime exponent in $V_n$ is at least two.
>
> ### Proof
> Assume abc in the radical formulation of the linked concept note. Factor
> $$
> 2^n-1=U_nV_n,\qquad
> U_n=\prod_{v_p(2^n-1)=1}p.
> $$
> The factors are coprime and every prime exponent in $V_n$ is at least $2$, so $\operatorname{rad}(V_n)\le V_n^{1/2}$. Fix $0<\varepsilon<1$. The triple $1,2^n-1,2^n$ is pairwise coprime, and abc gives
> $$
> 2^n\le C_\varepsilon[2U_n\operatorname{rad}(V_n)]^{1+\varepsilon}
> \le C'_\varepsilon(U_nV_n^{1/2})^{1+\varepsilon}.
> $$
> Since $U_nV_n<2^n$, the last expression is at most $C'_\varepsilon(U_n^{1/2}2^{n/2})^{1+\varepsilon}$. Rearranging,
> $$
> U_n\ge c_\varepsilon\,2^{n(1-\varepsilon)/(1+\varepsilon)}.
> $$
> Thus the squarefree integers $U_n$ are unbounded, and infinitely many distinct primes divide some $U_n$.
>
> Let $p\mid U_n$; then $p$ is odd and $v_p(2^n-1)=1$. Let $d$ be the multiplicative order of $2$ modulo $p$. Then $d\mid n$ and $d\mid p-1$. Since $2^d-1$ divides $2^n-1$, it has valuation exactly one: write $2^d=1+pt$ with $p\nmid t$. Put $m=(p-1)/d$, so $1\le m<p$. The binomial theorem yields
> $$
> 2^{p-1}=(1+pt)^m\equiv1+mpt\not\equiv1\pmod{p^2}.
> $$
> Each prime obtained above therefore satisfies the desired condition, proving the conditional infinitude.

## Related Concepts

- [[02 - Ring Theory/Concepts/abc and Generalized Szpiro Conjectures|abc and Generalized Szpiro Conjectures]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Proof status:** The abc inequality is an assumed input [S2, Ch. IV, §7, printed p. 196, PDF p. 211]. The factorization estimate and binomial argument are independent; no density assertion or unconditional infinitude is claimed.
- **Prime convention:** The order argument uses odd primes only, which is sufficient for infinitude. The exceptional prime $2$ is irrelevant.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 15, printed p. 215, PDF p. 230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.

---
title: "Exercise R249: Bernoulli Polynomial Distribution and Difference Formulas"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 26, printed p. 219, PDF p. 234"
created: 2026-09-06
---

# Exercise R249: Bernoulli Polynomial Distribution and Difference Formulas

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 26
> Define the Bernoulli polynomials by
> $$
> F(t,X)=\frac{te^{tX}}{e^t-1}=\sum_{k=0}^\infty B_k(X)\frac{t^k}{k!}.
> $$
> The Bernoulli number is $B_k=B_k(0)$. Prove:
>
> (a) $B_0(X)=1$, $B_1(X)=X-1/2$, $B_2(X)=X^2-X+1/6$.
>
> (b) For each positive integer $N$,
> $$
> B_k(X)=N^{k-1}\sum_{a=0}^{N-1}B_k\left(\frac{X+a}{N}\right).
> $$
>
> (c) $B_k(X)=X^k-\frac{k}{2}X^{k-1}+\text{lower terms}$.
>
> (d) $F(t,X+1)-F(t,X)=te^{Xt}=t\sum_{k\ge0}X^kt^k/k!$.
>
> (e) $B_k(X+1)-B_k(X)=kX^{k-1}$ for $k\ge1$.

## Hints

> [!hint]- Hint 1
> Use $F(t,X)=e^{Xt}F(t,0)$ for the coefficient formulas.

> [!hint]- Hint 2
> For (b), compare the series obtained by summing $F(Nt,(X+a)/N)/N$ over $a$.

## Solution

> [!success]- Solution
> ### Approach
> Use $F(t,X)=e^{Xt}F(t,0)$ for the coefficient formulas.
>
> ### Proof
> Work in $\mathbb Q[X][[t]]$. Expanding the product $e^{Xt}F(t,0)$ gives
> $$
> B_k(X)=\sum_{j=0}^k\binom kj B_jX^{k-j}.
> $$
> This proves that the coefficients define polynomials and that $B_k(0)=B_k$.
>
> **(a)** Insert $B_0=1,B_1=-1/2,B_2=1/6$ to obtain the three requested polynomials.
>
> **(c)** The first two summands give $X^k-(k/2)X^{k-1}$ for $k\ge1$; all remaining summands have degree at most $k-2$. For $k=1$ there are no remaining terms; $k=0$ is handled by $B_0(X)=1$.
>
> **(b)** Summing a finite geometric progression in the exponential gives
> $$
> \begin{aligned}
> \frac1N\sum_{a=0}^{N-1}F\left(Nt,\frac{X+a}{N}\right)
> &=\frac{te^{Xt}}{e^{Nt}-1}\sum_{a=0}^{N-1}e^{at}\\
> &=\frac{te^{Xt}}{e^t-1}=F(t,X).
> \end{aligned}
> $$
> The cancellation can be made in formal Laurent series, where both sides already lie in the power-series subring. The coefficient of $t^k/k!$ on the left is $N^{k-1}\sum_a B_k((X+a)/N)$, proving the distribution formula also at $k=0$.
>
> **(d)** Subtracting the two defining fractions cancels $e^t-1$:
> $$
> F(t,X+1)-F(t,X)=\frac{te^{Xt}(e^t-1)}{e^t-1}=te^{Xt}.
> $$
> **(e)** The coefficient of $t^k/k!$ on the right for $k\ge1$ is $kX^{k-1}$. Coefficient comparison proves the difference identity.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Integer-Valued Polynomials|Integer-Valued Polynomials]]
- [[02 - Ring Theory/Exercises/Exercise R248 - Bernoulli Numbers and Odd-Index Vanishing|R248 — Bernoulli Numbers and Odd-Index Vanishing]]

## Notes

- **Index boundary:** The leading-two-terms formulation in (c) is read for $k\ge1$; at $k=0$ the polynomial is simply $1$. The difference in (e) uses the source’s explicit range $k\ge1$.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 26, printed p. 219, PDF p. 234]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.

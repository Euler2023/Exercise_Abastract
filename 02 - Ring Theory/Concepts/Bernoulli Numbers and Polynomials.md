---
title: Bernoulli Numbers and Polynomials
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Exercises 25-27, printed pp. 218-219, PDF pp. 233-234"
source_status: partially-verified
status: not-started
---

# Bernoulli Numbers and Polynomials

## Definition

> [!info] Definition
> Over $\mathbb Q$, define Bernoulli numbers and polynomials by
> $$
> \frac{t}{e^t-1}=\sum_{k\ge0}B_k\frac{t^k}{k!},\qquad
> \frac{te^{Xt}}{e^t-1}=\sum_{k\ge0}B_k(X)\frac{t^k}{k!}.
> $$
> For a positive integer $N$ and a function $f:\mathbb Z/N\mathbb Z\to A$, where $A$ is a commutative $\mathbb Q$-algebra, define
> $$
> \sum_{a=0}^{N-1}f(a)\frac{te^{(a+X)t}}{e^{Nt}-1}
> =\sum_{k\ge0}B_{k,f}(X)\frac{t^k}{k!}.
> $$
> The generalized numbers are $B_{k,f}=B_{k,f}(0)$.

## Intuition

The denominator removes the discrete difference introduced by shifting $X$ by one. This makes Bernoulli polynomials discrete antiderivatives of monomials. Finite sums with periodic weights give the generalized polynomials.

## Key Properties

- $B_0=1$, $B_1=-1/2$, $B_2=1/6$, and $B_k=0$ for odd $k>1$. This uses the convention with negative $B_1$.
- $B_k(X)=\sum_{j=0}^k\binom kjB_jX^{k-j}$ and $B_k(X+1)-B_k(X)=kX^{k-1}$ for $k\ge1$.
- For every positive integer $N$,
  $$
  B_k(X)=N^{k-1}\sum_{a=0}^{N-1}B_k((X+a)/N).
  $$
- The generalized version is $B_{k,f}(X)=N^{k-1}\sum_a f(a)B_k((X+a)/N)$.
- All identities are formal: $(e^t-1)/t$ has constant term $1$, and $(e^{Nt}-1)/t$ has the unit constant term $N$ in a $\mathbb Q$-algebra. These definitions do not ask for analytic convergence.

## Examples

> [!example] Examples
> $B_1(X)=X-1/2$ and $B_2(X)=X^2-X+1/6$.
>
> Summing the difference identity for $B_{k+1}$ at $0,1,\ldots,M-1$ gives the independent consequence
> $$
> \sum_{j=0}^{M-1}j^k=\frac{B_{k+1}(M)-B_{k+1}(0)}{k+1}\qquad(M\ge1,\ k\ge0),
> $$
> where for $k=0$ each monomial $j^0$ is $1$. The sum telescopes, so no further summation theorem is needed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Integer-Valued Polynomials|Integer-Valued Polynomials]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

All defining series and identities assigned in Exercises 25-27 were checked at [S2, Ch. IV, printed pp. 218-219, PDF pp. 233-234]. Their proofs in the linked exercises are independent coefficient calculations. The finite power-sum identity above is explicitly an independently derived consequence. The Eisenstein-series note supplies an existing cross-topic use of the Bernoulli numbers; no modular-form result is needed for this note.

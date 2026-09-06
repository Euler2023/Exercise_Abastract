---
title: "Exercise R248: Bernoulli Numbers and Odd-Index Vanishing"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 25, printed pp. 218-219, PDF pp. 233-234"
created: 2026-09-06
---

# Exercise R248: Bernoulli Numbers and Odd-Index Vanishing

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 25
> Define the Bernoulli numbers $B_k$ by the formal power series
> $$
> F(t)=\frac{t}{e^t-1}=\sum_{k=0}^\infty B_k\frac{t^k}{k!},
> \qquad e^t=\sum_{n\ge0}\frac{t^n}{n!}.
> $$
> Prove:
>
> (a) $B_0=1$, $B_1=-1/2$, $B_2=1/6$.
>
> (b) $F(-t)=t+F(t)$, and $B_k=0$ for odd $k\ne1$.

## Hints

> [!hint]- Hint 1
> Invert $(e^t-1)/t=1+t/2+t^2/6+\cdots$ through degree two.

> [!hint]- Hint 2
> Show that $F(t)+t/2$ is an even formal series.

## Solution

> [!success]- Solution
> ### Approach
> Invert $(e^t-1)/t=1+t/2+t^2/6+\cdots$ through degree two.
>
> ### Proof
> All series are in $\mathbb Q[[t]]$. Although $e^t-1$ has zero constant term, $(e^t-1)/t$ has constant term $1$ and is invertible. Thus the definition of $F$ is legitimate.
>
> **(a)** Write $F=A+Bt+Ct^2+O(t^3)$. Multiplication by $1+t/2+t^2/6+O(t^3)$ and comparison with $1$ gives
> $$
> A=1,\qquad B+A/2=0,\qquad C+B/2+A/6=0.
> $$
> Hence $A=1,B=-1/2,C=1/12$. Because the exponential generating series uses $B_2t^2/2!$, this yields $B_2=2C=1/6$.
>
> **(b)** In the formal Laurent-series field,
> $$
> F(-t)=\frac{-t}{e^{-t}-1}=\frac{te^t}{e^t-1}=t+F(t).
> $$
> Both sides are power series, so this is an identity in $\mathbb Q[[t]]$. It makes $F(t)+t/2$ invariant under $t\mapsto-t$. Every odd coefficient of this series is zero, so all odd $B_k$ with $k>1$ vanish. The coefficient for $k=1$ remains $B_1=-1/2$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 25, printed pp. 218-219, PDF pp. 233-234]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.

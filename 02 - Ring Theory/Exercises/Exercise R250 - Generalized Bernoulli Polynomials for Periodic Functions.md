---
title: "Exercise R250: Generalized Bernoulli Polynomials for Periodic Functions"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 27, printed p. 219, PDF p. 234"
created: 2026-09-06
---

# Exercise R250: Generalized Bernoulli Polynomials for Periodic Functions

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 27
> Let $N$ be a positive integer and $f$ a function on $\mathbb Z/N\mathbb Z$. Form
> $$
> F_f(t,X)=\sum_{a=0}^{N-1}f(a)\frac{te^{(a+X)t}}{e^{Nt}-1}
> =\sum_{k=0}^\infty B_{k,f}(X)\frac{t^k}{k!}.
> $$
> Following Leopoldt, these are the generalized Bernoulli polynomials relative to $f$; $B_{k,f}=B_{k,f}(0)$ are the generalized Bernoulli numbers. Prove:
>
> (a) $F_f(t,X+k)=e^{kt}F_f(t,X)$.
>
> (b) $F_f(t,X+N)-F_f(t,X)=(e^{Nt}-1)F_f(t,X)$.
> (c)
> $$
> \frac1k\bigl[B_{k,f}(X+N)-B_{k,f}(X)\bigr]
> =\sum_{a=0}^{N-1}f(a)(a+X)^{k-1}.
> $$
> (d)
> $$
> B_{k,f}(X)=\sum_{i=0}^k\binom ki B_{i,f}X^{k-i}
> =B_{k,f}+kB_{k-1,f}X+\cdots+kB_{1,f}X^{k-1}+B_{0,f}X^k.
> $$

> [!warning] Source issue / scope clarification
> The printed statement does not specify the value ring of $f$. Its factorial and $N$ denominators are interpreted here in a commutative $\mathbb Q$-algebra, for example $\mathbb C$. Part (c) requires $k\ge1$ because it divides by $k$. These are the explicit scope conventions used below.

## Hints

> [!hint]- Hint 1
> For (a)-(b), factor the exponential depending on the shift.

> [!hint]- Hint 2
> For (c), cancel the denominator in (b) and compare coefficients. For (d), factor out $e^{Xt}$.

## Solution

> [!success]- Solution
> ### Approach
> For (a)-(b), factor the exponential depending on the shift.
>
> ### Proof
> Use a commutative $\mathbb Q$-algebra $A$ containing the values of $f$. The series $(e^{Nt}-1)/t$ has the unit constant coefficient $N$, so $F_f$ is well-defined in $A[X][[t]]$. In fact the ordinary Bernoulli expansion gives
> $$
> B_{k,f}(X)=N^{k-1}\sum_{a=0}^{N-1}f(a)B_k((X+a)/N),
> $$
> showing directly that these are polynomials.
>
> **(a)** Each summand at $X+k$ equals the corresponding summand at $X$ times $e^{kt}$. Summing proves the identity for every integer shift $k$ (and, formally, for an independent scalar shift too).
>
> **(b)** Take shift $N$ in (a) and subtract $F_f(t,X)$.
>
> **(c)** Cancelling the denominator in (b) yields
> $$
> F_f(t,X+N)-F_f(t,X)=t\sum_{a=0}^{N-1}f(a)e^{(a+X)t}.
> $$
> For $k\ge1$, its $t^k/k!$ coefficient on the right is $k\sum_a f(a)(a+X)^{k-1}$. Division by $k$ gives exactly the stated identity. The constant coefficient of the difference is zero.
>
> **(d)** The defining sum factors as $F_f(t,X)=e^{Xt}F_f(t,0)$. Multiplication of the two exponential generating series gives
> $$
> [t^k]F_f(t,X)=\sum_{i=0}^k\frac{B_{i,f}}{i!}\frac{X^{k-i}}{(k-i)!}.
> $$
> Multiply by $k!$ to obtain the formula. It includes $k=0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Exercises/Exercise R249 - Bernoulli Polynomial Distribution and Difference Formulas|R249 — Bernoulli Polynomial Distribution and Difference Formulas]]

## Notes

- **Source context:** The closing note connects the generating-series examples to Riemann-Roch and number theory [S2, Ch. IV, printed pp. 219-220, PDF pp. 234-235]. These applications are context; they are not proof inputs for the four identities.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 27, printed p. 219, PDF p. 234]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.

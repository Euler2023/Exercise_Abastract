---
title: "Exercise R242: Integer-Valued Polynomials and Discrete Antiderivatives"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 18, printed p. 216, PDF p. 231"
created: 2026-09-06
---

# Exercise R242: Integer-Valued Polynomials and Discrete Antiderivatives

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 18
> Let $P\in\mathbb Q[X]$. It may happen that $P(n)\in\mathbb Z$ for all sufficiently large integers $n$ without $P$ having integer coefficients.
>
> (a) Give an example.
>
> (b) Under that hypothesis, prove that there are integers $c_0,\ldots,c_r$ such that
> $$
> P(X)=c_0\binom Xr+c_1\binom X{r-1}+\cdots+c_r,
> \qquad \binom Xr=\frac{X(X-1)\cdots(X-r+1)}{r!}.
> $$
> In particular $P(n)\in\mathbb Z$ for all integers $n$, so we may call $P$ integral valued.
>
> (c) Let $f:\mathbb Z\to\mathbb Z$. Suppose an integral-valued polynomial $Q$ satisfies $(\Delta f)(n)=f(n)-f(n-1)=Q(n)$ for all sufficiently large $n$. Show that an integral-valued polynomial $P$ agrees with $f$ for all sufficiently large $n$.

## Hints

> [!hint]- Hint 1
> Use forward differences $\delta P(X)=P(X+1)-P(X)$ to lower the degree.

> [!hint]- Hint 2
> For the backward difference in (c), $\binom{X+1}{j+1}-\binom X{j+1}=\binom Xj$.

## Solution

> [!success]- Solution
> ### Approach
> Use forward differences $\delta P(X)=P(X+1)-P(X)$ to lower the degree.
>
> ### Proof
> **(a)** $P(X)=X(X-1)/2$ takes integer values on every integer but has nonintegral coefficients.
>
> **(b)** First prove that every $B_j(X)=\binom Xj$ is integer valued. This is familiar for nonnegative integers; for $m>0$,
> $$
> \binom{-m}{j}=(-1)^j\binom{m+j-1}{j}\in\mathbb Z.
> $$
> The polynomials $B_j$ have degree $j$ and satisfy $\delta B_{j+1}=B_j$ by Pascal's identity, a polynomial identity obtained from its values at infinitely many nonnegative integers.
>
> Induct on $r=\deg P$. A constant eventually taking integer values is an integer. If $r>0$, $\delta P$ has degree $r-1$ and is eventually integer valued, so induction gives $\delta P=\sum_{j=0}^{r-1}a_jB_j$ with integers $a_j$. Set $S=\sum_j a_jB_{j+1}$. Then $\delta(P-S)=0$, which forces $P-S$ to be constant in characteristic zero. Evaluating at one sufficiently large integer makes this constant an integer, because both $P$ and $S$ are integer valued there. Hence $P$ is an integer combination of $B_0,\ldots,B_r$, with the coefficients ordered as in the statement. It is therefore integer valued at every integer. The zero polynomial is included with all coefficients zero.
>
> **(c)** By (b), write $Q(X)=\sum_{j=0}^r a_jB_j(X)$. Define
> $$
> S(X)=\sum_{j=0}^r a_j\binom{X+1}{j+1}.
> $$
> It is integer valued and $S(X)-S(X-1)=Q(X)$. For all sufficiently large integers $n$, the difference of $f(n)-S(n)$ at consecutive integers is zero. Thus this integer-valued difference is a fixed integer $C$ on a terminal interval of $\mathbb Z$. The polynomial $P=S+C$ is integer valued and agrees with $f$ there.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integer-Valued Polynomials|Integer-Valued Polynomials]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Difference convention:** Part (b) uses a forward difference for the induction; part (c) follows the source’s backward difference. The shift $X+1$ in the antiderivative is necessary.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 18, printed p. 216, PDF p. 231]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.

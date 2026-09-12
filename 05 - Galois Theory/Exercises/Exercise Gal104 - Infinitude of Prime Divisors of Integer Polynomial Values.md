---
title: "Exercise Gal104: Infinitude of Prime Divisors of Integer Polynomial Values"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - number-theory
  - prime-divisors
  - bouniakowski-conjecture
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 20, printed pp. 323–324, PDF pp. 338–339"
created: 2026-09-12
---

# Exercise Gal104: Infinitude of Prime Divisors of Integer Polynomial Values

## Problem Statement

> [!question] Exercise VI.20
> Let $f(X) \in \mathbb Z[X]$ be a non-constant polynomial with integer coefficients. Show that the values $f(a)$ with $a \in \mathbb Z^+$ are divisible by infinitely many primes.
>
> *(Note: This is trivial. A much deeper question is whether there are infinitely many $a$ such that $f(a)$ is prime. There are three necessary conditions: the leading coefficient of $f$ is positive, the polynomial is irreducible, and the set of values $f(\mathbb Z^+)$ has no common divisor $> 1$. A conjecture of Bouniakowski [1854] states that these conditions are sufficient...)*

## Hints

> [!hint]- Hint 1: Constant Term Case
> If $f(0) = 0$, then $f(X) = X^k g(X)$, so $f(p)$ is divisible by $p$ for every prime $p$. If $f(0) = c \neq 0$, suppose for contradiction that the set of prime divisors of all values $f(a)$ ($a \in \mathbb Z^+$) is a finite set $\{p_1, \dots, p_k\}$.

> [!hint]- Hint 2: Euclid-Type Construction
> Let $M = c \cdot p_1 p_2 \dots p_k$. Consider the values $f(m M)$ for positive integers $m$. Show that $f(m M) = c(1 + m M Q(m))$ for some integer polynomial $Q$.

> [!hint]- Hint 3: Producing a New Prime
> Show that $1 + m M Q(m) \equiv 1 \pmod{p_i}$ for each $p_i$, so no prime in the assumed finite set can divide $1 + m M Q(m)$. Then choose $m$ sufficiently large so that $|1 + m M Q(m)| > 1$.

## Solution

> [!success]- Solution
>
> Let $f(X) = c_d X^d + \dots + c_1 X + c_0 \in \mathbb Z[X]$ be a non-constant polynomial of degree $d \ge 1$ with integer coefficients.
> Let
> $$
> \mathcal P = \{p \text{ prime} \mid p \text{ divides } f(a) \text{ for some } a \in \mathbb Z^+\}.
> $$
> We seek to prove that $\mathcal P$ is an infinite set.
>
> ### Case 1: $c_0 = 0$
>
> If $c_0 = 0$, then $X$ divides $f(X)$, so $f(X) = X^r g(X)$ for some $r \ge 1$ and $g(X) \in \mathbb Z[X]$ with $g(0) \neq 0$.
> For any prime number $p$, evaluate $f$ at $a = p \in \mathbb Z^+$:
> $$
> f(p) = p^r g(p).
> $$
> Since $g(p)$ is an integer, $p$ divides $f(p)$.
> Thus every prime number $p$ belongs to $\mathcal P$. Since there are infinitely many prime numbers, $\mathcal P$ is infinite.
>
> ---
>
> ### Case 2: $c_0 = c \neq 0$
>
> Suppose, for contradiction, that $\mathcal P = \{p_1, p_2, \dots, p_k\}$ is finite.
> Define the non-zero integer
> $$
> M = c \cdot p_1 p_2 \dots p_k.
> $$
> For any integer $m \ge 1$, evaluate $f$ at $a_m = m M \in \mathbb Z^+$:
> $$
> \begin{aligned}
> f(m M) &= c_d (m M)^d + c_{d-1}(m M)^{d-1} + \dots + c_1(m M) + c \\
> &= c + m M \left( c_1 + c_2(m M) + \dots + c_d(m M)^{d-1} \right).
> \end{aligned}
> $$
> Since $M$ is a multiple of $c$, we can factor out $c$:
> $$
> f(m M) = c \left( 1 + m \left(\frac{M}{c}\right) Q(m) \right),
> $$
> where $Q(m) = c_1 + c_2(m M) + \dots + c_d(m M)^{d-1} \in \mathbb Z$.
> Let
> $$
> H(m) = 1 + m \cdot (p_1 p_2 \dots p_k) \cdot Q(m).
> $$
> Then $f(m M) = c \cdot H(m)$.
>
> 1. **Congruence Properties:**
>    For every $i \in \{1, \dots, k\}$, since $p_i \mid (p_1 \dots p_k)$, we have
>    $$
>    H(m) \equiv 1 \pmod{p_i}.
>    $$
>    Therefore, no prime $p_i \in \mathcal P$ can divide $H(m)$.
>
> 2. **Growth of $H(m)$:**
>    The function $H(m)$ is a polynomial in $m$ of degree $d \ge 1$ with leading coefficient $c_d M^d / c \neq 0$.
>    As $m \to \infty$, we have $|H(m)| \to \infty$.
>    Therefore, we can choose an integer $m_0 \ge 1$ sufficiently large such that
>    $$
>    |H(m_0)| > 1.
>    $$
>
> 3. **Finding a New Prime:**
>    Because $|H(m_0)| > 1$, there exists at least one prime number $q$ dividing $H(m_0)$.
>    Since $f(m_0 M) = c \cdot H(m_0)$, the prime $q$ also divides $f(m_0 M)$.
>    By definition of $\mathcal P$, this means
>    $$
>    q \in \mathcal P.
>    $$
>    On the other hand, since $H(m_0) \equiv 1 \pmod{p_i}$ for every $p_i \in \mathcal P$, the prime $q$ cannot be equal to any of $p_1, \dots, p_k$.
>    Thus
>    $$
>    q \notin \mathcal P.
>    $$
>    This contradiction proves that the set of prime divisors $\mathcal P$ cannot be finite.
>
> Hence, the values $f(a)$ for $a \in \mathbb Z^+$ are divisible by infinitely many primes.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Galois Theory is primary because this exercise is the arithmetic foundation for Lang's subsequent proofs of the infinitude of primes in arithmetic progressions $\equiv 1 \pmod n$ via cyclotomic polynomials (Exercise VI.21).
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 20, printed pp. 323–324, PDF pp. 338–339.

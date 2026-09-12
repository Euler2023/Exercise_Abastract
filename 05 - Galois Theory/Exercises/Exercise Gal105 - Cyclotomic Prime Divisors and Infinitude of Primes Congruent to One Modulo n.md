---
title: "Exercise Gal105: Cyclotomic Prime Divisors and Infinitude of Primes Congruent to One Modulo n"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - cyclotomic-polynomials
  - dirichlet-theorem
  - roots-of-unity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 21, printed p. 324, PDF p. 339"
created: 2026-09-12
---

# Exercise Gal105: Cyclotomic Prime Divisors and Infinitude of Primes Congruent to One Modulo n

## Problem Statement

> [!question] Exercise VI.21
> (a) Let $a$ be a non-zero integer, $p$ a prime, $n$ a positive integer, and $p \nmid n$. Prove that $p \mid \Phi_n(a)$ if and only if $a$ has period $n$ in $(\mathbb Z/p\mathbb Z)^\times$.
>
> (b) Again assume $p \nmid n$. Prove that $p \mid \Phi_n(a)$ for some $a \in \mathbb Z$ if and only if $p \equiv 1 \pmod n$. Deduce from this that there are infinitely many primes $\equiv 1 \pmod n$, a special case of Dirichlet's theorem for the existence of primes in an arithmetic progression.

## Hints

> [!hint]- Hint 1: Separability of $X^n - 1$ in Characteristic $p$
> Use the identity $X^n - 1 = \prod_{d \mid n} \Phi_d(X)$. If $p \nmid n$, the polynomial $X^n - 1$ has non-zero derivative $n X^{n-1} \neq 0$ in $\mathbb F_p[X]$, so it has no multiple roots in any extension of $\mathbb F_p$.

> [!hint]- Hint 2: Lagrange's Theorem for $(\mathbb Z/p\mathbb Z)^\times$
> If an element $a$ has multiplicative order $n$ modulo $p$, then by Lagrange's theorem, $n$ must divide $|(\mathbb Z/p\mathbb Z)^\times| = p - 1$. Conversely, since $(\mathbb Z/p\mathbb Z)^\times$ is cyclic, it has elements of order $n$ whenever $n \mid (p - 1)$.

> [!hint]- Hint 3: Combining with Exercise VI.20
> Apply [[05 - Galois Theory/Exercises/Exercise Gal104 - Infinitude of Prime Divisors of Integer Polynomial Values|Exercise Gal104]] to the cyclotomic polynomial $\Phi_n(X)$ to obtain infinitely many prime divisors, and discard the finitely many primes dividing $n$.

## Solution

> [!success]- Solution
>
> ### (a) $p \mid \Phi_n(a) \iff \operatorname{ord}_p(a) = n$ (under $p \nmid n$)
>
> Let $a \in \mathbb Z \setminus \{0\}$, $n \in \mathbb Z^+$, and let $p$ be a prime not dividing $n$.
>
> 1. **Forward Direction ($\implies$):**
>    Suppose $p \mid \Phi_n(a)$. Since $\Phi_n(X)$ divides $X^n - 1$ in $\mathbb Z[X]$, we have
>    $$
>    a^n \equiv 1 \pmod p.
>    $$
>    In the multiplicative group $(\mathbb Z/p\mathbb Z)^\times$, let $d = \operatorname{ord}_p(a)$.
>    Then $d$ divides $n$.
>
>    Suppose, for contradiction, that $d < n$.
>    Since $d \mid n$ and $d < n$, the polynomial $X^d - 1$ divides $(X^n - 1) / \Phi_n(X) = \prod_{k \mid n, k \neq n} \Phi_k(X)$.
>    Because $a^d \equiv 1 \pmod p$, $a \bmod p$ is a root of $X^d - 1$ in $\mathbb F_p$, and hence a root of some $\Phi_k(X)$ with $k \mid n, k < n$.
>    At the same time, $a \bmod p$ is a root of $\Phi_n(X)$ in $\mathbb F_p$.
>    Therefore, in the polynomial ring $\mathbb F_p[X]$, $X - a$ divides both $\Phi_n(X)$ and $\Phi_k(X)$.
>    Since $X^n - 1 = \prod_{m \mid n} \Phi_m(X)$, the factor $(X - a)^2$ would divide $X^n - 1$ in $\mathbb F_p[X]$, which means that $a \bmod p$ is a multiple root of $X^n - 1$ over $\mathbb F_p$.
>
>    However, the derivative of $X^n - 1$ in $\mathbb F_p[X]$ is
>    $$
>    (X^n - 1)' = n X^{n-1}.
>    $$
>    Because $p \nmid n$, the coefficient $n \neq 0$ in $\mathbb F_p$. Since $a \not\equiv 0 \pmod p$, the value $n a^{n-1} \neq 0$ in $\mathbb F_p$.
>    Thus $\gcd(X^n - 1, (X^n - 1)') = 1$ in $\mathbb F_p[X]$, so $X^n - 1$ has only simple roots in $\mathbb F_p$ and all its extension fields.
>    This contradiction proves that $d$ cannot be strictly less than $n$.
>    Therefore, $d = n$, meaning $a$ has period $n$ in $(\mathbb Z/p\mathbb Z)^\times$.
>
> 2. **Reverse Direction ($\impliedby$):**
>    Suppose $a$ has period $n$ in $(\mathbb Z/p\mathbb Z)^\times$.
>    Then $a^n \equiv 1 \pmod p$, so $p$ divides $a^n - 1 = \prod_{d \mid n} \Phi_d(a)$.
>    Since $p$ is prime, $p$ must divide $\Phi_d(a)$ for some divisor $d \mid n$.
>    If $d < n$, then since $\Phi_d(X) \mid (X^d - 1)$, we would have $a^d \equiv 1 \pmod p$, contradicting the assumption that the minimal period of $a$ is $n$.
>    Thus the only divisor $d \mid n$ such that $p \mid \Phi_d(a)$ is $d = n$.
>    Hence $p \mid \Phi_n(a)$.
>
> ---
>
> ### (b) Criterion $p \equiv 1 \pmod n$ and Infinitude of Primes
>
> 1. **Equivalence:**
>    - If $p \mid \Phi_n(a)$ for some $a \in \mathbb Z$ with $p \nmid n$, then by part (a), $a$ has multiplicative order $n$ in $(\mathbb Z/p\mathbb Z)^\times$.
>      By Lagrange's theorem, the order of an element divides the group order:
>      $$
>      n \mid |(\mathbb Z/p\mathbb Z)^\times| = p - 1 \implies p \equiv 1 \pmod n.
>      $$
>    - Conversely, if $p \equiv 1 \pmod n$ with $p \nmid n$, the group $(\mathbb Z/p\mathbb Z)^\times$ is a finite cyclic group of order $p - 1$.
>      Because $n$ divides $p - 1$, a cyclic group of order $p - 1$ contains a unique cyclic subgroup of order $n$, and hence contains $\varphi(n) \ge 1$ elements of exact order $n$.
>      Let $a \in \mathbb Z$ be an integer whose residue mod $p$ has order $n$.
>      By part (a), $p \mid \Phi_n(a)$.
>
> 2. **Infinitude of Primes $p \equiv 1 \pmod n$:**
>    Consider the cyclotomic polynomial $\Phi_n(X) \in \mathbb Z[X]$.
>    Its degree is $\varphi(n) \ge 1$, so $\Phi_n(X)$ is a non-constant polynomial.
>    By [[05 - Galois Theory/Exercises/Exercise Gal104 - Infinitude of Prime Divisors of Integer Polynomial Values|Exercise Gal104]], the set of prime divisors of the values $\{\Phi_n(m) : m \in \mathbb Z^+\}$ is an infinite set $\mathcal P$.
>
>    The integer $n$ has only finitely many prime factors.
>    Removing the finitely many prime factors of $n$ from $\mathcal P$ leaves an infinite subset of primes:
>    $$
>    \mathcal P' = \{p \in \mathcal P : p \nmid n\}.
>    $$
>    For every prime $p \in \mathcal P'$, there exists some $m \in \mathbb Z^+$ such that $p \mid \Phi_n(m)$.
>    Since $p \nmid n$, the result of part (b) implies:
>    $$
>    p \equiv 1 \pmod n.
>    $$
>    Since $\mathcal P'$ is an infinite set of primes, there are infinitely many primes congruent to $1 \pmod n$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Exercises/Exercise Gal104 - Infinitude of Prime Divisors of Integer Polynomial Values|Exercise Gal104]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Routing:** Galois Theory is primary because cyclotomic polynomials, finite field cyclic units, and Frobenius orders provide the algebraic proof of Dirichlet's theorem for cyclic arithmetic progressions.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 21, printed p. 324, PDF p. 339.

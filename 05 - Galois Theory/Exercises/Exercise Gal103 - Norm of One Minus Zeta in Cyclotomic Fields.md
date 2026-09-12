---
title: "Exercise Gal103: Norm of One Minus Zeta in Cyclotomic Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - cyclotomic-extensions
  - cyclotomic-units
  - norm
  - cyclotomic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 19, printed p. 323, PDF p. 338"
created: 2026-09-12
---

# Exercise Gal103: Norm of One Minus Zeta in Cyclotomic Fields

## Problem Statement

> [!question] Exercise VI.19
> Let $\zeta$ be a primitive $n$-th root of unity. Let $K = \mathbb Q(\zeta)$.
>
> (a) If $n = p^r$ ($r \ge 1$) is a prime power, show that $N_{K/\mathbb Q}(1 - \zeta) = p$.
>
> (b) If $n$ is composite (divisible by at least two primes) then $N_{K/\mathbb Q}(1 - \zeta) = 1$.

## Hints

> [!hint]- Hint 1: Relation to the Cyclotomic Polynomial
> The conjugates of $1 - \zeta$ under $\operatorname{Gal}(K/\mathbb Q)$ are $1 - \zeta^a$ for $\gcd(a, n) = 1$. Relate the product of these conjugates to the value of the $n$-th cyclotomic polynomial $\Phi_n(X)$ at $X = 1$:
> $$
> N_{K/\mathbb Q}(1 - \zeta) = \Phi_n(1).
> $$

> [!hint]- Hint 2: Prime Power Case (a)
> For $n = p^r$, use the identity $\Phi_{p^r}(X) = \frac{X^{p^r} - 1}{X^{p^{r-1}} - 1} = \sum_{j=0}^{p-1} X^{j p^{r-1}}$ and evaluate at $X = 1$.

> [!hint]- Hint 3: Composite Case (b) and Möbius Inversion
> Use Möbius inversion $\Phi_n(X) = \prod_{d \mid n} (X^d - 1)^{\mu(n/d)}$. Show that $\log \Phi_n(1)$ equals the von Mangoldt function $\Lambda(n)$, which vanishes when $n$ has two or more distinct prime factors.

## Solution

> [!success]- Solution
>
> Let $\zeta = \zeta_n$ be a primitive $n$-th root of unity and $K = \mathbb Q(\zeta_n)$.
> The extension $K/\mathbb Q$ is Galois of degree $\varphi(n)$, with Galois group
> $$
> \operatorname{Gal}(K/\mathbb Q) = \{\sigma_a : \zeta \mapsto \zeta^a \mid 1 \le a \le n, \ \gcd(a, n) = 1\}.
> $$
> The norm of an element is the product of its Galois conjugates:
> $$
> N_{K/\mathbb Q}(1 - \zeta) = \prod_{\substack{1 \le a \le n \\ \gcd(a, n) = 1}} \sigma_a(1 - \zeta) = \prod_{\substack{1 \le a \le n \\ \gcd(a, n) = 1}} (1 - \zeta^a).
> $$
> Recall that the $n$-th cyclotomic polynomial is defined by
> $$
> \Phi_n(X) = \prod_{\substack{1 \le a \le n \\ \gcd(a, n) = 1}} (X - \zeta^a).
> $$
> Substituting $X = 1$ yields:
> $$
> N_{K/\mathbb Q}(1 - \zeta) = \Phi_n(1).
> $$
>
> ---
>
> ### (a) $n = p^r$ is a Prime Power ($r \ge 1$)
>
> The cyclotomic polynomial for a prime power satisfies:
> $$
> \Phi_{p^r}(X) = \frac{X^{p^r} - 1}{X^{p^{r-1}} - 1}.
> $$
> Setting $Y = X^{p^{r-1}}$, this is the geometric sum:
> $$
> \Phi_{p^r}(X) = \frac{Y^p - 1}{Y - 1} = Y^{p-1} + Y^{p-2} + \dots + Y + 1 = \sum_{j=0}^{p-1} X^{j p^{r-1}}.
> $$
> Evaluating at $X = 1$:
> $$
> \Phi_{p^r}(1) = \sum_{j=0}^{p-1} 1^{j p^{r-1}} = \underbrace{1 + 1 + \dots + 1}_{p \text{ terms}} = p.
> $$
> Therefore,
> $$
> N_{K/\mathbb Q}(1 - \zeta) = p.
> $$
> *(In algebraic number theory, this reflects the fact that the prime $p$ totally ramifies in $\mathbb Q(\zeta_{p^r})$, with $(p) = (1 - \zeta)^{\varphi(p^r)}$.)*
>
> ---
>
> ### (b) $n$ is Divisible by at Least Two Distinct Primes
>
> By the product formula over divisors,
> $$
> X^n - 1 = \prod_{d \mid n} \Phi_d(X).
> $$
> Applying Möbius inversion gives:
> $$
> \Phi_n(X) = \prod_{d \mid n} (X^d - 1)^{\mu(n/d)}.
> $$
> For $n > 1$, the sum of Möbius values over all divisors is zero:
> $$
> \sum_{d \mid n} \mu(n/d) = 0.
> $$
> We can therefore divide each factor $X^d - 1$ by $X - 1$ without changing the product:
> $$
> \Phi_n(X) = \prod_{d \mid n} \left(\frac{X^d - 1}{X - 1}\right)^{\mu(n/d)}.
> $$
> Taking the limit as $X \to 1$:
> $$
> \Phi_n(1) = \prod_{d \mid n} \left( \lim_{X \to 1} \frac{X^d - 1}{X - 1} \right)^{\mu(n/d)} = \prod_{d \mid n} d^{\mu(n/d)}.
> $$
> Taking natural logarithms:
> $$
> \log \Phi_n(1) = \sum_{d \mid n} \mu(n/d) \log d.
> $$
> Setting $k = n/d$, we have:
> $$
> \sum_{d \mid n} \mu(n/d) \log d = \sum_{k \mid n} \mu(k) \log(n/k) = \log n \left(\sum_{k \mid n} \mu(k)\right) - \sum_{k \mid n} \mu(k) \log k.
> $$
> Since $n > 1$, $\sum_{k \mid n} \mu(k) = 0$, so
> $$
> \log \Phi_n(1) = -\sum_{k \mid n} \mu(k) \log k = \Lambda(n),
> $$
> where $\Lambda(n)$ is the classical **von Mangoldt function**:
> $$
> \Lambda(n) = \begin{cases}
> \log p & \text{if } n = p^r \text{ for some prime } p \text{ and integer } r \ge 1, \\
> 0 & \text{if } n \text{ has two or more distinct prime factors}.
> \end{cases}
> $$
> Because $n$ is divisible by at least two distinct primes, $\Lambda(n) = 0$.
> Exponentiating yields:
> $$
> \Phi_n(1) = e^0 = 1.
> $$
> Therefore,
> $$
> N_{K/\mathbb Q}(1 - \zeta) = 1.
> $$
> *(Consequently, $1 - \zeta$ is a unit in the ring of integers $\mathcal O_K = \mathbb Z[\zeta]$, known as a **cyclotomic unit**.)*

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Exercises/Exercise Gal101 - Roots of Unity in Characteristic Prime to 2n and Finite Number of Roots of Unity|Exercise Gal101]]

## Notes

- **Routing:** Galois Theory is primary because computing the Galois norm of cyclotomic generators establishes the foundational theory of cyclotomic units and prime decomposition in cyclotomic fields.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 19, printed p. 323, PDF p. 338.

---
title: "Exercise R259: Cyclotomic Differences and Units in Cyclotomic Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - cyclotomic-fields
  - cyclotomic-units
  - roots-of-unity
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 10, printed p. 354, PDF p. 369"
created: 2026-09-15
---

# Exercise R259: Cyclotomic Differences and Units in Cyclotomic Rings

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 10
> Let $n$ be a positive integer and let $\zeta, \zeta'$ be primitive $n$-th roots of unity.
> 
> (a) Show that $(1-\zeta')/(1-\zeta)$ is an algebraic integer.
> 
> (b) If $n>6$ is divisible by at least two primes, show that $1-\zeta$ is a unit in the ring $\mathbb Z[\zeta]$.

## Hints

> [!hint]- Hint 1: Express $\zeta'$ as a coprime power of $\zeta$
> Since $\zeta$ and $\zeta'$ are primitive $n$-th roots of unity, $\zeta' = \zeta^k$ for some integer $k$ with $\gcd(k,n)=1$. Use the algebraic identity for $(1-X^k)/(1-X)$.

> [!hint]- Hint 2: Show that $(1-\zeta')/(1-\zeta)$ is actually a unit
> Since $\gcd(k,n)=1$, there exists an inverse $m$ such that $km \equiv 1 \pmod n$, so $\zeta = (\zeta')^m$. Invert the roles to show the reciprocal is also an algebraic integer.

> [!hint]- Hint 3: Evaluate the cyclotomic polynomial at $1$
> Recall that $\Phi_n(X) = \prod_{\gcd(j,n)=1} (X-\zeta^j)$. What is the value $\Phi_n(1)$ when $n$ is divisible by at least two distinct primes?

> [!hint]- Hint 4: Deduce that $1-\zeta$ divides $1$
> If $\Phi_n(1) = 1$, write $\Phi_n(1)$ as $(1-\zeta)$ times a product of algebraic integers in $\mathbb Z[\zeta]$.

## Solution

> [!success]- Complete Derivation
> Let $n$ be a positive integer, and let $\zeta, \zeta'$ be primitive $n$-th roots of unity in $\mathbb C$.
> 
> ### Part (a): $(1-\zeta')/(1-\zeta)$ is an Algebraic Integer
> Because $\zeta$ and $\zeta'$ are both primitive $n$-th roots of unity, their cyclic groups $\langle\zeta\rangle$ and $\langle\zeta'\rangle$ inside $\mathbb C^\times$ coincide. Therefore, there exists an integer $k$ with $\gcd(k,n)=1$ such that:
> $$
> \zeta' = \zeta^k.
> $$
> 
> Using the polynomial identity $1 - X^k = (1 - X)(1 + X + X^2 + \cdots + X^{k-1})$ for $X = \zeta$:
> $$
> \frac{1 - \zeta'}{1 - \zeta} = \frac{1 - \zeta^k}{1 - \zeta} = 1 + \zeta + \zeta^2 + \cdots + \zeta^{k-1}.
> $$
> 
> Since $\zeta$ satisfies the monic equation $X^n - 1 = 0$ with integer coefficients, $\zeta$ is an algebraic integer.
> 
> The set of algebraic integers forms a ring containing $\mathbb Z$. Since $1+\zeta+\cdots+\zeta^{k-1}\in\mathbb Z[\zeta]$, it is a sum of products of algebraic integers, and hence:
> $$
> \frac{1 - \zeta'}{1 - \zeta}\quad\text{is an algebraic integer}.
> $$
> 
> Moreover, since $\gcd(k,n)=1$, there exists an integer $m$ such that $km \equiv 1 \pmod n$. Then $\zeta = (\zeta')^m$, and by identical reasoning:
> $$
> \frac{1 - \zeta}{1 - \zeta'} = \frac{1 - (\zeta')^m}{1 - \zeta'} = 1 + \zeta' + (\zeta')^2 + \cdots + (\zeta')^{m-1} \in \mathbb Z[\zeta'].
> $$
> 
> Since $\mathbb Z[\zeta] = \mathbb Z[\zeta']$, both $(1-\zeta')/(1-\zeta)$ and its reciprocal $(1-\zeta)/(1-\zeta')$ belong to $\mathbb Z[\zeta]$.
> Thus $(1-\zeta')/(1-\zeta)$ is not merely an algebraic integer, but a **unit** in the ring of cyclotomic integers $\mathbb Z[\zeta]$.
> 
> ---
> 
> ### Part (b): $1-\zeta$ is a Unit in $\mathbb Z[\zeta]$ when $n$ has $\ge 2$ Distinct Prime Factors
> 
> Let $n$ be an integer divisible by at least two distinct primes, say $p$ and $q$ (so $n$ is not a prime power).
> 
> #### Step 1: Evaluation of the cyclotomic polynomial at $X=1$
> The $n$-th cyclotomic polynomial is:
> $$
> \Phi_n(X) = \prod_{\substack{1 \le j \le n \\ \gcd(j,n)=1}} (X - \zeta^j).
> $$
> 
> Evaluating $\Phi_n(X)$ at $X=1$ gives:
> $$
> \Phi_n(1) = \prod_{\substack{1 \le j \le n \\ \gcd(j,n)=1}} (1 - \zeta^j).
> $$
> 
> We determine the value of $\Phi_n(1)$ from the identity:
> $$
> X^n - 1 = \prod_{d \mid n} \Phi_d(X).
> $$
> 
> Dividing by $\Phi_1(X) = X - 1$:
> $$
> \sum_{i=0}^{n-1} X^i = \prod_{\substack{d \mid n \\ d > 1}} \Phi_d(X).
> $$
> 
> Substituting $X = 1$:
> $$
> n = \prod_{\substack{d \mid n \\ d > 1}} \Phi_d(1).
> $$
> 
> We compute $\Phi_d(1)$ by induction on the number of prime factors:
> - For $d = p^k$ a prime power, $\Phi_{p^k}(X) = \frac{X^{p^k}-1}{X^{p^{k-1}}-1} = \sum_{j=0}^{p-1} X^{j p^{k-1}}$, so $\Phi_{p^k}(1) = p$.
> - Using Möbius inversion on $\log \Phi_n(X) = \sum_{d \mid n} \mu(n/d) \log(X^d - 1)$:
>   $$
>   \Phi_n(1) = \prod_{d \mid n} d^{\mu(n/d)}.
>   $$
>   Let $n = \prod_{i=1}^r p_i^{e_i}$ with $r \ge 2$. In the product $\prod_{d \mid n} d^{\mu(n/d)}$, the exponent of each prime $p_i$ is:
>   $$
>   \sum_{\substack{d \mid n \\ p_i \mid d}} \mu(n/d) = \sum_{c \mid \frac{n}{p_i}} \mu(c).
>   $$
>   Since $n$ is divisible by at least two distinct primes, $n/p_i$ is divisible by $p_j$ ($j \ne i$), so $n/p_i > 1$.
>   For any integer $m > 1$, $\sum_{c \mid m} \mu(c) = 0$.
>   Therefore, the exponent of every prime $p_i$ in $\Phi_n(1)$ is exactly $0$.
> 
> This proves:
> $$
> \Phi_n(1) = 1.
> $$
> 
> #### Step 2: Concluding that $1-\zeta$ is a unit
> Since $\zeta$ is one of the primitive roots $\zeta^j$ (with $j=1$), we can factor $\Phi_n(1)$ as:
> $$
> 1 = \Phi_n(1) = (1 - \zeta) \cdot \prod_{\substack{1 < j \le n \\ \gcd(j,n)=1}} (1 - \zeta^j).
> $$
> 
> Define:
> $$
> \beta = \prod_{\substack{1 < j \le n \\ \gcd(j,n)=1}} (1 - \zeta^j).
> $$
> 
> Since each $\zeta^j \in \mathbb Z[\zeta]$, each factor $(1 - \zeta^j) \in \mathbb Z[\zeta]$, and hence their product $\beta \in \mathbb Z[\zeta]$.
> 
> Thus:
> $$
> (1 - \zeta) \cdot \beta = 1,\qquad \text{with }\beta \in \mathbb Z[\zeta].
> $$
> 
> This demonstrates that $1 - \zeta$ divides $1$ in the ring $\mathbb Z[\zeta]$.
> Therefore, $1 - \zeta$ is a **unit** in $\mathbb Z[\zeta]$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA382 - Logarithmic Embedding and Finite Generation of the Unit Group|Exercise LA382: Logarithmic Embedding and Finite Generation of the Unit Group]]

## Notes

- **The Boundary Case $n=6$:** The printed problem statement includes the condition "$n>6$ is divisible by at least two primes". In fact, the smallest integer divisible by at least two distinct primes is $n = 6 = 2 \times 3$. For $n=6$, $\Phi_6(X) = X^2 - X + 1$, and $\Phi_6(1) = 1^2 - 1 + 1 = 1$. Since $1 - \zeta_6 = \zeta_6^{-1} \in \mathbb Z[\zeta_6]^\times$, $1 - \zeta$ is already a unit when $n=6$. The assertion holds unconditionally for every integer $n$ that is not a prime power.
- **Cyclotomic Units:** The elements $(1-\zeta^a)/(1-\zeta)$ (with $\gcd(a,n)=1$) and $1-\zeta$ generate an important subgroup of the unit group of $\mathbb Z[\zeta]$, known as the group of **cyclotomic units**.
- **Independent Derivation:** The evaluation $\Phi_n(1) = 1$ via Möbius inversion and the factorization $(1-\zeta)\beta = 1$ are independently verified above.

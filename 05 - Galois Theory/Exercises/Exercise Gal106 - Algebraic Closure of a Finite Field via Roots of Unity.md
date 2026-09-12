---
title: "Exercise Gal106: Algebraic Closure of a Finite Field via Roots of Unity"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - finite-fields
  - algebraic-closure
  - roots-of-unity
  - van-der-waerden
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 22, printed p. 324, PDF p. 339"
created: 2026-09-12
---

# Exercise Gal106: Algebraic Closure of a Finite Field via Roots of Unity

## Problem Statement

> [!question] Exercise VI.22
> Let $F = \mathbb F_p$ be the prime field of characteristic $p$. Let $K$ be the field obtained from $F$ by adjoining all primitive $\ell$-th roots of unity, for all prime numbers $\ell \neq p$. Prove that $K$ is algebraically closed.
>
> [Hint: Show that if $q$ is a prime number, and $r$ an integer $\ge 1$, there exists a prime $\ell$ such that the period of $p \bmod \ell$ is $q^r$, by using the following old trick of Van der Waerden: Let $\ell$ be a prime dividing the number
> $$
> b = \frac{p^{q^r} - 1}{p^{q^{r-1}} - 1} = (p^{q^{r-1}} - 1)^{q-1} + q(p^{q^{r-1}} - 1)^{q-2} + \dots + q.
> $$
> If $\ell$ does not divide $p^{q^{r-1}} - 1$, we are done. Otherwise, $\ell = q$. But in that case $q^2$ does not divide $b$, and hence there exists a prime $\ell \neq q$ such that $\ell$ divides $b$. Then the degree of $F(\zeta_\ell)$ over $F$ is $q^r$, so $K$ contains subfields of arbitrary degree over $F$.]

## Hints

> [!hint]- Hint 1: Characterization of Algebraic Closure for $\mathbb F_p$
> The algebraic closure of $\mathbb F_p$ is $\overline{\mathbb F}_p = \bigcup_{n \ge 1} \mathbb F_{p^n}$. To show $K = \overline{\mathbb F}_p$, it suffices to show that $K$ contains the finite field $\mathbb F_{p^{q^r}}$ for every prime power $q^r$.

> [!hint]- Hint 2: Degree of Cyclotomic Adjunction over $\mathbb F_p$
> For a prime $\ell \neq p$, the degree of the cyclotomic extension $[\mathbb F_p(\zeta_\ell) : \mathbb F_p]$ is equal to the multiplicative order $d = \operatorname{ord}_\ell(p)$ of $p$ modulo $\ell$. If $d = q^r$, then $\mathbb F_p(\zeta_\ell) \cong \mathbb F_{p^{q^r}} \subset K$.

> [!hint]- Hint 3: Van der Waerden's Lemma
> Expand $b = \frac{A^q - 1}{A - 1}$ with $A = p^{q^{r-1}}$. Show that any common prime divisor of $b$ and $A - 1$ must be $q$, and that $q^2 \nmid b$. Deduce that $b$ must have a prime divisor $\ell \neq q$.

## Solution

> [!success]- Solution
>
> Let $F = \mathbb F_p$. The algebraic closure $\overline{\mathbb F}_p$ is the union of all finite fields:
> $$
> \overline{\mathbb F}_p = \bigcup_{n \ge 1} \mathbb F_{p^n}.
> $$
> Every positive integer $n$ has a unique prime factorization $n = q_1^{r_1} \dots q_k^{r_k}$. The field $\mathbb F_{p^n}$ is the compositum of the subfields $\mathbb F_{p^{q_i^{r_i}}}$:
> $$
> \mathbb F_{p^n} = \mathbb F_{p^{q_1^{r_1}}} \mathbb F_{p^{q_2^{r_2}}} \dots \mathbb F_{p^{q_k^{r_k}}}.
> $$
> Therefore, $K \subseteq \overline{\mathbb F}_p$ is algebraically closed if and only if $K$ contains $\mathbb F_{p^{q^r}}$ for every prime $q$ and every integer $r \ge 1$.
>
> For any prime $\ell \neq p$, adjoining a primitive $\ell$-th root of unity $\zeta_\ell$ to $\mathbb F_p$ yields a finite field extension whose degree is the multiplicative order of $p$ modulo $\ell$:
> $$
> [\mathbb F_p(\zeta_\ell) : \mathbb F_p] = \operatorname{ord}_\ell(p).
> $$
> If there exists a prime $\ell \neq p$ such that $\operatorname{ord}_\ell(p) = q^r$, then $\mathbb F_p(\zeta_\ell) = \mathbb F_{p^{q^r}} \subseteq K$.
>
> ---
>
> ### Existence of a Prime $\ell$ with $\operatorname{ord}_\ell(p) = q^r$
>
> Let $q$ be a prime and $r \ge 1$ an integer. Set $A = p^{q^{r-1}}$.
> Since $p \ge 2$ and $q^r \ge 2$, we have $A \ge 2$.
> Consider the integer
> $$
> b = \frac{p^{q^r} - 1}{p^{q^{r-1}} - 1} = \frac{A^q - 1}{A - 1} = A^{q-1} + A^{q-2} + \dots + A + 1.
> $$
> Substituting $A = (A - 1) + 1$ into the polynomial $\frac{X^q - 1}{X - 1}$ and expanding by the binomial theorem:
> $$
> \begin{aligned}
> b &= \sum_{j=1}^q \binom{q}{j} (A - 1)^{j-1} \\
> &= (A - 1)^{q-1} + \binom{q}{q-1}(A - 1)^{q-2} + \dots + \binom{q}{2}(A - 1) + q.
> \end{aligned}
> $$
>
> Since $A \ge 2$, we have $b \ge A + 1 > 1$, so $b$ has at least one prime divisor $\ell$.
> Because $\ell \mid b$ and $b \mid (p^{q^r} - 1)$, we have
> $$
> p^{q^r} \equiv 1 \pmod \ell.
> $$
> Thus the multiplicative order $d = \operatorname{ord}_\ell(p)$ divides $q^r$.
> Because $q$ is a prime, the divisors of $q^r$ are $1, q, q^2, \dots, q^r$.
>
> - **If $\ell \nmid (A - 1) = (p^{q^{r-1}} - 1)$:**
>   Then $p^{q^{r-1}} \not\equiv 1 \pmod \ell$, so $d$ does not divide $q^{r-1}$.
>   Since $d \mid q^r$ and $d \nmid q^{r-1}$, the only possibility is
>   $$
>   d = q^r.
>   $$
>   In this case, $\ell$ is our desired prime.
>
> - **If $\ell \mid (A - 1)$:**
>   From the expansion of $b$, every term $(A - 1)^{j-1}$ for $j \ge 2$ is a multiple of $A - 1$, hence divisible by $\ell$.
>   Therefore,
>   $$
>   b \equiv q \pmod \ell.
>   $$
>   Since $\ell \mid b$, this forces $\ell \mid q$. Since $q$ is prime, we must have
>   $$
>   \ell = q.
>   $$
>   We now show that $q^2 \nmid b$:
>   - If $q \ge 3$: Since $q \mid (A - 1)$, each term $\binom{q}{j}(A - 1)^{j-1}$ for $2 \le j \le q - 1$ is divisible by $q \cdot q = q^2$, and the top term $(A - 1)^{q-1}$ is divisible by $q^{q-1} \ge q^2$.
>     Thus all terms in the sum except the constant term $q$ are divisible by $q^2$.
>     Hence $b \equiv q \not\equiv 0 \pmod{q^2}$.
>   - If $q = 2$: $b = A + 1 = (A - 1) + 2$.
>     If $2 \mid (A - 1)$, then $A = p^{2^{r-1}}$ is odd, so $p$ is an odd prime.
>     If $r \ge 2$, $2^{r-1} \ge 2$ is even, so $A = (p^{2^{r-2}})^2 \equiv 1 \pmod 4$.
>     Thus $4 \mid (A - 1)$, so $b = (A - 1) + 2 \equiv 2 \not\equiv 0 \pmod 4$.
>     If $r = 1$, $b = p + 1$. If $p \equiv 1 \pmod 4$, $b \equiv 2 \pmod 4$, so $4 \nmid b$. If $p \equiv 3 \pmod 4$, $p + 1 \ge 4$ is divisible by 4, but in that case $\gcd(p+1, p-1) = 2$, so $b = p + 1$ has an odd prime factor $\ell \nmid (p - 1)$, returning to the first case.
>
>   Because $q^2$ does not divide $b$, the prime factorization of $b$ cannot consist solely of powers of $q$ (unless $b = q$, which is impossible since $b \ge A + 1 \ge 3$, and if $q=2$, $b \ge 4$).
>   Consequently, $b$ must have at least one prime factor $\ell \neq q$.
>   By the argument above, any prime factor dividing both $b$ and $A - 1$ must be $q$.
>   Since $\ell \neq q$, we must have
>   $$
>   \ell \nmid (A - 1).
>   $$
>   Thus $\operatorname{ord}_\ell(p) = q^r$.
>
> ---
>
> ### Conclusion
>
> For every prime $q$ and integer $r \ge 1$, there exists a prime $\ell \neq p$ such that
> $$
> [\mathbb F_p(\zeta_\ell) : \mathbb F_p] = q^r.
> $$
> Hence $\mathbb F_{p^{q^r}} = \mathbb F_p(\zeta_\ell) \subseteq K$.
> Taking composita over all prime powers $q^r$ dividing $n$, $K$ contains $\mathbb F_{p^n}$ for every $n \ge 1$.
> Therefore,
> $$
> K = \bigcup_{n=1}^\infty \mathbb F_{p^n} = \overline{\mathbb F}_p,
> $$
> which proves that $K$ is algebraically closed.

## Related Concepts

- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** Galois Theory is primary because generating the algebraic closure of a finite field through Frobenius orders of cyclotomic extensions is a classical theorem of Van der Waerden in Galois theory of finite fields.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 22, printed p. 324, PDF p. 339.

---
title: "Exercise R343: Ideal Class Representatives Avoiding a Modulus"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - ideal-class-groups
  - fractional-ideals
  - chinese-remainder-theorem
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 8, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R343: Ideal Class Representatives Avoiding a Modulus

## Problem Statement

> [!question] Neukirch I.3.8
> Let $\mathfrak m$ be a nonzero integral ideal of the Dedekind domain $\mathfrak o$. Show that in every ideal class of $Cl_K$, there exists an integral ideal prime to $\mathfrak m$.

Here $K=\operatorname{Frac}(\mathfrak o)$, and $Cl_K$ is the source's notation for the group of nonzero fractional ideals modulo nonzero principal fractional ideals. Being prime to $\mathfrak m$ means that the sum with $\mathfrak m$ is $\mathfrak o$.

## Hints

> [!hint]- Hint 1: Start from the inverse class
> Given a class $C$, choose a nonzero integral ideal $\mathfrak a$ representing $C^{-1}$. For $0\ne x\in\mathfrak a$, the ideal $\mathfrak b=(x)\mathfrak a^{-1}$ is integral and represents $C$.

> [!hint]- Hint 2: Translate avoidance into congruences in $\mathfrak a$
> For a prime $\mathfrak p$ dividing $\mathfrak m$, multiplication by the invertible ideal $\mathfrak a$ gives
> $$
> \mathfrak b\subseteq\mathfrak p
> \quad\Longleftrightarrow\quad x\in\mathfrak p\mathfrak a.
> $$
> The submodule $\mathfrak p\mathfrak a$ is strictly smaller than $\mathfrak a$.

> [!hint]- Hint 3: Use Chinese remainder coefficients
> Write the distinct prime divisors of $\mathfrak m$ as $\mathfrak p_1,\ldots,\mathfrak p_r$, and choose $x_i\in\mathfrak a\setminus\mathfrak p_i\mathfrak a$. Choose $e_i\in\mathfrak o$ with $e_i\equiv1\pmod{\mathfrak p_i}$ and $e_i\equiv0\pmod{\mathfrak p_j}$ for $j\ne i$. Set $x=\sum_i e_ix_i$.

## Solution

> [!success]- Independent derivation
> Fix an ideal class $C\in Cl_K$. Choose a fractional ideal in $C^{-1}$ and multiply it by a nonzero denominator in $\mathfrak o$. This does not change its class and produces a nonzero integral ideal $\mathfrak a$ with
> $$
> [\mathfrak a]=C^{-1}.
> $$
> All nonzero ideals of the Dedekind domain $\mathfrak o$ are invertible.
>
> If $\mathfrak m=\mathfrak o$, every ideal is prime to $\mathfrak m$. Choose any $0\ne x\in\mathfrak a$ and use the construction in Step 2 below. We may therefore assume $\mathfrak m\ne\mathfrak o$ and write
> $$
> \mathfrak m=\mathfrak p_1^{n_1}\cdots\mathfrak p_r^{n_r},
> \qquad n_i\ge1,
> $$
> where the $\mathfrak p_i$ are distinct nonzero prime ideals, hence distinct maximal ideals.
>
> ### 1. Choose one element avoiding every $\mathfrak p_i\mathfrak a$
> For each $i$ the inclusion $\mathfrak p_i\mathfrak a\subseteq\mathfrak a$ is strict. Otherwise multiplying the equality by $\mathfrak a^{-1}$ would give $\mathfrak p_i=\mathfrak o$. Choose
> $$
> x_i\in\mathfrak a\setminus\mathfrak p_i\mathfrak a.
> $$
> Distinct maximal ideals are relatively prime, so the Chinese remainder theorem supplies $e_1,\ldots,e_r\in\mathfrak o$ with
> $$
> e_i\equiv1\pmod{\mathfrak p_i},\qquad
> e_i\equiv0\pmod{\mathfrak p_j}\quad(j\ne i).
> $$
> Set $x=\sum_{i=1}^r e_ix_i\in\mathfrak a$. For each $i$, every term of $x-x_i$ belongs to $\mathfrak p_i\mathfrak a$. Hence
> $$
> x\equiv x_i\pmod{\mathfrak p_i\mathfrak a},
> \qquad x\notin\mathfrak p_i\mathfrak a.
> $$
> In particular $x\ne0$.
>
> ### 2. Construct the desired integral representative
> Define
> $$
> \mathfrak b=(x)\mathfrak a^{-1}.
> $$
> Because $x\in\mathfrak a$, the inclusion $(x)\subseteq\mathfrak a$ gives
> $$
> \mathfrak b\subseteq\mathfrak a\mathfrak a^{-1}
> =\mathfrak o.
> $$
> Thus $\mathfrak b$ is a nonzero integral ideal. Since $(x)$ is principal,
> $$
> [\mathfrak b]=[\mathfrak a]^{-1}=C.
> $$
> For each $i$, invertibility of $\mathfrak a$ gives the equivalence
> $$
> \mathfrak b\subseteq\mathfrak p_i
> \quad\Longleftrightarrow\quad
> (x)=\mathfrak b\mathfrak a\subseteq\mathfrak p_i\mathfrak a.
> $$
> The right-hand condition contradicts the choice of $x$. Therefore $\mathfrak b\not\subseteq\mathfrak p_i$ for every $i$.
>
> If $\mathfrak b+\mathfrak m$ were proper, it would lie in a maximal ideal $\mathfrak q$. Since $\mathfrak m\subseteq\mathfrak q$ and $\mathfrak q$ is prime, one of the $\mathfrak p_i$ would lie in $\mathfrak q$. Maximality forces $\mathfrak q=\mathfrak p_i$, contradicting $\mathfrak b\not\subseteq\mathfrak p_i$. Hence
> $$
> \mathfrak b+\mathfrak m=\mathfrak o.
> $$
> The same construction with any nonzero $x\in\mathfrak a$ handles $\mathfrak m=\mathfrak o$, as noted above. Thus every class has the required integral representative.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source verification:** The complete exercise was visually checked in [S4, Ch. I, §3, Exercise 8, printed p. 23, PDF p. 42]. There is no printed hint and no required source figure. The class-group notation and its definition were checked in [S4, Ch. I, §3, following Corollary (3.9), printed p. 22, PDF p. 41].
- **Source inputs:** Unique factorization of nonzero integral ideals is [S4, Ch. I, §3, Theorem (3.3), statement printed p. 18, PDF p. 37]; the Chinese remainder theorem is (3.6), printed p. 21 / PDF p. 40; invertibility of nonzero fractional ideals is (3.8), printed pp. 21–22 / PDF pp. 40–41. Maximality of nonzero primes is part of Definition (3.2), printed p. 18 / PDF p. 37.
- **Proof status and boundary:** The construction of $x$ and $\mathfrak b$ is an independent derivation using these source inputs. It applies to arbitrary Dedekind domains and does not use finiteness of the class group, a norm, or a number-field hypothesis. It gives a representative avoiding the prescribed finite set of prime divisors, rather than asserting that the representative is itself a prime ideal.
- **Routing:** Ring Theory is primary because the proof combines fractional-ideal inversion with Chinese remainder congruences. The class is preserved by multiplication by a nonzero principal fractional ideal.


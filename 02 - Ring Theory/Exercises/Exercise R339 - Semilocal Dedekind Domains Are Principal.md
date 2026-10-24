---
title: "Exercise R339: Semilocal Dedekind Domains Are Principal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 4, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R339: Semilocal Dedekind Domains Are Principal

## Problem Statement

> [!question] Neukirch I.3.4
> A Dedekind domain with a finite number of prime ideals is a principal ideal domain.
>
> **Original hint:** If $\mathfrak a=\mathfrak p_1^{\nu_1}\cdots\mathfrak p_r^{\nu_r}\ne0$ is an ideal, then choose elements $\pi_i\in\mathfrak p_i\setminus\mathfrak p_i^2$ and apply the Chinese remainder theorem for the cosets $\pi_i^{\nu_i}\bmod\mathfrak p_i^{\nu_i+1}$.

## Hints

> [!hint]- Hint 1: Include every nonzero prime ideal
> List all the nonzero prime ideals, not just the prime divisors of $\mathfrak a$. Write the exponent of a prime absent from $\mathfrak a$ as $0$. The desired generator must avoid each of those primes.

> [!hint]- Hint 2: Prescribe exact prime exponents
> Invertibility shows $\mathfrak p_i^2\ne\mathfrak p_i$. Choose $\pi_i\in\mathfrak p_i\setminus\mathfrak p_i^2$; then $\pi_i^{\nu_i}\in\mathfrak p_i^{\nu_i}\setminus\mathfrak p_i^{\nu_i+1}$. When $\nu_i=0$, this is the residue $1$ modulo $\mathfrak p_i$.

> [!hint]- Hint 3: Compare the principal ideal's factorization
> The ideals $\mathfrak p_i^{\nu_i+1}$ are pairwise comaximal. Choose a single element with the prescribed residues. Its principal ideal has exactly the same prime exponents as $\mathfrak a$ at every nonzero prime ideal.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write $R$ for the Dedekind domain. The zero ideal is $(0)$ and the unit ideal is $(1)$. By unique prime-ideal factorization, if $R$ has no nonzero prime ideals, it has no nonzero proper ideals, so the conclusion already holds. We may therefore list all its nonzero prime ideals as $\mathfrak p_1,\ldots,\mathfrak p_r$, with $r\ge1$.
>
> Let $\mathfrak a$ be any nonzero integral ideal. Its factorization has the form
> $$
> \mathfrak a=\prod_{i=1}^r\mathfrak p_i^{\nu_i},\qquad \nu_i\ge0.
> $$
> Every prime in the list is included, even when its exponent is $0$.
>
> **1. Choose elements of exact exponent one.** Nonzero ideals in a Dedekind domain are invertible. If $\mathfrak p_i^2=\mathfrak p_i$, multiplying by $\mathfrak p_i^{-1}$ would give $\mathfrak p_i=R$, a contradiction. Choose
> $$
> \pi_i\in\mathfrak p_i\setminus\mathfrak p_i^2.
> $$
> For a nonzero element $y$, let $v_i(y)$ denote the exponent of $\mathfrak p_i$ in the ideal factorization of $(y)$. Ideal containment reverses divisibility, so $\pi_i\in\mathfrak p_i\setminus\mathfrak p_i^2$ means $v_i(\pi_i)=1$. Multiplication of principal ideals gives $v_i(\pi_i^{\nu_i})=\nu_i$, including $\nu_i=0$.
>
> **2. Apply the Chinese remainder theorem to all the primes.** Distinct nonzero prime ideals are maximal, hence comaximal. Their positive powers remain comaximal: if $u+v=1$ with $u\in\mathfrak p_i$ and $v\in\mathfrak p_j$, expanding $(u+v)^{s+t-1}$ shows $1\in\mathfrak p_i^s+\mathfrak p_j^t$ for $s,t\ge1$.
>
> Therefore the Chinese remainder theorem supplies $x\in R$ such that
> $$
> x\equiv\pi_i^{\nu_i}\pmod{\mathfrak p_i^{\nu_i+1}}
> \qquad(1\le i\le r).
> $$
> The chosen residue lies in $\mathfrak p_i^{\nu_i}$ but not in $\mathfrak p_i^{\nu_i+1}$. Adding an element of $\mathfrak p_i^{\nu_i+1}$ preserves these two membership conditions. Thus
> $$
> x\in\mathfrak p_i^{\nu_i}\setminus\mathfrak p_i^{\nu_i+1},
> \qquad v_i(x)=\nu_i.
> $$
> In particular $x\ne0$. At a prime with $\nu_i=0$, the congruence is $x\equiv1\pmod{\mathfrak p_i}$, so that prime does not divide $(x)$.
>
> **3. Identify the generated ideal.** There are no nonzero prime ideals outside the list. Hence $(x)$ and $\mathfrak a$ have identical prime factorizations, and
> $$
> (x)=\prod_{i=1}^r\mathfrak p_i^{\nu_i}=\mathfrak a.
> $$
> Every ideal of $R$ is principal. Since $R$ is an integral domain, it is a principal ideal domain.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The problem and original hint were visually checked at [S4, Ch. I, §3, Exercise 4, printed p. 23, PDF p. 42]. The exercise appears above the §4 body heading, despite the §4 running header. No source figure is needed. The complete proof above is independently derived from the printed hint.
- **Source inputs:** Dedekind domains are defined in Definition (3.2), printed p. 18 / PDF p. 37. Unique factorization is Theorem (3.3), printed pp. 18–20 / PDF pp. 37–39; the Chinese remainder theorem is (3.6), printed p. 21 / PDF p. 40; ideal invertibility is Proposition (3.8), printed pp. 21–22 / PDF pp. 40–41. These bounded original-page images were checked. The proof expands the coprime-powers argument and the exact-exponent comparison.
- **Method boundary:** The CRT conditions must include primes whose exponent in $\mathfrak a$ is $0$. Constraining only primes dividing $\mathfrak a$ would not exclude additional prime factors of the chosen element.
- **Terminology and routing:** A semilocal ring has finitely many maximal ideals. In a Dedekind domain every nonzero prime is maximal, and a field also satisfies the conclusion. The primary tools are ideal factorization, ideal inverses, and the Chinese remainder theorem, so Ring Theory is the destination.

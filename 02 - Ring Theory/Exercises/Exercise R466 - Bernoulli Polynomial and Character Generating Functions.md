---
title: "Exercise R466: Bernoulli Polynomial and Character Generating Functions"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.7, Exercise 4.7.2, printed p. 137, PDF p. 151"
source_refs:
  - "S7/ch-4/sec-7/ex-2"
created: 2026-10-28
---

# Exercise R466: Bernoulli Polynomial and Character Generating Functions

## Problem Statement

> [!question] Original Exercise 4.7.2
> (a) Establish formula (4.28).
>
> (b) Establish formula (4.30).
>
> For $B_k(X)=\sum_{j=0}^k\binom kjB_jX^{k-j}$, formula (4.28) is
> $$
> \frac{te^{tX}}{e^t-1}=\sum_{k\ge0}B_k(X)\frac{t^k}{k!}.
> $$
> For a positive integer $u$ and any function $\psi:\mathbb Z/u\mathbb Z\to\mathbb C$, define $B_{k,\psi}$ by $\sum_{c=0}^{u-1}\psi(c)te^{ct}/(e^{ut}-1)=\sum_{k\ge0}B_{k,\psi}t^k/k!$. Formula (4.30) is
> $$
> B_{k,\psi}=u^{k-1}\sum_{c=0}^{u-1}\psi(c)B_k(c/u).
> $$

## Hints

> [!hint]- Hint 1
> Multiply the exponential series for $e^{tX}$ by the Bernoulli-number series.

> [!hint]- Hint 2
> In (4.28), replace $t$ by $ut$ and $X$ by $c/u$, then divide by $u$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** The coefficient of $t^k$ in
> $$
> \left(\sum_{j\ge0}B_j\frac{t^j}{j!}\right)\left(\sum_{r\ge0}X^r\frac{t^r}{r!}\right)
> $$
> is $\sum_{j=0}^kB_jX^{k-j}/[j!(k-j)!]=B_k(X)/k!$. The product on the left is $te^{tX}/(e^t-1)$ by definition of the Bernoulli numbers, proving (4.28).
>
> **(b).** Substituting $ut$ and $c/u$ gives
> $$
> \frac{te^{ct}}{e^{ut}-1}=\frac1u\sum_{k\ge0}B_k(c/u)\frac{(ut)^k}{k!}=\sum_{k\ge0}u^{k-1}B_k(c/u)\frac{t^k}{k!}.
> $$
> Multiply by $\psi(c)$ and take the finite sum over $c$. Comparing coefficients with the defining generating function proves (4.30). The calculation uses no multiplicativity or nonvanishing of $\psi$, so it applies to every function on the residue classes exactly as stated. In particular at $k=0$ it gives $B_{0,\psi}=u^{-1}\sum_c\psi(c)$, consistent with the constant term of the generating function.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.7.2, printed p. 137 / PDF p. 151]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Equations (4.28)–(4.30) and the convention that $\psi$ need not be a character are on printed p.135/PDF p.149. The proof is formal, and also analytic for $t$ sufficiently near zero after removing the common simple zero of numerator and denominator.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

---
title: "Exercise MF10: Partition Function and Ramanujan Congruences"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Ono, The Web of Modularity"
created: 2026-01-19
---

# Exercise MF10: Partition Function and Ramanujan Congruences

## Problem Statement

> [!question] Problem
> The partition function $p(n)$ counts the number of ways to write $n$ as a sum of positive integers. It has generating function:
> $$\sum_{n=0}^{\infty} p(n) q^n = \prod_{n=1}^{\infty} \frac{1}{1-q^n} = \frac{1}{\eta(\tau)/q^{1/24}}$$
>
> **(a)** Compute $p(n)$ for $n = 0, 1, 2, \ldots, 10$.
>
> **(b)** Verify Ramanujan's congruence $p(5n + 4) \equiv 0 \pmod{5}$ for $n = 0, 1, 2, 3$.
>
> **(c)** Using the fact that $\eta(\tau)^5 / \eta(5\tau)$ is a modular form for $\Gamma_0(5)$, explain why Ramanujan's congruence holds for all $n$.
>
> **(d)** State (without proof) the other two Ramanujan congruences and find examples verifying each.

## Hints

> [!hint]- Hint 1
> For part (a), use the recurrence or direct enumeration. The first values are $p(0) = 1, p(1) = 1, p(2) = 2, p(3) = 3, p(4) = 5, \ldots$

> [!hint]- Hint 2
> For part (b), compute $p(4), p(9), p(14), p(19)$ and check divisibility by 5.

> [!hint]- Hint 3
> For part (c), the key is that the generating function $\sum p(5n+4)q^n$ can be expressed in terms of this eta quotient, which has special vanishing properties.

## Solution

> [!success]- Solution
> **(a)** Computing $p(n)$:
>
> | $n$ | Partitions | $p(n)$ |
> |-----|------------|--------|
> | 0 | (empty) | 1 |
> | 1 | 1 | 1 |
> | 2 | 2, 1+1 | 2 |
> | 3 | 3, 2+1, 1+1+1 | 3 |
> | 4 | 4, 3+1, 2+2, 2+1+1, 1+1+1+1 | 5 |
> | 5 | 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, 1^5 | 7 |
> | 6 | ... | 11 |
> | 7 | ... | 15 |
> | 8 | ... | 22 |
> | 9 | ... | 30 |
> | 10 | ... | 42 |
>
> **(b)** Verifying $p(5n + 4) \equiv 0 \pmod{5}$:
>
> - $p(4) = 5 \equiv 0 \pmod 5$ ✓
> - $p(9) = 30 = 6 \times 5 \equiv 0 \pmod 5$ ✓
> - $p(14) = 135 = 27 \times 5 \equiv 0 \pmod 5$ ✓
> - $p(19) = 490 = 98 \times 5 \equiv 0 \pmod 5$ ✓
>
> **(c)** Modular forms proof sketch:
>
> Consider the generating function for $p(5n+4)$:
> $$\sum_{n=0}^{\infty} p(5n+4) q^n$$
>
> Ramanujan showed this equals $5 \cdot \frac{\eta(5\tau)^5}{\eta(\tau)^6}$ (up to normalization).
>
> The key insight is that $\eta(\tau)^5/\eta(5\tau)$ is a modular form for $\Gamma_0(5)$, and when we extract the coefficients $p(5n+4)$, we get:
>
> $$\sum_{n=0}^{\infty} p(5n+4) q^{n+1} = 5 \cdot \frac{\prod_{n=1}^{\infty}(1-q^{5n})^5}{\prod_{n=1}^{\infty}(1-q^n)^6}$$
>
> Since the RHS has a factor of 5, all coefficients $p(5n+4)$ are divisible by 5.
>
> **(d)** The other Ramanujan congruences:
>
> **Congruence mod 7:** $p(7n + 5) \equiv 0 \pmod{7}$
> - $p(5) = 7 \equiv 0 \pmod 7$ ✓
> - $p(12) = 77 = 11 \times 7 \equiv 0 \pmod 7$ ✓
> - $p(19) = 490 = 70 \times 7 \equiv 0 \pmod 7$ ✓
>
> **Congruence mod 11:** $p(11n + 6) \equiv 0 \pmod{11}$
> - $p(6) = 11 \equiv 0 \pmod{11}$ ✓
> - $p(17) = 297 = 27 \times 11 \equiv 0 \pmod{11}$ ✓
> - $p(28) = 3718 = 338 \times 11 \equiv 0 \pmod{11}$ ✓
>
> **Summary of Ramanujan's congruences:**
> $$\boxed{p(5n+4) \equiv 0 \pmod 5}$$
> $$\boxed{p(7n+5) \equiv 0 \pmod 7}$$
> $$\boxed{p(11n+6) \equiv 0 \pmod{11}}$$
>
> These are the only "simple" congruences of this form (by work of Ahlgren and Boylan).

## Related Concepts

- [[07 - Modular Forms/Concepts/Partition Function|Partition Function]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

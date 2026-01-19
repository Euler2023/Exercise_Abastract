---
title: "Exercise MF6: Theta Series and Sums of Squares"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Koblitz, Introduction to Elliptic Curves and Modular Forms"
created: 2026-01-19
---

# Exercise MF6: Theta Series and Sums of Squares

## Problem Statement

> [!question] Problem
> The Jacobi theta function is $\theta(\tau) = \sum_{n \in \mathbb{Z}} q^{n^2}$ where $q = e^{\pi i \tau}$.
>
> **(a)** Write out the first several terms of $\theta(\tau)$ up to $q^9$.
>
> **(b)** Compute $\theta(\tau)^2$ up to $q^5$ and interpret the coefficients in terms of $r_2(n)$, the number of ways to write $n$ as a sum of two squares.
>
> **(c)** Verify Jacobi's formula $r_2(n) = 4(d_1(n) - d_3(n))$ for $n = 1, 2, 3, 4, 5$, where $d_1(n)$ (resp. $d_3(n)$) is the number of divisors of $n$ congruent to 1 (resp. 3) modulo 4.
>
> **(d)** Why can't 3 be written as a sum of two squares?

## Hints

> [!hint]- Hint 1
> For part (a), remember $\theta = \sum_{n=-\infty}^{\infty} q^{n^2} = 1 + 2q + 2q^4 + 2q^9 + \cdots$ (the coefficient is 2 for $n^2 > 0$ since $(-n)^2 = n^2$).

> [!hint]- Hint 2
> For part (b), when you multiply $\theta(\tau)^2$, the coefficient of $q^n$ counts pairs $(a,b)$ with $a^2 + b^2 = n$, including signs.

> [!hint]- Hint 3
> For part (c), list all divisors of $n$ and check which are $\equiv 1 \pmod 4$ vs $\equiv 3 \pmod 4$.

## Solution

> [!success]- Solution
> **(a)** $\theta(\tau) = \sum_{n \in \mathbb{Z}} q^{n^2}$:
> - $n = 0$: $q^0 = 1$
> - $n = \pm 1$: $2q^1$
> - $n = \pm 2$: $2q^4$
> - $n = \pm 3$: $2q^9$
>
> $$\theta(\tau) = 1 + 2q + 2q^4 + 2q^9 + \cdots$$
>
> **(b)** Computing $\theta^2 = (1 + 2q + 2q^4 + \cdots)^2$:
> - $q^0$: $1^2 = 1$
> - $q^1$: $2 \cdot 1 \cdot 2 = 4$ (from $0^2 + 1^2$ with signs)
> - $q^2$: $2 \cdot 2 \cdot 2 = 8$... wait, let's be careful.
>
> Actually, $\theta^2 = \sum_{a,b \in \mathbb{Z}} q^{a^2 + b^2}$, so coefficient of $q^n$ is $r_2(n)$:
>
> - $r_2(0) = 1$: only $(0,0)$
> - $r_2(1) = 4$: $(\pm 1, 0), (0, \pm 1)$
> - $r_2(2) = 4$: $(\pm 1, \pm 1)$ with same signs
> - $r_2(3) = 0$: no solutions
> - $r_2(4) = 4$: $(\pm 2, 0), (0, \pm 2)$
> - $r_2(5) = 8$: $(\pm 1, \pm 2), (\pm 2, \pm 1)$
>
> $$\theta^2 = 1 + 4q + 4q^2 + 0 \cdot q^3 + 4q^4 + 8q^5 + \cdots$$
>
> **(c)** Verifying $r_2(n) = 4(d_1(n) - d_3(n))$:
>
> | $n$ | Divisors | $d_1(n)$ | $d_3(n)$ | $4(d_1 - d_3)$ | $r_2(n)$ |
> |-----|----------|----------|----------|----------------|----------|
> | 1 | 1 | 1 | 0 | 4 | 4 ✓ |
> | 2 | 1, 2 | 1 | 0 | 4 | 4 ✓ |
> | 3 | 1, 3 | 1 | 1 | 0 | 0 ✓ |
> | 4 | 1, 2, 4 | 1 | 0 | 4 | 4 ✓ |
> | 5 | 1, 5 | 2 | 0 | 8 | 8 ✓ |
>
> **(d)** For $n = 3$: $d_1(3) = 1$ (just 1) and $d_3(3) = 1$ (just 3).
>
> So $r_2(3) = 4(1 - 1) = 0$.
>
> Alternatively: squares mod 4 are 0 or 1. So $a^2 + b^2 \equiv 0, 1, \text{ or } 2 \pmod 4$.
> But $3 \equiv 3 \pmod 4$, so 3 cannot be a sum of two squares.

## Related Concepts

- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Quadratic Forms|Quadratic Forms and Theta Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

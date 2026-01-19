---
title: "Exercise MF3: The Discriminant Function"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Apostol, Modular Functions and Dirichlet Series"
created: 2026-01-19
---

# Exercise MF3: The Discriminant Function

## Problem Statement

> [!question] Problem
> The modular discriminant is defined as:
> $$\Delta(\tau) = q \prod_{n=1}^{\infty}(1-q^n)^{24}$$
> where $q = e^{2\pi i \tau}$.
>
> **(a)** Using the identity $\Delta = \frac{E_4^3 - E_6^2}{1728}$, verify that $\Delta$ has weight 12.
>
> **(b)** Expand $\Delta(\tau)$ to find the first four non-zero Fourier coefficients $\tau(n)$ for $n = 1, 2, 3, 4$ (the Ramanujan tau function).
>
> **(c)** Verify that $\tau(2)\tau(3) = \tau(6)$, illustrating the multiplicativity of $\tau(n)$ for coprime arguments.

## Hints

> [!hint]- Hint 1
> For part (a), recall that $E_4$ has weight 4 and $E_6$ has weight 6. What is the weight of $E_4^3$? Of $E_6^2$?

> [!hint]- Hint 2
> For part (b), expand the product $(1-q)(1-q^2)(1-q^3)\cdots$ up to $q^4$ terms, then raise to the 24th power (you can use the binomial expansion for small terms).

> [!hint]- Hint 3
> Alternatively for (b), use $E_4 = 1 + 240q + 2160q^2 + \cdots$ and $E_6 = 1 - 504q - 16632q^2 + \cdots$ and compute $E_4^3 - E_6^2$.

## Solution

> [!success]- Solution
> **(a)** Weight calculation:
> - $E_4$ has weight 4, so $E_4^3$ has weight $3 \times 4 = 12$
> - $E_6$ has weight 6, so $E_6^2$ has weight $2 \times 6 = 12$
> - Therefore $E_4^3 - E_6^2$ has weight 12
> - Dividing by the constant 1728 doesn't change the weight
> - Thus $\Delta$ has **weight 12** ✓
>
> **(b)** Computing Fourier coefficients:
>
> Using $E_4 = 1 + 240q + 2160q^2 + 6720q^3 + 17520q^4 + \cdots$
> and $E_6 = 1 - 504q - 16632q^2 - 122976q^3 - \cdots$
>
> $E_4^3 = (1 + 240q + \cdots)^3$
> $= 1 + 3(240q) + 3(240q)^2 + 3(2160q^2) + \cdots$
> $= 1 + 720q + (172800 + 6480)q^2 + \cdots$
> $= 1 + 720q + 179280q^2 + \cdots$
>
> $E_6^2 = (1 - 504q - \cdots)^2$
> $= 1 - 1008q + (504^2 - 2 \cdot 16632)q^2 + \cdots$
> $= 1 - 1008q + (254016 - 33264)q^2 + \cdots$
> $= 1 - 1008q + 220752q^2 + \cdots$
>
> $E_4^3 - E_6^2 = 1728q + (179280 - 220752 + \text{correction})q^2 + \cdots$
>
> After careful computation:
> $$\Delta = q - 24q^2 + 252q^3 - 1472q^4 + \cdots$$
>
> So: $\tau(1) = 1$, $\tau(2) = -24$, $\tau(3) = 252$, $\tau(4) = -1472$
>
> **(c)** Verifying multiplicativity:
> - $\tau(2) \cdot \tau(3) = (-24)(252) = -6048$
> - From tables or computation: $\tau(6) = -6048$ ✓
>
> This confirms $\tau(mn) = \tau(m)\tau(n)$ when $\gcd(m,n) = 1$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]

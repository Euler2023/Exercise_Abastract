---
title: "Exercise MF8: L-functions and Functional Equations"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Iwaniec, Topics in Classical Automorphic Forms"
created: 2026-01-19
---

# Exercise MF8: L-functions and Functional Equations

## Problem Statement

> [!question] Problem
> For a cusp form $f(\tau) = \sum_{n=1}^{\infty} a_n q^n \in S_k$, the L-function is:
> $$L(f, s) = \sum_{n=1}^{\infty} \frac{a_n}{n^s}$$
> and the completed L-function is:
> $$\Lambda(f, s) = (2\pi)^{-s} \Gamma(s) L(f, s)$$
>
> **(a)** Show that for $\text{Re}(s) > k/2 + 1$, the series $L(f, s)$ converges absolutely. (Use that $|a_n| \leq C n^{(k-1)/2 + \epsilon}$ for cusp forms.)
>
> **(b)** Using the Mellin transform $\Lambda(f, s) = \int_0^{\infty} f(iy) y^{s-1} dy$, show that $\Lambda(f, s)$ satisfies the functional equation:
> $$\Lambda(f, s) = i^k \Lambda(f, k-s)$$
>
> **(c)** For the Ramanujan $\Delta$ function (weight 12), what does the functional equation tell us about $L(\Delta, 6)$?
>
> **(d)** Show that if $f$ is a normalized Hecke eigenform, then $L(f, s)$ has an Euler product.

## Hints

> [!hint]- Hint 1
> For part (a), use the bound and compare with $\sum n^{-\sigma + (k-1)/2 + \epsilon}$ which converges for $\sigma > k/2 + 1/2 + \epsilon$.

> [!hint]- Hint 2
> For part (b), use the modularity $f(-1/\tau) = \tau^k f(\tau)$ and substitute $y \mapsto 1/y$ in the integral.

> [!hint]- Hint 3
> For part (c), the functional equation relates $s = 6$ to $s = 12 - 6 = 6$. What happens when $s = k/2$?

> [!hint]- Hint 4
> For part (d), use that Hecke eigenforms have multiplicative coefficients: $a_{mn} = a_m a_n$ for $\gcd(m,n) = 1$.

## Solution

> [!success]- Solution
> **(a)** Convergence of $L(f, s)$:
>
> By the Ramanujan-Petersson conjecture (proved by Deligne), $|a_n| \leq d(n) n^{(k-1)/2}$ where $d(n)$ is the divisor function.
>
> For any $\epsilon > 0$, $d(n) \leq C_\epsilon n^\epsilon$, so $|a_n| \leq C n^{(k-1)/2 + \epsilon}$.
>
> Thus $|L(f, s)| \leq C \sum_{n=1}^{\infty} n^{(k-1)/2 + \epsilon - \sigma}$ where $s = \sigma + it$.
>
> This converges when $(k-1)/2 + \epsilon - \sigma < -1$, i.e., $\sigma > k/2 + 1/2 + \epsilon$.
>
> Taking $\epsilon \to 0$, we get absolute convergence for $\text{Re}(s) > k/2 + 1/2$.
>
> **(b)** Functional equation via Mellin transform:
>
> $$\Lambda(f, s) = \int_0^{\infty} f(iy) y^{s-1} dy = \int_0^{\infty} f(iy) y^s \frac{dy}{y}$$
>
> Split: $\int_0^{\infty} = \int_0^1 + \int_1^{\infty}$
>
> For $\int_0^1$, substitute $y \mapsto 1/y$:
> $$\int_0^1 f(iy) y^{s-1} dy = \int_{\infty}^1 f(i/y) y^{-s-1} (-dy) = \int_1^{\infty} f(i/y) y^{-s-1} dy$$
>
> Using $f(i/y) = f(-1/(iy)) = (iy)^k f(iy) = i^k y^k f(iy)$:
> $$= i^k \int_1^{\infty} y^k f(iy) y^{-s-1} dy = i^k \int_1^{\infty} f(iy) y^{k-s-1} dy$$
>
> Therefore:
> $$\Lambda(f, s) = \int_1^{\infty} f(iy) y^{s-1} dy + i^k \int_1^{\infty} f(iy) y^{k-s-1} dy$$
>
> The RHS is symmetric under $s \leftrightarrow k-s$ (up to $i^k$), so $\Lambda(f, s) = i^k \Lambda(f, k-s)$.
>
> **(c)** For $\Delta$ (weight 12), at $s = 6$:
>
> $\Lambda(\Delta, 6) = i^{12} \Lambda(\Delta, 12-6) = \Lambda(\Delta, 6)$
>
> This is consistent (no extra information). But for $s = 6$, we're at the "central point" of the functional equation, which is important for BSD-type conjectures.
>
> **(d)** Euler product:
>
> For a normalized eigenform with $a_1 = 1$ and multiplicative $a_n$:
> $$L(f, s) = \sum_{n=1}^{\infty} \frac{a_n}{n^s} = \prod_p \sum_{j=0}^{\infty} \frac{a_{p^j}}{p^{js}}$$
>
> Using $a_{p^{j+1}} = a_p a_{p^j} - p^{k-1} a_{p^{j-1}}$, the local factor is:
> $$\sum_{j=0}^{\infty} \frac{a_{p^j}}{p^{js}} = \frac{1}{1 - a_p p^{-s} + p^{k-1-2s}}$$
>
> So: $L(f, s) = \prod_p \frac{1}{1 - a_p p^{-s} + p^{k-1-2s}}$

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]

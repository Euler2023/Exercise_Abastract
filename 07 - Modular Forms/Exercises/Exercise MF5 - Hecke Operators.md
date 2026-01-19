---
title: "Exercise MF5: Hecke Operators on q-Expansions"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Diamond & Shurman, A First Course in Modular Forms"
created: 2026-01-19
---

# Exercise MF5: Hecke Operators on q-Expansions

## Problem Statement

> [!question] Problem
> Let $f(\tau) = \sum_{n=0}^{\infty} a_n q^n$ be a modular form of weight $k$. The Hecke operator $T_p$ (for prime $p$) acts on Fourier coefficients by:
> $$(T_p f)(\tau) = \sum_{n=0}^{\infty} \left( a_{pn} + p^{k-1} a_{n/p} \right) q^n$$
> where $a_{n/p} = 0$ if $p \nmid n$.
>
> **(a)** Compute $T_2(E_4)$ and verify that $E_4$ is an eigenform for $T_2$. What is the eigenvalue?
>
> **(b)** Compute $T_2(\Delta)$ and verify that $\Delta$ is an eigenform for $T_2$. What is the eigenvalue?
>
> **(c)** Show that if $f$ is a normalized eigenform (meaning $a_1 = 1$ and $T_n f = \lambda_n f$), then $\lambda_n = a_n$.
>
> **(d)** Use part (c) to explain why the Ramanujan tau function satisfies $\tau(mn) = \tau(m)\tau(n)$ when $\gcd(m,n) = 1$.

## Hints

> [!hint]- Hint 1
> For $E_4 = 1 + 240q + 2160q^2 + \cdots$, use the formula to find the coefficient of $q^n$ in $T_2(E_4)$.

> [!hint]- Hint 2
> For part (b), $\Delta = q - 24q^2 + 252q^3 - 1472q^4 + \cdots$. Note $a_0 = 0$ for $\Delta$.

> [!hint]- Hint 3
> For part (c), compare the coefficient of $q$ in $T_n f$ and $\lambda_n f$.

> [!hint]- Hint 4
> For part (d), use that Hecke operators commute: $T_m T_n = T_{mn}$ when $\gcd(m,n) = 1$.

## Solution

> [!success]- Solution
> **(a)** For $E_4 = 1 + 240q + 2160q^2 + 6720q^3 + 17520q^4 + \cdots$ (weight $k = 4$):
>
> $(T_2 E_4)$ has coefficient of $q^n$ equal to $a_{2n} + 2^3 a_{n/2}$.
>
> - Coeff of $q^0$: $a_0 + 8 \cdot a_0 = 1 + 8 = 9$
> - Coeff of $q^1$: $a_2 + 8 \cdot 0 = 2160$
> - Coeff of $q^2$: $a_4 + 8 \cdot a_1 = 17520 + 8(240) = 17520 + 1920 = 19440$
>
> Now $\sigma_3(2) = 1 + 8 = 9$, so eigenvalue should be $9$.
> Check: $9 \cdot E_4 = 9(1 + 240q + 2160q^2 + \cdots) = 9 + 2160q + 19440q^2 + \cdots$ ✓
>
> **Eigenvalue: $\sigma_3(2) = 9$**
>
> **(b)** For $\Delta = q - 24q^2 + 252q^3 - 1472q^4 + 4830q^5 - 6048q^6 + \cdots$ (weight $k = 12$):
>
> $(T_2 \Delta)$ has coefficient of $q^n$ equal to $a_{2n} + 2^{11} a_{n/2}$.
>
> - Coeff of $q^1$: $a_2 + 2048 \cdot 0 = -24$
> - Coeff of $q^2$: $a_4 + 2048 \cdot a_1 = -1472 + 2048 = 576$...
>
> Wait, let me recalculate. For $\Delta$ to be an eigenform with eigenvalue $\tau(2) = -24$:
> $-24 \cdot \Delta = -24q + 576q^2 - 6048q^3 + \cdots$
>
> Check $T_2 \Delta$:
> - $q^1$: $\tau(2) = -24$ ✓
> - $q^2$: $\tau(4) + 2048 \cdot \tau(1) = -1472 + 2048 = 576 = -24 \cdot (-24)$ ✓
>
> **Eigenvalue: $\tau(2) = -24$**
>
> **(c)** If $T_n f = \lambda_n f$ where $f = \sum a_m q^m$ with $a_1 = 1$:
>
> The coefficient of $q^1$ in $T_n f$ is $a_n + p^{k-1} \cdot 0 = a_n$ (when $n$ doesn't divide 1).
> The coefficient of $q^1$ in $\lambda_n f$ is $\lambda_n \cdot a_1 = \lambda_n$.
>
> Therefore $\lambda_n = a_n$.
>
> **(d)** Since $\Delta$ is a normalized eigenform:
> - $T_m \Delta = \tau(m) \Delta$ and $T_n \Delta = \tau(n) \Delta$
> - When $\gcd(m,n) = 1$: $T_{mn} = T_m T_n$
> - So $T_{mn} \Delta = T_m T_n \Delta = T_m(\tau(n) \Delta) = \tau(n) T_m \Delta = \tau(n)\tau(m) \Delta$
> - But also $T_{mn} \Delta = \tau(mn) \Delta$
> - Therefore $\tau(mn) = \tau(m)\tau(n)$ when $\gcd(m,n) = 1$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

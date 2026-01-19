---
title: L-functions
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
created: 2026-01-19
---

# L-functions

## Definition

> [!info] Definition (L-function of a Modular Form)
> For a [[07 - Modular Forms/Concepts/Modular Forms Definition|modular form]] $f(\tau) = \sum_{n=1}^{\infty} a_n q^n \in S_k$, the **L-function** is:
> $$L(f, s) = \sum_{n=1}^{\infty} \frac{a_n}{n^s}$$
> This converges for $\text{Re}(s)$ sufficiently large.

## Mellin Transform

> [!abstract] Theorem (Mellin Transform)
> $$\Lambda(f, s) = (2\pi)^{-s} \Gamma(s) L(f, s) = \int_0^{\infty} f(iy) y^{s-1} dy$$

This integral representation connects the L-function to the modular form directly.

## Analytic Continuation

> [!abstract] Theorem (Hecke)
> For $f \in S_k$, the function $L(f, s)$ has:
> 1. Analytic continuation to all of $\mathbb{C}$
> 2. Functional equation relating $s$ and $k-s$

## Functional Equation

> [!abstract] Theorem (Functional Equation)
> Define the completed L-function:
> $$\Lambda(f, s) = (2\pi)^{-s} \Gamma(s) L(f, s)$$
> Then:
> $$\Lambda(f, s) = (-1)^{k/2} \Lambda(f, k-s)$$

## Euler Product

> [!abstract] Theorem (Euler Product for Eigenforms)
> If $f$ is a normalized [[07 - Modular Forms/Concepts/Hecke Operators|Hecke eigenform]], then:
> $$L(f, s) = \prod_p \frac{1}{1 - a_p p^{-s} + p^{k-1-2s}}$$
> where the product is over all primes $p$.

This factorization is key to the arithmetic significance of L-functions.

## Example: L-function of $\Delta$

> [!example] Ramanujan's L-function
> For $\Delta(\tau) = \sum \tau(n) q^n$:
> $$L(\Delta, s) = \sum_{n=1}^{\infty} \frac{\tau(n)}{n^s} = \prod_p \frac{1}{1 - \tau(p)p^{-s} + p^{11-2s}}$$
>
> Functional equation: $\Lambda(\Delta, s) = \Lambda(\Delta, 12-s)$

## Special Values

> [!tip] Critical Values
> For $f \in S_k$, the values $L(f, j)$ for $1 \leq j \leq k-1$ are called **critical values**.
>
> These often have arithmetic significance (periods, algebraicity).

> [!abstract] Theorem (Manin-Shimura)
> For a normalized eigenform $f \in S_k$ with algebraic coefficients:
> $$\frac{L(f, j)}{\pi^j \Omega_f^\pm} \in \bar{\mathbb{Q}}$$
> for appropriate periods $\Omega_f^\pm$.

## L-functions of Elliptic Curves

> [!info] Definition
> For an elliptic curve $E/\mathbb{Q}$:
> $$L(E, s) = \prod_{p \nmid N} \frac{1}{1 - a_p p^{-s} + p^{1-2s}} \cdot \prod_{p | N} (\text{local factors})$$
> where $a_p = p + 1 - \#E(\mathbb{F}_p)$.

> [!abstract] Modularity Theorem
> For every elliptic curve $E/\mathbb{Q}$, there exists $f \in S_2(\Gamma_0(N))$ with $L(E, s) = L(f, s)$.

## Birch and Swinnerton-Dyer Conjecture

> [!warning] Millennium Problem
> The **BSD Conjecture** relates:
> $$\text{ord}_{s=1} L(E, s) = \text{rank}(E(\mathbb{Q}))$$
> and gives a formula for the leading coefficient.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]

---
title: Theta Functions
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Theta Functions

## Definition

> [!info] Definition (Jacobi Theta Function)
> The **Jacobi theta function** is:
> $$\theta(\tau) = \sum_{n=-\infty}^{\infty} q^{n^2} = 1 + 2\sum_{n=1}^{\infty} q^{n^2}$$
> where $q = e^{\pi i \tau}$ (note: sometimes $q = e^{2\pi i \tau}$).

> [!info] Definition (General Theta Function)
> For a positive definite quadratic form $Q$ on $\mathbb{Z}^n$:
> $$\theta_Q(\tau) = \sum_{v \in \mathbb{Z}^n} q^{Q(v)}$$

## Jacobi's Four Theta Functions

$$\theta_1(\tau) = \sum_{n=-\infty}^{\infty} (-1)^n q^{(n+1/2)^2}$$
$$\theta_2(\tau) = \sum_{n=-\infty}^{\infty} q^{(n+1/2)^2}$$
$$\theta_3(\tau) = \sum_{n=-\infty}^{\infty} q^{n^2}$$
$$\theta_4(\tau) = \sum_{n=-\infty}^{\infty} (-1)^n q^{n^2}$$

## Modular Properties

> [!abstract] Theorem (Transformation)
> $$\theta(-1/\tau) = \sqrt{-i\tau} \cdot \theta(\tau)$$
> $$\theta(\tau + 2) = \theta(\tau)$$

The theta function is a modular form of weight $1/2$ for a certain congruence subgroup.

## Jacobi Triple Product

> [!abstract] Theorem (Jacobi Triple Product)
> $$\sum_{n=-\infty}^{\infty} z^n q^{n^2} = \prod_{n=1}^{\infty} (1-q^{2n})(1+zq^{2n-1})(1+z^{-1}q^{2n-1})$$

This connects theta functions to infinite products and the [[07 - Modular Forms/Concepts/Eta Function|eta function]].

## Applications to Number Theory

### Sums of Squares

> [!abstract] Theorem (Lagrange)
> Every positive integer is a sum of four squares.
>
> **Proof idea**: Study $\theta(\tau)^4 = \sum_{n=0}^{\infty} r_4(n) q^n$ where $r_4(n)$ counts representations as sum of 4 squares.

> [!abstract] Theorem (Jacobi)
> $$r_4(n) = 8 \sum_{d|n, 4 \nmid d} d$$

### Two Squares

$$\theta(\tau)^2 = \sum_{n=0}^{\infty} r_2(n) q^n$$
$$r_2(n) = 4 \sum_{d|n} \chi_{-4}(d) = 4(d_1(n) - d_3(n))$$
where $d_i(n)$ counts divisors congruent to $i \pmod 4$.

## Theta Functions and Quadratic Forms

> [!info] Definition (Theta Series of Lattice)
> For a lattice $\Lambda$ with quadratic form $Q$:
> $$\Theta_\Lambda(\tau) = \sum_{v \in \Lambda} q^{Q(v)}$$

> [!abstract] Theorem
> If $Q$ is a positive definite quadratic form of rank $n$ and level $N$, then $\Theta_Q$ is a modular form of weight $n/2$ for $\Gamma_0(N)$ with character.

## Examples

> [!example] Example 1: $\theta^2$ and sums of two squares
> $\theta(\tau)^2 = 1 + 4q + 4q^2 + 4q^4 + 8q^5 + \cdots$
> Coefficients count ways to write $n$ as sum of two squares.

> [!example] Example 2: $\theta^4$ and Jacobi's formula
> Coefficients of $\theta^4$ give $r_4(n)$ with explicit formula.

> [!example] Example 3: $E_8$ lattice
> The theta function of the $E_8$ root lattice is $\Theta_{E_8} = E_4$.

## Relation to Eta Function

$$\theta_2(q) = 2\eta(2\tau)^2/\eta(\tau)$$
$$\theta_3(q) = \eta(\tau)^5/(\eta(\tau/2)^2\eta(2\tau)^2)$$
$$\theta_4(q) = \eta(\tau/2)^2/\eta(\tau)$$

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Partition Function|Partition Function]]
- [[07 - Modular Forms/Concepts/Quadratic Forms|Quadratic Forms and Theta Series]]

---
title: Riemann Zeta Function
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
  - l-functions
created: 2026-01-19
---

# Riemann Zeta Function

## Definition

> [!info] Definition (Riemann Zeta Function)
> The **Riemann zeta function** is defined for $\text{Re}(s) > 1$ by:
> $$\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}}$$
>
> The equality of the sum and product is the **Euler product**, reflecting the fundamental theorem of arithmetic.

## Analytic Continuation

> [!abstract] Theorem (Riemann, 1859)
> $\zeta(s)$ extends to a **meromorphic function** on all of $\mathbb{C}$, with a single simple pole at $s = 1$ with residue 1:
> $$\zeta(s) = \frac{1}{s-1} + \gamma + O(s-1)$$
> where $\gamma \approx 0.5772$ is the Euler-Mascheroni constant.

### Methods of Continuation

1. **Functional equation** (see below)
2. **Integral representation**: $\zeta(s) = \frac{1}{\Gamma(s)} \int_0^\infty \frac{t^{s-1}}{e^t - 1} dt$
3. **Hurwitz zeta**: $\zeta(s) = \lim_{N \to \infty} \left(\sum_{n=1}^{N} n^{-s} - \frac{N^{1-s}}{1-s}\right)$

## Functional Equation

> [!abstract] Theorem (Functional Equation)
> Define the **completed zeta function**:
> $$\xi(s) = \pi^{-s/2} \Gamma(s/2) \zeta(s)$$
>
> Then:
> $$\xi(s) = \xi(1-s)$$
>
> Equivalently:
> $$\zeta(s) = 2^s \pi^{s-1} \sin\left(\frac{\pi s}{2}\right) \Gamma(1-s) \zeta(1-s)$$

The functional equation relates values at $s$ and $1-s$, with the **critical line** at $\text{Re}(s) = 1/2$.

## Zeros and the Riemann Hypothesis

### Trivial Zeros

$$\zeta(-2n) = 0 \quad \text{for } n = 1, 2, 3, \ldots$$

These come from $\sin(\pi s/2) = 0$ in the functional equation.

### Non-trivial Zeros

All other zeros lie in the **critical strip** $0 < \text{Re}(s) < 1$.

> [!abstract] Riemann Hypothesis (Millennium Problem)
> All non-trivial zeros of $\zeta(s)$ have real part $\frac{1}{2}$.
>
> Equivalently: all zeros of $\xi(s)$ are real.

| Known | Status |
|-------|--------|
| Infinitely many zeros on critical line | Hardy (1914) |
| $> 40\%$ of zeros on critical line | Conrey (1989) |
| First $10^{13}$ zeros on critical line | Numerical verification |
| RH itself | **Open** |

## Special Values

### Positive Even Integers

> [!abstract] Theorem (Euler)
> $$\zeta(2n) = \frac{(-1)^{n+1} B_{2n} (2\pi)^{2n}}{2(2n)!}$$
> where $B_{2n}$ are Bernoulli numbers.

| $n$ | $\zeta(2n)$ | Exact Value |
|-----|-------------|-------------|
| 1 | $\zeta(2)$ | $\frac{\pi^2}{6}$ |
| 2 | $\zeta(4)$ | $\frac{\pi^4}{90}$ |
| 3 | $\zeta(6)$ | $\frac{\pi^6}{945}$ |
| 4 | $\zeta(8)$ | $\frac{\pi^8}{9450}$ |

### Negative Integers

$$\zeta(-n) = -\frac{B_{n+1}}{n+1}$$

| Value | Result |
|-------|--------|
| $\zeta(0)$ | $-\frac{1}{2}$ |
| $\zeta(-1)$ | $-\frac{1}{12}$ |
| $\zeta(-2)$ | $0$ |
| $\zeta(-3)$ | $\frac{1}{120}$ |

The value $\zeta(-1) = -\frac{1}{12}$ appears in string theory (regularization of $1 + 2 + 3 + \cdots$).

### Odd Positive Integers

> [!warning] Open Problem
> The nature of $\zeta(3), \zeta(5), \zeta(7), \ldots$ is largely unknown.
> - $\zeta(3)$ is irrational (Apéry, 1978)
> - Infinitely many $\zeta(2n+1)$ are irrational (Rivoal, 2000)
> - No $\zeta(2n+1)$ is known to be transcendental

## Connection to Primes

### Prime Number Theorem

> [!abstract] Theorem (Hadamard, de la Vallée Poussin, 1896)
> $$\pi(x) \sim \frac{x}{\log x}$$
> where $\pi(x) = \#\{p \leq x : p \text{ prime}\}$.

The key insight: $\zeta(s) \neq 0$ for $\text{Re}(s) = 1$.

### Explicit Formula

$$\psi(x) = x - \sum_{\rho} \frac{x^\rho}{\rho} - \log(2\pi) - \frac{1}{2}\log(1 - x^{-2})$$

where $\psi(x) = \sum_{p^k \leq x} \log p$ and $\rho$ runs over non-trivial zeros.

RH would give the best possible error term: $\pi(x) = \text{Li}(x) + O(\sqrt{x} \log x)$.

## Connection to Modular Forms

### Eisenstein Series

The Eisenstein series $E_{2k}(\tau)$ satisfies:
$$E_{2k}(\tau) = 1 - \frac{4k}{B_{2k}} \sum_{n=1}^{\infty} \sigma_{2k-1}(n) q^n$$

where $\sigma_k(n) = \sum_{d|n} d^k$.

The constant term involves $\zeta(2k)$ via Bernoulli numbers:
$$\zeta(2k) = \frac{(-1)^{k+1} (2\pi)^{2k} B_{2k}}{2(2k)!}$$

### Mellin Transform

$$\zeta(s) \Gamma(s) = \int_0^\infty \frac{t^{s-1}}{e^t - 1} dt$$

The theta function $\theta(\tau) = \sum_{n \in \mathbb{Z}} e^{\pi i n^2 \tau}$ satisfies:
$$\int_0^\infty \theta(it) t^{s/2} \frac{dt}{t} = \pi^{-s/2} \Gamma(s/2) \zeta(s)$$

This gives another proof of the functional equation via $\theta(−1/\tau) = \sqrt{-i\tau} \theta(\tau)$.

### As an L-function

$\zeta(s)$ is the L-function of:
- The trivial Dirichlet character $\chi_0$
- The trivial Galois representation
- The motive $\mathbb{Q}(0)$ (trivial motive)

## Generalizations

| L-function             | Definition                                 | Relation to $\zeta$                              |
| ---------------------- | ------------------------------------------ | ------------------------------------------------ |
| Dirichlet $L(s, \chi)$ | $\sum \chi(n) n^{-s}$                      | $L(s, \chi_0) = \zeta(s) \prod_{pq}(1 - p^{-s})$ |
| Dedekind $\zeta_K(s)$  | $\sum_{\mathfrak{a}} N(\mathfrak{a})^{-s}$ | $\zeta_\mathbb{Q}(s) = \zeta(s)$                 |
| Hecke $L(s, \chi)$     | Over number fields                         | Generalizes Dirichlet                            |
| Modular $L(f, s)$      | $\sum a_n n^{-s}$                          | Different object                                 |

## Famous Results

> [!abstract] Basel Problem (Euler, 1735)
> $$\zeta(2) = \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

> [!abstract] Apéry's Theorem (1978)
> $\zeta(3)$ is irrational.

> [!abstract] Prime Number Theorem
> $\zeta(s)$ has no zeros on $\text{Re}(s) = 1$ implies PNT.

## Numerical Values

| Value | Approximation |
|-------|---------------|
| $\zeta(2)$ | $1.6449340668...$ |
| $\zeta(3)$ | $1.2020569032...$ (Apéry's constant) |
| $\zeta(4)$ | $1.0823232337...$ |
| $\zeta(5)$ | $1.0369277551...$ |

## Related Concepts

- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions of Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Periods|Periods]]
- [[08 - Arithmetic Geometry/Concepts/Motives|Motives]]

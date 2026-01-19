---
title: Polynomial Rings
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Polynomial Rings

## Definition

> [!info] Definition (Polynomial Ring)
> Let $R$ be a ring. The **polynomial ring** $R[x]$ consists of formal expressions:
> $$f(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n$$
> where $a_i \in R$ and only finitely many $a_i$ are nonzero.
>
> Operations are defined by:
> - $(f + g)(x) = \sum_i (a_i + b_i) x^i$
> - $(f \cdot g)(x) = \sum_k \left(\sum_{i+j=k} a_i b_j\right) x^k$

> [!info] Terminology
> - **Degree**: $\deg(f) = \max\{i : a_i \neq 0\}$ (undefined for $f = 0$)
> - **Leading coefficient**: $a_n$ where $n = \deg(f)$
> - **Monic**: Leading coefficient is $1$

## Key Properties

1. If $R$ is commutative, so is $R[x]$
2. If $R$ has identity $1$, so does $R[x]$
3. If $R$ is an integral domain, so is $R[x]$, and $\deg(fg) = \deg(f) + \deg(g)$
4. If $R$ is a UFD, so is $R[x]$ (Gauss's Lemma)
5. Units of $R[x]$ are exactly the units of $R$ (when $R$ is an integral domain)
6. $R[x]$ is a PID if and only if $R$ is a field

## Examples

> [!example] Example 1: $\mathbb{Z}[x]$
> Polynomials with integer coefficients:
> - UFD but not PID
> - $(2, x)$ is not principal

> [!example] Example 2: $\mathbb{R}[x]$
> Polynomials over the reals:
> - PID and Euclidean domain
> - Irreducibles: linear and quadratics with negative discriminant

> [!example] Example 3: $\mathbb{C}[x]$
> Polynomials over the complex numbers:
> - PID and Euclidean domain
> - Irreducibles: only linear polynomials (Fundamental Theorem of Algebra)

> [!example] Example 4: $\mathbb{F}_p[x]$
> Polynomials over finite field:
> - PID and Euclidean domain
> - Used in coding theory and cryptography

## Theorems

> [!abstract] Division Algorithm
> If $F$ is a field and $f, g \in F[x]$ with $g \neq 0$, then there exist unique $q, r \in F[x]$ such that:
> $$f = gq + r$$
> with $r = 0$ or $\deg(r) < \deg(g)$.

> [!abstract] Remainder Theorem
> For $f \in R[x]$ and $a \in R$:
> $$f(x) = (x - a)q(x) + f(a)$$
> Thus $a$ is a root of $f$ iff $(x-a) | f$.

> [!abstract] Number of Roots
> If $R$ is an integral domain and $f \in R[x]$ has degree $n$, then $f$ has at most $n$ roots in $R$.

## Multivariate Polynomials

> [!info] Definition
> $R[x_1, \ldots, x_n] = R[x_1][x_2]\cdots[x_n]$
>
> This is a UFD if $R$ is a UFD, but never a PID for $n \geq 2$ (even over fields).

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

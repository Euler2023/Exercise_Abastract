---
title: Unique Factorization Domains
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
---

# Unique Factorization Domains (UFDs)

## Definitions

> [!info] Definition (Irreducible Element)
> A nonzero non-unit element $p$ in an integral domain $R$ is **irreducible** if:
> $$p = ab \Rightarrow a \text{ is a unit or } b \text{ is a unit}$$

> [!info] Definition (Prime Element)
> A nonzero non-unit element $p$ in an integral domain $R$ is **prime** if:
> $$p | ab \Rightarrow p | a \text{ or } p | b$$

> [!info] Definition (UFD)
> An integral domain $R$ is a **unique factorization domain (UFD)** if:
> 1. Every nonzero non-unit can be written as a product of irreducibles
> 2. This factorization is unique up to order and associates

## Prime vs Irreducible

> [!tip] Key Relationship
> - In any integral domain: prime $\Rightarrow$ irreducible
> - In a UFD: prime $\Leftrightarrow$ irreducible
> - The converse can fail in non-UFDs

## Key Properties

1. Every PID is a UFD
2. If $R$ is a UFD, then $R[x]$ is a UFD
3. In a UFD, $\gcd$ and $\text{lcm}$ exist for any two elements
4. UFDs are integrally closed in their field of fractions
5. Associates are elements differing by a unit: $a \sim b$ iff $a = ub$ for unit $u$

## Examples

> [!example] Example 1: $\mathbb{Z}$
> The integers form a UFD:
> - Irreducibles are $\pm p$ for prime $p$
> - Fundamental Theorem of Arithmetic gives unique factorization

> [!example] Example 2: $F[x]$
> Polynomial rings over fields are UFDs:
> - Irreducibles are irreducible polynomials

> [!example] Example 3: $\mathbb{Z}[x]$
> Is a UFD (but not a PID):
> - By the theorem: UFD $\Rightarrow$ UFD$[x]$

> [!example] Example 4: $\mathbb{Z}[i]$
> The Gaussian integers form a UFD (actually a PID).

## Non-Examples

> [!warning] Non-Example: $\mathbb{Z}[\sqrt{-5}]$
> This ring is **not** a UFD:
> - $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$
> - Both are factorizations into irreducibles
> - They are not associate: $2$ and $1 + \sqrt{-5}$ are not associates

## Theorems

> [!abstract] Gauss's Lemma
> Let $R$ be a UFD and $F = \text{Frac}(R)$. If $f \in R[x]$ is primitive (gcd of coefficients is 1), then:
> $$f \text{ irreducible in } R[x] \Leftrightarrow f \text{ irreducible in } F[x]$$

> [!abstract] UFD Polynomial Theorem
> If $R$ is a UFD, then $R[x_1, \ldots, x_n]$ is a UFD.

## Hierarchy

```
Fields ⊂ Euclidean Domains ⊂ PIDs ⊂ UFDs ⊂ Integral Domains
         (ED)                        (proper inclusions)
```

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

---
title: Field Theory Hub
aliases:
  - Fields
tags:
  - hub
  - field-theory
topic: field-theory
created: 2025-01-19
---

# Field Theory

Field theory studies algebraic structures where every non-zero element has a multiplicative inverse. Fields are the natural setting for solving polynomial equations.

## Core Concepts

### Foundations
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

### Extension Theory
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]

### Special Topics
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]

## Important Fields

| Field | Notation | Properties |
|-------|----------|------------|
| Rationals | $\mathbb{Q}$ | Prime field of characteristic 0 |
| Reals | $\mathbb{R}$ | Complete ordered field |
| Complex | $\mathbb{C}$ | Algebraically closed |
| Finite field | $\mathbb{F}_q = \mathbb{F}_{p^n}$ | $q$ elements, char $p$ |
| $p$-adic numbers | $\mathbb{Q}_p$ | Complete w.r.t. $p$-adic norm |
| Function field | $k(x)$ | Rational functions over $k$ |

## Exercises by Difficulty

### Beginner
```dataview
TABLE status, source
FROM "03 - Field Theory/Exercises"
WHERE difficulty = "beginner"
SORT file.name ASC
```

### Intermediate
```dataview
TABLE status, source
FROM "03 - Field Theory/Exercises"
WHERE difficulty = "intermediate"
SORT file.name ASC
```

### Advanced
```dataview
TABLE status, source
FROM "03 - Field Theory/Exercises"
WHERE difficulty = "advanced"
SORT file.name ASC
```

## Key Theorems

> [!abstract] Tower Law
> If $K/F$ and $L/K$ are field extensions, then:
> $$[L:F] = [L:K][K:F]$$

> [!abstract] Primitive Element Theorem
> If $K/F$ is a finite separable extension, then $K = F(\alpha)$ for some $\alpha \in K$.

> [!abstract] Classification of Finite Fields
> For each prime power $q = p^n$, there is exactly one field $\mathbb{F}_q$ (up to isomorphism).
> Moreover, $\mathbb{F}_q^* = \mathbb{F}_q \setminus \{0\}$ is cyclic of order $q-1$.

## Related Areas

- [[02 - Ring Theory/Ring Theory Hub|Ring Theory]] - Fields are rings
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]] - Studies field extensions via groups
- [[06 - Representation Theory/Representation Theory Hub|Representation Theory]] - Vector spaces over fields

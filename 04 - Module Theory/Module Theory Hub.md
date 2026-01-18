---
title: Module Theory Hub
aliases:
  - Modules
tags:
  - hub
  - module-theory
topic: module-theory
created: 2025-01-19
---

# Module Theory

Module theory generalizes linear algebra from vector spaces over fields to modules over rings. Many constructions from linear algebra extend, but with subtle differences.

## Core Concepts

### Foundations
- [[04 - Module Theory/Concepts/Module Definition|Module Definition]]
- [[04 - Module Theory/Concepts/Submodules|Submodules]]
- [[04 - Module Theory/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Module Theory/Concepts/Quotient Modules|Quotient Modules]]

### Structure Theory
- [[04 - Module Theory/Concepts/Free Modules|Free Modules]]
- [[04 - Module Theory/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Module Theory/Concepts/Torsion Modules|Torsion Modules]]
- [[04 - Module Theory/Concepts/Noetherian Modules|Noetherian Modules]]

### Constructions
- [[04 - Module Theory/Concepts/Direct Sum|Direct Sum]]
- [[04 - Module Theory/Concepts/Tensor Product|Tensor Product]]
- [[04 - Module Theory/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Module Theory/Concepts/Hom Functor|Hom Functor]]

## Key Examples

| Module | Ring | Description |
|--------|------|-------------|
| Vector space | Field $F$ | $F$-module |
| Abelian group | $\mathbb{Z}$ | $\mathbb{Z}$-module |
| Ideal | Ring $R$ | $R$-submodule of $R$ |
| $R^n$ | Ring $R$ | Free module of rank $n$ |
| $R[x]$ | Ring $R$ | Free $R$-module |

## Exercises by Difficulty

### Beginner
```dataview
TABLE status, source
FROM "04 - Module Theory/Exercises"
WHERE difficulty = "beginner"
SORT file.name ASC
```

### Intermediate
```dataview
TABLE status, source
FROM "04 - Module Theory/Exercises"
WHERE difficulty = "intermediate"
SORT file.name ASC
```

### Advanced
```dataview
TABLE status, source
FROM "04 - Module Theory/Exercises"
WHERE difficulty = "advanced"
SORT file.name ASC
```

## Key Theorems

> [!abstract] Fundamental Theorem for Finitely Generated Modules over PID
> Let $R$ be a PID and $M$ a finitely generated $R$-module. Then:
> $$M \cong R^r \oplus R/(a_1) \oplus R/(a_2) \oplus \cdots \oplus R/(a_n)$$
> where $r \geq 0$ and $a_1 | a_2 | \cdots | a_n$ (invariant factors).

> [!abstract] Short Exact Sequence Splitting
> A short exact sequence $0 \to A \to B \to C \to 0$ splits (i.e., $B \cong A \oplus C$) if:
> - $C$ is free, or
> - $C$ is projective, or
> - The sequence is split exact

## Differences from Vector Spaces

| Property | Vector Spaces | Modules |
|----------|--------------|---------|
| Basis existence | Always | Not always |
| Submodule complement | Always | Not always |
| Dimension well-defined | Yes | Rank for free modules |
| Linear independence | Simple | More complex |

## Related Areas

- [[02 - Ring Theory/Ring Theory Hub|Ring Theory]] - Modules are over rings
- [[06 - Representation Theory/Representation Theory Hub|Representation Theory]] - Vector spaces are modules
- [[03 - Field Theory/Field Theory Hub|Field Theory]] - Galois extensions as modules

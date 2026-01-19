---
title: Noetherian Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Noetherian Modules

## Definition

> [!info] Definition (Noetherian Module)
> An $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|module]] $M$ is **Noetherian** if it satisfies any of the following equivalent conditions:
> 1. **ACC**: Every ascending chain of [[04 - Linear Algebra and Modules/Concepts/Submodules|submodules]] stabilizes
> 2. **Maximum condition**: Every non-empty set of submodules has a maximal element
> 3. **Finite generation**: Every submodule is [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|finitely generated]]

> [!info] Definition (Noetherian Ring)
> A ring $R$ is **Noetherian** if it is Noetherian as a module over itself, i.e., every ideal is finitely generated.

## Key Properties

> [!abstract] Theorem
> 1. Submodules of Noetherian modules are Noetherian
> 2. [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotients]] of Noetherian modules are Noetherian
> 3. If $N \subseteq M$ and both $N$ and $M/N$ are Noetherian, then $M$ is Noetherian
> 4. Finite [[04 - Linear Algebra and Modules/Concepts/Direct Sum|direct sums]] of Noetherian modules are Noetherian

> [!abstract] Hilbert Basis Theorem
> If $R$ is a Noetherian ring, then $R[x]$ is also Noetherian.

## Examples of Noetherian Rings

| Ring | Why Noetherian |
|------|----------------|
| Fields | Only ideals are $(0)$ and $(1)$ |
| $\mathbb{Z}$ | PID, all ideals principal |
| $k[x_1, \ldots, x_n]$ | Hilbert Basis Theorem |
| Any PID | Principal = finitely generated |

## Examples

> [!example] Example 1: Finite-dimensional vector spaces
> Every finite-dimensional [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] is Noetherian.

> [!example] Example 2: $\mathbb{Z}$-modules
> A $\mathbb{Z}$-module (abelian group) is Noetherian iff it is finitely generated.

> [!example] Example 3: Not Noetherian
> The polynomial ring $k[x_1, x_2, x_3, \ldots]$ in infinitely many variables is **not** Noetherian.

> [!example] Example 4: Not Noetherian
> $\mathbb{Q}$ as a $\mathbb{Z}$-module is not Noetherian (not finitely generated).

## Artinian Modules

> [!info] Definition (Artinian)
> $M$ is **Artinian** if it satisfies the descending chain condition (DCC) on submodules.

> [!abstract] Theorem
> For rings: Artinian $\Rightarrow$ Noetherian (but not conversely for modules).

## Applications

> [!tip] Finite Generation Guaranteed
> In Noetherian modules/rings:
> - All submodules are finitely generated
> - All ideals are finitely generated
> - Primary decomposition exists

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

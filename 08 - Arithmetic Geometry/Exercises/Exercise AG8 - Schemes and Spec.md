---
title: "Exercise AG8: Schemes and Spec"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - schemes
source: "Algebraic geometry foundations"
created: 2026-01-19
---

# Exercise AG8: Schemes and Spec

## Problem Statement

> [!question]
> **(a)** Describe $\text{Spec}(\mathbb{Z})$ as a topological space:
> - What are the points?
> - What is the generic point?
> - What are the closed points?
> - Draw a picture.
>
> **(b)** For $\text{Spec}(\mathbb{Z}[x]/(x^2 - 5))$:
> - Identify this ring and describe its prime ideals.
> - What is the structure of fibers over points of $\text{Spec}(\mathbb{Z})$?
>
> **(c)** Consider the morphism $\text{Spec}(\mathbb{F}_p) \to \text{Spec}(\mathbb{Z})$ induced by $\mathbb{Z} \to \mathbb{F}_p$.
> - Which point of $\text{Spec}(\mathbb{Z})$ does this map to?
>
> **(d)** Describe $\text{Spec}(\mathbb{Z}[1/6])$. How does it differ from $\text{Spec}(\mathbb{Z})$?

## Hints

> [!hint]- Hint 1
> Prime ideals of $\mathbb{Z}$ are $(0)$ and $(p)$ for primes $p$.

> [!hint]- Hint 2
> $\mathbb{Z}[x]/(x^2 - 5) \cong \mathbb{Z}[\sqrt{5}]$, the ring of integers in $\mathbb{Q}(\sqrt{5})$ (up to index).

> [!hint]- Hint 3
> A ring map $A \to B$ induces $\text{Spec}(B) \to \text{Spec}(A)$ sending $\mathfrak{q}$ to its preimage.

## Solution

> [!success]- Solution
>
> **(a)** $\text{Spec}(\mathbb{Z})$:
>
> **Points** = Prime ideals of $\mathbb{Z}$:
> - $(0)$ — the generic point $\eta$
> - $(2), (3), (5), (7), (11), \ldots$ — one for each prime $p$
>
> **Topology** (Zariski):
> - Closed sets = $V(I) = \{\mathfrak{p} : \mathfrak{p} \supseteq I\}$
> - $V((n)) = \{\text{primes } p : p | n\}$ (finite set)
> - The closure of $(0)$ is all of $\text{Spec}(\mathbb{Z})$
> - Each $(p)$ is a closed point
>
> **Picture**:
> ```
>           (0) = η [generic point, dense]
>            |
>    --------+--------+--------+--------
>    |       |        |        |
>   (2)     (3)      (5)      (7)  ...  [closed points]
> ```
>
> The topology is NOT Hausdorff: the generic point is in the closure of every point!
>
> **(b)** $R = \mathbb{Z}[x]/(x^2 - 5) \cong \mathbb{Z}[\sqrt{5}]$
>
> This is (essentially) the ring of integers of $\mathbb{Q}(\sqrt{5})$.
>
> **Prime ideals**: Lie over primes of $\mathbb{Z}$.
>
> For each prime $p$, factor $x^2 - 5$ over $\mathbb{F}_p$:
> - $p = 5$: $x^2 - 5 \equiv x^2 \pmod 5$, so $(5) = (\sqrt{5})^2$ **ramifies**
> - $p \equiv \pm 1 \pmod 5$: $5$ is a square mod $p$, $(p)$ **splits** into two primes
> - $p \equiv \pm 2 \pmod 5$: $5$ is not a square mod $p$, $(p)$ **stays prime** (inert)
>
> Example: $p = 2$: $5 \equiv 1 \pmod 8$? No, $5 \equiv 5 \pmod 8$. Check: is $5$ a square mod $2$? Yes ($5 \equiv 1 \pmod 2$). So actually we need quadratic reciprocity: $\left(\frac{5}{2}\right) = 1$ since $5 \equiv 1 \pmod 8$. So $2$ splits!
>
> **(c)** The map $\mathbb{Z} \to \mathbb{F}_p = \mathbb{Z}/(p)$ has kernel $(p)$.
>
> The induced map $\text{Spec}(\mathbb{F}_p) \to \text{Spec}(\mathbb{Z})$:
>
> $\text{Spec}(\mathbb{F}_p) = \{(0)\}$ (one point, since $\mathbb{F}_p$ is a field).
>
> This maps to the preimage of $(0) \subseteq \mathbb{F}_p$, which is $(p) \subseteq \mathbb{Z}$.
>
> So $\text{Spec}(\mathbb{F}_p) \to \text{Spec}(\mathbb{Z})$ **maps to the point $(p)$**.
>
> **(d)** $\mathbb{Z}[1/6] = \mathbb{Z}[1/2, 1/3]$
>
> Prime ideals: $(0)$ and $(p)$ for primes $p \neq 2, 3$.
>
> $$\text{Spec}(\mathbb{Z}[1/6]) = \text{Spec}(\mathbb{Z}) \setminus \{(2), (3)\}$$
>
> We have "removed" the primes 2 and 3 by inverting them!
>
> This is the **open subscheme** of $\text{Spec}(\mathbb{Z})$ where $6$ is invertible.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

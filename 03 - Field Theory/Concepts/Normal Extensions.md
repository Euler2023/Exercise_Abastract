---
title: Normal Extensions
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Normal Extensions

## Definition

> [!info] Definition (Normal Extension)
> An algebraic extension $E/F$ is **normal** if every irreducible polynomial in $F[x]$ that has at least one root in $E$ splits completely in $E$.

## Equivalent Characterizations

> [!tip] For a finite extension $E/F$, the following are equivalent:
> 1. $E/F$ is normal
> 2. $E$ is the splitting field of some polynomial $f \in F[x]$
> 3. Every $F$-embedding $\sigma: E \to \overline{F}$ satisfies $\sigma(E) = E$
> 4. $E/F$ is closed under conjugation: if $\alpha \in E$ and $\beta$ is a conjugate of $\alpha$ over $F$, then $\beta \in E$

## Key Properties

1. The splitting field of any polynomial is a normal extension
2. Normal extensions are not transitive: $K/F$ normal and $E/K$ normal does not imply $E/F$ normal
3. $E/F$ normal implies $E/K$ normal for any intermediate field $K$
4. Normal + separable = Galois

## Examples

> [!example] Example 1: $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$
> This is normal:
> - Splitting field of $x^2 - 2$
> - Both roots $\pm\sqrt{2}$ are in $\mathbb{Q}(\sqrt{2})$

> [!example] Example 2: $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$
> This is **not** normal:
> - $x^3 - 2$ has root $\sqrt[3]{2}$ in the extension
> - But $\omega\sqrt[3]{2}$ and $\omega^2\sqrt[3]{2}$ are not real
> - The polynomial doesn't split

> [!example] Example 3: $\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}$
> This is normal:
> - Splitting field of $x^3 - 2$
> - Contains all three roots

> [!example] Example 4: $\mathbb{C}/\mathbb{R}$
> This is normal:
> - Splitting field of $x^2 + 1$
> - Also the algebraic closure of $\mathbb{R}$

> [!example] Example 5: Cyclotomic Extensions
> $\mathbb{Q}(\zeta_n)/\mathbb{Q}$ is normal:
> - Splitting field of $x^n - 1$

## Non-Transitivity

> [!warning] Normal Extensions Are Not Transitive
> Consider $\mathbb{Q} \subset \mathbb{Q}(\sqrt{2}) \subset \mathbb{Q}(\sqrt[4]{2})$:
> - $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ is normal (splitting field of $x^2 - 2$)
> - $\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}(\sqrt{2})$ is normal (splitting field of $x^2 - \sqrt{2}$)
> - But $\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q}$ is **not** normal ($x^4 - 2$ doesn't split)

## Theorems

> [!abstract] Normal Closure
> For any finite extension $E/F$, there exists a smallest normal extension $N/F$ containing $E$, called the **normal closure**.
>
> $N$ is the splitting field of the product of minimal polynomials of a generating set for $E/F$.

> [!abstract] Galois Correspondence
> For a Galois extension $E/F$ (i.e., normal and separable):
> - Intermediate fields $K$ with $E/K$ normal correspond to normal subgroups of $\text{Gal}(E/F)$

## Connection to Galois Theory

> [!info] Galois = Normal + Separable
> An extension $E/F$ is **Galois** if and only if it is both normal and separable.
>
> In this case: $|\text{Gal}(E/F)| = [E:F]$

## Related Concepts

- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

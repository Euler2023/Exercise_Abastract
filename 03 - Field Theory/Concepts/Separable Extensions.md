---
title: Separable Extensions
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Separable Extensions

## Definitions

> [!info] Definition (Separable Polynomial)
> A polynomial $f(x) \in F[x]$ is **separable** if it has no repeated roots in its splitting field (i.e., all roots are distinct).
>
> Equivalently, $f$ and its formal derivative $f'$ are coprime: $\gcd(f, f') = 1$.

> [!info] Definition (Separable Element)
> An algebraic element $\alpha$ over $F$ is **separable** if its minimal polynomial over $F$ is separable.

> [!info] Definition (Separable Extension)
> An algebraic extension $E/F$ is **separable** if every element of $E$ is separable over $F$.

## Key Properties

1. In characteristic 0, every algebraic extension is separable
2. In characteristic $p > 0$, inseparability can occur
3. Finite fields have only separable extensions
4. Separable + normal = Galois
5. The separable degree equals $|\text{Hom}_F(E, \overline{F})|$

## Characteristic and Separability

> [!tip] Characteristic 0
> If $\text{char}(F) = 0$, then:
> - Every irreducible polynomial is separable
> - Every algebraic extension is separable

> [!tip] Characteristic $p$
> If $\text{char}(F) = p > 0$, an irreducible polynomial $f$ is inseparable iff:
> - $f'(x) = 0$
> - $f(x) = g(x^p)$ for some $g \in F[x]$

## Examples

> [!example] Example 1: Characteristic 0
> All extensions of $\mathbb{Q}$ are separable:
> - $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ is separable
> - $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ is separable

> [!example] Example 2: Finite Fields
> All extensions of finite fields are separable:
> - $\mathbb{F}_{p^n}/\mathbb{F}_p$ is separable
> - Frobenius automorphism witnesses this

> [!example] Example 3: Inseparable Example
> Let $F = \mathbb{F}_p(t)$ (rational functions) and $E = F(\sqrt[p]{t})$:
> - Minimal polynomial: $x^p - t$
> - Derivative: $px^{p-1} = 0$
> - Root $\sqrt[p]{t}$ has multiplicity $p$

## Theorems

> [!abstract] Perfect Field Theorem
> A field $F$ is **perfect** if every algebraic extension is separable.
>
> $F$ is perfect iff:
> - $\text{char}(F) = 0$, or
> - $\text{char}(F) = p$ and Frobenius $x \mapsto x^p$ is surjective

> [!abstract] Primitive Element Theorem
> If $E/F$ is a finite separable extension, then $E = F(\alpha)$ for some $\alpha \in E$.
>
> Such $\alpha$ is called a **primitive element**.

> [!abstract] Separable Degree
> For a finite extension $E/F$:
> $$[E:F]_s = |\text{Hom}_F(E, \overline{F})| \leq [E:F]$$
> with equality iff $E/F$ is separable.

## Separable Closure

> [!info] Definition
> The **separable closure** of $F$ in $E$ is the set of all elements of $E$ that are separable over $F$. It forms a subfield.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

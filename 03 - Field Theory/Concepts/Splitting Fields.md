---
title: Splitting Fields
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, §16.3, printed pp. 483–484, PDF pp. 495–496"
source_status: partially-verified
status: not-started
---

# Splitting Fields

## Definition

> [!info] Definition (Splits)
> A polynomial $f(x) \in F[x]$ **splits** over an extension $E/F$ if $f$ factors completely into linear factors in $E[x]$:
> $$f(x) = a(x - \alpha_1)(x - \alpha_2) \cdots (x - \alpha_n)$$
> where $a \in F$ and $\alpha_i \in E$.

> [!info] Definition (Splitting Field)
> The **splitting field** of $f(x) \in F[x]$ over $F$ is the smallest extension of $F$ over which $f$ splits:
> $$E = F(\alpha_1, \ldots, \alpha_n)$$
> where $\alpha_1, \ldots, \alpha_n$ are all roots of $f$.

## Key Properties

1. Splitting fields exist for any polynomial over any field
2. Splitting fields are unique up to isomorphism
3. If $\deg(f) = n$, then $[E:F] \leq n!$
4. $[E:F]$ divides $n!$
5. Splitting fields are normal extensions

## Examples

> [!example] Example 1: $x^2 - 2$ over $\mathbb{Q}$
> Splitting field is $\mathbb{Q}(\sqrt{2})$:
> - Roots: $\pm\sqrt{2}$, both in $\mathbb{Q}(\sqrt{2})$
> - $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$

> [!example] Example 2: $x^2 + 1$ over $\mathbb{R}$
> Splitting field is $\mathbb{C}$:
> - Roots: $\pm i$
> - $[\mathbb{C}:\mathbb{R}] = 2$

> [!example] Example 3: $x^3 - 2$ over $\mathbb{Q}$
> Splitting field is $\mathbb{Q}(\sqrt[3]{2}, \omega)$ where $\omega = e^{2\pi i/3}$:
> - Roots: $\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}$
> - $[\mathbb{Q}(\sqrt[3]{2}, \omega):\mathbb{Q}] = 6$

> [!example] Example 4: $x^4 - 2$ over $\mathbb{Q}$
> Splitting field is $\mathbb{Q}(\sqrt[4]{2}, i)$:
> - Roots: $\pm\sqrt[4]{2}, \pm i\sqrt[4]{2}$
> - Degree is 8

> [!example] Example 5: Cyclotomic Field
> Splitting field of $x^n - 1$ over $\mathbb{Q}$ is $\mathbb{Q}(\zeta_n)$:
> - Contains all $n$-th roots of unity
> - $[\mathbb{Q}(\zeta_n):\mathbb{Q}] = \phi(n)$

## Theorems

> [!abstract] Existence and Uniqueness
> For any polynomial $f \in F[x]$:
> 1. A splitting field exists
> 2. Any two splitting fields are isomorphic over $F$

> [!abstract] Degree Bound
> If $f \in F[x]$ has degree $n$, the splitting field $E$ satisfies:
> $$[E:F] \leq n!$$
> Equality can occur (e.g., general polynomial with symmetric Galois group).

> [!abstract] Splitting Field = Normal Closure
> The splitting field of $f$ is the smallest normal extension of $F$ containing any root of $f$.

## Connection to Galois Theory

> [!tip] Galois Correspondence
> For a splitting field $E$ of a separable polynomial over $F$:
> - $\text{Gal}(E/F)$ acts transitively on roots of irreducible factors
> - $|\text{Gal}(E/F)| = [E:F]$

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

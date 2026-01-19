---
title: Algebraic Extensions
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Algebraic Extensions

## Definition

> [!info] Definition (Algebraic Extension)
> A field extension $E/F$ is **algebraic** if every element of $E$ is algebraic over $F$.

> [!info] Definition (Transcendental Extension)
> An extension $E/F$ is **transcendental** if it is not algebraic, i.e., some element of $E$ is transcendental over $F$.

## Key Properties

1. Every finite extension is algebraic
2. The converse is false: $\overline{\mathbb{Q}}/\mathbb{Q}$ is algebraic but infinite
3. Algebraic extensions of algebraic extensions are algebraic
4. The compositum of algebraic extensions is algebraic
5. If $\alpha, \beta$ are algebraic over $F$, then so are $\alpha + \beta$, $\alpha\beta$, $\alpha/\beta$ (if $\beta \neq 0$)

## Examples

> [!example] Example 1: Finite Extensions
> - $\mathbb{C}/\mathbb{R}$ is algebraic (degree 2)
> - $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ is algebraic (degree 2)
> - Any extension of degree $n$ is algebraic

> [!example] Example 2: $\overline{\mathbb{Q}}/\mathbb{Q}$
> The algebraic closure of $\mathbb{Q}$ is an infinite algebraic extension:
> - Contains $\sqrt[n]{2}$ for all $n$
> - Infinite but algebraic

> [!example] Example 3: Transcendental Extension
> $\mathbb{Q}(\pi)/\mathbb{Q}$ is transcendental:
> - $\pi$ satisfies no polynomial over $\mathbb{Q}$
> - $\mathbb{Q}(\pi) \cong \mathbb{Q}(x)$

> [!example] Example 4: $\mathbb{R}/\mathbb{Q}$
> This is transcendental:
> - Contains $\pi, e$, and uncountably many transcendentals

## Theorems

> [!abstract] Finite implies Algebraic
> Every finite extension is algebraic.
>
> *Proof*: If $[E:F] = n$ and $\alpha \in E$, then $\{1, \alpha, \ldots, \alpha^n\}$ is linearly dependent over $F$, giving a polynomial relation.

> [!abstract] Transitivity of Algebraic Extensions
> If $E/K$ and $K/F$ are algebraic, then $E/F$ is algebraic.
>
> *Proof sketch*: For $\alpha \in E$, the coefficients of its minimal polynomial over $K$ are algebraic over $F$, so $\alpha$ lies in a finite extension of $F$.

> [!abstract] Algebraic Elements Form a Field
> If $E/F$ is an extension, the set of elements algebraic over $F$ forms a subfield of $E$.

## Finite vs. Algebraic

| Property | Finite Extension | Algebraic Extension |
|----------|-----------------|-------------------|
| Definition | $[E:F] < \infty$ | All elements algebraic |
| Implies | Algebraic | Not necessarily finite |
| Example | $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ | $\overline{\mathbb{Q}}/\mathbb{Q}$ |

> [!tip] Key Distinction
> Finite $\Rightarrow$ Algebraic (always)
> Algebraic $\Rightarrow$ Finite (only for finitely generated extensions)

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]

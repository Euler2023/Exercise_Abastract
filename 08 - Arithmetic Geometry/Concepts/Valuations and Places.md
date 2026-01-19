---
title: Valuations and Places
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - number-theory
created: 2026-01-19
---

# Valuations and Places

## Definition

> [!info] Definition (Valuation)
> A **valuation** on a field $K$ is a function $v: K^* \to \Gamma$ (an ordered abelian group) satisfying:
> 1. $v(xy) = v(x) + v(y)$
> 2. $v(x + y) \geq \min(v(x), v(y))$
> By convention, $v(0) = +\infty$.

> [!info] Definition (Absolute Value)
> An **absolute value** on $K$ is $|\cdot|: K \to \mathbb{R}_{\geq 0}$ satisfying:
> 1. $|x| = 0 \iff x = 0$
> 2. $|xy| = |x||y|$
> 3. $|x + y| \leq |x| + |y|$ (triangle inequality)
>
> If instead $|x + y| \leq \max(|x|, |y|)$, it's **non-archimedean**.

## Places

> [!info] Definition (Place)
> A **place** of $K$ is an equivalence class of non-trivial absolute values, where $|\cdot|_1 \sim |\cdot|_2$ if they define the same topology.

## Places of $\mathbb{Q}$

> [!abstract] Ostrowski's Theorem
> Every non-trivial absolute value on $\mathbb{Q}$ is equivalent to:
> - The usual absolute value $|\cdot|_\infty$, or
> - A $p$-adic absolute value $|\cdot|_p$ for some prime $p$

Notation:
- **Finite places**: $v = p$ (corresponding to $|\cdot|_p$)
- **Infinite place**: $v = \infty$ (corresponding to $|\cdot|_\infty$)

## Product Formula

> [!abstract] Product Formula
> For $x \in \mathbb{Q}^*$:
> $$|x|_\infty \cdot \prod_{p} |x|_p = 1$$

> [!example] Example
> $x = 12 = 2^2 \cdot 3$:
> - $|12|_\infty = 12$
> - $|12|_2 = 2^{-2} = 1/4$
> - $|12|_3 = 3^{-1} = 1/3$
> - $|12|_p = 1$ for $p \neq 2, 3$
> - Product: $12 \cdot \frac{1}{4} \cdot \frac{1}{3} = 1$ ✓

## Places of Number Fields

For a number field $K$:

**Finite places**: Correspond to prime ideals $\mathfrak{p}$ of $\mathcal{O}_K$

**Infinite places**: Correspond to embeddings $\sigma: K \hookrightarrow \mathbb{C}$:
- **Real places**: $\sigma(K) \subseteq \mathbb{R}$
- **Complex places**: pairs $\{\sigma, \bar{\sigma}\}$ with $\sigma(K) \not\subseteq \mathbb{R}$

> [!info] Counting Places
> If $[K:\mathbb{Q}] = n$ with $r_1$ real embeddings and $2r_2$ complex embeddings:
> $$r_1 + 2r_2 = n$$

## Completions

> [!info] Definition
> The **completion** $K_v$ of $K$ at place $v$ is the completion of $K$ with respect to the absolute value at $v$.

| Place | Completion |
|-------|------------|
| $\infty$ (real) | $\mathbb{R}$ |
| $\infty$ (complex) | $\mathbb{C}$ |
| Finite $\mathfrak{p}$ | $K_\mathfrak{p}$ (local field) |

## Local Fields

> [!info] Definition
> A **local field** is a complete field with respect to a discrete valuation with finite residue field.

Examples:
- $\mathbb{Q}_p$ (characteristic 0)
- $\mathbb{F}_p((t))$ (characteristic $p$)

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

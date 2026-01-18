---
title: "Exercise F1: Degree of Q(sqrt(2), sqrt(3))"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - field-extensions
  - proof
source: "Dummit & Foote, Ch. 13"
created: 2025-01-19
---

# Exercise F1: Degree of Q(sqrt(2), sqrt(3))

## Problem Statement

> [!question] Exercise
> Prove that $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 4$.

## Hints

> [!hint]- Hint 1
> Use the tower law: $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] \cdot [\mathbb{Q}(\sqrt{2}) : \mathbb{Q}]$.

> [!hint]- Hint 2
> Show that $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$.

> [!hint]- Hint 3
> If $\sqrt{3} = a + b\sqrt{2}$ for $a, b \in \mathbb{Q}$, derive a contradiction.

## Solution

> [!success]- Solution
> ### Proof
> **Step 1:** $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$.
>
> $\sqrt{2}$ is a root of $x^2 - 2$, which is irreducible over $\mathbb{Q}$ (by Eisenstein or rationality).
> So the minimal polynomial has degree 2.
>
> **Step 2:** $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$.
>
> We need to show $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$.
>
> Suppose $\sqrt{3} = a + b\sqrt{2}$ for some $a, b \in \mathbb{Q}$.
>
> Squaring: $3 = a^2 + 2b^2 + 2ab\sqrt{2}$
>
> Since $\{1, \sqrt{2}\}$ is linearly independent over $\mathbb{Q}$:
> - $a^2 + 2b^2 = 3$
> - $2ab = 0$
>
> From $2ab = 0$: either $a = 0$ or $b = 0$.
>
> - If $b = 0$: $a^2 = 3 \Rightarrow a = \pm\sqrt{3} \notin \mathbb{Q}$, contradiction.
> - If $a = 0$: $2b^2 = 3 \Rightarrow b^2 = 3/2 \Rightarrow b = \pm\sqrt{3/2} \notin \mathbb{Q}$, contradiction.
>
> So $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$, and $x^2 - 3$ is the minimal polynomial of $\sqrt{3}$ over $\mathbb{Q}(\sqrt{2})$.
>
> **Step 3:** Apply the tower law.
>
> $$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = [\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] \cdot [\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2 \cdot 2 = 4$$
>
> $\square$

## Corollary

> [!tip] Basis
> A basis for $\mathbb{Q}(\sqrt{2}, \sqrt{3})$ over $\mathbb{Q}$ is $\{1, \sqrt{2}, \sqrt{3}, \sqrt{6}\}$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

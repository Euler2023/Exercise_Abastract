---
title: "Exercise F15: Primitive Elements over Finite Fields"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - primitive-elements
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 8, Ex. 8.1, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F15: Primitive Elements over Finite Fields

## Problem Statement

> [!question] Exercise
> Prove that every finite extension of a finite field has a primitive element.

## Hints

> [!hint]- Hint
> Choose a generator of the multiplicative group of the extension field.

## Solution

> [!success]- Solution
> Let $K/F$ be a finite extension with $F$ finite. Then $K$ is finite, and its multiplicative group $K^\times$ is cyclic. Choose a generator $\alpha$ of $K^\times$. The subfield $F(\alpha)$ contains $0$ and every nonzero element of $K$, because every such element is a power of $\alpha$. Hence
> $$
> F(\alpha)=K.
> $$
> Thus $\alpha$ is a primitive element for the field extension $K/F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

Here “primitive element” means a field generator. The proof chooses the stronger object of a generator of $K^\times$. Cyclicity is supplied by Exercise F13 or Theorem 15.7.3(c).

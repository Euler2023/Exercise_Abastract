---
title: "Exercise R78: Every Finite Domain Is a Field"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - integral-domains
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §7, Ex. 7.1, printed p. 357, PDF p. 369"
created: 2026-08-27
---

# Exercise R78: Every Finite Domain Is a Field

## Problem Statement

> [!question] Exercise 7.1
> Prove that a domain of finite order is a field.

## Hints

> [!hint]- Hint 1
> For $a\ne0$, multiplication by $a$ is injective on a finite set.

## Solution

> [!success]- Solution
> Let $R$ be a finite domain and $a\ne0$. The map $m_a:R\to R$, $x\mapsto ax$, is injective because $ax=ay$ implies $a(x-y)=0$ and cancellation gives $x=y$. An injective self-map of a finite set is surjective, so $1=ab$ for some $b\in R$. Thus every nonzero element has an inverse and $R$ is a field.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]

## Notes

- **Duplicate boundary:** This result already appears as a property in the Integral Domains concept note, but this is its numbered Artin exercise and supplies the complete proof.
- **Source status:** The problem is from [S1, Ch. 11, §7, Ex. 7.1, printed p. 357, PDF p. 369]. The proof is independent.


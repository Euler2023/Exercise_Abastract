---
title: "Exercise F39: Finite-Dimensional Domains over a Field Are Fields"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - integral-domains
  - finite-dimensional-algebras
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 1, Examples of Fields, Ex. 1.1, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F39: Finite-Dimensional Domains over a Field Are Fields

## Problem Statement

> [!question] Exercise 1.1
> Let $R$ be an integral domain that contains a field $F$ as subring and that is finite-dimensional when viewed as vector space over $F$. Prove that $R$ is a field.

## Hints

> [!hint]- Hint 1
> For $0\ne a\in R$, consider the $F$-linear map $m_a:R\to R$ given by multiplication by $a$.
>
> [!hint]- Hint 2
> An injective endomorphism of a finite-dimensional vector space is surjective.

## Solution

> [!success]- Solution
> Fix $0\ne a\in R$. The map
>
> $$
> m_a:R\longrightarrow R,
> \qquad r\longmapsto ar,
> $$
>
> is $F$-linear. Since $R$ is an integral domain, $ar=0$ implies $r=0$, so $m_a$ is injective. Because $R$ is finite-dimensional over $F$, injectivity implies surjectivity. Hence $1$ lies in the image: there is some $b\in R$ with $ab=1$.
>
> Thus every nonzero element of $R$ has an inverse in $R$, and therefore $R$ is a field.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Routing:** Field Theory is primary because the conclusion characterizes when a finite-dimensional algebra is a field.
- **Hypothesis boundary:** The domain assumption is essential; a finite-dimensional $F$-algebra may have zero divisors.
- **Source status:** [S1, Ch. 15, §15.1, Ex. 1.1, printed p. 472, PDF p. 484]. The proof is independent.

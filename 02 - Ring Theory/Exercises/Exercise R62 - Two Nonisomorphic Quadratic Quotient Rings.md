---
title: "Exercise R62: Two Nonisomorphic Quadratic Quotient Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - fraction-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §4, Ex. 4.4, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R62: Two Nonisomorphic Quadratic Quotient Rings

## Problem Statement

> [!question] Exercise 4.4
> Are $\mathbb Z[x]/(x^2+7)$ and $\mathbb Z[x]/(2x^2+7)$ isomorphic?

## Hints

> [!hint]- Hint 1
> Both are domains. Compare their fraction fields and their quadratic square classes over $\mathbb Q$.

## Solution

> [!success]- Solution
> Both defining polynomials are irreducible over $\mathbb Q$, and Gauss's lemma embeds the quotients as orders in their fraction fields. Those fields are
>
> $$
> \mathbb Q(\sqrt{-7})
> \quad\text{and}\quad
> \mathbb Q(\sqrt{-14}),
> $$
>
> respectively. An isomorphism of the rings would extend uniquely to an isomorphism of their fraction fields fixing $\mathbb Q$. Two quadratic fields $\mathbb Q(\sqrt a)$ and $\mathbb Q(\sqrt b)$ are equal exactly when $a/b$ is a rational square. Here $(-7)/(-14)=1/2$ is not a square in $\mathbb Q$. Therefore the fraction fields, and hence the rings, are not isomorphic.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **External standard input:** The elementary square-class classification of quadratic extensions is used explicitly.
- **Source status:** The problem is from [S1, Ch. 11, §4, Ex. 4.4, printed p. 355, PDF p. 367]. The fraction-field obstruction is independent.


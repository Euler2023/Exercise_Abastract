---
title: "Exercise F16: Primitive Elements of a Biquadratic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - field-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 8, Ex. 8.2, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F16: Primitive Elements of a Biquadratic Field

## Problem Statement

> [!question] Exercise
> Determine all primitive elements for the extension $K=\mathbb Q(\sqrt2,\sqrt3)$ of $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> The proper nontrivial intermediate fields are $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt3)$, and $\mathbb Q(\sqrt6)$.

> [!hint]- Hint 2
> Write an arbitrary element as $a+b\sqrt2+c\sqrt3+d\sqrt6$.

## Solution

> [!success]- Solution
> Every element of $K$ has a unique expression
> $$
> \theta=a+b\sqrt2+c\sqrt3+d\sqrt6,
> \qquad a,b,c,d\in\mathbb Q.
> $$
> Since $K/\mathbb Q$ is a Galois extension with group $C_2\times C_2$, its three quadratic intermediate fields are exactly
> $$
> \mathbb Q(\sqrt2),\qquad
> \mathbb Q(\sqrt3),\qquad
> \mathbb Q(\sqrt6).
> $$
> Now
> $$
> \begin{aligned}
> \theta\in\mathbb Q(\sqrt2)&\Longleftrightarrow c=d=0,\\
> \theta\in\mathbb Q(\sqrt3)&\Longleftrightarrow b=d=0,\\
> \theta\in\mathbb Q(\sqrt6)&\Longleftrightarrow b=c=0.
> \end{aligned}
> $$
> An element fails to generate $K$ precisely when it lies in a proper intermediate field. Therefore
> $$
> \mathbb Q(\theta)=K
> $$
> exactly when at least two of $b,c,d$ are nonzero. These, and only these, are the primitive elements of $K/\mathbb Q$.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]

## Notes

The classification is an independent derivation. It uses the complete intermediate-field list for the biquadratic Galois extension.

> [!note] Qualifying-exam source overlap
> Georgia Tech's Fall 2017 Algebra Comprehensive Exam, Question 4, printed p. 3 / PDF p. 3, asks for all primitive elements of this same extension, with justification. The mathematical task is identical to Artin's exercise archived here. The [official examination and solutions PDF](https://intranet.math.gatech.edu/sites/default/files/documents/exam_sol/AlgebraFall17.pdf) was visually checked; its coefficient criterion agrees with the independent derivation above. This is a duplicate source reference, not an additional exercise note. The original Artin source identity and learning status are retained.

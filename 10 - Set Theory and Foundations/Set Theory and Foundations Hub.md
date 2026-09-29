---
title: Set Theory and Foundations Hub
aliases:
  - Set Theory
  - Foundations
topic: set-theory
tags:
  - hub
  - set-theory
created: 2026-09-29
---

# Set Theory and Foundations

This topic collects proofs whose main tools are finite sets, induction, order relations, choice, and cardinal arithmetic. It provides foundations used throughout algebra.

## Core Concepts

- [[10 - Set Theory and Foundations/Concepts/Mathematical Induction and Peano Arithmetic|Induction and the natural numbers]]
- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma|Partial orders, maximal elements, and Zorn's lemma]]
- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic|Cardinality, finite products, and countable constructions]]

## How the Topics Connect

Induction proves statements about finite sets and recursively defined arithmetic. Cardinal comparisons replace finite counting when sets are infinite. Zorn's lemma supplies maximal objects when a chain can be combined into an upper bound.

> [!note] Routing boundary
> A proof about finite-set surjections, Peano axioms, partial orders, or cardinal arithmetic belongs here. A proof whose main calculation concerns polynomial roots, field extensions, ring ideals, or linear maps stays in its algebraic topic and links to these foundations.

## Algebraic Applications

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Maximal ideals]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic closures]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Bases of vector spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion|Extending module homomorphisms]]

## Exercises

```dataview
TABLE difficulty, status, source
FROM "10 - Set Theory and Foundations/Exercises"
WHERE contains(tags, "exercise")
SORT number(regexreplace(file.name, "^Exercise ST([0-9]+).*", "$1")) ASC
```

## Source Coverage

- [[00 - Home/Artin Exercise Archive|Artin archive]] records the original Appendix labels. Moving a note changes its topic code, not its source label or learning status.
- [[00 - Home/Lang Algebra Exercise Archive|Lang archive]] records Appendix 2 and the book's full numbered-exercise coverage.

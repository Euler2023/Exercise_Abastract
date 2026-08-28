---
title: Partially Ordered Sets and Zorn's Lemma
aliases:
  - Posets and Zorn's Lemma
  - Zorn's Lemma
topic: ring-theory
tags:
  - concept
  - ring-theory
  - partially-ordered-sets
  - zorns-lemma
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Appendix, §A.3, printed pp. 518–519, PDF pp. 530–531"
source_status: verified
status: not-started
---

# Partially Ordered Sets and Zorn's Lemma

## Definition

A **partially ordered set** or **poset** is a set $S$ with a relation $\le$ that is reflexive, transitive, and antisymmetric. It is **totally ordered** if every pair of elements is comparable.

An element $m\in S$ is **maximal** if $m\le s$ implies $s=m$. For a subset $A\subseteq S$, an **upper bound** is an element $b\in S$ such that $a\le b$ for all $a\in A$. A poset is **inductive** if every totally ordered subset has an upper bound.

## Zorn's Lemma

> [!abstract] Zorn's Lemma
> Every inductive partially ordered set has a maximal element.

Zorn's Lemma is equivalent to the axiom of choice. Algebraic applications typically form a poset of partial structures ordered by inclusion, prove that the union of every chain remains an allowed structure, and then interpret a maximal element as a completed object.

## Maximal versus Greatest

- A greatest element is an upper bound that belongs to the whole poset; it is unique and maximal.
- A poset may have many incomparable maximal elements.
- In a total order, every maximal element is greatest, because it is comparable with every element.

## Example: Maximal Ideals

For a proper ideal $I\subsetneq R$, order the proper ideals containing $I$ by inclusion. The union of a chain is again a proper ideal: if it contained $1$, one member of the chain would already contain $1$. Zorn's Lemma gives a maximal member, which is a maximal ideal of $R$ containing $I$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions of partial and total orders, maximal elements, upper bounds, inductive posets, and Zorn's Lemma were checked against [S1, Appendix, §A.3, printed pp. 518–519, PDF pp. 530–531]. The maximal-ideal example is an independently expanded version of the source application.

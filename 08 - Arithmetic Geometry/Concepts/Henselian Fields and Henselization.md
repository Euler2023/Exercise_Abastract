---
title: Henselian Fields and Henselization
aliases:
  - Henselian Field
  - Henselization
  - Hensels Lemma
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, (6.1), (6.2), (6.6)–(6.7), printed pp. 143–148, PDF pp. 162–167"
source_status: verified-bounded
---

# Henselian Fields and Henselization

## Definition

> [!info] Henselian valued field
> A nonarchimedean valued field $K$ is **henselian** if coprime factorizations of monic polynomials over its residue field lift to factorizations over its valuation ring. Equivalently its valuation extends uniquely to every algebraic extension.

The **henselization** is the smallest henselian algebraic valued extension, unique up to a unique valuation-preserving K-isomorphism. In the rank-one setting used here it is the separable algebraic closure of $K$ inside its completion, and also the decomposition field of the chosen valuation in a separable closure.

## Intuition

Henselianity retains the algebraic root-lifting property of completeness without requiring every Cauchy sequence to converge. It is a property of a chosen valuation, not of an abstract field alone.

## Key Properties

- A simple residue root lifts uniquely with its prescribed residue. For an approximate root $a$ satisfying $v(f(a))>2v(f'(a))$, scale the polynomial and variable so that its derivative is a unit before applying this version.
- A henselian valuation has a unique extension to each algebraic field extension. In a finite extension of degree $n$, the extended absolute value is $|N_{L/K}(a)|^{1/n}$.
- Purely inseparable extensions have unique valuations without a henselian assumption; every separably closed field is consequently henselian for each nonarchimedean valuation.
- Krasner's lemma compares conjugate distances in the unique extended valuation. It does not assume arbitrary field homomorphisms continuous.

## Examples

$\mathbb Q_p$ and $\mathbb F_q((t))$ are complete and henselian. The henselization of $\mathbb Q$ at $p$ is algebraic and usually incomplete. Infinite purely inseparable extensions of complete fields can remain complete, so separability is essential in the corresponding incompleteness exercise.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, (6.1), (6.2), (6.6)–(6.7), printed pp. 143–148, PDF pp. 162–167. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.

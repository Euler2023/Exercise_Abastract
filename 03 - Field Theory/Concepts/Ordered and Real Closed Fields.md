---
title: Ordered and Real Closed Fields
aliases:
  - Formally Real Fields
  - Real Closures
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
  - ordered-fields
  - real-closed-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, §§1–2, printed pp. 449–457, PDF pp. 464–472"
source_status: verified
status: not-started
created: 2026-09-25
---

# Ordered and Real Closed Fields

## Definition

> [!info] Ordering and reality
> An **ordering** of a field $K$ is a subset $P\subset K$ such that $K$ is the disjoint union $P\sqcup\{0\}\sqcup(-P)$ and $P$ is closed under addition and multiplication. Write $x>0$ when $x\in P$, and $x<y$ when $y-x\in P$.
>
> A field $K$ is **real** (or formally real) if $-1$ is not a sum of squares in $K$. A **real closed field** $R$ is real and has no proper algebraic extension that is real. A **real closure** of a real field $K$ is an algebraic extension of $K$ that is real closed.

## Intuition

An ordering makes every nonzero square positive, so a sum of squares cannot equal $-1$. Conversely, Lang's real-closure theorem provides an ordering on every real field. An ordered field need not be a subfield of $\mathbb R$: the rational function field $\mathbb R(t)$ can be ordered so that $t$ is larger than every real constant.

## Key Properties

1. **Reality and orderability.** A field is real if and only if it admits an ordering. The forward direction uses a real closure; the reverse direction follows from positivity of nonzero squares. This is established in Lang's Theorem 2.2 [S2, Ch. XI, §2, printed p. 452, PDF p. 467].
2. **Testing sums of squares.** If $K$ is real and $a\in K$ is not a sum of squares, some ordering makes $a<0$ (Lang, Corollary 2.3, printed p. 452, PDF p. 467). Therefore $a$ is a sum of squares if and only if $a\geq0$ in every ordering. For $a\ne0$, this is equivalent to strict positivity in every ordering. The zero qualification matters in [[03 - Field Theory/Exercises/Exercise F96 - Positive Conjugates and Sums of Squares|Exercise F96]].
3. **Properties of real closed fields.** A real closed field $R$ has exactly one ordering; its positive elements are exactly its nonzero squares. Every odd-degree polynomial in $R[X]$ has a root, and $R(\sqrt{-1})$ is algebraically closed (Lang, Theorem 2.2, printed p. 452, PDF p. 467).
4. **Existence and uniqueness relative to an ordering.** Every ordered field has a real closure inducing its chosen ordering (Lang, Theorem 2.11, printed p. 456, PDF p. 471). Two such real closures are uniquely isomorphic over the ordered base field by an order-preserving map (Lang, Theorem 2.9, printed pp. 455–456, PDF pp. 470–471). The fixed ordering is essential: a field can admit several orderings.

## Examples

> [!example] Number fields and their real embeddings
> An ordering of a finite extension $F/\mathbb Q$ determines an embedding $F\hookrightarrow\mathbb R$, and every real embedding pulls back the ordinary order. Thus the orderings of $F$ are tested by its real embeddings. For $a\in F^\times$, being a sum of squares is equivalent to $\sigma(a)>0$ for every real embedding $\sigma$; for $a=0$, use $\sigma(a)\geq0$ instead.

> [!example] Two orderings of a rational function field
> Both $t>0$ and $t<0$ can occur in orderings of $\mathbb R(t)$. A real closure compatible with one ordering need not be isomorphic over $\mathbb R(t)$, as an ordered extension, to a closure compatible with the other.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The definitions and the numbered real-closure, ordering, and sum-of-squares results above are proved in Lang's *Algebra*, Chapter XI §§1–2, on the cited pages. The examples and the explicit treatment of the zero boundary are independently explained here.
- Lang's own number-field example on printed p. 457 / PDF p. 472 also says “positive” without exempting zero. The exercise note preserves the printed wording and records this source issue.

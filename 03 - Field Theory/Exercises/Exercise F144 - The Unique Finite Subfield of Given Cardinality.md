---
title: "Exercise F144: The Unique Finite Subfield of Given Cardinality"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.2, Exercise 8.2.1, printed p. 326, PDF p. 339"
source_refs:
  - "S7/ch-8/sec-2/ex-1"
created: 2026-10-28
---

# Exercise F144: The Unique Finite Subfield of Given Cardinality

## Problem Statement

> [!question] Original Exercise 8.2.1
> Let $q=p^e$. Show that the solutions of $x^q-x$ in $\overline{\mathbb F}_p$ form a subfield, and that this is the unique subfield of $q$ elements. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use the $q$th-power identity to check the field operations.

> [!hint]- Hint 2
> The derivative gives the exact number of roots; Lagrange's theorem gives uniqueness.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $K=\{a\in\overline{\mathbb F}_p:a^q=a\}$. The characteristic-$p$ binomial identity, iterated $e$ times, gives $(a+b)^q=a^q+b^q$. It follows that $K$ is closed under addition and subtraction. It contains $0,1$, is closed under multiplication, and for $a\ne0$ satisfies $(a^{-1})^q=(a^q)^{-1}=a^{-1}$. Thus it is a subfield.
>
> The polynomial $X^q-X$ splits in the algebraic closure. Its derivative is $qX^{q-1}-1=-1$, so it has no repeated roots and has exactly $q$ roots. Hence $|K|=q$.
>
> If $L$ is any subfield of $q$ elements, its nonzero multiplicative group has order $q-1$. Lagrange's theorem gives $a^{q-1}=1$ for $a\in L^*$, hence $a^q=a$ for all $a\in L$. Therefore $L\subset K$, and equal finite cardinalities give $L=K$. Uniqueness is inside the fixed algebraic closure, not just uniqueness up to isomorphism.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 326 / PDF p. 339. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

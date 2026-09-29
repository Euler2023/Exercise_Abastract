---
title: "Exercise ST8: Integer Sequences and the Continuum"
topic: set-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 12, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST8: Integer Sequences and the Continuum

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 12
> Show that $M(\mathbb Z^+,\mathbb Z^+)$ has the same cardinality as the real numbers.

## Hints

> [!hint]- Hint 1: Use the graph of a function
> A function from positive integers to positive integers is determined by a subset of $\mathbb Z^+\times\mathbb Z^+$.

> [!hint]- Hint 2: Compare with binary sequences
> The positive-integer square is denumerable. Binary sequences also inject into integer sequences by replacing $0,1$ with $1,2$.

## Solution

> [!success]- Complete independent derivation
> Let $B=\{0,1\}^{\mathbb Z^+}$. The map $b\mapsto(j\mapsto b_j+1)$ injects $B$ into $(\mathbb Z^+)^{\mathbb Z^+}$. Conversely the graph map
>
> $$
> f\longmapsto\{(j,f(j)):j\in\mathbb Z^+\}
> $$
>
> injects $(\mathbb Z^+)^{\mathbb Z^+}$ into $\mathcal P(\mathbb Z^+\times\mathbb Z^+)$. Enumerating pairs by increasing coordinate sum gives a bijection $\mathbb Z^+\times\mathbb Z^+\cong\mathbb Z^+$. Transport subsets along it and use characteristic functions to identify this power set with $B$. Thus there are injections in both directions between integer sequences and $B$.
>
> Schroeder–Bernstein gives $|M(\mathbb Z^+,\mathbb Z^+)|=|B|$. Exercise 11, independently proved in the linked note by ternary and rational-cut encodings, gives $|B|=|\mathbb R|$, completing the proof.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[10 - Set Theory and Foundations/Exercises/Exercise ST7 - Finite Alphabet Sequences and the Continuum]]

## Notes

Statement checked at printed p. 893 / PDF p. 908. The independent proof uses the explicit continuum comparison from Exercise 11 and an explicit countable pairing, rather than any assumption that all countable products preserve cardinality.

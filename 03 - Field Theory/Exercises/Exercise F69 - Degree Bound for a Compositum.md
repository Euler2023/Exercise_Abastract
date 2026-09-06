---
title: "Exercise F69: Degree Bound for a Compositum"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 7, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F69: Degree Bound for a Compositum

## Problem Statement

> [!question] Lang, Chapter V, Exercise 7
> Let $E,F$ be two finite extensions of a field $k$, contained in a larger field $K$. Show that
> $$
> [EF:k]\le[E:k][F:k].
> $$
> If $[E:k]$ and $[F:k]$ are relatively prime, show that one has an equality sign in the above relation.

## Hints

> [!hint]- Hint 1
> The $F$-span of a $k$-basis of $E$ is a finite-dimensional subring of $K$.

## Solution

> [!success]- Solution and proof status
> Let $e_1,\ldots,e_m$ be a $k$-basis of $E$ and let $V=\sum_iFe_i\subseteq K$. Multiplication of basis elements has coefficients in $k$, so $V$ is closed under multiplication and contains $1,E,F$. For $0\ne v\in V$, multiplication by $v$ is an injective $F$-linear map $V\to V$. Finite dimension makes it surjective; thus $vw=1$ for some $w\in V$. Consequently $V$ is a field and equals $EF$.
>
> Hence $[EF:F]\le m=[E:k]$, proving the inequality by the tower law. If $m=[E:k]$ and $n=[F:k]$ are coprime, both divide $D=[EF:k]$. Thus $mn\mid D$, while $D\le mn$. Therefore $D=mn$.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 7, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.

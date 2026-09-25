---
title: "Exercise F99: Real Places Force Formal Reality"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - real-places
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 5, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F99: Real Places Force Formal Reality

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 5
> Let $K$ be a field and suppose that there exists a real place of $K$; that is, a place $\varphi$ with values in a real field $L$. Show that $K$ is real.

## Hints

> [!hint]- Hint 1
> A place is a residue-field map from its valuation ring $\mathfrak o\subseteq K$ into $L$. Its kernel $\mathfrak m$ is the maximal ideal of $\mathfrak o$.

> [!hint]- Hint 2
> Suppose $-1=\sum_i x_i^2$. If all $x_i$ lie in $\mathfrak o$, reduce this identity modulo $\mathfrak m$.

> [!hint]- Hint 3
> If some $x_i$ has a pole, choose one with smallest valuation. Divide the identity by its square; the ratios then lie in $\mathfrak o$ and one ratio equals $1$.

## Solution

> [!success]- Independently derived solution
> Let $\mathfrak o$ be the valuation ring of the place $\varphi$ and $\mathfrak m$ its maximal ideal. The induced map identifies the residue field $\mathfrak o/\mathfrak m$ with a subfield of the real field $L$. Hence $-1$ cannot be a sum of squares in $\mathfrak o/\mathfrak m$.
>
> Suppose for contradiction that
> $$
> -1=x_1^2+\cdots+x_n^2\qquad(x_i\in K).
> $$
> If every $x_i\in\mathfrak o$, reducing modulo $\mathfrak m$ writes $-1$ as a sum of squares in the real residue field, a contradiction.
>
> Otherwise, let $v$ be a valuation defining $\mathfrak o$ and select $x_j$ with minimal valuation among the finitely many $x_i$. We may choose it with $v(x_j)<0$, since some $x_i\notin\mathfrak o$. Then $x_i/x_j\in\mathfrak o$ for every $i$, while $x_j^{-1}\in\mathfrak m$. Dividing the displayed identity by $x_j^2$ and reducing modulo $\mathfrak m$ yields
> $$
> 0=\sum_{i=1}^n\overline{(x_i/x_j)}^{\,2}
> $$
> in $\mathfrak o/\mathfrak m$. The $j$th summand is $1$. Moving it to the other side makes $-1$ a sum of squares in the real residue field, again impossible.
>
> Thus $-1$ is not a sum of squares in $K$, which is precisely the definition of a real (formally real) field.

## Related Concepts

- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete statement was visually checked at [S2, Ch. XI, Ex. 5, printed p. 462, PDF p. 477]. The proof above is independent.
- **Terminology:** A “real place” here is a place map with real residue-field values, rather than merely an equivalence class of Archimedean absolute values. The latter use of “place” occurs in number-field terminology and should not be substituted in this exercise.
- **Source boundary:** The shared preamble to Exercises XI.5–XI.10 says their solutions appear in Lang's external 1953 paper [La 53]; the textbook poses them as exercises.

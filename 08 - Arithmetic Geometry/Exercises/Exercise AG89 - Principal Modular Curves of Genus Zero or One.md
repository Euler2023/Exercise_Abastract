---
title: "Exercise AG89: Principal Modular Curves of Genus Zero or One"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.9, Exercise 3.9.5, printed p. 108, PDF p. 122"
source_refs:
  - "S7/ch-3/sec-9/ex-5"
created: 2026-10-28
---

# Exercise AG89: Principal Modular Curves of Genus Zero or One

## Problem Statement

> [!question] Original Exercise 3.9.5
> For what values of $N$ does the genus $g(X(N))$ equal zero? One?

## Hints

> [!hint]- Hint 1
> For $N>2$, use $g=1+d_N(N-6)/(12N)$.

> [!hint]- Hint 2
> Only $N\le6$ can have genus at most one; check those levels separately.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For $N>2$,
> $$
> g(X(N))=1+\frac{d_N(N-6)}{12N},\qquad
> d_N=\tfrac12N^3\prod_{p\mid N}(1-p^{-2})>0.
> $$
> If $N>6$, the added term is positive, so the genus, an integer, is at least two. At $N=6$ the term is zero, so the genus is one. For $N=3,4,5$, the effective degrees are respectively $12,24,60$, yielding genera $1-12\cdot3/36=0$, $1-24\cdot2/48=0$, and $1-60/60=0$. The exceptional level $N=2$ also has genus zero by its degree-six, three-cusp genus formula. If positive level one is included, $X(1)$ is the $j$-sphere, of genus zero. Thus among all positive integers the genus-zero levels are exactly $N=1,2,3,4,5$, and the unique genus-one level is $N=6$. In the section's stipulated range $N>1$, omit $N=1$ from the first list.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 108 / PDF 122. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].

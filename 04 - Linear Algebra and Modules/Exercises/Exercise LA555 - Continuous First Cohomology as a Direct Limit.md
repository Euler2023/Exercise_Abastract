---
title: 'Exercise LA555: Continuous First Cohomology as a Direct Limit'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 5, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-5
created: '2026-10-23'
---

# Exercise LA555: Continuous First Cohomology as a Direct Limit

## Problem Statement

> [!question] Neukirch IV.3.5
> Show that $H^1(G,A)=\varinjlim_NH^1(G/N,A^N)$, where $N$ varies over all the open normal subgroups of $G$.

## Hints

> [!hint]- Hint 1
> A continuous map from a compact group to a discrete module has finite image. Choose an open normal subgroup $N$ such that the cocycle equals $1$ on $N$ and $N$ fixes its entire finite image.

> [!hint]- Hint 2
> For surjectivity, descend a cocycle to a finite quotient. For injectivity, arrange that the element witnessing a coboundary is also fixed by a smaller $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The transition maps are inflation as $N$ shrinks. They are compatible with inflation to $H^1(G,A)$ and give a natural map from the direct limit to $H^1(G,A)$.
>
> **Surjectivity.** For a continuous cocycle $f:G\to A$, compactness and discreteness of $A$ make $f(G)$ finite. Since $f(1)=1$, there is an open normal subgroup $N_0$ with $f|_{N_0}=1$. Each image element has an open stabilizer. Intersect the normal cores of these finitely many stabilizers with $N_0$ to obtain an open normal subgroup $N$ such that $f|_N=1$ and which fixes all of $f(G)$. Then $f(gn)=f(g)^nf(n)=f(g)$, so $f$ factors through $G/N$ with values in $A^N$. This gives a cocycle on the finite quotient whose inflation is the original $f$.
>
> **Injectivity.** Suppose that $f\in Z^1(G/N,A^N)$ becomes the coboundary $f(g)=a^{g-1}$ after inflation, with $a\in A$. Choose an open normal subgroup $M\subseteq N$ that also fixes $a$. The same formula on $G/M$ then exhibits a coboundary with witness $a\in A^M$. Thus the class is already zero in the direct limit.
>
> Equality of classes represented at two different finite levels likewise reduces to their quotient being a coboundary, followed by passage to a common finer level. Hence the map is an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Continuous Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct Limits]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 5, printed p. 284, PDF p. 303]. Independent proof by descending the finite image and the element witnessing a coboundary.
- **Boundary:** The discrete topology on the module and continuity of cocycles are essential to descent to finite levels. Arbitrary discontinuous cocycles are outside the scope of this conclusion.
